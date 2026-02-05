import "./Testimonials.css"
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Ahmed Khan",
    role: "Food Blogger",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Highly Recommended Caters both for food and service point of view in Islamabad. Never disappointed their Management.",
  },
  {
    id: 2,
    name: "Fatima Malik",
    role: "Regular Customer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
    rating: 4,
    text: "The food was absolutely wonderful, from preparation to presentation, very pleasing. We especially enjoyed the Chicken Karahi.",
  },
  {
    id: 3,
    name: "Hassan Ali",
    role: "Corporate Client",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Perfect venue for our business dinners. The private dining area is elegant, and the Mutton Karahi never disappoints. Five-star service every time.",
  },
  {
    id: 4,
    name: "Ayesha Tariq",
    role: "Wedding Planner",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "I recommend Tandoori to all my clients for their wedding functions. The catering is impeccable, and the biryani is legendary!",
  },
  {
    id: 5,
    name: "Omar Siddiqui",
    role: "Food Critic",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "A rare gem that maintains quality across all branches. The Chinese fusion is surprisingly good, and the traditional BBQ is simply unmatched.",
  },
];

const stats = [
  { value: "15K+", label: "Happy Customers" },
  { value: "32+", label: "Years of Service" },
  { value: "4.7", label: "Average Rating" },
  { value: "11", label: "City Locations" },
];
  

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const visibleTestimonials = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % testimonials.length;
      items.push(testimonials[index]);
    }
    return items;
  };

  return (
    <section id="testimonials" className="testimonials-section">
    <div className="container">
      {/* Header */}
      <div className="header-container">
        <span className="section-label">Testimonials</span>
        <h2 className="section-title">What Our Guests Say</h2>
        <p className="section-description">
          Don't just take our word for it. Here's what our valued customers
          have to say about their dining experience at Tandoori.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div style={{ position: "relative" }}>
        <div className="testimonials-grid">
          {visibleTestimonials().map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`testimonial-card ${index === 1 ? "featured-card" : ""}`}
            >
              <Quote className="quote-icon" />
              <div className="star-rating">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="star-icon" />
                ))}
              </div>
              <p className="testimonial-text">"{testimonial.text}"</p>
              <div className="author-container">
                <img src={testimonial.image} alt={testimonial.name} className="author-image" />
                <div>
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-role">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="dots-container">
                {Array.from({ length: testimonials.length }).map((_, i) => (
                    <div 
                        key={i} 
                        className={`dot ${currentIndex === i ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(i)}
                    />
                ))}
            </div>
        
      </div>

      {/* Stats */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <div className="stat-value">{stat.value}</div>
            <div className="author-role">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Testimonials