import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface PhoneFrameProps {
  screenshots: string[];
  autoRotate?: boolean;
}

export default function PhoneFrame({ screenshots, autoRotate = false }: PhoneFrameProps) {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (autoRotate && screenshots.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentScreenshot((prev) => (prev + 1) % screenshots.length);
      }, 3000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [autoRotate, screenshots.length]);

  return (
    <motion.div 
      className="relative w-[280px] h-[570px] bg-black rounded-[36px] shadow-2xl p-2.5"
      initial={{ y: 20 }}
      animate={{ y: [20, 0, 20] }}
      transition={{ 
        duration: 6, 
        repeat: Infinity, 
        repeatType: "reverse", 
        ease: "easeInOut" 
      }}
    >
      <div className="w-full h-full bg-black rounded-[30px] overflow-hidden relative">
        {screenshots.length > 1 ? (
          <div 
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentScreenshot * 100}%)` }}
          >
            {screenshots.map((screenshot, index) => (
              <img 
                key={index}
                src={screenshot} 
                alt={`App Screenshot ${index + 1}`} 
                className="w-full h-full object-cover flex-shrink-0"
              />
            ))}
          </div>
        ) : (
          <img 
            src={screenshots[0]} 
            alt="App Screenshot" 
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </motion.div>
  );
}
