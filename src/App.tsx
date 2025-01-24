// File: src/App.tsx

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import Appointment from './components/Appointment';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <main>
                <HeroSection />
                <ServicesSection />
                <AboutSection />
                <ProjectsSection />
                <TestimonialsSection />
              </main>
            }
          />

          {/* Appointment Route */}
          <Route path="/appointment" element={<Appointment />} />

          {/* Additional Routes (if needed) */}
        </Routes>
        <ContactSection />
      </div>
    </Router>
  );
}

export default App;
