import React, { useState } from 'react';
import styles from './AboutSection.module.css';

const AboutSection: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleVideoToggle = () => {
    setIsVideoOpen(!isVideoOpen);
  };

  return (
    <>
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
          <section className="video-section">
            <h2>How Do We Provide Electricity Service?</h2>
            <p>We are at your service for a correct repair.</p>
            <div className="video-wrapper">
              <img src="/images/video-thumbnail.jpg" alt="Video Thumbnail" />
              <button className="video-play-button" onClick={handleVideoToggle}>
                ▶
              </button>
            </div>
          </section>
          <section className="our-services">
            <h2>What Electrical Services Do We Offer?</h2>
            <p>We provide the most robust service with affordable budgets.</p>
            <div className="service-grid">
              <div className="service-item">
                <h3>Electrical Installation</h3>
                <p>
                  We carry out the maintenance, repair, and installation of
                  electrical systems safely and professionally.
                </p>
              </div>
              <div className="service-item">
                <h3>Electric Panels</h3>
                <p>
                  We install panel electrical systems in your home, workplace,
                  and old places in a correct and planned way.
                </p>
              </div>
              <div className="service-item">
                <h3>Electrical Repairs</h3>
                <p>
                  We provide professional electrical repair and services with
                  our highly trained and expert electricians.
                </p>
              </div>
              <div className="service-item">
                <h3>Indoor Lighting</h3>
                <p>
                  We build electricity interior lighting systems in the most
                  modern way for homes, offices, and gardens.
                </p>
              </div>
              <div className="service-item">
                <h3>Automation Systems</h3>
                <p>
                  We reduce your workload by integrating professional
                  automation systems in all electrical works.
                </p>
              </div>
              <div className="service-item">
                <h3>Security Systems</h3>
                <p>
                  The most important detail of the security system is the safe
                  use of electrical systems configured correctly.
                </p>
              </div>
              <div className="service-item">
                <h3>Garden Lighting</h3>
                <p>
                  We build electricity interior lighting systems for modern
                  homes, offices, and gardens.
                </p>
              </div>
              <div className="service-item">
                <h3>Panel Assembly</h3>
                <p>
                  We provide professional panel assembly and services with
                  highly trained expert electricians.
                </p>
              </div>
            </div>
          </section>
          <section className="testimonials">
            <h2>What Are Our Customers Saying?</h2>
            <div className="testimonial-slider">
              <div className="testimonial">
                <p>“It is a fast and reliable electricity company. They fixed the problem in our apartment in a short time. Excellent service.”</p>
                <p>- Adam</p>
              </div>
              <div className="testimonial">
                <p>“We could not find a solution to the general electrical problem in our office. They were helpful just in time. Thanks.”</p>
                <p>- Cristian</p>
              </div>
              <div className="testimonial">
                <p>“It is a friendly and professional electrical company. We were very satisfied with the electrical service in our building.”</p>
                <p>- Robert</p>
              </div>
              <div className="testimonial">
                <p>“An amazing team that does their job meticulously in a safe manner. They fixed our electrical fault in a short time.”</p>
                <p>- Ryan</p>
              </div>
            </div>
          </section>
        </div>
      </section>
      {isVideoOpen && (
        <div className="video-popup" onClick={handleVideoToggle}>
          <div className="video-popup-content">
            <iframe
              src="https://www.youtube.com/embed/example-video"
              title="Elektra Video"
              allow="autoplay; fullscreen"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Customer Service</h3>
            <p>📞 +123 456 78 90 01</p>
            <p>📧 example@example.com</p>
          </div>
          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li>Electrical Installation</li>
              <li>Indoor Lighting</li>
              <li>Electric Panels</li>
              <li>Electrical Repairs</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>Appointment</li>
              <li>Services</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Visit Us</h3>
            <p>New Jersey, USA</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2024 Elektra - All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default AboutSection;
