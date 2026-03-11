import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-muted-foreground text-sm">
        <span>© {new Date().getFullYear()} — {t("footer.copyright")}</span>
        <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6">
          <span>Kraushara 3/12, Warsaw, Poland, 02-505</span>
          <a href="tel:+48571433588" className="hover:text-foreground transition-colors">+48 571 433 588</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
