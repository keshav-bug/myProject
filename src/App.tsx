import React from 'react';
import { Search, Sun, ChevronDown, Zap } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="bg-gray-900/95 backdrop-blur-sm fixed w-full z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold">DESSIGN</h1>
              </div>
              <div className="hidden md:block ml-10">
                <div className="flex items-center space-x-4">
                  <a href="#" className="flex items-center text-gray-300 hover:text-white px-3 py-2">
                    Resources <ChevronDown className="ml-1 h-4 w-4" />
                  </a>
                  <a href="#" className="flex items-center text-gray-300 hover:text-white px-3 py-2">
                    Tools <ChevronDown className="ml-1 h-4 w-4" />
                  </a>
                  <a href="#" className="text-gray-300 hover:text-white px-3 py-2">AI Agents</a>
                  <a href="#" className="text-gray-300 hover:text-white px-3 py-2">AI Tools</a>
                  <a href="#" className="text-gray-300 hover:text-white px-3 py-2">AI Tutorials</a>
                  <a href="#" className="text-gray-300 hover:text-white px-3 py-2">AI Jobs</a>
                  <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Blog</a>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:block">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700">
                  [ Submit / Advertise + ]
                </button>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <span>Best AI Tools & Software Discovered by (50K+ Subscribers)</span>
              </div>
              <button className="p-2 rounded-full hover:bg-gray-800">
                <Sun className="h-5 w-5" />
              </button>
              <button className="p-2 rounded-full hover:bg-gray-800">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="pt-32 pb-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold mb-8">Bolt New AI</h2>
          <div className="flex justify-center mb-8">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 flex items-center">
              Visit Website
            </button>
          </div>
          <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Bolt.new is a cutting-edge, AI-powered web development platform created by StackBlitz. It allows developers to build, run, edit, and deploy full-stack web applications directly from their browser without requiring local setups.
          </p>
        </div>

        {/* Feature Image */}
        <div className="max-w-6xl mx-auto mt-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1607799279861-4dd421887fb3?auto=format&fit=crop&w=1200&q=80" 
              alt="Platform Preview" 
              className="w-full object-cover"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;