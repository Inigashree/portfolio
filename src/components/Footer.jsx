import React from 'react';
import { Github, Linkedin, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p>© 2025 Inigashree N S. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <a href="https://github.com/Inigashree" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/inigashree-saravanan" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="https://leetcode.com/22CSR073_INIGA" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300 transition-colors">
              <Code size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;