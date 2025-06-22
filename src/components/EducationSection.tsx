import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const EducationSection: React.FC = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science Engineering',
      institution: 'Chandigarh University',
      location: 'Mohali, India',
      period: '2021 - 2025',
      description: 'Focused on software engineering, data structures, algorithms, and web development technologies.',
      status: 'Current'
    },
    {
      degree: 'Senior Secondary Education',
      institution: 'Army Public School',
      location: 'Jodhpur, India',
      period: '2020',
      description: 'Science stream with Mathematics, Physics, and Chemistry. Achieved distinction in all subjects.',
      status: 'Completed'
    },
    {
      degree: 'Secondary Education',
      institution: 'Army Public School',
      location: 'Patiala, India',
      period: '2018',
      description: 'Strong foundation in mathematics and science subjects with excellent academic performance.',
      status: 'Completed'
    }
  ];

  return (
    <section id="education" className="py-20 px-8 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">
            EDUCATION <span className="text-gray-600">TIMELINE</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            My academic journey and educational background
          </p>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 to-red-500"></div>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={edu.degree} className="relative flex items-start">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-orange-400 rounded-full border-4 border-gray-950 z-10"></div>
                
                {/* Content */}
                <div className="ml-16 bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300 w-full">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{edu.degree}</h3>
                      <p className="text-orange-400 font-medium mb-1">{edu.institution}</p>
                      <div className="flex items-center text-gray-400 text-sm space-x-4">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {edu.location}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {edu.period}
                        </div>
                      </div>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      edu.status === 'Current' 
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;