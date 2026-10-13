import { useState } from "react";
import { ArrowRight, MessageCircle, Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import {
  WHATSAPP_LINK,
  TELEGRAM_LINK,
  WHATSAPP_NUMBER_DISPLAY,
  CONTACT_EMAIL,
} from "@/lib/constants";

/**
 * Lead-form submission: opens the user's default email client with a
 * pre-filled message to CONTACT_EMAIL. No backend required — the whole site
 * is served as static files on GitHub Pages.
 */
const Contact = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  const onChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();

    const email = form.email.trim();
    const phone = form.phone.trim();
    if (!email && !phone) {
      alert(t.contact.toast.validation);
      return;
    }

    const lines = [
      `${t.contact.form.name}: ${form.name}`,
      `${t.contact.form.email}: ${email || "—"}`,
      `${t.contact.form.phone}: ${phone || "—"}`,
      `${t.contact.form.location}: ${form.location || "—"}`,
      "",
      `${t.contact.form.message}:`,
      form.message,
    ];
    const subject = encodeURIComponent(t.contact.form.subject);
    const body = encodeURIComponent(lines.join("\n"));
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      data-testid="contact-section"
      className="relative bg-white py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <p className="text-xs tracking-[0.3em] uppercase text-slate-500 mb-4">
            — {t.contact.overline}
          </p>
          <h2
            data-testid="contact-title"
            className="font-heading text-4xl sm:text-5xl tracking-tight text-[#0F172A] leading-[1.1]"
            style={{ fontWeight: 600 }}
          >
            {t.contact.title}
          </h2>
          <p className="mt-5 text-slate-600 text-base sm:text-lg leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Direct messengers — top priority */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <a
              data-testid="contact-whatsapp"
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 lg:p-7 bg-[#25D366] text-white hover:bg-[#1EBE5D] transition-colors shadow-md hover:shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-white/30 flex items-center justify-center">
                  <MessageCircle size={22} strokeWidth={1.6} />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase opacity-80">
                    {t.contact.whatsapp}
                  </div>
                  <div
                    className="text-base lg:text-lg tabular-nums"
                    style={{ fontWeight: 600 }}
                  >
                    {WHATSAPP_NUMBER_DISPLAY}
                  </div>
                </div>
              </div>
              <ArrowRight
                size={20}
                className="opacity-70 group-hover:translate-x-1 group-hover:opacity-100 transition-all"
              />
            </a>

            <a
              data-testid="contact-telegram"
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between p-6 lg:p-7 bg-[#229ED9] text-white hover:bg-[#1D88BA] transition-colors shadow-md hover:shadow-xl"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 border border-white/30 flex items-center justify-center">
                  <Send size={20} strokeWidth={1.6} />
                </div>
                <div>
                  <div className="text-[10px] tracking-[0.3em] uppercase opacity-80">
                    {t.contact.telegram}
                  </div>
                  <div
                    className="text-base lg:text-lg tabular-nums"
                    style={{ fontWeight: 600 }}
                  >
                    {WHATSAPP_NUMBER_DISPLAY}
                  </div>
                </div>
              </div>
              <ArrowRight
                size={20}
                className="opacity-70 group-hover:translate-x-1 group-hover:opacity-100 transition-all"
              />
            </a>

            <div className="mt-2 p-6 bg-slate-50 border border-slate-200">
              <p className="text-[10px] tracking-[0.3em] uppercase text-slate-500 mb-2">
                Email
              </p>
              <a
                data-testid="contact-email"
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-[#003B5C] text-sm hover:underline break-all"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          {/* Lead form — distinct card */}
          <form
            data-testid="contact-form"
            onSubmit={onSubmit}
            noValidate
            className="lg:col-span-7 bg-[#EEF3F8] border border-[#D6E1EC] p-8 lg:p-12 shadow-[0_20px_60px_-15px_rgba(0,59,92,0.18)] rounded-sm"
          >
            <div className="mb-7">
              <h3
                className="font-heading text-2xl lg:text-3xl tracking-tight text-[#0F172A]"
                style={{ fontWeight: 600 }}
              >
                {t.contact.formHeading}
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                {t.contact.formIntro}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="md:col-span-2">
                <Field
                  id="name"
                  label={t.contact.form.name}
                  value={form.name}
                  onChange={onChange}
                  required
                />
              </div>
              <Field
                id="email"
                label={t.contact.form.email}
                value={form.email}
                onChange={onChange}
                type="email"
              />
              <Field
                id="phone"
                label={t.contact.form.phone}
                value={form.phone}
                onChange={onChange}
                type="tel"
              />
              <div className="md:col-span-2 -mt-2">
                <p className="text-[11px] text-slate-500 leading-snug">
                  {t.contact.form.contactHint}
                </p>
              </div>
              <div className="md:col-span-2">
                <Field
                  id="location"
                  label={t.contact.form.location}
                  value={form.location}
                  onChange={onChange}
                />
              </div>
              <div className="md:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-[10px] tracking-[0.25em] uppercase text-slate-500 mb-2"
                >
                  {t.contact.form.message} *
                </label>
                <textarea
                  data-testid="contact-input-message"
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder={t.contact.form.messagePlaceholder}
                  value={form.message}
                  onChange={onChange}
                  className="w-full bg-white border border-slate-200 px-4 py-3 text-sm text-[#0F172A] focus:outline-none focus:border-[#003B5C] focus:ring-1 focus:ring-[#003B5C] transition-colors resize-y"
                />
              </div>
            </div>

            <button
              data-testid="contact-submit"
              type="submit"
              className="mt-8 inline-flex items-center justify-center gap-2 bg-[#003B5C] text-white px-8 py-4 text-sm tracking-wide hover:bg-[#002A42] transition-colors w-full sm:w-auto"
              style={{ fontWeight: 500 }}
            >
              {t.contact.form.submit}
              <ArrowRight size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Field = ({ id, label, value, onChange, type = "text", required }) => (
  <div>
    <label
      htmlFor={id}
      className="block text-[10px] tracking-[0.25em] uppercase text-slate-500 mb-2"
    >
      {label}
      {required ? " *" : ""}
    </label>
    <input
      data-testid={`contact-input-${id}`}
      id={id}
      name={id}
      type={type}
      value={value}
      onChange={onChange}
      required={required}
      className="w-full bg-white border border-slate-200 px-4 py-3 text-sm text-[#0F172A] focus:outline-none focus:border-[#003B5C] focus:ring-1 focus:ring-[#003B5C] transition-colors"
    />
  </div>
);

export default Contact;
