import { 
  FaFacebookF, 
  FaTwitter, 
  FaInstagram, 
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="pt-16 mt-6 pb-8 bg-black text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold font-poppins mb-6">
              <span className="text-primary">NXY</span> Markets
            </h3>
            <p className="text-white opacity-80 mb-6">
              The next generation forex trading platform designed for traders of all experience levels.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-colors">
                <FaFacebookF />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-colors">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-colors">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white bg-opacity-10 flex items-center justify-center hover:bg-opacity-20 transition-colors">
                <FaYoutube />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold font-poppins mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-white opacity-80 hover:opacity-100 transition-opacity">Features</a></li>
              <li><a href="#app" className="text-white opacity-80 hover:opacity-100 transition-opacity">Mobile App</a></li>
              <li><a href="#social" className="text-white opacity-80 hover:opacity-100 transition-opacity">Community</a></li>
              <li><a href="#download" className="text-white opacity-80 hover:opacity-100 transition-opacity">Download</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold font-poppins mb-6">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity">Terms of Service</a></li>
              <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity">Privacy Policy</a></li>
              <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity">Risk Disclosure</a></li>
              <li><a href="#" className="text-white opacity-80 hover:opacity-100 transition-opacity">AML Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold font-poppins mb-6">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-center text-white opacity-80">
                <FaEnvelope className="mr-3" />
                <span>support@nxymarkets.com</span>
              </li>
              <li className="flex items-center text-white opacity-80">
                <FaPhoneAlt className="mr-3" />
                <span>+1 (800) 123-4567</span>
              </li>
              <li className="flex items-center text-white opacity-80">
                <FaMapMarkerAlt className="mr-3" />
                <span>New York, NY 10001, USA</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white border-opacity-20 text-center">
          <p className="text-sm text-white opacity-80">
            &copy; {new Date().getFullYear()} NXY Markets. All rights reserved.
          </p>
          <p className="text-xs text-white opacity-70 mt-2">
            Risk Warning: Trading forex and leveraged financial instruments involves significant risk and can result in the loss of your capital. You should not invest more than you can afford to lose.
          </p>
        </div>
      </div>
    </footer>
  );
}
