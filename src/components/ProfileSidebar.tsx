import React from 'react';
import myPhoto from '../Photo/my-photo.jpg';
import { Download, Eye, Github, Linkedin, Mail, MapPin } from 'lucide-react';

const ProfileSidebar: React.FC = () => {
  return (
    <aside className="fixed left-0 top-0 w-80 h-screen bg-black p-8 flex flex-col">
      <div className="flex-1 flex flex-col items-center">
        {/* Profile Photo */}
        <div className="relative mb-6">
          <div className="w-48 h-48 rounded-3xl overflow-hidden bg-gradient-to-br from-orange-500 to-red-600 p-1">
            <div className="w-full h-full rounded-3xl overflow-hidden">
            <img
              src={myPhoto} 
              alt="Amit Kumar"
              className="w-full h-full object-cover"
            />

            </div>
          </div>
          <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center">
            <div className="w-3 h-3 bg-white rounded-full animate-pulse"></div>
          </div>
        </div>

        {/* Name and Title */}
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold mb-2">Amit Kumar</h1>
          <p className="text-gray-400 text-sm mb-1">Full Stack Developer</p>
          <p className="text-gray-500 text-xs">Problem Solver</p>
        </div>

        {/* Quick Info */}
        <div className="w-full space-y-3 mb-8">
          <div className="flex items-center text-sm text-gray-400">
            <MapPin className="w-4 h-4 mr-3 text-orange-400" />
            <span>Gurgaon, India</span>
          </div>
          <div className="flex items-center text-sm text-gray-400">
            <Mail className="w-4 h-4 mr-3 text-orange-400" />
            <span>amitkumar69049@gmail.com</span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="w-full space-y-3 mb-8">
          <a
            href="/public/Amit-Kumar.pdf"
            download
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 px-4 rounded-xl font-medium transition-colors duration-200 flex items-center justify-center"
          >
          <Download className="w-4 h-4 mr-2" />
            Download Resume
          </a>

          <button 
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="w-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white py-3 px-4 rounded-xl font-medium transition-colors duration-200 flex items-center justify-center"
          >
            <Eye className="w-4 h-4 mr-2" />
            View Projects
          </button>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4">
          <a
            href="https://github.com"
            className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors duration-200"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com"
            className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors duration-200"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:amitkumar69049@gmail.com"
            className="w-10 h-10 bg-gray-800 hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors duration-200"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Bottom Description */}
      <div className="text-center text-xs text-gray-500 mt-8">
        A Software Engineer who has developed countless innovative solutions.
      </div>
    </aside>
  );
};

export default ProfileSidebar;
