import { ASSET } from "./data";

export function HeroSection() {
  return (
    <section
      id="SecHomeBanner"
      className="hero"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="hero__bg"
        style={{
          backgroundImage: `url(${ASSET("LS-Aesthetic-Doctor-Group-Photo-2026-2-scaled.jpeg")})`,
        }}
      />
      <div className="hero__content">
        <h2 className="hero__title">LS Medical Group</h2>
        <h3 className="hero__subtitle">
          One Unified Solution for All your Medical needs.
        </h3>
        <div className="hero__buttons">
          <a href="#clinics" className="hero__btn hero__btn--ghost">
            Find us
          </a>
          <a href="/about/our-founder/" className="hero__btn hero__btn--solid">
            Join us
          </a>
        </div>
      </div>
    </section>
  );
}
