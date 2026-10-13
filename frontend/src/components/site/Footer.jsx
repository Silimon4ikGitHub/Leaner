import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/site/LanguageSwitcher";

const Footer = () => {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer
      data-testid="site-footer"
      className="bg-[#0F172A] text-white/80 py-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-5">
            <div className="font-heading text-2xl tracking-tight text-white">
              Leaner<span className="text-white/60">.</span>
            </div>
            <p className="text-[10px] tracking-[0.22em] uppercase text-white/50 mt-1">
              Premium Cleaning & Facility
            </p>
            <p className="mt-5 text-sm text-white/65 max-w-sm leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="text-[10px] tracking-[0.3em] uppercase text-white/50 mb-3">
              {t.footer.hours}
            </p>
            <p className="text-sm text-white/85">{t.footer.hoursValue}</p>
          </div>

          <div className="md:col-span-4 flex flex-col md:items-end gap-4">
            <LanguageSwitcher />
            <a
              data-testid="footer-privacy"
              href="#privacy"
              className="text-sm text-white/70 hover:text-white transition-colors"
            >
              {t.footer.privacy}
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-white/50">
            © {year} Leaner. {t.footer.rights}
          </p>
          <p className="text-[10px] tracking-[0.25em] uppercase text-white/40">
            Valposchiavo · Engadin · St. Moritz
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
