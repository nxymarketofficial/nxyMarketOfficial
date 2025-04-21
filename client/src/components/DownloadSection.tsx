import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Download, Star } from "lucide-react";
import PhoneFrame from "./PhoneFrame";
import { fadeIn, staggerContainer } from "@/lib/animation";

export default function DownloadSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const appScreenshot = [
    "https://images.unsplash.com/photo-1612696874005-d5bbd20f39f9?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
  ];

  return (
    <section id="download" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-gray-50 to-white"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          <motion.div
            variants={fadeIn("up", 0.3)}
            className="bg-gradient-to-br from-secondary via-gray-900 to-black rounded-3xl p-8 md:p-16 shadow-xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-primary rounded-full filter blur-3xl opacity-10 -translate-y-1/2 translate-x-1/3"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-accent rounded-full filter blur-3xl opacity-10 translate-y-1/2 -translate-x-1/3"></div>
            
            <div className="flex flex-col md:flex-row items-center">
              <motion.div
                variants={fadeIn("right", 0.5)}
                className="md:w-1/2 space-y-6 mb-12 md:mb-0"
              >
                <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white">
                  Ready to Start Trading with <span className="text-primary">NXY Markets</span>?
                </h2>
                
                <p className="text-lg text-white text-opacity-80 max-w-lg">
                  Download our mobile app now and join thousands of successful traders worldwide. Experience the future of forex trading.
                </p>
                
                <div className="pt-4">
                  <a 
                    href="https://drive.google.com/file/d/YOUR_DOWNLOAD_LINK/view"
                    className="inline-block bg-primary text-secondary font-bold py-4 px-10 rounded-xl text-center shadow-lg hover:bg-opacity-90 transition-all flex items-center space-x-3 hover:-translate-y-1 duration-300"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download from Google Drive</span>
                  </a>
                </div>
                
                <div className="flex items-center space-x-4 mt-6">
                  <div className="flex items-center">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="w-10 h-10 rounded-full bg-gray-700 border-2 border-gray-900 flex items-center justify-center text-white font-bold">
                          <Star className="w-4 h-4 text-primary" />
                        </div>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-white text-opacity-90">
                    <span className="font-bold">4.8/5</span> average rating
                  </p>
                </div>
              </motion.div>
              
              <motion.div
                variants={fadeIn("left", 0.5)}
                className="md:w-1/2 flex justify-center"
              >
                <PhoneFrame screenshots={appScreenshot} autoRotate={false} />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
