import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { 
  Zap, 
  LineChart, 
  Users, 
  Shield, 
  Rocket, 
  Smartphone 
} from "lucide-react";
import { fadeIn, staggerContainer } from "@/lib/animation";

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function FeaturesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features: Feature[] = [
    {
      icon: <Zap size={30} />,
      title: "High Leverage Trading",
      description: "Access up to 1:1000 leverage to maximize your trading potential with minimal capital investment."
    },
    {
      icon: <LineChart size={30} />,
      title: "Advanced Charts",
      description: "Comprehensive technical analysis tools with real-time market data and customizable indicators."
    },
    {
      icon: <Users size={30} />,
      title: "Referral Program",
      description: "Earn substantial commissions by referring new traders to NXY Markets through our generous referral system."
    },
    {
      icon: <Shield size={30} />,
      title: "Secure Trading",
      description: "Enterprise-grade security with encrypted connections and advanced fraud protection systems."
    },
    {
      icon: <Rocket size={30} />,
      title: "Instant Execution",
      description: "Lightning-fast order execution with no requotes, ensuring you get the price you want."
    },
    {
      icon: <Smartphone size={30} />,
      title: "Mobile Trading",
      description: "Trade on the go with our powerful mobile application, available for both iOS and Android devices."
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-900 dark:bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="flex flex-col items-center"
        >
          <motion.div 
            variants={fadeIn("up", 0.3)} 
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold font-poppins mb-4">
              Revolutionary <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Trading Features</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              NXY Markets provides traders with cutting-edge tools and features to stay ahead in the forex market.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeIn("up", 0.1 * (index + 3))}
                className="feature-card bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-6 shadow-md">
                  <span className="text-black">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-semibold font-poppins mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
