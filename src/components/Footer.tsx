import InstaIcon from '../assets/icons/insta.svg';
import XSocial from '../assets/icons/x-social.svg';
import TelegIcon from '../assets/icons/icons8-телеграм.svg';
import DiscordIcon from '../assets/icons/discord-svgrepo-com (1).svg';

export const Footer = () => {
  return (
    <footer className="py-5 bg-black text-white/60 border-t border-white/20">
      <div className="container">
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
          <div className="text-center">©CTIROMAN Portfolio</div>
          <ul className="flex justify-center gap-3">
            <li>
              <a href="https://x.com/CTIRoman?t=STArXppEUNvmKS50OhuN_g&s=09" target="_blank" rel="noopener noreferrer">
                <XSocial width={32} height={32} alt="X" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/roman.gergokov?igsh=MWVsdjFwbm5rcnNkbQ==" target="_blank" rel="noopener noreferrer">
                <InstaIcon width={32} height={32} alt="Instagram" />
              </a>
            </li>
            <li>
              <a href="https://t.me/CTIRoman" target="_blank" rel="noopener noreferrer">
                <TelegIcon width={32} height={32} alt="Telegram" />
              </a>
            </li>
            <li>
              <a href="https://discord.com/invite/tcRQdtkZ" target="_blank" rel="noopener noreferrer">
                <DiscordIcon width={32} height={32} alt="Discord" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
