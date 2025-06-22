import React from 'react';
import { User } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-8 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">
            ABOUT <span className="text-gray-600">ME</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get to know more about my background and what drives me
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a CSE undergraduate passionate about building scalable full-stack applications 
              using React, Node.js, and MongoDB. I love learning new technologies and solving 
              real-world problems through innovative software solutions.
            </p>
            
            <p className="text-gray-400 leading-relaxed mb-6">
              With a strong foundation in computer science and hands-on experience in modern 
              web development, I enjoy creating user-friendly applications that make a difference. 
              I'm always eager to take on new challenges and collaborate on exciting projects.
            </p>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-orange-400 font-medium">Name:</span>
                <span className="text-gray-300 ml-2">Amit Kumar</span>
              </div>
              <div>
                <span className="text-orange-400 font-medium">Age:</span>
                <span className="text-gray-300 ml-2">22</span>
              </div>
              <div>
                <span className="text-orange-400 font-medium">Location:</span>
                <span className="text-gray-300 ml-2">Mohali, India</span>
              </div>
              <div>
                <span className="text-orange-400 font-medium">Degree:</span>
                <span className="text-gray-300 ml-2">B.Tech CSE</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-2xl p-8 backdrop-blur-sm border border-gray-700">
              <h3 className="text-xl font-semibold mb-4 text-orange-400">What I Do</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Full-stack web application development
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Database design and optimization
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  RESTful API development
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Responsive UI/UX design
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;