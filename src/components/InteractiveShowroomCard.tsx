import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';

interface InteractiveShowroomCardProps {
  image: string;
  alt: string;
  features: string[];
}

export function InteractiveShowroomCard({ image, alt, features }: InteractiveShowroomCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  // Motion values for tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Use springs for smooth movement
  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  // Rotation mapping - Reduced range for more subtle/restricted movement
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  // Glare position
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareOpacity = useTransform(
    [mouseXSpring, mouseYSpring],
    ([currX, currY]: number[]) => {
      // Calculate distance from center (0,0)
      const distance = Math.sqrt(Math.pow(currX, 2) + Math.pow(currY, 2));
      // Max distance is roughly 0.707 (sqrt(0.5^2 + 0.5^2))
      return Math.min(distance * 1.5, 0.6); // Cap opacity at 0.6
    }
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="flex flex-col items-center h-full group">
        <div 
            className="w-full relative z-10" 
            style={{ perspective: "1200px" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                ref={ref}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="w-full transition-all duration-200 ease-out"
            >
                {/* Image Layer - Pops out */}
                <div 
                    style={{ transform: "translateZ(30px)" }}
                    className="relative shrink-0 w-full aspect-[1.58] rounded-[14px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] overflow-hidden bg-white"
                >
                    <img
                        src={image}
                        alt={alt}
                        className="w-full h-full object-cover"
                        loading="lazy"
                    />
                    
                    {/* Dynamic Glare Effect */}
                    <motion.div 
                        style={{ 
                            background: `radial-gradient(circle at ${glareX.get()}% ${glareY.get()}%, rgba(255,255,255,0.8) 0%, transparent 60%)`,
                            opacity: glareOpacity
                        }}
                        className="absolute inset-0 pointer-events-none mix-blend-overlay z-10" 
                    />
                </div>
            </motion.div>
        </div>

        {/* Badges Layer - Static, outside of 3D context */}
        <div className="flex items-center justify-center gap-4 w-full mt-6 relative z-0">
            {features.map((feature) => {
                let iconSvg = null;
                let tooltip = "";

                if (feature === 'nfc') {
                    tooltip = "NFC & QR Kod";
                    iconSvg = (
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-purple-500 transition-colors" viewBox="0 0 14.2857 14.2857" fill="none">
                        <path d="M10.1191 1.19048H4.16667C3.50919 1.19048 2.97619 1.72347 2.97619 2.38095V11.9048C2.97619 12.5622 3.50919 13.0952 4.16667 13.0952H10.1191C10.7765 13.0952 11.3095 12.5622 11.3095 11.9048V2.38095C11.3095 1.72347 10.7765 1.19048 10.1191 1.19048Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19048" />
                        <path d="M7.14286 10.7143H7.14881" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19048" />
                    </svg>
                    );
                } else if (feature === 'water') {
                    tooltip = "Suya Dayanıklı";
                    iconSvg = (
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" viewBox="0 0 14.2857 14.2857" fill="none">
                        <path d="M7.14286 13.0952C8.24793 13.0952 9.30774 12.6563 10.0891 11.8749C10.8705 11.0935 11.3095 10.0336 11.3095 8.92857C11.3095 7.7381 10.7143 6.60714 9.52381 5.65476C8.33334 4.70238 7.44048 3.27381 7.14286 1.78571C6.84524 3.27381 5.95238 4.70238 4.76191 5.65476C3.57143 6.60714 2.97619 7.7381 2.97619 8.92857C2.97619 10.0336 3.41518 11.0935 4.19658 11.8749C4.97798 12.6563 6.03779 13.0952 7.14286 13.0952Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19048" />
                    </svg>
                    );
                } else if (feature === 'eco') {
                    tooltip = "Çevre Dostu";
                    iconSvg = (
                    <svg className="w-5 h-5 text-gray-400 group-hover:text-green-500 transition-colors" viewBox="0 0 14.2857 14.2857" fill="none">
                        <path d="M6.54762 11.9048C5.50242 11.9079 4.4942 11.5182 3.72293 10.8128C2.95166 10.1073 2.47367 9.13783 2.38377 8.0965C2.29387 7.05516 2.59862 6.01807 3.23759 5.19092C3.87655 4.36376 4.80305 3.80697 5.83333 3.63095C9.22619 2.97619 10.119 2.66667 11.3095 1.19048C11.9048 2.38095 12.5 3.67857 12.5 5.95238C12.5 9.22619 9.65476 11.9048 6.54762 11.9048Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19048" />
                        <path d="M1.19048 12.5C1.19048 10.7143 2.29167 9.30953 4.21429 8.92857C5.65476 8.64286 7.14286 7.7381 7.14286 7.14286" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19048" />
                    </svg>
                    );
                }

                return (
                    <div 
                    key={feature}
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-sm transition-all duration-300"
                    title={tooltip}
                    >
                    {iconSvg}
                    </div>
                );
            })}
        </div>
    </div>
  );
}