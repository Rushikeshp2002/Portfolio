'use client'
import React from 'react';

interface Experience {
  img: string;
  role: string;
  company: string;
  date: string;
  desc?: string;
  skills?: string[];
  doc?: string;
}

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard = ({ experience }: ExperienceCardProps) => {
  return (
    <div className="md:w-full w-[19rem]  border border-blue-600 rounded-lg  shadow-md p-4 flex flex-col justify-between relative overflow-hidden gap-4 transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 text-white   ">
      <div className="flex gap-4">
        <img
          src={experience.img}
          alt={experience.role}
          className="h-16 bg-black rounded-md mt-2"
        />
        <div className="flex flex-col">
          <div className="text-xl font-semibold text-white">
            {experience.role}
          </div>
          <div className="text-base font-medium text-white">
            {experience.company}
          </div>
          <div className="text-sm text-white">
            {experience.date}
          </div>
        </div>
      </div>
      <div className="text-base">
        {experience.desc && (
          <p className="overflow-hidden text-white text-ellipsis max-w-full line-clamp-4">
            {experience.desc}
          </p>
        )}
        {experience.skills && (
          <>
            <br />
            <div className="flex gap-4 mt-2">
              <b>Skills:</b>
              <div className="flex flex-wrap gap-2">
                {experience.skills.map((skill, index) => (
                  <span key={index} className="text-sm font-normal text-white mt-0.5">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
      {experience.doc && (
        <a href={experience.doc} target="_blank" rel="noopener noreferrer">
          <img
            src={experience.doc}
            alt="Document"
            className="hidden h-14 bg-black rounded-md hover:cursor-pointer hover:opacity-80"
          />
        </a>
      )}
    </div>
  );
}

export default ExperienceCard;
