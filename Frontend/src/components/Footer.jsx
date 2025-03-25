import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 text-white py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-2xl font-bold">Jobify</h1>
            <p className="text-gray-200">No. 1 Job Hunt Website</p>
            <br />
            <p className="text-gray-300">© 2025 Jobify</p>
          </div>

          {/* Middle Section */}
          <div className="mb-6 md:mb-0">
            <h1 className="text-xl font-bold">Contact Us</h1>
            <p className="text-gray-200">+91 1234567890</p>
            <p className="text-gray-200">support@jobify.com</p>
          </div>

          {/* Right Section - Social Media */}
          <div>
            <h1 className="text-xl font-bold mb-3">Follow Us</h1>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition"
              >
                <FaFacebookF size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-200 hover:text-white transition"
              >
                <FaInstagram size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
