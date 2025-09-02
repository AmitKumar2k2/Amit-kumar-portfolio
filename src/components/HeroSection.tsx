import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 px-8">
      <div className="max-w-4xl text-center">
        <div className="mb-8">
          <h1 className="text-6xl font-bold mt-2 mb-4">
            <span className="text-white">SOFTWARE</span>{' '}
            <span className="text-gray-600">DEVELOPER</span>
          </h1>
          <p className="text-2xl text-gray-300 mb-8">
            Full Stack Developer | Problem Solver
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">Fresher</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">Years of Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">+5</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">+5</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">Technologies Mastered</div>
          </div>
        </div>

        {/* Description */}
        <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
          Passionate about creating intuitive and engaging user experiences. 
          Specialize in transforming ideas into beautifully crafted products.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
