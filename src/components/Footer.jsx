import { Link } from 'react-router';
import {
  Facebook,
  Twitter,
  Instagram,
  Mail
} from 'lucide-react';
import { RiMovie2AiLine} from 'react-icons/ri';


const Footer = () => {
  const currentYear = new Date().getFullYear();


  return (
    <footer className="bg-linear-to-l from-[#134E5E] to-[#19664f] py-8 px-4  rounded-xl mt-20">
      <div className="container grid grid-cols-1 gap-6 md:grid-cols-3  place-items-center">
      <div className="flex items-center justify-center gap-2 text-4xl text-white space-y-2 mt-2">
        <RiMovie2AiLine />
        <span className="font-bold text-white">Movie Master Pro</span>
      </div>
        <div>
          <div className=" space-y-2 mt-2">
            <span className="text-xl font-bold text-white">Our Pages</span>
          </div>
          <ul className="space-y-2 mt-2">
            <li><Link to="/" className="text-white">Home</Link></li>
            <li><Link to="/all-movies"  className="text-white">All Movies</Link></li>
            <li><Link to="/auth/login" className="text-white">Login</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4 text-white">Connect With Us</h3>
          <div className="flex space-x-4 mb-4 text-white">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" >
              <Twitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram size={24} />
            </a>

          </div>
          <div>
            <a
              href="mailto:support@nihonlearn.com"
              className="flex items-center text-white"
            >
              <Mail size={18} className="mr-2" /> support@movie.master.com
            </a>
          </div>
        </div>
      </div>


      <div className="border-t lg:mb-0 md:mb-0 mb-20 border-[white] mt-8 pt-4 text-center">
        <p className="text-sm text-white">
          © {currentYear}Movie Master Pro. All Rights Reserved.
          <span className="ml-4">
            <Link to="/" className="hover:text-blue-600 mr-3">Privacy Policy</Link>
            <Link to="/" className="hover:text-blue-600">Terms of Service</Link>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;