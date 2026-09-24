import Image from 'next/image';
import footerLogo from '@/assets/logo.png';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0a0b0e] border-t border-gray-800/60 py-6 px-4 sm:px-8">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Left Side: Logo */}
        <div className="flex items-center gap-2">
          <Image
            src={footerLogo}
            alt="FITLOG Logo"
            width={150}
            height={40}
            className="h-6 w-auto object-contain"
          />
          <h2 className="text-white text-lg font-bold">FITLOG</h2>
        </div>

        {/* Right Side: Copyright Text */}
        <p className="text-gray-400 text-xs sm:text-sm font-medium text-center sm:text-right">
          © {new Date().getFullYear()} FitLog — Workout Library. Train hard, log honest.
        </p>
      </div>
    </footer>
  );
};

export default Footer;