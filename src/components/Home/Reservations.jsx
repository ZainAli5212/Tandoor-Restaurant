import { useState } from "react";
import { Calendar, Clock, Users, MapPin, Phone, Check } from "lucide-react";
import "./Reservations.css";

import { locations } from "../../data/locations";

const featuresList =[
                { icon: Calendar, title: "Easy Online Booking", description: "Book your table in seconds, anytime" },
                { icon: Users, title: "Private Dining Available", description: "Special arrangements for large groups" },
                { icon: Clock, title: "Flexible Timing", description: "Open 7 days a week, lunch & dinner" },
              ]

const timeSlots = [
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM",
  "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM",
  "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM"
];

const partySizes = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "10+"];

const branches = [
  { id: "main", name: "Downtown Main Street" },
  { id: "west", name: "Westside Waterfront" }
];

export const Reservations = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    branch: "",
    specialRequests: ""
  });

  const today = new Date().toISOString().split("T")[0];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reservation Data:", formData);
    setIsSubmitted(true);
  };

  return (
    <section id="reservations" className="reservation-section">
      <div className="container">
        <div className="reservation-grid">
          
          {/* Left Side - Info */}
          <div className="info-column">
            <span className="section-subtitle">Reservations</span>
            <h2 className="res-section-title">Book Your Table</h2>
            <p className="section-description">
              Reserve your spot for an unforgettable dining experience. Whether
              it's a romantic dinner, family gathering, or business meeting,
              we've got the perfect table for you.
            </p>

            <div className="features-list">
              {featuresList.map((feature, index) => (
                <div key={index} className="feature-item">
                  <div className="feature-icon-wrapper">
                    <feature.icon className="feature-icon" />
                  </div>
                  <div>
                    <h4 className="feature-title">{feature.title}</h4>
                    <p className="feature-text">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="event-card">
              <h4 className="event-card-title">Planning a Large Event?</h4>
              <p className="event-card-text">
                For parties of 15 or more, please call us directly.
              </p>
              <a href="tel:+924235781234" className="contact-link">
                <Phone size={18} /> (051) 2105566
              </a>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="form-card">
            {isSubmitted ? (
              <div className="success-message">
                <div className="success-icon-wrapper">
                  <Check className="success-icon" />
                </div>
                <h3 className="success-title">Reservation Confirmed!</h3>
                <p className="success-text">
                  We've sent a confirmation email to <strong>{formData.email}</strong>
                </p>
                <button onClick={() => setIsSubmitted(false)} className="submit-button" style={{marginTop: '20px'}}>
                  Make Another Reservation
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="reservation-form">
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Full Name *</label>
                    <input
                      name="name"
                      className="form-input"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Zain Ali"
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email *</label>
                    <input
                      name="email"
                      type="email"
                      className="form-input"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="zain@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Phone Number *</label>
                  <input
                    name="phone"
                    type="tel"
                    className="form-input"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+92 300 0000000"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label"><Calendar className="label-icon" /> Date *</label>
                    <input
                      name="date"
                      type="date"
                      className="form-input"
                      value={formData.date}
                      onChange={handleChange}
                      min={today}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label"><Clock className="label-icon" /> Time *</label>
                    <select name="time" className="form-select" value={formData.time} onChange={handleChange} required>
                      <option value="">Select time</option>
                      {timeSlots.map(t => <option key={t} value={t}>{t}</option>)}
                    </select>
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label"><Users className="label-icon" /> Party Size *</label>
                    <select name="guests" className="form-select" value={formData.guests} onChange={handleChange} required>
                      <option value="">Select guests</option>
                      {partySizes.map(s => <option key={s} value={s}>{s} {s === 1 ? 'Guest' : 'Guests'}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label"><MapPin className="label-icon" /> Branch *</label>
                    <select name="branch" className="form-select" value={formData.branch} onChange={handleChange} required>
                      <option value="">Select branch</option>
                      {locations.map(branch => <option key={branch.id} value={branch.id}>{branch.branchName}</option>)}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label">Special Requests</label>
                  <textarea
                    name="specialRequests"
                    className="form-textarea"
                    value={formData.specialRequests}
                    onChange={handleChange}
                    placeholder="Dietary requirements, etc."
                  />
                </div>

                <button type="submit" className="submit-button">
                  Confirm Reservation
                </button>

                <p className="form-footer-note">
                  Please arrive 10 minutes before your reservation time.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reservations;