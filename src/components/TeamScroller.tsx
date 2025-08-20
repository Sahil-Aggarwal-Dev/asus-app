import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TeamMember {
    name: string;
    role: string;
    image: string;
    description: string;
}

interface TeamScrollerProps {
    team: TeamMember[];
}

const TeamScroller: React.FC<TeamScrollerProps> = ({ team }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [canScroll, setCanScroll] = useState(false);

    const checkScroll = () => {
        if (scrollRef.current) {
            const { scrollWidth, clientWidth } = scrollRef.current;
            setCanScroll(scrollWidth > clientWidth);
        }
    };

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -300 : 300,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, [team]);

    return (
        <div className="relative z-4 flex items-center">
            {/* Left Arrow */}
            {canScroll && (
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 sm:left-1 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md p-2 rounded-full shadow-lg hover:bg-white/40 hover:text-gray-900 text-white transition"
                >
                    <ChevronLeft size={24} />
                </button>
            )}

            {/* Scrollable container */}
            <div
                ref={scrollRef}
                className="flex space-x-4 overflow-x-auto scroll-smooth py-4"
                style={{ scrollbarWidth: 'none' }} // Firefox
            >
                {team.map((member, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-64 sm:w-72 md:w-64 bg-white/95 backdrop-blur-md shadow-md hover:shadow-xl rounded-2xl overflow-hidden relative transition-transform hover:-translate-y-1 cursor-pointer"
                    >
                        <div className="aspect-square overflow-hidden">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="p-3 text-center flex flex-col flex-1 bg-white/90 backdrop-blur-sm">
                            <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                            <p className="text-orange-600 font-semibold mb-2">{member.role}</p>
                            <p className="text-gray-600 text-sm">{member.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Right Arrow */}
            {canScroll && (
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 sm:right-1 top-1/2 transform -translate-y-1/2 z-20 bg-white/20 backdrop-blur-md p-2 rounded-full shadow-lg hover:bg-white/40 hover:text-gray-900 text-white transition"
                >
                    <ChevronRight size={24} />
                </button>
            )}

            {/* Hide scrollbar for all browsers */}
            <style>{`
        .scroll-smooth::-webkit-scrollbar { display: none; }
        .scroll-smooth { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
        </div>
    );
};

export default TeamScroller;
