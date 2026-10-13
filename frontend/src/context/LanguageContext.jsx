import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { translations, SUPPORTED_LANGS, DEFAULT_LANG } from "@/i18n/translations";

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    if (typeof window === "undefined") return DEFAULT_LANG;
    const saved = window.localStorage.getItem("leaner_lang");
    if (saved && SUPPORTED_LANGS.includes(saved)) return saved;
    return DEFAULT_LANG;
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem("leaner_lang", lang);
      document.documentElement.lang = lang;
    }
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      t: translations[lang] || translations[DEFAULT_LANG],
      supported: SUPPORTED_LANGS,
    }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
};
