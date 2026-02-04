import React from "react";
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import "./Footer.css";

import { NavLink } from "react-router-dom";

export const Footer = () => {
    return (
        <footer id="about" className="footer">
            {/* Main Footer Content */}
            <div className="footer-container">
                <div className="footer-grid">

                    {/* Brand & Socials */}
                    <div className="footer-brand">
                        <div className="brand-logo-area">
                            <div className="logo-circle">
                                <span className="logo-text">T</span>
                            </div>
                            <span className="brand-name">Tandoori</span>
                        </div>
                        <p className="brand-description">
                            Serving authentic flavors since 1993. Our recipes are passed down
                            through generations, bringing the true taste of tradition to your
                            table.
                        </p>
                        <div className="social-links">
                            <a href="https://www.facebook.com/tandoorirestaurants" className="social-icon" > <Facebook size={18} /> </a>
                            <a href="https://www.instagram.com/tandoorirestaurants" className="social-icon" > <Instagram size={18} /> </a>
                            <a href="#" className="social-icon" > <Linkedin size={18} /> </a>



                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-links">
                        <h4 className="footer-heading">Quick Links</h4>
                        <ul className="links-list">

                            <li><NavLink to="/" className="footer-link">Home</NavLink></li>
                            <li><NavLink to="/about" className="footer-link">About</NavLink></li>
                            <li><NavLink to="/Menu" className="footer-link">Menu</NavLink></li>
                            <li><NavLink to="/locations" className="footer-link">Locations</NavLink></li>
                            <li><NavLink to="/gallery" className="footer-link">Gallery</NavLink></li>
                            <li><NavLink to="/tandoori-catering" className="footer-link">Tandoori Catering</NavLink></li>
                            <li><NavLink to="/franchising" className="footer-link">Franchising</NavLink></li>

                            
                          
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="footer-contact">
                        <h4 className="footer-heading">Contact Us</h4>
                        <ul className="contact-list">
                            <li className="contact-item">
                                <Phone size={18} className="contact-icon" />
                                <div>
                                    <p className="contact-label">Reservations</p>
                                    <p className="contact-value">(051) 2105566</p>
                                </div>
                            </li>
                            <li className="contact-item">
                                <Mail size={18} className="contact-icon" />
                                <div>
                                    <p className="contact-label">Email</p>
                                    <p className="contact-value">info@tandoori.pk</p>
                                </div>
                            </li>
                            <li className="contact-item">
                                <MapPin size={18} className="contact-icon" />
                                <div>
                                    <p className="contact-label">Head Office</p>
                                    <p className="contact-value">G-8, Islamabad</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="footer-newsletter">
                        <h4 className="footer-heading">Stay Updated</h4>
                        <p className="newsletter-text">Subscribe for exclusive offers and updates.</p>
                        <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Your email"
                                className="newsletter-input"
                                required
                            />
                            <button type="submit" className="newsletter-button">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Bottom Copyright Bar */}
            <div className="footer-bottom">
                <div className="footer-container bottom-flex">
                    <p>© 2026 Tandoori Restaurants. All rights reserved.</p>
                    <div className="legal-links">
                        <a href="#" className="legal-link">Privacy Policy</a>
                        <a href="#" className="legal-link">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;