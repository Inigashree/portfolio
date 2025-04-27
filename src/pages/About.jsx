import React from 'react';

const About = () => {
  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center text-blue-900">About Me</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 border-t-4 border-blue-600">
          <div className="mb-8 bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-blue-800">Welcome to my Portfolio!!</h2>
            <p className="text-gray-700">
            I'm Inigashree, a Computer Science Engineering student at Kongu Engineering College passionate about creating innovative technology solutions. With experience in web development, embedded systems, and AI/ML projects, I focus on building applications that solve real-world problems. I balance my technical pursuits with leadership roles on campus while constantly seeking opportunities to expand my skills and make meaningful contributions through technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-purple-50 p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-purple-800">Education</h2>
              <div className="mb-4 border-l-4 border-purple-400 pl-4">
                <h3 className="text-xl font-medium text-purple-700">Kongu Engineering College</h3>
                <p className="text-gray-600">B.E - Computer Science Engineering</p>
                <p className="text-gray-600">2022-2026</p>
                <p className="text-gray-600 font-semibold">CGPA: 8.82 (Till 5th Sem)</p>
              </div>
              <div className="border-l-4 border-purple-400 pl-4">
                <h3 className="text-xl font-medium text-purple-700">Saraswathi Vidhyashram Matric HSS, Kavindapadi</h3>
                <p className="text-gray-600">HSC - 96.18% (2020-2021)</p>
                <p className="text-gray-600">SSLC - 95.60% (2018-2019)</p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">Experience</h2>
              <div className="mb-4 border-l-4 border-blue-400 pl-4">
                <h3 className="text-xl font-medium text-blue-700">AI/ML Internship</h3>
                <p className="text-gray-600">Generative AI Consortium & SystimaNx Pvt Ltd (Remote)</p>
                <p className="text-gray-600 font-semibold">Jun–Oct 2024</p>
                <ul className="list-disc ml-5 text-gray-700">
                  <li>Devised a machine learning model to predict equipment failure using various algorithms and performed essential data preprocessing.</li>
                  <li>Gained hands-on experience in AI model training, feature engineering, and data analysis.</li>
                </ul>
              </div>
              <div className="border-l-4 border-blue-400 pl-4">
                <h3 className="text-xl font-medium text-blue-700">Web Development Internship</h3>
                <p className="text-gray-600">Aurotech Solutions (Remote)</p>
                <p className="text-gray-600 font-semibold">May–Jun 2024</p>
                <ul className="list-disc ml-5 text-gray-700">
                  <li>Created a fully functional E-Commerce Website as part of the internship.</li>
                  <li>Worked on frontend development, implementing home page, product management modules and responsive UI.</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Achievements with special padding and styling */}
          <div className="mt-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-1 rounded-lg">
            <div className="bg-white text-gray-800 rounded-md p-6">
              <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">1</div>
                    <span className="font-medium">Best Presenter Award – Xenobots | Winner | IIT Madras</span>
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">2</div>
                    <span className="font-medium">Polar Technology in Sports | 2nd prize | Ramakrishna College</span>
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">3</div>
                    <span className="font-medium">Research Paper Presentation | 3rd prize | IIT Madras</span>
                  </div>
                </div>
                <div className="p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg shadow-sm">
                  <div className="flex items-center">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-3">4</div>
                    <span className="font-medium">MongoDB Certified Associate Developer | MongoDB University</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-8 bg-green-50 p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold mb-4 text-green-800">Roles & Responsibilities</h2>
            <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <li className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500 flex items-center">
                <span className="text-green-700 mr-2">●</span>
                <span>Joint Secretary of CSE Association | 2025</span>
              </li>
              <li className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500 flex items-center">
                <span className="text-green-700 mr-2">●</span>
                <span>IV & Placement Coordinator | 2023-2025</span>
              </li>
              <li className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-green-500 flex items-center">
                <span className="text-green-700 mr-2">●</span>
                <span>Executive in Cultural & Music Club | 2023-2025</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;