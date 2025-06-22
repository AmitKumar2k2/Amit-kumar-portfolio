import React from 'react';
import { Award } from 'lucide-react';

const CertificationsSection: React.FC = () => {
  const certifications = [
    {
      name: 'CSS3 Certification',
      issuer: 'Infosys',
      date: '2024',
      description: 'Advanced CSS styling and responsive design principles'
    },
    {
      name: 'JavaScript Certification',
      issuer: 'Infosys',
      date: '2024',
      description: 'Modern JavaScript ES6+ features and DOM manipulation'
    },
    {
      name: 'React Development',
      issuer: 'Coursera',
      date: '2023',
      description: 'Complete React.js development with hooks and state management'
    },
    {
      name: 'Full Stack Web Development',
      issuer: 'Coursera',
      date: '2023',
      description: 'End-to-end web development with MERN stack'
    }
  ];

  return (
    <section id="certifications" className="py-20 px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">
            CERTIFICATIONS <span className="text-gray-600">& ACHIEVEMENTS</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={cert.name}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-white mb-1">{cert.name}</h3>
                  <p className="text-orange-400 text-sm font-medium">{cert.issuer}</p>
                </div>
                <span className="text-xs text-gray-500 bg-gray-700 px-2 py-1 rounded">
                  {cert.date}
                </span>
              </div>
              <p className="text-gray-400 text-sm">{cert.description}</p>
              <div className="mt-4 flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
                <span className="text-green-400 text-xs font-medium">Verified</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;