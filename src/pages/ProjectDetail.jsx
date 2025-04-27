import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Github } from 'lucide-react';



const projectsData = [
  {
    id: 'smart-spectacles',
    title: 'Smart Spectacles',
    description: 'A wearable assistive device utilizing ultrasonic sensors to help visually impaired individuals navigate obstacles.',
    longDescription: `
      Smart Spectacles is an innovative wearable device designed to assist visually impaired individuals in navigating their surroundings. 
      Using ultrasonic sensors mounted on a pair of glasses, the device detects obstacles in the user's path and provides feedback through 
      haptic vibrations or audio cues, allowing users to safely navigate around barriers.
      
      The system uses Arduino microcontrollers to process sensor data in real-time, with careful attention to power management for extended 
      battery life. The design prioritizes comfort, usability, and discretion, ensuring that users can wear the device throughout their day.
      
      This project earned 2nd place recognition in consecutive Project Expos at Kongu Engineering College (2023 & 2024), highlighting its 
      practical application and social impact.
    `,
    tech: ['Embedded C++', 'Arduino IDE', 'Ultrasonic Sensor', 'Haptic Feedback', 'Power Management'],
    image: '/images/glasses.jpg',
    achievements: ['2nd place in Project Expo at KEC (2023)', '2nd place in Project Expo at KEC (2024)'],
    features: [
      'Real-time obstacle detection',
      'Haptic feedback system',
      'Audio cue generation',
      'Low power consumption',
      'Lightweight and comfortable design',
      'Customizable sensitivity settings'
    ],
    githubLink: 'https://github.com/Inigashree/smart-spectacles'
  },
  {
    id: 'weather-app',
    title: 'Weather App',
    description: 'A weather monitoring application with real-time weather updates based on geolocation.',
    longDescription: `
      The Weather App is a responsive web application built with ReactJS that provides users with real-time weather information based on their 
      current location or any location they search for. The application leverages the OpenWeatherMap API to fetch accurate weather data and 
      displays it in an intuitive, visually appealing interface.
      
      The app features a clean design with Tailwind CSS, ensuring it works seamlessly across devices of all sizes. Users can view current 
      weather conditions as well as hourly and 5-day forecasts. The dashboard presents key metrics including temperature, humidity, wind speed, 
      pressure, and UV index in an easy-to-read format.
      
      Additional features include location-based weather alerts, temperature unit conversion (Celsius/Fahrenheit), and weather condition 
      visualizations using interactive charts.
    `,
    tech: ['ReactJS', 'Tailwind CSS', 'OpenWeatherMap API', 'Geolocation API', 'Chart.js'],
    image: '/images/picture2.jpg',
    achievements: ['Engineered an intuitive and dynamic UI displaying real-time weather data'],
    features: [
      'Real-time weather updates',
      'Geolocation-based forecasting',
      'Search functionality for any location',
      'Responsive design for all devices',
      'Detailed metrics (humidity, pressure, etc.)',
      'Interactive weather visualizations'
    ],
    githubLink: 'https://github.com/Inigashree/weathergo'
  },
  {
    id: 'farmers-ease-app',
    title: "Farmer's Ease App",
    description: 'An agricultural management system with transportation tracking features for farmers and customers.',
    longDescription: `
      Farmer's Ease is a comprehensive web application designed to bridge the gap between farmers and customers, eliminating middlemen and 
      ensuring farmers receive fair prices for their produce while customers get fresh products directly from the source.
      
      The system features a robust transportation tracking module that allows customers to monitor their orders in real-time from farm to 
      doorstep. Farmers can list their products, set prices, and manage inventory through an intuitive dashboard. Customers can browse 
      products by category, place orders, and make secure payments through the platform.
      
      The backend is built with Python and MySQL, ensuring efficient data management and retrieval. Authentication and authorization systems 
      ensure that user data remains secure while providing a seamless experience.
    `,
    tech: ['HTML', 'CSS', 'Python', 'MySQL', 'Geolocation Tracking'],
    image: '/images/picture1.jpg',
    achievements: ['Implemented customer signup and login system with seamless data retrieval'],
    features: [
      'Farmer product listing and management',
      'Customer registration and order placement',
      'Real-time transportation tracking',
      'Secure payment processing',
      'Product categorization and search',
      'Order history and status updates'
    ],
    githubLink: 'https://github.com/Inigashree/Farmers_Ease_Use_Site'
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find(p => p.id === id);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found</h2>
          <Link to="/projects" className="text-blue-600 hover:underline flex items-center justify-center">
            <ArrowLeft className="mr-2" size={18} /> Back to Projects
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="bg-gradient-to-r from-blue-100 to-purple-100 py-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <Link to="/projects" className="text-blue-600 hover:underline flex items-center mb-6">
          <ArrowLeft className="mr-2" size={18} /> Back to Projects
        </Link>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <img src={project.image} alt={project.title} className="w-full h-80 object-cover" />
          
          <div className="p-8">
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-md">
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-2">Overview</h2>
              <p className="text-gray-700 whitespace-pre-line">{project.longDescription}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-2">Key Features</h2>
                <ul className="list-disc ml-5 text-gray-700">
                  {project.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-2">Achievements</h2>
                <ul className="list-disc ml-5 text-gray-700">
                  {project.achievements.map((achievement, index) => (
                    <li key={index}>{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
