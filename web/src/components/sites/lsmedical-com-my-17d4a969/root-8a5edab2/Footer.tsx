import { ASSET } from "./data";

const APPOINTMENT_LINKS = [
  { label: "LS Aesthetic", href: "/ls-aesthetic/#appointment" },
  { label: "LS Family", href: "/ls-family/#appointment" },
  { label: "LS Dental", href: "/ls-dental/#appointment" },
];

const FOOTER_LINKS = [
  { label: "Investor Relations", href: "/about/our-founder/" },
  { label: "Feedback and Support", href: "/contactus" },
  { label: "Privacy Policy", href: "/privacy/" },
  { label: "Terms of Service", href: "/terms-of-service/" },
  { label: "Refund Policy", href: "/refund-policy/" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__widgets">
        <div className="site-footer__col">
          <div className="site-footer__brand">
            <img src={ASSET("ls-main-logo.png")} alt="LS Medical Logo" />
            <span>LS MEDICAL</span>
          </div>
          <p className="footer-about">
            We are a comprehensive healthcare facility specializing in
            aesthetic treatments, general healthcare, and dental services,
            catering to individuals who wish to enhance their appearance and
            improve their overall well-being.
          </p>
          <p className="footer-about">
            <b>KKLIU 1562 / EXP 31.12.2027</b>
          </p>
        </div>

        <div className="site-footer__col">
          <h3>Make an Appointment</h3>
          <ul>
            {APPOINTMENT_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__col">
          <h3>Links</h3>
          <ul>
            {FOOTER_LINKS.map((l) => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="site-footer__copyright">
        <p>Copyright © 2023 LS Medical Group. All rights reserved.</p>
      </div>
    </footer>
  );
}
