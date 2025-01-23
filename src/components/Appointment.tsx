// File path: src/components/Appointment.tsx

import React from 'react';
import styles from './Appointment.module.css';

const Appointment = () => {
  return (
    <section className={styles.appointmentSection}>
      {/* Hero Section */}
      <div className={styles.heroHeader}>
        <h1>Appointment</h1>
        <p className={styles.breadcrumb}>Home &gt; Appointment</p>
      </div>

      {/* Appointment Form Section */}
      <div className={styles.formSection}>
        <h2>Schedule Your Service</h2>
        <form className={styles.appointmentForm}>
          <select aria-label="Home Or Business?">
            <option value="" disabled selected>
              Home Or Business?
            </option>
            <option value="home">Home</option>
            <option value="business">Business</option>
          </select>
          <select aria-label="Service Type">
            <option value="" disabled selected>
              Service Type
            </option>
            <option value="installation">Installation</option>
            <option value="repair">Repair</option>
            <option value="maintenance">Maintenance</option>
          </select>
          <input type="date" aria-label="Preferred Date" />
          <input type="text" placeholder="Full Name" aria-label="Full Name" />
          <input type="email" placeholder="Email Address" aria-label="Email Address" />
          <input type="tel" placeholder="Phone Number" aria-label="Phone Number" />
          <button type="submit" className={styles.submitButton}>Make Appointment →</button>
        </form>
      </div>

      {/* Contact Section */}
      <div className={styles.contactSection}>
        <h2>Contact Us</h2>
        <p>📞 +123 456 78 90 01</p>
        <p>📧 example@example.com</p>
        <p>📍 New Jersey, USA</p>
      </div>

      {/* Footer Section */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div>
            <h3>Customer Service</h3>
            <p>📞 +123 456 78 90 01</p>
          </div>
          <div>
            <h3>Information and Complaint</h3>
            <p>📧 example@example.com</p>
          </div>
          <div>
            <h3>Visit Us</h3>
            <p>📍 New Jersey, USA</p>
          </div>
        </div>
        <p>© 2024 Elektra - All Rights Reserved.</p>
      </footer>
    </section>
  );
};

export default Appointment;
