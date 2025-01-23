// File path: src/components/Appointment.tsx

import React from 'react';
import styles from './Appointment.module.css';

const Appointment = () => {
  return (
    <section className={styles.appointmentSection}>
      {/* Hero Section */}
      <div className={styles.heroHeader}>
        <h1>Book Your Appointment</h1>
        <p>Fill out the form below to schedule your service appointment today!</p>
      </div>

      {/* Appointment Form Section */}
      <div className={styles.formSection}>
        <h2>Schedule Your Service</h2>
        <form className={styles.appointmentForm}>
          <input type="text" placeholder="Full Name" aria-label="Full Name" />
          <input type="email" placeholder="Email Address" aria-label="Email Address" />
          <input type="tel" placeholder="Phone Number" aria-label="Phone Number" />
          <input type="date" aria-label="Preferred Date" />
          <textarea placeholder="Additional Notes" aria-label="Additional Notes"></textarea>
          <button type="submit" className={styles.submitButton}>Submit</button>
        </form>
      </div>

      {/* FAQ Section */}
      <div className={styles.faqSection}>
        <h2>Frequently Asked Questions</h2>
        <ul>
          <li>
            <h3>What services can I book?</h3>
            <p>You can book any of our listed electrical services for your home or office.</p>
          </li>
          <li>
            <h3>How do I know my appointment is confirmed?</h3>
            <p>We will send you a confirmation email after you submit the form.</p>
          </li>
          <li>
            <h3>Can I reschedule my appointment?</h3>
            <p>Yes, you can reschedule by contacting our support team at least 24 hours in advance.</p>
          </li>
        </ul>
      </div>

      {/* Contact Information Section */}
      <div className={styles.contactSection}>
        <h2>Contact Us</h2>
        <p>Phone: +123 456 7890</p>
        <p>Email: support@example.com</p>
        <p>Address: 123 Main Street, New Jersey, USA</p>
      </div>
    </section>
  );
};

export default Appointment;
