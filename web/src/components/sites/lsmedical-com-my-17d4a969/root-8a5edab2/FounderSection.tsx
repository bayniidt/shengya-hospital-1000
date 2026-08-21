import { FOUNDER_CREDENTIALS, ASSET } from "./data";

export function FounderSection() {
  return (
    <section className="gradient-purple founder">
      <div className="ls-section-inner founder__grid">
        <div className="founder__image">
          <img
            src={ASSET("dr-neik-founder-third.png")}
            alt="Dr Neik Hiong Lee"
            style={{ maxWidth: "100%", height: "auto" }}
          />
        </div>
        <div className="founder__content">
          <h2 className="white-text section-title text-left">Our Founder</h2>
          <h5
            className="text-left white-text"
            style={{ fontSize: "21px", marginBottom: "20px" }}
          >
            Dr Neik Hiong Lee
          </h5>
          <p className="text-left white-text">
            Founder of LS Group, among his numerous accolades, he&rsquo;s an
            active member in several professional associations and a
            contributing speaker.
          </p>
          <ul className="purple-bullet-list text-left white-text">
            {FOUNDER_CREDENTIALS.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
          <a href="/about/our-founder/" className="btn btn-purple">
            Read more
          </a>
        </div>
      </div>
    </section>
  );
}
