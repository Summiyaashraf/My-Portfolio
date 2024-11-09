import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
      <nav className="bg-teal-700 p-4 flex justify-between items-center">
        {/* Logo aur Welcome Message */}
        <div className="flex items-center space-x-2">
          <Image
            src="/MyProfile.png" 
            alt="Profile Picture"
            width={40}
            height={40}
            className="rounded-full"
          />
          <div>
            <h1 className="text-white text-2xl font-bold">Summiya</h1>
            <p className="text-white text-sm">Hi everyone 😍, Welcome to My Portfolio... ❤️</p>
          </div>
        </div>
  
        {/* Navigation Links */}
        <div className="space-x-4">
          <Link href="/home" className="text-white hover:text-gray-200">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-gray-200">
            About
          </Link>
          <Link href="/projects" className="text-white hover:text-gray-200">
            Projects
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-200">
            Contact
          </Link>
        </div>
  
        {/* Sign In aur Log In Buttons */}
        <div className="space-x-2">
          <button className="px-4 py-2 bg-white text-teal-700 rounded-lg">Sign In</button>
          <button className="px-4 py-2 bg-white text-teal-700 rounded-lg">Log In</button>
        </div>
      </nav>
    );
};

export default Navbar;
