import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import WatermarkedImage from './Watermark';

interface ImageScrollerProps {
    images: string[];
    partNumber?: string;
    isOnSale?: boolean;
    setTime: number
}

const ImageScroller: React.FC<ImageScrollerProps> = ({ images, partNumber, isOnSale, setTime }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isArrowHovered, setIsArrowHovered] = useState(false);
    const [fade, setFade] = useState(true);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // Auto-scroll images on hover (only if more than 1 image)
    useEffect(() => {
        if (images.length <= 1) return; // Prevent auto-scroll/fade for single image

        if (isHovered && !isArrowHovered) {
            intervalRef.current = setInterval(() => {
                setFade(false);
                setTimeout(() => {
                    setCurrentImageIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
                    setFade(true);
                }, 300);
            }, setTime);
        }

        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };
    }, [isHovered, isArrowHovered, images.length]);

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (images.length <= 1) return; // do nothing if single image
        setFade(false);
        setTimeout(() => {
            setCurrentImageIndex(prev => (prev === 0 ? images.length - 1 : prev - 1));
            setFade(true);
        }, 300);
    };

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (images.length <= 1) return; // do nothing if single image
        setFade(false);
        setTimeout(() => {
            setCurrentImageIndex(prev => (prev === images.length - 1 ? 0 : prev + 1));
            setFade(true);
        }, 300);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
        if (images.length <= 1) return; // nothing to fade for single image
        setFade(false);
        setTimeout(() => {
            setCurrentImageIndex(0); // Reset to first image
            setFade(true);
        }, 300);
    };

    return (
        <div
            className="relative w-full h-64 group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
        >
            {/* Image + badges + arrows wrapper */}
            <div className="relative w-full h-full">
                {/* Main Image */}
                <WatermarkedImage
                    key={currentImageIndex}
                    src={images[currentImageIndex]}
                    alt={`Product Image ${currentImageIndex + 1}`}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'
                        }`}
                />

                {/* Part Number - Top Center */}
                {partNumber && (
                    <div className="absolute top-2 left-2 bg-gray-900 text-white text-sm font-extrabold px-3 py-1 rounded z-20">
                        {partNumber}
                    </div>
                )}

                {/* Sale Badge - Top Right */}
                {isOnSale && (
                    <div className="absolute top-2 right-2 bg-orange-600 text-white text-xs font-bold px-2 py-1 rounded z-20">
                        SALE
                    </div>
                )}

                {/* Arrows */}
                {images.length > 1 && (
                    <>
                        <button
                            onMouseEnter={() => setIsArrowHovered(true)}
                            onMouseLeave={() => setIsArrowHovered(false)}
                            onClick={prevImage}
                            className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-1 hover:bg-opacity-100 transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10"
                        >
                            <ChevronLeft className="w-6 h-6 text-gray-700" />
                        </button>
                        <button
                            onMouseEnter={() => setIsArrowHovered(true)}
                            onMouseLeave={() => setIsArrowHovered(false)}
                            onClick={nextImage}
                            className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white bg-opacity-70 rounded-full p-1 hover:bg-opacity-100 transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10"
                        >
                            <ChevronRight className="w-6 h-6 text-gray-700" />
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default ImageScroller;
