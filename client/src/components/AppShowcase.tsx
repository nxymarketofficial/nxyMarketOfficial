import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { PieChart, Bell, Handshake } from 'lucide-react';
import PhoneFrame from './PhoneFrame';
import { fadeIn, slideUp, staggerContainer } from '@/lib/animation';

interface AppFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function AppShowcase() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const appScreenshot = [
    'https://res.cloudinary.com/dx5vy9uki/image/upload/v1746096025/photo_2025-04-21_13-58-46_3_bqm3ix.jpg',
    'https://res.cloudinary.com/dx5vy9uki/image/upload/v1746096047/photo_2025-04-21_13-59-42_xrclqy.jpg',
    'https://res.cloudinary.com/dx5vy9uki/image/upload/v1746096064/photo_2025-04-21_13-58-46_spxpde.jpg',
    'https://res.cloudinary.com/dx5vy9uki/image/upload/v1746096078/photo_2025-04-21_13-58-46_2_zoiutj.jpg',
  ];

  const appFeatures: AppFeature[] = [
    {
      icon: <PieChart size={30} />,
      title: 'Real-time Analytics',
      description:
        'Monitor market movements and track your portfolio performance with comprehensive analytics.',
    },
    {
      icon: <Bell size={30} />,
      title: 'Price Alerts',
      description:
        'Set custom alerts for price movements and receive instant notifications when your conditions are met.',
    },
    {
      icon: <Handshake size={30} />,
      title: 'One-Tap Trading',
      description:
        'Execute trades with a single tap using our quick-trade feature for instant market entry and exit.',
    },
  ];

  return (
    <section
      id="app"
      className="py-24 bg-black dark:bg-black text-white overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="flex flex-col md:flex-row items-center"
        >
          <motion.div
            variants={fadeIn('right', 0.3)}
            className="md:w-1/2 mb-12 md:mb-0"
          >
            <PhoneFrame screenshots={appScreenshot} autoRotate={false} />
          </motion.div>

          <motion.div
            variants={fadeIn('left', 0.3)}
            className="md:w-1/2 md:pl-12 space-y-6"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-poppins">
              Trade Smarter with the{' '}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                NXY Markets App
              </span>
            </h2>

            <p className="text-lg text-gray-300">
              Our intuitive mobile application puts the power of professional
              trading in your pocket, allowing you to manage your positions from
              anywhere at any time.
            </p>

            <div className="space-y-6 mt-8">
              {appFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={slideUp((index + 1) * 0.1)}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="text-black">{feature.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold font-poppins mb-2 text-white">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
