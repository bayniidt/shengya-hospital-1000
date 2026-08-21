import { SERVICES, ASSET } from "./data";

export function ServicesSection() {
  return (
    <section
      className="services"
      style={{
        backgroundImage: `url(${ASSET("white-textured-background.png")})`,
        backgroundPosition: "left top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="ls-section-inner">
        <h2 className="purple-text text-center section-title">Our Services</h2>
        <div className="ls-cards-row">
          {SERVICES.map((svc) => (
            <div key={svc.title} className="medical-group-item box-shadow">
              <div className="img">
                <img src={svc.image} alt={svc.title} />
              </div>
              <div className="details">
                <h4 className="purple-text">{svc.title}</h4>
                <ul className="purple-bullet-list">
                  {svc.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a href={svc.href} className="btn btn-purple">
                  Learn more
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
