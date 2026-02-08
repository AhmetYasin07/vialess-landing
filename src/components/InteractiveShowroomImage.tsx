import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface InteractiveShowroomImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function InteractiveShowroomImage({ src, alt, className = "" }: InteractiveShowroomImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

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
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`w-full h-full relative ${className}`}
    >
      <div 
        style={{ transform: "translateZ(50px)" }} 
        className="w-full h-full"
      >
        <ImageWithFallback
          src={src}
          alt={alt}
          className="w-full h-full object-cover rounded-[14px]"
        />
        {/* Shine effect */}
        <motion.div 
            style={{ 
                x: useTransform(mouseXSpring, [-0.5, 0.5], ["100%", "-100%"]),
                y: useTransform(mouseYSpring, [-0.5, 0.5], ["100%", "-100%"]),
            }}
            className="absolute inset-0 z-10 bg-gradient-to-br from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-[14px]" 
        />
      </div>
    </motion.div>
  );
}
