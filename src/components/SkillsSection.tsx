import React from 'react';
import { Code } from 'lucide-react';

const SkillsSection: React.FC = () => {
  const skills = [
    { name: 'React.js', icon: '⚛️' },
    { name: 'Node.js', icon: '🟩' },
    { name: 'HTML/CSS', icon: '🖥️' },
    { name: 'JavaScript', icon: '💛' },
    { name: 'Python', icon: '🐍' },
    { name: 'MongoDB', icon: '💾' },
    { name: 'Express.js', icon: '🛠️' },
    { name: 'C++', icon: '⌨️' },
    { name: 'SQL', icon: '🗃️' },
    { name: 'DBMS', icon: '🔗' },
    { name: 'Git', icon: '🌿' },
    { name: 'Tailwind CSS', icon: '🎨' }
  ];

  return (
    <section id="skills" className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">
            SKILLS & <span className="text-gray-600">TECHNOLOGIES</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105 hover:bg-gray-700/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="text-center">
                <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">{skill.icon}</div>
                <h3 className="font-medium text-white text-sm group-hover:text-orange-400 transition-colors duration-300">{skill.name}</h3>
                <div className="mt-2 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="text-green-400 text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">Proficient</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;