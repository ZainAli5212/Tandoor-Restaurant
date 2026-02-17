import "./FranchisingHero.css"

import React, { useState } from 'react';

import { TrendingUp, ShieldCheck, Briefcase, Check, DollarSign, MapPin, Phone } from 'lucide-react';




const featuresList = [
  {
    icon: TrendingUp,
    title: "Proven Business Model",
    description: "High ROI with a battle-tested operational framework."
  },
  {
    icon: ShieldCheck,
    title: "Brand Recognition",
    description: "Join an established name that customers already trust."
  },
  {
    icon: Briefcase,
    title: "Supply Chain Support",
    description: "Access to exclusive vendors and bulk pricing power."
  },
];

const FranchisingHero = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    targetCity: "",
    investment: "",
    experience: "",
    background: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Franchise Application Data:", formData);
    setIsSubmitted(true);
  };

  return (
    <div>
      <div className='franchise-hero-wrapper' style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8),rgba(0, 0, 0, 0.6)) , url(./franchising.jpg)`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        minHeight: "100vh",
        width: "100%",
      }}>
        <section id="reservations" className="franchise-content-section">
          <div className="franchise-container">
            <div className="franchise-grid-layout">

              {/* Left Side - Info */}
              <div className="franchise-info-column">
                <span className="franchise-subtitle">We'd love to hear from you</span>
                <h2 className="franchise-title">Get A Franchise</h2>
                <p className="franchise-description">
                  “Chase the vision; pursue the courage” <br /> 
                  Just one great partnership in a right business can have an incredible impact on your business success.
                </p>

                <div className="franchise-features-wrapper">
                  {featuresList.map((feature, index) => (
                    <div key={index} className="franchise-feature-card">
                      <div className="franchise-icon-box">
                        <feature.icon className="franchise-icon" />
                      </div>
                      <div>
                        <h4 className="franchise-feature-heading">{feature.title}</h4>
                        <p className="franchise-feature-desc">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="franchise-contact-card">
                  <h4 className="franchise-contact-title">Direct Franchise Inquiry</h4>
                  <p className="franchise-contact-text">
                    Interested in multi-unit opportunities or have urgent questions?
                    Speak with our development team.
                  </p>
                  <a href="tel:0512105566" className="franchise-phone-link">
                    <Phone size={18} /> (051) 2105566
                  </a>
                </div>
              </div>

              {/* Right Side - Form */}
              <div className="franchise-form-wrapper">
                {isSubmitted ? (
                  <div className="franchise-success-state">
                    <div className="franchise-success-icon-box">
                      <Check className="franchise-success-icon" />
                    </div>
                    <h3 className="franchise-success-title">Application Received!</h3>
                    <p className="franchise-success-text">
                      Our franchise development team will review your profile and contact you at <strong>{formData.email}</strong> within 2-3 business days.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="franchise-submit-btn"
                      style={{ marginTop: '20px' }}
                    >
                      Submit Another Application
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="franchise-application-form">
                    <div className="franchise-form-row">
                      <div className="franchise-input-group">
                        <label className="franchise-label">Full Name *</label>
                        <input
                          name="name"
                          className="franchise-input-field"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Zain Ali"
                          required
                        />
                      </div>
                      <div className="franchise-input-group">
                        <label className="franchise-label">Email *</label>
                        <input
                          name="email"
                          type="email"
                          className="franchise-input-field"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="zain@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="franchise-form-row">
                      <div className="franchise-input-group">
                        <label className="franchise-label">Phone Number *</label>
                        <input
                          name="phone"
                          type="tel"
                          className="franchise-input-field"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+92 300 0000000"
                          required
                        />
                      </div>
                      <div className="franchise-input-group">
                        <label className="franchise-label"><MapPin className="franchise-label-icon" /> Target City/Area *</label>
                        <input
                          name="targetCity"
                          className="franchise-input-field"
                          value={formData.targetCity}
                          onChange={handleChange}
                          placeholder="e.g. Islamabad, F-7"
                          required
                        />
                      </div>
                    </div>

                    <div className="franchise-form-row">
                      <div className="franchise-input-group">
                        <label className="franchise-label"><DollarSign className="franchise-label-icon" /> Investment Capacity *</label>
                        <select name="investment" className="franchise-select-field" value={formData.investment} onChange={handleChange} required>
                          <option value="">Select Range</option>
                          <option value="5m-10m">5M - 10M PKR</option>
                          <option value="10m-20m">10M - 20M PKR</option>
                          <option value="20m+">20M+ PKR</option>
                        </select>
                      </div>
                      <div className="franchise-input-group">
                        <label className="franchise-label"><Briefcase className="franchise-label-icon" /> Business Experience *</label>
                        <select name="experience" className="franchise-select-field" value={formData.experience} onChange={handleChange} required>
                          <option value="">Select Experience</option>
                          <option value="none">No Prior Experience</option>
                          <option value="food">Food & Beverage Industry</option>
                          <option value="retail">Retail Management</option>
                          <option value="other">Other Business Owner</option>
                        </select>
                      </div>
                    </div>

                    <div className="franchise-input-group">
                      <label className="franchise-label">Professional Background & Goals</label>
                      <textarea
                        name="background"
                        className="franchise-textarea"
                        value={formData.background}
                        onChange={handleChange}
                        placeholder="Tell us a bit about your professional background."
                      />
                    </div>

                    <button type="submit" className="franchise-submit-btn">
                      Submit Franchise Application
                    </button>

                    <p className="franchise-form-footer-note">
                      By submitting, you agree to our initial vetting process.
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FranchisingHero;