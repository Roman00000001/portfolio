import acmeLogo from '../assets/images/acme.png';
import quantumLogo from '../assets/images/quantum.png';
import echoLogo from '../assets/images/echo.png';
import celestialLogo from '../assets/images/celestial.png';
import pulseLogo from '../assets/images/pulse.png';
import apexLogo from '../assets/images/apex.png';
import Image from 'next/image';
import styles from './logo-ticker.module.css'; // Corrected import statement

const images = [
  { src: acmeLogo, alt: 'Acme Logo' },
  { src: quantumLogo, alt: 'Quantum Logo' },
  { src: echoLogo, alt: 'Echo Logo' },
  { src: celestialLogo, alt: 'Celestial Logo' },
  { src: pulseLogo, alt: 'Pulse Logo' },
  { src: apexLogo, alt: 'Apex Logo' },
];

export const LogoTicker = () => {
  return (
    <div className="bg-black text-white py-[72px] relative">
      <div className="container">
        <h2 className="text-xl text-center text-white/70">IT Companies</h2>
        <div className="overflow-hidden mt-9 relative before:absolute after:absolute before:content-[''] after:content-[''] before:h-full after:h-full before:w-1/6 after:w-1/6 before:left-0 after:right-0 before:bg-gradient-to-r from-black via-transparent to-transparent after:bg-gradient-to-l from-black via-transparent to-transparent">
          <div className={`${styles.flex} ${styles['gap-64']} ${styles['animate-marquee']} ${styles['whitespace-nowrap']}`}>
            {images.map(({ src, alt }) => (
              <Image key={alt} src={src} alt={alt} className="flex-none h-8 w-auto inline-block" />
            ))}
            {images.map(({ src, alt }) => ( // Дублирование набора логотипов
              <Image key={`${alt}-duplicate`} src={src} alt={alt} className="flex-none h-8 w-auto inline-block" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};