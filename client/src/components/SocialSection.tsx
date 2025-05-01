import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaTelegramPlane, FaInstagram, FaYoutube } from 'react-icons/fa';
import { fadeIn, staggerContainer } from '@/lib/animation';

interface SocialChannel {
  icon: React.ReactNode;
  bgColor: string;
  iconColor: string;
  title: string;
  description: string;
  buttonText: string;
  buttonColor: string;
  buttonHoverColor: string;
  href: string;
}

export default function SocialSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const socialChannels: SocialChannel[] = [
    {
      icon: <FaTelegramPlane className="text-2xl" />,
      bgColor: 'bg-blue-500',
      iconColor: 'text-blue-400',
      title: 'Telegram Channel',
      description:
        'Get instant market updates, trading signals, and expert analysis directly on Telegram.',
      buttonText: 'Join Channel',
      buttonColor: 'bg-blue-500',
      buttonHoverColor: 'hover:bg-blue-600',
      href: 'https://t.me/nxyMarketOfficial',
    },
    {
      icon: <FaInstagram className="text-2xl" />,
      bgColor: 'bg-purple-500',
      iconColor: 'text-purple-400',
      title: 'Instagram',
      description:
        'Follow our Instagram for educational content, success stories, and community highlights.',
      buttonText: 'Follow Us',
      buttonColor: 'bg-gradient-to-r from-purple-500 to-pink-500',
      buttonHoverColor: 'hover:from-purple-600 hover:to-pink-600',
      href: '#',
    },
    {
      icon: <FaYoutube className="text-2xl" />,
      bgColor: 'bg-red-500',
      iconColor: 'text-red-400',
      title: 'YouTube Channel',
      description:
        'Watch in-depth tutorials, market analysis, and trading strategies on our YouTube channel.',
      buttonText: 'Subscribe',
      buttonColor: 'bg-red-600',
      buttonHoverColor: 'hover:bg-red-700',
      href: '#',
    },
  ];

  return (
    <section
      id="social"
      className="py-24 bg-gradient-to-br from-black to-gray-900 text-white relative"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1579170053380-58064b2dee67?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')] bg-cover opacity-20 mix-blend-overlay"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? 'show' : 'hidden'}
          className="flex flex-col items-center"
        >
          <motion.div
            variants={fadeIn('up', 0.3)}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Join Our <span className="text-primary">Trading Community</span>
            </h2>
            <p className="text-lg text-white opacity-90 max-w-2xl mx-auto">
              Connect with fellow traders, access exclusive content, and stay
              updated with the latest market insights.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {socialChannels.map((channel, index) => (
              <motion.div
                key={index}
                variants={fadeIn('up', 0.1 * (index + 3))}
                className="bg-white bg-opacity-5 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 ${channel.bgColor} bg-opacity-20 rounded-full flex items-center justify-center mb-6 mx-auto`}
                >
                  <span className={channel.iconColor}>{channel.icon}</span>
                </div>
                <h3 className="text-xl font-semibold font-poppins mb-3 text-center">
                  {channel.title}
                </h3>
                <p className="text-white opacity-90 text-center mb-6">
                  {channel.description}
                </p>
                <a
                  href={channel.href}
                  className={`block w-full ${channel.buttonColor} text-white font-bold py-3 px-4 rounded-lg text-center ${channel.buttonHoverColor} transition-colors`}
                >
                  {channel.buttonText}
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
