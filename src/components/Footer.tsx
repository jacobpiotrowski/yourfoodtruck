import { useTranslation } from "react-i18next";
import { Facebook, Instagram } from "lucide-react";

const NostrIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} width="20" height="20">
    <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm3.5 14.5c-1.5 0-2.5-1-3.5-2s-2-2-3.5-2v-1c2 0 3 1 4 2s1.5 1.5 3 1.5v1.5zm0-4c-1.5 0-2.5-1-3.5-2s-2-2-3.5-2v-1c2 0 3 1 4 2s1.5 1.5 3 1.5v1.5z" />
  </svg>
);

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6 flex flex-col items-center gap-6 text-muted-foreground text-sm">
        <div className="flex items-center gap-5">
          <a href="https://www.facebook.com/yourfoodtruck.eu/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-foreground transition-colors">
            <Facebook size={22} />
          </a>
          <a href="https://www.instagram.com/yourfoodtruck.eu/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-foreground transition-colors">
            <Instagram size={22} />
          </a>
          <a href="nostr:npub1pccqwxvvadkuv2m9e6ed8dusavzcr50j4ffme94pxucthxgy325s2zgtzz" target="_blank" rel="noopener noreferrer" aria-label="Open Nostr profile" className="hover:text-foreground transition-colors" onClick={(e) => {
            // Fallback to web profile if nostr: protocol not handled
            setTimeout(() => {
              window.open("https://npub.pro/npub1pccqwxvvadkuv2m9e6ed8dusavzcr50j4ffme94pxucthxgy325s2zgtzz", "_blank");
            }, 500);
          }}>
            <NostrIcon />
          </a>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between w-full gap-4">
          <span>© {new Date().getFullYear()} — {t("footer.copyright")}</span>
          <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
            <span>Kraushara 3/12, Warsaw, Poland, 02-505</span>
            <a href="tel:+48571433588" className="hover:text-foreground transition-colors">+48 571 433 588</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
