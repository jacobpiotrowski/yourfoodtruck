import { useTranslation } from "react-i18next";

const languages = [
  { code: "en", label: "EN" },
  { code: "de", label: "DE" },
  { code: "fr", label: "FR" },
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <div className="fixed top-4 right-4 z-50 flex gap-1 bg-card/80 backdrop-blur-sm border border-border rounded-lg p-1">
      {languages.map((lang) => (
        <button
          key={lang.code}
          onClick={() => i18n.changeLanguage(lang.code)}
          className={`px-3 py-1.5 rounded-md text-sm font-display font-semibold transition-colors ${
            i18n.language === lang.code
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
