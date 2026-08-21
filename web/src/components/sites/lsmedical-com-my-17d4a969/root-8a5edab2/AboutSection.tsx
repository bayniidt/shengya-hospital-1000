import { DEPARTMENTS, ASSET } from "./data";

export function AboutSection() {
  return (
    <section
      className="ls-about"
      style={{
        backgroundImage: `url(${ASSET("our-services-section-bg-1.jpg")})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="ls-section-inner">
        <h2 className="purple-text section-title text-center">LS Medical Group</h2>
        <p className="text-center smaller-width-2 fs-18">
          LS Medical Group is a medical center founded by Dr. Neik Hiong Lee. It
          has three departments: LS Aesthetic, LS Family (a family clinic), and
          LS Dental. The center is located in Malaysia and has won the Golden
          Eagle Award in 2022
        </p>
        <div className="ls-cards-row ls-cards-row--lifted">
          {DEPARTMENTS.map((dept) => (
            <a key={dept.title} href={dept.href} className="medical-group-item box-shadow">
              <div className="img">
                <img src={dept.image} alt={dept.title} />
              </div>
              <div className="details">
                <h4 className="purple-text">{dept.title}</h4>
                <p>{dept.description}</p>
                <span className="btn btn-purple">Learn more</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
