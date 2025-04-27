import React from 'react';
import { Link } from 'react-router-dom';

const projectsData = [
  {
    id: 'smart-spectacles',
    title: 'Smart Spectacles',
    description: 'A wearable assistive device utilizing ultrasonic sensors to help visually impaired individuals navigate obstacles.',
    tech: ['Embedded C++', 'Arduino IDE', 'Ultrasonic Sensor'],
    image: 'src/assets/glasses.jpg',
    achievements: ['2nd place in Project Expo at KEC (2023 & 2024)']
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    description: 'A weather monitoring application with real-time weather updates based on geolocation.',
    tech: ['ReactJS', 'Tailwind CSS', 'OpenWeatherMap API'],
    image: 'src/assets/picture2.jpg',
    achievements: ['Engineered an intuitive and dynamic UI displaying real-time weather data']
  },
  {
    id: 'farmers-ease-app',
    title: "Farmer's Ease App",
    description: 'An agricultural management system with transportation tracking features for farmers and customers.',
    tech: ['HTML', 'CSS', 'Python', 'MySQL'],
    image: 'src/assets/picture1.jpg',
    achievements: ['Implemented customer signup and login system with seamless data retrieval']
  }
];

const Projects = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-purple-100 py-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-800">My Projects</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <Link 
                  to={`/projects/${project.id}`} 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;