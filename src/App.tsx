import React, { useState, useEffect } from 'react';
import { 
  User, 
  Code, 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  Eye, 
  Github, 
  Linkedin, 
  ExternalLink,
  Award,
  GraduationCap,
  Calendar
} from 'lucide-react';
import Header from './components/Header';
import ProfileSidebar from './components/ProfileSidebar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationsSection from './components/CertificationsSection';
import EducationSection from './components/EducationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'certifications', 'education', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Header activeSection={activeSection} />
      
      <div className="flex">
        {/* Fixed Left Sidebar */}
        <ProfileSidebar />
        
        {/* Scrollable Right Content */}
        <main className="flex-1 ml-80 min-h-screen">
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <CertificationsSection />
          <EducationSection />
          <ContactSection />
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default App;