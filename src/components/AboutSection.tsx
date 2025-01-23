import React, { useState } from 'react';
import styles from './AboutSection.module.css';

const AboutSection: React.FC = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const handleVideoToggle = () => {
    setIsVideoOpen(!isVideoOpen);
  };

  return (
    <section className={styles.aboutSection}>
      <div className={styles.heroHeader}>
        <h1>About Us</h1>
        <p>Home &gt; About Us</p>
      </div>

      <div className={styles.content}>
        <p>
          Welcome to Elektra! We have 30+ years of authorized experience in the electrical services
          industry. Our team offers the best solutions with knowledge, expertise, and commitment to
          quality.
        </p>
        <button onClick={handleVideoToggle} className={styles.videoButton}>
          Watch Our Video
        </button>
      </div>

      {isVideoOpen && (
        <div className={styles.videoPopup}>
          <div className={styles.videoContent}>
            <button onClick={handleVideoToggle} className={styles.closeButton}>
              Close
            </button>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/example-video"
              title="About Elektra Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </section>
  );
};

export default AboutSection;
