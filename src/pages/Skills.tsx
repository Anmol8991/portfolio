import React from 'react';
import './Skills.css';
import { FaReact, FaNodeJs, FaAws, FaDocker, FaGitAlt, FaJava, FaHtml5, FaJenkins } from 'react-icons/fa';
import { SiDjango, SiTypescript, SiPostgresql, SiMicrosoftsqlserver, SiRedis, SiAzuredevops, SiTerraform, SiAnsible, SiExpress, SiTailwindcss, SiCplusplus, SiJavascript } from 'react-icons/si';
import { DiPython } from 'react-icons/di';
import dataService from '../services/dataService';

const iconMap: { [key: string]: JSX.Element } = {
  'Python': <DiPython />,
  'JavaScript': <SiJavascript />,
  'TypeScript': <SiTypescript />,
  'C/C++': <SiCplusplus />,
  'Java': <FaJava />,
  'Django': <SiDjango />,
  'Node.js': <FaNodeJs />,
  'Express.js': <SiExpress />,
  'React': <FaReact />,
  'HTML5': <FaHtml5 />,
  'Tailwind CSS': <SiTailwindcss />,
  'PostgreSQL': <SiPostgresql />,
  'MSSQL': <SiMicrosoftsqlserver />,
  'Redis': <SiRedis />,
  'Docker': <FaDocker />,
  'Azure': <SiAzuredevops />,
  'AWS': <FaAws />,
  'Terraform': <SiTerraform />,
  'Ansible': <SiAnsible />,
  'Jenkins': <FaJenkins />,
  'Git': <FaGitAlt />,
};

const sectionOrder = [
  'languages',
  'backend',
  'frontend',
  'databases',
  'devops_cloud',
];

const sectionTitles: { [key: string]: string } = {
  languages: 'Languages',
  backend: 'Backend',
  frontend: 'Frontend',
  databases: 'Databases',
  devops_cloud: 'DevOps & Cloud',
};

const Skills: React.FC = () => {
  const skills = dataService.getSkills();
  if (!skills) return <div>Loading...</div>;

  return (
    <div className="skills-container">
      {sectionOrder.map((section) => (
        <div key={section} className="skill-category">
          <h2 className="category-title">{sectionTitles[section]}</h2>
          <p className="category-description">{skills[section]?.description}</p>
          <div className="skills-grid">
            {skills[section]?.items.map((skill: string, idx: number) => (
              <div key={idx} className="skill-card">
                <div className="icon">{iconMap[skill] || <FaReact />}</div>
                <h3 className="skill-name">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Skills;
