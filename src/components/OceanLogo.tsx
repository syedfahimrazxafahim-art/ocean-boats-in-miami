import React from 'react';

interface OceanLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showSubtitle?: boolean;
}

export const OceanLogo: React.FC<OceanLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  const sizeMap = {
    sm: 'h-9 sm:h-10 w-auto',
    md: 'h-11 sm:h-12 w-auto',
    lg: 'h-16 w-auto',
    xl: 'h-24 w-auto',
  };

  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* Official Cloudinary Logo Image */}
      <img
        src="https://res.cloudinary.com/fzobzdco/image/upload/v1788558729/LOGOVVVVVVVVV.jpg"
        alt="Ocean Miami Boats Logo"
        className={`${sizeMap[size]} object-contain rounded-md shadow-[0_0_15px_rgba(0,240,255,0.25)]`}
        referrerPolicy="no-referrer"
      />
      {showSubtitle && (
        <span className="font-black text-sm sm:text-base tracking-tight uppercase text-white whitespace-nowrap">
          Ocean Miami Boats
        </span>
      )}
    </div>
  );
};

export default OceanLogo;
