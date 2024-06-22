import React from 'react';
import { skills } from '@/data/index';

const Skills = () => {
  return (
    <div id="skills" className='md:mt-40 mt-24'>
      
      <h1 className="heading">
        My {""}
        <span className="text-purple">Skills 🛠️</span>{" "}
      </h1>
      
        <div className="flex flex-wrap items-center justify-center p-6 md:gap-x-24 md:gap-y-10 md:mt-10 gap-y-4">
          {skills.map((skill) => (
            <div
              key={skill.title}
              style={{ backdropFilter: 'blur(23px) saturate(200%)',
                WebkitBackdropFilter: 'blur(23px) saturate(200%)',
                backgroundColor: 'rgba(0, 0, 0, 0.05)',
                borderRadius: '12px',
                border: '1px solid rgba(255, 255, 255, 0.125)'}}
              className="w-full max-w-2xl bg-black border border-solid border-purple-600 shadow-md rounded-lg p-4 md:max-w-lg md:p-2 sm:max-w-sm"
            >
              <h2 className="text-2xl font-semibold text-secondary mb-5 text-center text-white">
                {skill.title}
              </h2>
              <div className="flex flex-wrap justify-center gap-3 mb-5">
                {skill.skills.map((item) => (
                  <div
                    key={item.name}
                    className="text-base font-normal text-primary border border-primary rounded-lg p-3 flex items-center justify-center gap-3 md:text-sm md:p-2 sm:text-sm sm:p-1.5"
                  >
                    <img src={item.image} alt={item.name} className="w-6 h-6" />
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    
  );
};

export default Skills;
