import React from 'react';
import { Home, User, Code, FolderOpen, Award, GraduationCap, Mail } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
}

const Header: React.FC<HeaderProps> = ({ activeSection }) => {
  const navItems = [
    { id: 'hero', icon: Home, label: 'Home' },
    { id: 'about', icon: User, label: 'About' },
    { id: 'skills', icon: Code, label: 'Skills' },
    { id: 'projects', icon: FolderOpen, label: 'Projects' },
    { id: 'certifications', icon: Award, label: 'Certifications' },
    { id: 'education', icon: GraduationCap, label: 'Education' },
    { id: 'contact', icon: Mail, label: 'Contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-80 right-0 z-40 backdrop-blur-lg bg-gray-950/80 border-b border-gray-800">
      <nav className="px-8 py-4">
        <ul className="flex space-x-8">
          {navItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`group flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-orange-500/10 ${
                    activeSection === item.id 
                      ? 'text-orange-400 bg-orange-500/10' 
                      : 'text-gray-300 hover:text-orange-400'
                  }`}
                  title={item.label}
                >
                  <IconComponent className="w-4 h-4" />
                  <span className="text-sm font-medium hidden lg:block">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
};

export default Header;