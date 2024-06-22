'use client'
import React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import ExperienceCard from './ExperienceCard';
import { experiences } from '@/data/index';

const Experience = () => {
   
  return (
    <div id="experience" className="flex flex-col justify-center items-center relative z-10 py-10 md:py-20">
      <div className="relative flex flex-col items-center justify-between w-full max-w-[1350px] py-20 gap-3">
      <h1 className="heading">
      My Trek as a {" "}
        <span className="text-purple"> Web Developer</span>{" "}
      </h1>
        <div className="w-full max-w-[1000px] mt-2 md:relative md:right-[18%] flex flex-col items-center justify-center gap-3">
          <Timeline>
            {experiences.map((experience, index) => (
              <TimelineItem key={index}>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  {index !== experiences.length - 1 && (
                    <TimelineConnector style={{ background: '#854CE6' }} />
                  )}
                </TimelineSeparator>
                <TimelineContent sx={{ py: '12px', px: 2 }}>
                  <ExperienceCard experience={experience} />
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </div>
  );
}

export default Experience;