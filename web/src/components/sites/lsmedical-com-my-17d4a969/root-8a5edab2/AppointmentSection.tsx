"use client";

import { APPOINTMENT_OUTLETS, APPOINTMENT_TIMES } from "./data";

export function AppointmentSection() {
  return (
    <section className="appointment-form">
      <div className="appointment-inner">
        <div className="heading">Book An Appointment With Us</div>
        <div className="form-appointment">
          <form
            onSubmit={(e) => e.preventDefault()}
            noValidate
          >
            <div className="row">
              <div className="col span_4">
                <div className="field-set">
                  <select className="form-control" defaultValue="" required>
                    <option value="" disabled>
                      Services
                    </option>
                    <option value="Aesthetic Clinic">Aesthetic Clinic</option>
                    <option value="Dental Clinic">Dental Clinic</option>
                    <option value="Family Clinic">Family Clinic</option>
                  </select>
                </div>
              </div>
              <div className="col span_4">
                <div className="field-set">
                  <select className="form-control" defaultValue="" required>
                    <option value="" disabled>
                      Outlet
                    </option>
                    <option value="" disabled>
                      ---LS Aesthetic---
                    </option>
                    {APPOINTMENT_OUTLETS.aesthetic.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                    <option value="" disabled>
                      ----LS Dental----
                    </option>
                    {APPOINTMENT_OUTLETS.dental.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                    <option value="" disabled>
                      ---LS Family---
                    </option>
                    {APPOINTMENT_OUTLETS.family.map((o) => (
                      <option key={o} value={o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col span_4" />
            </div>

            <div className="row">
              <div className="col span_4">
                <div className="field-set">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Name"
                    required
                  />
                </div>
              </div>
              <div className="col span_4">
                <div className="field-set">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Contact Number"
                    required
                  />
                </div>
              </div>
              <div className="col span_4">
                <div className="field-set">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email Address"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col span_4">
                <div className="field-set">
                  <input
                    type="date"
                    className="form-control"
                    placeholder="Appointment Date"
                    required
                  />
                </div>
              </div>
              <div className="col span_4">
                <div className="field-set">
                  <select className="form-control" defaultValue="" required>
                    <option value="" disabled>
                      Time
                    </option>
                    {APPOINTMENT_TIMES.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="col span_4" />
            </div>

            <div className="row">
              <div className="col span_12">
                <div className="field-set">
                  <textarea
                    rows={3}
                    className="form-control"
                    placeholder="Additional note"
                  />
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col span_12 text-center">
                <button className="btn btn-purple" type="submit">
                  Send Inquiry
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
