// import React from "react";

// interface WatermarkedImageProps {
//   src: string;
//   alt: string;
//   className?: string;
// }

// const WatermarkedImage: React.FC<WatermarkedImageProps> = ({ src, alt, className }) => {
//   return (
//     <div className="relative w-full h-full">
//       <img src={src} alt={alt} className={`${className} w-full h-full object-cover`} />
//       <img
//         src="https://raw.githubusercontent.com/Sahil-Aggarwal-Dev/asus-assests/main/Asus_logo_1.png"
//         alt="Logo Watermark"
//         className="absolute top-1/2 left-1/2 w-24 h-24 transform -translate-x-1/2 -translate-y-1/2 opacity-60 pointer-events-none"
//       />
//     </div>
//   );
// };

// export default WatermarkedImage;
import React from "react";

interface WatermarkedImageProps {
  src: string;
  alt: string;
  className?: string;
  watermarkScale?: number; // optional: scale of watermark relative to image (0-1)
}

const WatermarkedImage: React.FC<WatermarkedImageProps> = ({
  src,
  alt,
  className,
  watermarkScale = 0.3, // default 30% of image width
}) => {
  return (
    <div className={`relative w-full h-full ${className}`}>
      <img src={src} alt={alt} className="w-full h-full object-cover" />
      <img
        src="https://raw.githubusercontent.com/Sahil-Aggarwal-Dev/asus-assests/main/Asus_logo_1.png"
        alt="Logo Watermark"
        style={{
          width: `${watermarkScale * 100}%`,
          height: "auto",
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-60 pointer-events-none"
      />
    </div>
  );
};

export default WatermarkedImage;
