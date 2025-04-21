import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ChevronDown } from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animation";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs: FaqItem[] = [
    {
      question: "What is the minimum deposit to start trading?",
      answer: "The minimum deposit at NXY Markets is just $10, making it accessible for traders of all levels to get started without a significant initial investment."
    },
    {
      question: "What leverage options are available?",
      answer: "NXY Markets offers flexible leverage options ranging from 1:1 up to 1:1000, allowing you to choose the level that best suits your trading strategy and risk tolerance."
    },
    {
      question: "Is NXY Markets available worldwide?",
      answer: "Yes, NXY Markets is available globally with support for multiple languages and currencies, making it accessible to traders around the world."
    }
  ];

  return (
    <div className="mt-24 container mx-auto px-4">
      <motion.div 
        ref={ref}
        variants={staggerContainer}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="text-center"
      >
        <motion.h3 
          variants={fadeIn("up", 0.3)} 
          className="text-2xl md:text-3xl font-bold font-poppins mb-8"
        >
          Frequently Asked Questions
        </motion.h3>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.1 * (index + 3))}
              className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"
            >
              <button 
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <h4 className="font-semibold text-lg">{faq.question}</h4>
                <ChevronDown 
                  className={`transform transition-transform ${activeIndex === index ? 'rotate-180' : ''}`} 
                  size={20} 
                />
              </button>
              {activeIndex === index && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-6"
                >
                  <p className="opacity-70">{faq.answer}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
