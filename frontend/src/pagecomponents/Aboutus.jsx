import React from "react";
import "./aboutus.css"; // Optional: Add CSS for styling

function AboutUs() {
  const testimonials = [
    {
      name: "John Doe",
      role: "Web Developer",
      feedback:
        "This platform has revolutionized the way I find information! The interface is intuitive, and the data is always accurate.",
      image: "https://via.placeholder.com/100", // Placeholder image
    },
    {
      name: "Jane Smith",
      role: "Freelancer",
      feedback:
        "I love using this site. It’s fast, reliable, and has been a game-changer for managing my tasks.",
      image: "https://via.placeholder.com/100", // Placeholder image
    },
    {
      name: "Alice Johnson",
      role: "Entrepreneur",
      feedback:
        "An amazing experience! The attention to detail and user-centric design make it a must-have for anyone.",
      image: "https://via.placeholder.com/100", // Placeholder image
    },
  ];

  return (
    <div className="about-us">
      {/* About Us Section */}
      <section className="about-section">
        <h1>About Us</h1>
        <p>
          Welcome to <strong>Money Mastey</strong>, your ultimate destination for 
          [purpose of your website, e.g., "real-time updates, seamless interactions, 
          and powerful tools to help you achieve your goals."]. 
          Our mission is to provide exceptional service and innovative solutions 
          tailored to meet the diverse needs of our users.
        </p>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Users Say</h2>
        <div className="testimonials">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial">
              <img
                src={testimonial.image}
                alt={`${testimonial.name}'s avatar`}
                className="testimonial-image"
              />
              <h3>{testimonial.name}</h3>
              <p className="testimonial-role">{testimonial.role}</p>
              <p className="testimonial-feedback">"{testimonial.feedback}"</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default AboutUs;