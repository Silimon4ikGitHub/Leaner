import { useLanguage } from "@/context/LanguageContext";

const LABELS = { de: "DE", en: "EN", it: "IT" };

const LanguageSwitcher = () => {
  const { lang, setLang, supported } = useLanguage();

  return (
    <div
      data-testid="language-switcher"
      className="flex items-center gap-0.5 border border-slate-200 bg-white/70 backdrop-blur-sm"
    >
      {supported.map((code) => {
        const active = lang === code;
        return (
          <button
            key={code}
            data-testid={`lang-${code}`}
            onClick={() => setLang(code)}
            aria-pressed={active}
            className={`text-xs tracking-[0.15em] px-3 py-2 transition-colors ${
              active
                ? "bg-[#003B5C] text-white"
                : "text-slate-600 hover:text-[#003B5C]"
            }`}
          >
            {LABELS[code]}
          </button>
        );
      })}
    </div>
  );
};

export default LanguageSwitcher;
