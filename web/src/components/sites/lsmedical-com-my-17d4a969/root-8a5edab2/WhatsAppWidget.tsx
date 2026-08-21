"use client";

import { useState } from "react";

const CONTACTS = [
  { name: "LS Aesthetic", duty: "LS Aesthetic", phone: "60128082568" },
  { name: "LS Dental", duty: "LS Dental", phone: "601111002568" },
  { name: "LS Family", duty: "LS Family", phone: "60169412568" },
];

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 32 32" width="20" height="20" fill="currentColor" aria-hidden="true">
      <path d="M16.004 3C8.832 3 3 8.83 3 16c0 2.29.6 4.52 1.74 6.49L3 29l6.69-1.72A13 13 0 0 0 16.004 29C23.17 29 29 23.17 29 16S23.17 3 16.004 3zm0 23.6c-2.08 0-4.11-.56-5.88-1.61l-.42-.25-4.34 1.12 1.16-4.22-.27-.42A10.4 10.4 0 0 1 5.6 16c0-5.73 4.67-10.4 10.4-10.4S26.4 10.27 26.4 16 21.74 26.6 16.004 26.6zm5.7-7.79c-.31-.16-1.85-.91-2.14-1.02-.29-.1-.5-.16-.71.16-.21.31-.81 1.02-1 1.23-.18.21-.37.23-.68.08-.31-.16-1.32-.49-2.51-1.55-.93-.83-1.56-1.85-1.74-2.16-.18-.31-.02-.48.14-.63.14-.14.31-.37.47-.55.16-.19.21-.32.31-.53.1-.21.05-.39-.03-.55-.08-.16-.71-1.71-.97-2.34-.26-.61-.52-.53-.71-.54l-.6-.01c-.21 0-.55.08-.84.39-.29.31-1.1 1.08-1.1 2.63s1.13 3.05 1.29 3.26c.16.21 2.22 3.39 5.38 4.75.75.32 1.34.52 1.8.66.76.24 1.44.21 1.99.13.61-.09 1.85-.76 2.11-1.49.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.6-.37z" />
    </svg>
  );
}

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="wa-widget">
      {open && (
        <div className="wa-widget__panel">
          <div className="wa-widget__panel-head">
            <h4>Start a Conversation</h4>
            <p>
              Hi! Click one of our member below to chat on{" "}
              <strong>Whatsapp</strong>
            </p>
          </div>
          <div className="wa-widget__notice">
            The team typically replies in a few minutes.
          </div>
          <div className="wa-widget__list">
            {CONTACTS.map((c) => (
              <a
                key={c.name}
                className="wa-widget__item"
                href={`https://web.whatsapp.com/send?phone=${c.phone}`}
                target="_blank"
                rel="noreferrer"
              >
                <div className="wa-widget__avatar">
                  <WhatsAppIcon />
                </div>
                <div>
                  <div className="wa-widget__name">{c.name}</div>
                  <div className="wa-widget__duty">{c.duty}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
      <button
        className="wa-widget__btn"
        onClick={() => setOpen((v) => !v)}
        aria-label="Chat with us on WhatsApp"
        aria-expanded={open}
      >
        <span className="wa-icon">
          <WhatsAppIcon />
        </span>
        {!open && (
          <span>
            Need Help? <strong>Chat with us</strong>
          </span>
        )}
      </button>
    </div>
  );
}
