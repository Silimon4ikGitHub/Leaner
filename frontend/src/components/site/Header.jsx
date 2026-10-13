import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/site/LanguageSwitcher";

const Header = ({ isHome = false }) => {
  const { t } = useLanguage();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Header is "solid" (white bg, dark text) whenever NOT at the top of the home page
  const solid = !isHome || scrolled;

  const navItems = [
    { to: "/services", label: t.nav.services, id: "services" },
    { to: "/technology", label: t.nav.tech, id: "tech" },
    { to: "/gallery", label: t.nav.gallery, id: "gallery" },
    { to: "/contact", label: t.nav.contact, id: "contact" },
  ];

  const isActive = (to) =>
    to === "/" ? pathname === "/" : pathname.startsWith(to);

  return (
    <header
      data-testid="site-header"
      data-solid={solid ? "true" : "false"}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        solid
          ? "bg-white/90 backdrop-blur-xl backdrop-saturate-150 border-b border-slate-200/60 text-slate-800"
          : "bg-transparent border-b border-transparent text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link
          data-testid="logo-link"
          to="/"
          className="flex flex-col items-start group"
        >
          <span
            className={`font-heading text-2xl tracking-tight leading-none transition-colors ${
              solid
                ? "text-[#0F172A] group-hover:text-[#003B5C]"
                : "text-white group-hover:text-white/80"
            }`}
            style={{ fontWeight: 600 }}
          >
            Leaner
            <span className={solid ? "text-[#003B5C]" : "text-white/70"}>
              .
            </span>
          </span>
          <span
            className={`text-[10px] tracking-[0.22em] uppercase mt-1 transition-colors ${
              solid ? "text-slate-500" : "text-white/70"
            }`}
          >
            Premium Cleaning & Facility
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9">
          {navItems.map((item) => {
            const active = isActive(item.to);
            return (
              <Link
                key={item.id}
                data-testid={`nav-${item.id}`}
                to={item.to}
                aria-current={active ? "page" : undefined}
                className={`text-sm tracking-wide transition-colors relative group ${
                  solid
                    ? active
                      ? "text-[#003B5C]"
                      : "text-slate-700 hover:text-[#003B5C]"
                    : active
                      ? "text-white"
                      : "text-white/85 hover:text-white"
                }`}
              >
                {item.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${
                    active ? "w-full" : "w-0 group-hover:w-full"
                  } ${solid ? "bg-[#003B5C]" : "bg-white"}`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <button
            data-testid="header-cta"
            onClick={() => navigate("/contact")}
            className="hidden md:inline-flex items-center text-sm tracking-wide bg-[#003B5C] text-white px-5 py-3 hover:bg-[#002A42] transition-colors"
          >
            {t.nav.cta}
          </button>
          <button
            data-testid="mobile-menu-toggle"
            onClick={() => setOpen((v) => !v)}
            className={`md:hidden p-2 ${
              solid ? "text-slate-800" : "text-white"
            }`}
            aria-label="Menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div
          data-testid="mobile-menu"
          className="md:hidden bg-white border-t border-slate-200"
        >
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navItems.map((item) => {
              const active = isActive(item.to);
              return (
                <Link
                  key={item.id}
                  data-testid={`mobile-nav-${item.id}`}
                  to={item.to}
                  className={`text-left py-3 text-base border-b border-slate-100 last:border-b-0 ${
                    active
                      ? "text-[#003B5C]"
                      : "text-slate-800 hover:text-[#003B5C]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              data-testid="mobile-header-cta"
              to="/contact"
              className="mt-3 bg-[#003B5C] text-white py-3 text-center hover:bg-[#002A42] transition-colors text-sm tracking-wide"
            >
              {t.nav.cta}
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
