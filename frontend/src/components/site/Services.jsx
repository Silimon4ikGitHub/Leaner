import { Link } from "react-router-dom";
import { Check, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Services = () => {
  const { t } = useLanguage();
  const items = t.services.items;

  return (
    <section
      id="services"
      data-testid="services-section"
      className="relative bg-white py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <div className="max-w-3xl">
          <p className="text-xs tracking-[0.3em] uppercase text-slate-500 mb-4">
            — {t.services.overline}
          </p>
          <h2
            data-testid="services-title"
            className="font-heading text-4xl sm:text-5xl tracking-tight text-[#0F172A] leading-[1.1]"
            style={{ fontWeight: 500 }}
          >
            {t.services.title}
          </h2>
          <p className="mt-5 text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
            {t.services.subtitle}
          </p>
        </div>

        {/* Pricing grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {items.map((s, idx) => {
            const highlight = !!s.highlight;
            return (
              <div
                key={idx}
                data-testid={`service-card-${idx}`}
                className={`group relative flex flex-col p-8 border transition-all duration-300 ${
                  highlight
                    ? "bg-[#003B5C] text-white border-[#003B5C] -translate-y-2 shadow-xl"
                    : "bg-white text-[#0F172A] border-slate-200 hover:-translate-y-1 hover:shadow-xl hover:border-slate-300"
                }`}
              >
                {highlight && (
                  <div className="absolute -top-3 left-8 bg-white text-[#003B5C] text-[10px] tracking-[0.25em] uppercase px-3 py-1 flex items-center gap-1.5">
                    <Sparkles size={12} />
                    {s.badge}
                  </div>
                )}

                <h3
                  className="font-heading text-xl tracking-tight"
                  style={{ fontWeight: 500 }}
                >
                  {s.name}
                </h3>

                <div className="mt-6 flex items-baseline gap-2">
                  <span
                    className="font-heading text-4xl tracking-tight"
                    style={{ fontWeight: 600 }}
                  >
                    {s.price}
                  </span>
                  <span
                    className={`text-sm ${
                      highlight ? "text-white/70" : "text-slate-500"
                    }`}
                  >
                    {s.unit}
                  </span>
                </div>

                <p
                  className={`mt-5 text-sm leading-relaxed ${
                    highlight ? "text-white/80" : "text-slate-600"
                  }`}
                >
                  {s.desc}
                </p>

                <ul className="mt-6 space-y-3 flex-1">
                  {s.features.map((f, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2.5 text-sm"
                    >
                      <Check
                        size={16}
                        className={`mt-0.5 flex-shrink-0 ${
                          highlight ? "text-white" : "text-[#003B5C]"
                        }`}
                      />
                      <span
                        className={highlight ? "text-white/90" : "text-slate-700"}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  data-testid={`service-cta-${idx}`}
                  to="/contact"
                  className={`mt-8 w-full text-center text-sm tracking-wide py-3 transition-colors ${
                    highlight
                      ? "bg-white text-[#003B5C] hover:bg-slate-100"
                      : "bg-transparent border border-[#0F172A] text-[#0F172A] hover:bg-[#0F172A] hover:text-white"
                  }`}
                >
                  {t.nav.cta}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Commercial / B2B card — full-width banner below the 4 retail cards */}
        <div
          data-testid="service-commercial-card"
          className="mt-6 lg:mt-8 group relative overflow-hidden border border-[#003B5C]/15 bg-gradient-to-br from-slate-50 to-[#EEF3F8] p-8 lg:p-12 hover:shadow-xl transition-shadow"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <div className="lg:col-span-7">
              <p className="text-[10px] tracking-[0.3em] uppercase text-[#003B5C] mb-4">
                — {t.services.commercial.eyebrow}
              </p>
              <h3
                className="font-heading text-3xl sm:text-4xl tracking-tight text-[#0F172A] leading-tight"
                style={{ fontWeight: 500 }}
              >
                {t.services.commercial.name}
              </h3>
              <p className="mt-5 text-slate-700 text-base leading-relaxed max-w-xl">
                {t.services.commercial.desc}
              </p>

              <ul className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-xl">
                {t.services.commercial.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm">
                    <Check
                      size={16}
                      className="mt-0.5 flex-shrink-0 text-[#003B5C]"
                    />
                    <span className="text-slate-800">{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 flex flex-col items-start lg:items-end gap-5 lg:pl-8 lg:border-l lg:border-[#003B5C]/15">
              <div className="lg:text-right">
                <div
                  className="font-heading text-3xl sm:text-4xl tracking-tight text-[#0F172A]"
                  style={{ fontWeight: 600 }}
                >
                  {t.services.commercial.priceLabel}
                </div>
                <p className="mt-1 text-sm text-slate-500">
                  {t.services.commercial.priceHint}
                </p>
              </div>
              <Link
                data-testid="service-commercial-cta"
                to="/contact"
                className="inline-flex items-center justify-center text-sm tracking-wide bg-[#003B5C] text-white px-7 py-4 hover:bg-[#002A42] transition-colors w-full lg:w-auto"
              >
                {t.services.commercial.cta}
              </Link>
            </div>
          </div>
        </div>

        {/* Transport note */}
        <div
          data-testid="services-note"
          className="mt-12 p-6 lg:p-8 bg-slate-50 border-l-2 border-[#003B5C]"
        >
          <p className="text-[10px] tracking-[0.3em] uppercase text-slate-500 mb-2">
            Important Note
          </p>
          <p className="text-slate-800 text-sm sm:text-base leading-relaxed">
            {t.services.note}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
