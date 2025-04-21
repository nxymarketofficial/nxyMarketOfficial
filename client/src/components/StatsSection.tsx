import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { fadeIn, staggerContainer } from "@/lib/animation";

interface CounterProps {
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
}

function Counter({ end, duration = 2, decimals = 0, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const countingRef = useRef<boolean>(false);

  useEffect(() => {
    if (inView && !countingRef.current) {
      countingRef.current = true;
      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(progress * end);

        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }
  }, [inView, end, duration]);

  return (
    <span ref={ref} className="counter">
      {count.toFixed(decimals)}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { value: 1000, suffix: ":1", label: "Maximum Leverage" },
    { value: 150, suffix: "+", label: "Trading Instruments" },
    { value: 0.01, suffix: "s", label: "Execution Speed", decimals: 2 },
    { value: 24, suffix: "/7", label: "Customer Support" },
  ];

  return (
    <section className="py-20 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639815188546-c43c240e8335?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover opacity-20 mix-blend-overlay"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {stats.map((stat, index) => (
            <motion.div 
              key={index}
              variants={fadeIn("up", index * 0.1)}
            >
              <p className="text-3xl md:text-4xl font-bold font-poppins text-primary mb-2">
                {stat.decimals ? (
                  <Counter end={stat.value} decimals={stat.decimals} suffix={stat.suffix} />
                ) : (
                  <>
                    <Counter end={stat.value} />
                    {stat.suffix}
                  </>
                )}
              </p>
              <p className="text-sm md:text-base text-white opacity-90">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
