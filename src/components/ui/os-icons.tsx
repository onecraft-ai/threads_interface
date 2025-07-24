// Иконки операционных систем из готовых наборов  
import { BsWindows, BsApple, BsLaptop } from 'react-icons/bs'; // Bootstrap Icons
import { HiDesktopComputer } from 'react-icons/hi'; // Hero Icons
import { FaLinux } from 'react-icons/fa'; // Font Awesome

interface IconProps {
  className?: string;
}

// Windows - обесцвеченная полупрозрачная
export function WindowsIcon({ className = "w-12 h-12" }: IconProps) {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <BsWindows 
        className="w-full h-full text-white/60 drop-shadow-sm hover:text-white/80 transition-colors"
        style={{ filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))' }}
      />
    </div>
  );
}

// macOS - обесцвеченная полупрозрачная
export function MacOSIcon({ className = "w-12 h-12" }: IconProps) {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <BsApple 
        className="w-full h-full text-white/60 drop-shadow-sm hover:text-white/80 transition-colors"
        style={{ filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))' }}
      />
    </div>
  );
}

// Linux - обесцвеченная полупрозрачная
export function LinuxIcon({ className = "w-12 h-12" }: IconProps) {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <FaLinux 
        className="w-full h-full text-white/60 drop-shadow-sm hover:text-white/80 transition-colors"
        style={{ filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))' }}
      />
    </div>
  );
}

// Неизвестная ОС - обесцвеченная полупрозрачная
export function UnknownOSIcon({ className = "w-12 h-12" }: IconProps) {
  return (
    <div className={`${className} flex items-center justify-center`}>
      <HiDesktopComputer 
        className="w-full h-full text-white/60 drop-shadow-sm hover:text-white/80 transition-colors"
        style={{ filter: 'drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))' }}
      />
    </div>
  );
} 