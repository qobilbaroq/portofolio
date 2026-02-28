import React from "react";

export const Contact = () => {
  return (
    <div
      id="contact"
      className="flex flex-col md:p-9 p-5 auto-card bg-secondary text-primary rounded-2xl"
    >
      <div className="flex items-start justify-between">
        <p className="text-[14px] tracking-[3px] uppercase text-muted-primary pt-1">
          Contact
        </p>
        <h2
          className="text-right leading-none tracking-tight"
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(28px, 4vw, 48px)",
            fontWeight: 700,
          }}
        >
          Let's <em className="not-italic text-main-primary">Talk.</em>
        </h2>
      </div>

      <div className="w-full h-px bg-muted-primary/30 my-6" />

      <div className="grid grid-cols-2 gap-12 flex-1">
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-6">
            <div>
              <p
                className="text-xl font-medium mb-1"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                "Let's build something great."
              </p>
              <p className="text-sm text-muted-primary font-light leading-relaxed">
                Punya project atau ide menarik? Jangan ragu untuk reach out —
                saya selalu terbuka untuk kolaborasi baru.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:hello@nabil.com"
                className="flex items-center gap-3 text-primary hover:text-main-primary transition-colors duration-200 group"
              >
                <span className="w-8 h-8 rounded-full border border-muted-primary/30 flex items-center justify-center group-hover:border-main-primary group-hover:bg-main-primary group-hover:text-white transition-all duration-200">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M2 7l10 7 10-7" />
                  </svg>
                </span>
                <span className="text-sm">hello@nabil.com</span>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 text-primary hover:text-main-primary transition-colors duration-200 group"
              >
                <span className="w-8 h-8 rounded-full border border-muted-primary/30 flex items-center justify-center group-hover:border-main-primary group-hover:bg-main-primary group-hover:text-white transition-all duration-200">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r=".5" fill="currentColor" />
                  </svg>
                </span>
                <span className="text-sm">@nabilmubaroq</span>
              </a>

              <a
                href="#"
                className="flex items-center gap-3 text-primary hover:text-main-primary transition-colors duration-200 group"
              >
                <span className="w-8 h-8 rounded-full border border-muted-primary/30 flex items-center justify-center group-hover:border-main-primary group-hover:bg-main-primary group-hover:text-white transition-all duration-200">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="3" />
                    <path d="M7 10v7M7 7v.01M12 10v7m0-5a3 3 0 016 0v5" />
                  </svg>
                </span>
                <span className="text-sm">Moch Nabil Al Mubaroq</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-[12px] tracking-[2px] uppercase text-muted-primary">
              Name
            </label>
            <input
              type="text"
              placeholder="Your name"
              className="bg-transparent border-b border-muted-primary/30 py-2 text-sm text-primary placeholder:text-muted-primary/40 outline-none focus:border-primary transition-colors duration-200"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[12px] tracking-[2px] uppercase text-muted-primary">
              Email
            </label>
            <input
              type="email"
              placeholder="your@email.com"
              className="bg-transparent border-b border-muted-primary/30 py-2 text-sm text-primary placeholder:text-muted-primary/40 outline-none focus:border-primary transition-colors duration-200"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-[12px] tracking-[2px] uppercase text-muted-primary">
              Message
            </label>
            <textarea
              placeholder="Tell me about your project..."
              rows={3}
              className="bg-transparent border-b border-muted-primary/30 py-2 text-sm text-primary placeholder:text-muted-primary/40 outline-none focus:border-primary transition-colors duration-200 resize-none"
            />
          </div>

          <button className="mt-2 self-start bg-primary text-secondary text-[11px] tracking-[2px] uppercase px-6 py-3 rounded-full hover:bg-main-primary transition-colors duration-200">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};
