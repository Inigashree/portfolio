import React from 'react';

const Skills = () => {
  const skills = {
    programming: [
      { name: 'Java', logo: 'devicon-java-plain colored' },
      { name: 'C', logo: 'devicon-c-plain colored' },
      { name: 'C++', logo: 'devicon-cplusplus-plain colored' },
      { name: 'Python', logo: 'devicon-python-plain colored' },
      { name: 'HTML', logo: 'devicon-html5-plain colored' },
      { name: 'CSS', logo: 'devicon-css3-plain colored' },
      { name: 'React', logo: 'devicon-react-original colored' },
      { name: 'JavaScript', logo: 'devicon-javascript-plain colored' },
    ],
    databases: [
      { name: 'MongoDB', logo: 'devicon-mongodb-plain colored' },
      { name: 'MySQL', logo: 'devicon-mysql-plain colored' },
      { name: 'PostgreSQL', logo: 'devicon-postgresql-plain colored' },
    ],
    tools: [
      { name: 'Git', logo: 'devicon-git-plain colored' },
      { name: 'VS Code', logo: 'devicon-vscode-plain colored' },
      { name: 'Canva', logo: 'devicon-canva-original colored' },
    ],
    softSkills: ['Adaptability', 'Ambitious', 'Leadership', 'Teamwork', 'Problem Solving'],
    interests: ['DBMS', 'Data Structures']
  };

  const renderSkillCardsWithLogos = (skillList) => {
    return skillList.map((skill, index) => (
      <div 
        key={index}
        className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-6 rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105 flex flex-col items-center"
      >
        {skill.logo ? (
          <>
            <i className={`${skill.logo} text-5xl mb-3`}></i>
            <span className="text-white font-semibold">{skill.name}</span>
          </>
        ) : (
          <span className="text-white font-semibold">{skill}</span>
        )}
      </div>
    ));
  };

  const renderSkillCards = (skillList) => {
    return skillList.map((skill, index) => (
      <div 
        key={index}
        className="bg-white/10 backdrop-blur-md border border-white/20 px-4 py-4 rounded-lg shadow-md text-center transition-transform duration-300 hover:scale-105 flex items-center justify-center"
      >
        <span className="text-white font-semibold">{skill}</span>
      </div>
    ));
  };

  return (
    <div className="bg-gradient-to-b from-blue-900 to-purple-900 py-16 text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-12 text-center">My Skills</h1>
        
        <div className="space-y-16">
          <div>
            <h2 className="text-2xl font-semibold mb-8 pb-2 border-b-2 border-blue-300">Programming Languages & Frameworks</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {renderSkillCardsWithLogos(skills.programming)}
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-8 pb-2 border-b-2 border-blue-300">Databases</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {renderSkillCardsWithLogos(skills.databases)}
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-8 pb-2 border-b-2 border-blue-300">Tools & Technologies</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {renderSkillCardsWithLogos(skills.tools)}
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-8 pb-2 border-b-2 border-blue-300">Soft Skills</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {renderSkillCards(skills.softSkills)}
            </div>
          </div>
          
          <div>
            <h2 className="text-2xl font-semibold mb-8 pb-2 border-b-2 border-blue-300">Areas of Interest</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {renderSkillCards(skills.interests)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
