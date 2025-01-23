// File path: src/components/AllServices.tsx

import React, { useState } from 'react';
import styles from './AllServices.module.css';

// Subcomponents for modularity
const HeroSection = () => (
  <div className={styles.heroHeader}>
    <h1>All Our Services</h1>
    <p>Explore the wide range of services we provide to meet your needs.</p>
    <button className={styles.ctaButton}>Learn More</button>
  </div>
);

const VideoSection = ({ openVideoPopup }: { openVideoPopup: () => void }) => (
  <div className={styles.videoSection}>
    <div className={styles.videoWrapper} onClick={openVideoPopup}>
      <img src="/images/service-video-thumbnail.jpg" alt="Service Overview Video" />
      <button className={styles.videoPlayButton}>▶</button>
    </div>
    <p>Watch our video to learn more about our exceptional services.</p>
  </div>
);

const ServicesGrid = () => (
  <div className={styles.servicesList}>
    <h2>Core Services</h2>
    <div className={styles.servicesGrid}>
      {Array(6).fill(null).map((_, index) => (
        <div className={styles.serviceItem} key={index}>
          <h3>Service {index + 1}</h3>
          <p>High-quality and professional service tailored to your needs.</p>
        </div>
      ))}
    </div>
  </div>
);

const TestimonialsSection = () => (
  <div className={styles.testimonialsSection}>
    <h2>What Our Clients Say</h2>
    <div className={styles.testimonialsGrid}>
      <div className={styles.testimonial}>
        <p>"Fantastic service and attention to detail!"</p>
        <span>- Client A</span>
      </div>
      <div className={styles.testimonial}>
        <p>"Highly professional team and excellent results."</p>
        <span>- Client B</span>
      </div>
    </div>
  </div>
);

const FAQSection = () => (
  <div className={styles.faqSection}>
    <h2>Frequently Asked Questions</h2>
    <div className={styles.faqList}>
      <div className={styles.faqItem}>
        <h3>What services do you offer?</h3>
        <p>We provide a comprehensive range of professional services tailored to various needs.</p>
      </div>
      <div className={styles.faqItem}>
        <h3>How can I contact you?</h3>
        <p>You can reach us through the contact form below or via email at info@example.com.</p>
      </div>
    </div>
  </div>
);

const FooterSection = () => (
  <footer className={styles.footer}>
    <div className={styles.footerContent}>
      <div>
        <h3>Contact Us</h3>
        <p>123-456-7890</p>
        <p>info@example.com</p>
      </div>
      <div>
        <h3>Follow Us</h3>
        <ul className={styles.socialLinks}>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">LinkedIn</a></li>
        </ul>
      </div>
    </div>
    <p className={styles.footerBottom}>© 2025 Your Company. All rights reserved.</p>
  </footer>
);

const AllServices = () => {
  const [videoPopup, setVideoPopup] = useState(false);

  const openVideoPopup = () => {
    setVideoPopup(true);
  };

  const closeVideoPopup = () => {
    setVideoPopup(false);
  };

  return (
    <section className={styles.allServicesSection}>
      <HeroSection />
      <VideoSection openVideoPopup={openVideoPopup} />

      {videoPopup && (
        <div className={styles.videoPopup}>
          <div className={styles.videoPopupContent}>
            <button className={styles.closeButton} onClick={closeVideoPopup}>X</button>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/example-video"
              title="Service Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      <ServicesGrid />
      <TestimonialsSection />
      <FAQSection />
      <FooterSection />
    </section>
  );
};

export default AllServices;
