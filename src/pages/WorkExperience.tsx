import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdOutlineWork as WorkIcon } from 'react-icons/md';
import { IoSchool as SchoolIcon } from 'react-icons/io5';
import { FaStar as StarIcon } from 'react-icons/fa';
import './WorkExperience.css';
import dataService from '../services/dataService';

function getStartYear(str: string) {
  // Handles formats like 'June 2024 - Present', 'May 2019 - August 2019', '2022 - 2024', '2016 - 2020'
  const match = str.match(/(\d{4})/);
  return match ? parseInt(match[1], 10) : 0;
}

const WorkExperience: React.FC = () => {
  const experience = dataService.getAllExperience();
  const education = dataService.getEducation();

  if (!experience || !education) return <div>Loading...</div>;

  // Merge and normalize
  const timeline = [
    ...experience.map((item: any) => ({
      ...item,
      type: 'work',
      startYear: getStartYear(item.duration),
    })),
    ...education.map((edu: any) => ({
      ...edu,
      type: 'education',
      startYear: getStartYear(edu.year),
    })),
  ].sort((a, b) => b.startYear - a.startYear);

  return (
    <>
      <div className="timeline-container">
        <h2 className="timeline-title">📅 Work Experience & Education Timeline</h2>
      </div>
      <VerticalTimeline>
        {timeline.map((item: any, index: number) => (
          <VerticalTimelineElement
            key={index}
            className={
              item.type === 'work'
                ? 'vertical-timeline-element--work'
                : 'vertical-timeline-element--education'
            }
            contentStyle={
              item.type === 'work'
                ? index === 0
                  ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                  : { background: 'rgb(240, 240, 240)', color: '#fff' }
                : { background: 'rgb(255, 224, 230)', color: '#fff' }
            }
            contentArrowStyle={
              item.type === 'work'
                ? index === 0
                  ? { borderRight: '7px solid rgb(33, 150, 243)' }
                  : { borderRight: '7px solid rgb(240, 240, 240)' }
                : { borderRight: '7px solid rgb(255, 224, 230)' }
            }
            date={item.duration || item.year}
            iconStyle={
              item.type === 'work'
                ? { background: 'rgb(33, 150, 243)', color: '#fff' }
                : { background: 'rgb(255, 160, 200)', color: '#fff' }
            }
            icon={item.type === 'work' ? <WorkIcon /> : <SchoolIcon />}
          >
            <div style={{ color: 'black' }}>
              {item.type === 'work' ? (
                <>
                  <h3 className="vertical-timeline-element-title">{item.position}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{item.company}</h4>
                  <ul>
                    {item.achievements && item.achievements.map((ach: string, i: number) => (
                      <li key={i}>{ach}</li>
                    ))}
                  </ul>
                  <div className="tech-stack">
                    {item.technologies && item.technologies.map((tech: string, i: number) => (
                      <span key={i} className="tech-badge">{tech}</span>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <h3 className="vertical-timeline-element-title">{item.degree}</h3>
                  <h4 className="vertical-timeline-element-subtitle">{item.school}</h4>
                  {item.coursework && item.coursework.length > 0 && (
                    <div style={{ marginTop: 6 }}>
                      <span style={{ color: '#e50914', fontSize: '0.98rem' }}>Coursework:</span>
                      <ul style={{ margin: '4px 0 0 18px', padding: 0, color: '#444', fontSize: '0.97rem' }}>
                        {item.coursework.map((course: string, cidx: number) => (
                          <li key={cidx}>{course}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              )}
            </div>
          </VerticalTimelineElement>
        ))}
        <VerticalTimelineElement
          iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </>
  );
};

export default WorkExperience;
