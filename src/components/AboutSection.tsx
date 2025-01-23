// File path: src/components/AboutSection.tsx

import React from "react";
import "./AboutSection.module.css";

const AboutSection: React.FC = () => {
  return (
    <section className="about-section">
      <header className="hero-header">
        <div className="hero-content">
          <h1>Welcome to Elektra</h1>
          <p>Your trusted partner for professional electrical services.</p>
        </div>
      </header>
      <div className="container">
        <section className="about-details">
          <h2>Who We Are</h2>
          <p>
            At Elektra, our highly skilled electricians are dedicated to
            providing exceptional service. Whether it’s residential, commercial,
            or industrial electrical solutions, we ensure safety, reliability,
            and efficiency in every project.
          </p>
          <p>
            With years of industry experience, we are committed to exceeding
            customer expectations by offering top-notch services at competitive
            prices.
          </p>
        </section>
        <section className="our-services">
          <h2>Our Services</h2>
          <div className="service-item">
            <h3>Residential Electrical Services</h3>
            <p>
              We provide comprehensive residential electrical services to ensure
              your home is safe and energy-efficient.
            </p>
          </div>
          <div className="service-item">
            <h3>Commercial Electrical Solutions</h3>
            <p>
              Our team specializes in delivering tailored electrical solutions
              for businesses, ensuring minimal downtime.
            </p>
          </div>
          <div className="service-item">
            <h3>Industrial Installations</h3>
            <p>
              From heavy machinery setups to system upgrades, we handle
              industrial installations with precision.
            </p>
          </div>
        </section>
        <section className="safety-promise">
          <h2>Our Safety Promise</h2>
          <p>
            At Elektra, safety is our top priority. Our electricians are trained
            to adhere to the highest safety standards to protect both your property
            and our workers. We continuously update our practices to comply with
            the latest safety regulations.
          </p>
        </section>
        <section className="sustainability">
          <h2>Commitment to Sustainability</h2>
          <p>
            Elektra is dedicated to environmental responsibility. We utilize
            energy-efficient practices and advocate for sustainable solutions
            in every project we undertake. Our goal is to minimize environmental
            impact while delivering excellent results.
          </p>
        </section>
        <section className="testimonials">
          <h2>What Our Clients Say</h2>
          <div className="testimonial">
            <blockquote>
              "Elektra transformed our office’s electrical system flawlessly. Their team was professional and thorough."
            </blockquote>
            <p>- Sarah J., Business Owner</p>
          </div>
          <div className="testimonial">
            <blockquote>
              "Their expertise and commitment to safety gave us peace of mind. Highly recommend Elektra!"
            </blockquote>
            <p>- Mike R., Homeowner</p>
          </div>
        </section>
        <section className="faq">
          <h2>Frequently Asked Questions</h2>
          <div className="faq-item">
            <h3>What services do you offer?</h3>
            <p>We provide a wide range of electrical solutions, including residential, commercial, and industrial services.</p>
          </div>
          <div className="faq-item">
            <h3>Are your electricians licensed?</h3>
            <p>Yes, all our electricians are fully licensed and highly experienced in their field.</p>
          </div>
          <div className="faq-item">
            <h3>How can I get a quote?</h3>
            <p>You can contact us through our website or call us directly to discuss your requirements and get a free quote.</p>
          </div>
        </section>
        <section className="gallery">
          <h2>Gallery</h2>
          <div className="gallery-grid">
            <img src="/images/gallery-1.jpg" alt="Project 1" />
            <img src="/images/gallery-2.jpg" alt="Project 2" />
            <img src="/images/gallery-3.jpg" alt="Project 3" />
            <img src="/images/gallery-4.jpg" alt="Project 4" />
          </div>
        </section>
        <section className="call-to-action">
          <h2>Ready to Work with Us?</h2>
          <p>Contact us today to discuss your electrical needs and let our experts help you!</p>
          <button className="cta-button">Contact Us</button>
        </section>
      </div>
    </section>
  );
};

export default AboutSection;
