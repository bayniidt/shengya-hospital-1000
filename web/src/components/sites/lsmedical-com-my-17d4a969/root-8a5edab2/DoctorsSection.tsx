"use client";

import { useState } from "react";
import { DOCTORS, ASSET, type Doctor } from "./data";

function FacebookIcon() {
  return (
    <svg viewBox="0 0 320 512" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M80 299.3V512h116V299.3h86.5l18-97.8H196v-42.2c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4.4 37.1 1.3V7.1C291.3 4.4 271.4 0 245 0 160.6 0 116 33.2 116 89.2v112.3H32v97.8h48z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 448 512" width="16" height="16" fill="currentColor" aria-hidden="true">
      <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.7V148.9h89v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
    </svg>
  );
}

export function DoctorsSection() {
  const [active, setActive] = useState<Doctor | null>(null);

  return (
    <section
      className="doctors"
      style={{
        backgroundImage: `url(${ASSET("our-doctor-section-bg.jpg")})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundColor: "rgb(81, 47, 134)",
      }}
    >
      <div className="ls-section-inner">
        <h2 className="white-text text-center section-title">Our Doctors</h2>
        <p className="white-text text-center" style={{ maxWidth: 750, margin: "0 auto" }}>
          MEET OUR SPECIALIST
        </p>

        {DOCTORS.map((group) => (
          <div key={group.category}>
            <div className="doctor-separator">
              <span className="doctor-separator__line" />
              <h4>{group.category}</h4>
              <span className="doctor-separator__line" />
            </div>
            <div className="doctor-group">
              {group.doctors.map((doc) => (
                <div
                  key={doc.name}
                  className="doctor-item"
                  onClick={() => setActive(doc)}
                >
                  <div className="doctor-item-profile">
                    <div className="img">
                      <img src={doc.profileImage} alt={doc.name} />
                    </div>
                    <h4 className="name">{doc.name}</h4>
                    <p className="desc">{doc.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {active && (
        <>
          <div className="doctor-modal-overlay" onClick={() => setActive(null)} />
          <div className="doctor-modal" role="dialog" aria-modal="true">
            <div className="doctor-modal__header">
              <button
                className="doctor-modal__close"
                onClick={() => setActive(null)}
                aria-label="Close"
              >
                ✕
              </button>
            </div>
            <div className="doctor-modal__body">
              <div className="img">
                <img src={active.modalImage} alt={active.name} />
              </div>
              <div className="doctor-modal__info">
                <h4 className="name">{active.name}</h4>
                <p>{active.role}</p>
                <div className="doctor-modal__social">
                  <a href="#" aria-label="Facebook">
                    <FacebookIcon />
                  </a>
                  <a href="#" aria-label="LinkedIn">
                    <LinkedInIcon />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
