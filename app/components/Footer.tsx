import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi"

const Footer = () => {
  return (
    <footer className="bg-black py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-col space-y-2 mb-4 md:mb-0">
            <p className="text-sm text-gray-400"> {new Date().getFullYear()} Zawad Nafi. All rights reserved.</p>
            <div className="flex items-center space-x-2">
              <FiMail className="text-gray-400 w-4 h-4" />
              <a
                href="mailto:znafi@ualberta.ca"
                className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
              >
                znafi@ualberta.ca
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <FiPhone className="text-gray-400 w-4 h-4" />
              <a href="tel:+18253336984" className="text-gray-400 hover:text-blue-400 text-sm transition-colors">
                +1 825-333-6984
              </a>
            </div>
          </div>
          <div className="flex space-x-4">
            <a
              href="https://github.com/znafi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              <FiGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/zawadnafi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
            >
              <FiLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
