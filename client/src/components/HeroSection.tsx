import { motion } from 'framer-motion';
import PhoneFrame from './PhoneFrame';
import { Button } from '@/components/ui/button';
import { useInView } from 'react-intersection-observer';
import { fadeIn, slideUp, staggerContainer } from '@/lib/animation';

export default function HeroSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Import app screenshots
  const screenshots = [
    'https://res.cloudinary.com/dx5vy9uki/image/upload/v1746096025/photo_2025-04-21_13-58-46_3_bqm3ix.jpg',
    'https://res.cloudinary.com/dx5vy9uki/image/upload/v1746096047/photo_2025-04-21_13-59-42_xrclqy.jpg',
    'https://res.cloudinary.com/dx5vy9uki/image/upload/v1746096064/photo_2025-04-21_13-58-46_spxpde.jpg',
    'https://res.cloudinary.com/dx5vy9uki/image/upload/v1746096078/photo_2025-04-21_13-58-46_2_zoiutj.jpg',
  ];

  return (
    <section className="pt-32 pb-20 md:py-48 relative overflow-hidden bg-black dark:bg-black text-white">
      <div className="absolute inset-0 bg-gradient-to-b from-black dark:from-black to-gray-900 dark:to-gray-900"></div>

      {/* Animated background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
        className="absolute top-20 right-10 w-64 h-64 bg-primary rounded-full filter blur-2xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: 'reverse',
          delay: 1,
        }}
        className="absolute bottom-10 left-10 w-96 h-96 bg-accent rounded-full filter blur-3xl"
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="flex flex-col md:flex-row items-center"
        >
          <motion.div
            variants={fadeIn('right', 0.3)}
            className="md:w-1/2 space-y-6 mb-12 md:mb-0"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-poppins leading-tight">
              Next Generation
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {' '}
                Forex Trading
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-lg">
              Experience lightning-fast execution, unparalleled leverage
              options, and seamless trading on the go with NXY Markets.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <a
                href="https://github.com/nxymarketofficial/Nxymarket_android_-apk/releases/download/v1.0.0/NxyMarket.apk"
                className="bg-gradient-to-r from-primary to-accent text-secondary font-bold py-4 px-8 rounded-full text-center hover:shadow-lg transform transition-all hover:-translate-y-1"
              >
                Download Now
              </a>
              <a
                href="#features"
                className="bg-transparent border-2 border-primary text-white dark:text-white font-bold py-4 px-8 rounded-full text-center hover:shadow-lg transform transition-all hover:-translate-y-1 hover:bg-primary/10"
              >
                Explore Features
              </a>
            </div>
            <div className="flex items-center space-x-4 mt-8">
              <div className="flex -space-x-2">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white flex items-center justify-center overflow-hidden"
                  >
                    <svg
                      className="w-full h-full text-gray-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-300">
                <span className="font-bold text-primary">50,000+</span> traders
                already joined
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.5)}
            className="md:w-1/2 flex justify-center"
          >
            <PhoneFrame screenshots={screenshots} autoRotate={true} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
