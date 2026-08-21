"use client";

import { useState } from "react";
import { CLINICS, ASSET } from "./data";

function MapPinIcon() {
  return (
    <svg viewBox="0 0 384 512" fill="currentColor" aria-hidden="true">
      <path d="M172.3 501.7C27 291 0 269.4 0 192 0 86 86 0 192 0s192 86 192 192c0 77.4-27 99-172.3 309.7-9.5 13.8-29.9 13.8-39.4 0zM192 272a80 80 0 1 0 0-160 80 80 0 0 0 0 160z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
      <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64c0 247.4 200.6 448 448 448 18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368c-70.4-33.3-127.4-90.3-160.7-160.7l49.3-40.3c13.7-11.1 18.4-30 11.6-46.3l-40-96z" />
    </svg>
  );
}

function GlobeIcon() {
  return (
    <svg viewBox="0 0 512 512" fill="currentColor" aria-hidden="true">
      <path d="M256 48a208 208 0 1 0 0 416 208 208 0 0 0 0-416zm0 464a256 256 0 1 1 0-512 256 256 0 0 1 0 512zm-29-445.5c-25.6 28.4-44.4 65.5-54.4 107.5h108.8c-10-42-28.8-79.1-54.4-107.5zM169.7 174c-1.7-10.4-2.9-21-3.5-32h-63.9c-3.6 20.8-5.3 42.4-5.3 64.5 0 22.1 1.7 43.7 5.3 64.5h63.9c.6-11 1.8-21.6 3.5-32 2.2-12.8 5-25.2 8.4-37.2-3.4-12-6.2-24.4-8.4-37.2zm0 96c2.2 12.8 5 25.2 8.4 37.2 3.4 12 6.2 24.4 8.4 37.2 1.7 10.4 2.9 21 3.5 32h63.9c-3.6-20.8-5.3-42.4-5.3-64.5 0-22.1 1.7-43.7 5.3-64.5h-63.9c-.6 11-1.8 21.6-3.5 32-2.2 12.8-5 25.2-8.4 37.2zm0-96c2.2-12.8 5-25.2 8.4-37.2 3.4-12 6.2-24.4 8.4-37.2 1.7-10.4 2.9-21 3.5-32h-63.9c3.6 20.8 5.3 42.4 5.3 64.5 0 22.1-1.7 43.7-5.3 64.5h63.9c.6-11 1.8-21.6 3.5-32zm0 0" />
    </svg>
  );
}

export function ClinicsSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="clinics" style={{ backgroundColor: "#f3f1f5" }}>
      <div className="ls-section-inner our-clinics-inner">
        <h2 className="purple-text text-center section-title">Our Clinics</h2>
        <p className="text-center" style={{ maxWidth: 750, margin: "0 auto" }}>
          Here below are the clinics of LS Aesthetic, LS Family and LS Dental.
          Browse for the clinic of your choice and experience the quality
          medical services that LS Medical Group offers.
        </p>
        <ul id="tabs">
          {CLINICS.map((group, i) => (
            <li key={group.tab}>
              <a
                className={i === activeTab ? "" : "inactive"}
                onClick={() => setActiveTab(i)}
              >
                {group.tab}
              </a>
            </li>
          ))}
        </ul>

        {CLINICS.map((group, i) => (
          <div
            key={group.tab}
            className="tab-panel"
            style={{ display: i === activeTab ? "block" : "none" }}
          >
            {group.clinics.map((clinic) => (
              <div key={clinic.name} className="clinic-item box-shadow">
                <div className="img">
                  <img src={clinic.image} alt={clinic.name} />
                </div>
                <div className="details">
                  <h4 className="purple-text">{clinic.name}</h4>
                  <ul>
                    <li className="briefcase">{clinic.company}</li>
                    <li className="address">
                      <MapPinIcon />
                      {clinic.address}
                    </li>
                    <li className="phone">
                      <PhoneIcon />
                      <a href={clinic.phoneHref}>{clinic.phone}</a>
                    </li>
                    {clinic.website && (
                      <li className="website">
                        <GlobeIcon />
                        <a href={clinic.website} target="_blank" rel="noreferrer">
                          {clinic.website}
                        </a>
                      </li>
                    )}
                  </ul>
                </div>
                <div className="actions">
                  <a href={clinic.mapsUrl} target="_blank" rel="noreferrer">
                    <img src={ASSET("ico-google-map.png")} alt="View on map" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
