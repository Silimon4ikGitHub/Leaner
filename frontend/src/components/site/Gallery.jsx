import { MousePointer2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const BEFORE_AFTER_SETS = [
  {
    // Premium dirty/dusty wood parquet floor
    before:
      "https://images.unsplash.com/photo-1573869908170-64b53a60d8da?auto=format&fit=crop&w=1400&q=80",
    // Clean polished shiny parquet floor — AI-restored from the SAME source photo
    after: "/gallery/parquet_after.jpg",
    label: "Parquet & wood",
  },
  {
    // Panoramic windows & facade — tight crop of the ground-floor windows
    // BEFORE: AI-generated dirty version (Nano Banana, same framing)
    before: "/gallery/storefront_before.jpg",
    // AFTER: cropped clean original (Tory Burch — Unsplash)
    after: "/gallery/storefront_after.jpg",
    label: "Panoramic windows & facade",
  },
  {
    // Stone block facade — user-supplied dirty BEFORE; AI-cleaned AFTER
    before: "/gallery/stone_facade_before.jpg",
    after: "/gallery/stone_facade_after.jpg",
    label: "Stone facade",
  },
  {
    // Marble floor — AI-generated rust/yellow stains BEFORE; cropped clean Unsplash marble AFTER
    before: "/gallery/marble_before.jpg",
    after: "/gallery/marble_after.jpg",
    label: "Marble floor",
  },
];

const BeforeAfterCard = ({ data, t, testId }) => {
  return (
    <div
      data-testid={testId}
      className="group relative w-full aspect-[4/5] overflow-hidden bg-slate-100 cursor-pointer shadow-sm"
    >
      {/* After image (revealed underneath) */}
      <img
        src={data.after}
        alt={`${data.label} after`}
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      {/* Before image (default visible, fades out on hover) */}
      <img
        src={data.before}
        alt={`${data.label} before`}
        className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-out opacity-100 group-hover:opacity-0"
        loading="lazy"
      />

      {/* Labels (Before label disappears on hover) */}
      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-2.5 py-1 text-[10px] tracking-[0.25em] uppercase text-white transition-opacity duration-300 group-hover:opacity-0">
        {t.gallery.before}
      </div>
      <div className="absolute top-4 right-4 bg-white/95 px-2.5 py-1 text-[10px] tracking-[0.25em] uppercase text-[#003B5C] opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {t.gallery.after}
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
        <span className="text-xs tracking-[0.2em] uppercase opacity-90">
          {data.label}
        </span>
        <span className="flex items-center gap-1.5 text-[10px] tracking-[0.2em] uppercase opacity-80 group-hover:opacity-0 transition-opacity">
          <MousePointer2 size={12} />
          {t.gallery.hint}
        </span>
      </div>
    </div>
  );
};

const Gallery = () => {
  const { t } = useLanguage();
  return (
    <section
      id="gallery"
      data-testid="gallery-section"
      className="bg-[#F8F9FA] py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end mb-12">
          <div className="lg:col-span-7">
            <p className="text-xs tracking-[0.3em] uppercase text-slate-500 mb-4">
              — {t.gallery.overline}
            </p>
            <h2
              data-testid="gallery-title"
              className="font-heading text-4xl sm:text-5xl tracking-tight text-[#0F172A] leading-[1.1]"
              style={{ fontWeight: 600 }}
            >
              {t.gallery.title}
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              {t.gallery.subtitle}
            </p>
            <p className="mt-3 text-xs tracking-[0.25em] uppercase text-slate-500 flex items-center gap-2">
              <MousePointer2 size={12} /> {t.gallery.hint}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 lg:gap-6">
          {BEFORE_AFTER_SETS.map((item, idx) => (
            <BeforeAfterCard
              key={idx}
              data={item}
              t={t}
              testId={`gallery-item-${idx}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
