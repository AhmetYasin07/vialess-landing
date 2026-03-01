import { motion, useMotionValue, useSpring, useTransform, useMotionTemplate } from 'motion/react';
import { useState } from 'react';

interface CardData {
  id: number;
  title: string;
  image: string;
  accentColor: string;
}

interface ThreeDCardProps {
  card: CardData;
  activeIndex: number;
  totalCards: number;
  onSelectIndex: (index: number) => void;
  autoPlay?: boolean;
}

export function ThreeDCard({ card, activeIndex, totalCards, onSelectIndex }: ThreeDCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseY, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const glareX = useTransform(mouseX, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"]);
  const glareBackground = useMotionTemplate`radial-gradient(circle at ${glareX} ${glareY}, rgba(255,255,255,0.7) 0%, transparent 60%)`;

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isHovered) return;
    
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseXFromCenter = event.clientX - rect.left - width / 2;
    const mouseYFromCenter = event.clientY - rect.top - height / 2;
    
    x.set(mouseXFromCenter / width);
    y.set(mouseYFromCenter / height);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div className="relative w-80 h-48 md:w-96 md:h-60 mx-auto" style={{ perspective: "1000px" }}>
      {/* Decorative background circle */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-xl opacity-20 transform scale-150 -z-10"></div>

      <motion.div
        style={{
          rotateX: isHovered ? rotateX : 0,
          rotateY: isHovered ? rotateY : 0,
          transformStyle: "preserve-3d",
          willChange: 'transform',
        }}
        animate={!isHovered ? {
          rotateX: [0, 5, 0, -5, 0],
          rotateY: [0, -5, 0, 5, 0],
          y: [0, -10, 0, -5, 0],
        } : {}}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`w-full h-full rounded-2xl shadow-2xl relative cursor-pointer border ${card.accentColor}`}
      >
        <div 
          style={{ transform: "translateZ(30px)" }} 
          className="absolute inset-0 rounded-2xl overflow-hidden"
        >
           <img 
            src={card.image} 
            alt={card.title}
            width={384}
            height={240}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Glare/Shine Effect */}
        <motion.div
          style={{
            background: isHovered ? glareBackground : 'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.2) 40%, transparent 60%)',
            opacity: 0.4,
            transform: "translateZ(40px)"
          }}
          className="absolute inset-0 rounded-2xl pointer-events-none mix-blend-overlay"
        />
      </motion.div>

      {/* Navigation Dots */}
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 flex gap-4">
        {Array.from({ length: totalCards }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => onSelectIndex(idx)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${activeIndex === idx ? 'bg-white scale-125 shadow-[0_0_10px_white]' : 'bg-white/20 hover:bg-white/40'}`}
          />
        ))}
      </div>
    </div>
  );
}