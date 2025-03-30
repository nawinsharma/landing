import React from 'react';

interface StatisticProps {
  numberLine1: string;
  numberLine2?: string;
  description: string;
}

const StatisticBlock: React.FC<StatisticProps> = ({ numberLine1, numberLine2, description }) => {
  return (
    <div className="mb-16">
      <div className="mb-3 relative">
        <h2 className="text-4xl font-bold">{numberLine1}</h2>
        {numberLine2 && <h2 className="text-4xl font-bold">{numberLine2}</h2>}
        {/* Multiple yellow highlight lines to create the hand-drawn effect */}
        <div className="absolute -bottom-1 left-0 w-56 h-0.5 bg-yellow-300"></div>
        <div className="absolute -bottom-2 left-2 w-52 h-0.5 bg-yellow-400"></div>
        <div className="absolute -bottom-3 left-1 w-54 h-0.5 bg-yellow-400"></div>
      </div>
      <p className="text-gray-600 mt-6 max-w-md">{description}</p>
    </div>
  );
};

export const StatsJourney: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12 font-sans">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
        {/* Realistic Winding Road Path */}
        <div className="hidden lg:block absolute top-0 right-1/2 w-96 h-full pointer-events-none">
          <svg className="h-full w-full" viewBox="0 0 200 800" width="200" height="800">
            {/* Base path */}
            <path 
              d="M100,0 C170,100 30,250 100,350 C170,450 30,600 100,750" 
              fill="none" 
              stroke="#E5E5E5" 
              strokeWidth="4" 
              strokeDasharray="5,5" 
            />
            
            {/* Shadow path to create more depth */}
            <path 
              d="M102,0 C172,100 32,250 102,350 C172,450 32,600 102,750" 
              fill="none" 
              stroke="#F0F0F0" 
              strokeWidth="1" 
              strokeDasharray="5,5" 
            />
            
            {/* Additional highlight path */}
            <path 
              d="M98,0 C168,100 28,250 98,350 C168,450 28,600 98,750" 
              fill="none" 
              stroke="#F0F0F0" 
              strokeWidth="1" 
              strokeDasharray="5,5" 
            />
          </svg>
        </div>

        {/* Left Column Content */}
        <div className="lg:pr-16">
          <div className="mb-32">
            <StatisticBlock 
              numberLine1="250+ Championships"
              numberLine2="Organized"
              description="Our platform powers over 250 successful championships, delivering seamless event management and top-tier competition experiences."
            />
          </div>
          
          <div className="mt-72 lg:mt-96">
            <StatisticBlock 
              numberLine1="100,000+ Events"
              numberLine2="Logged"
              description="Over 3,000 athletes trust our system to manage and celebrate their achievements. Be part of a community that's redefining excellence and driving competitive spirit!"
            />
          </div>
        </div>

        {/* Right Column Content */}
        <div className="lg:mt-64">
          <StatisticBlock 
            numberLine1="3,000+ Athletes"
            numberLine2="Empowered"
            description="Over 3,000 athletes trust our system to manage and celebrate their achievements. Be part of a community that's redefining excellence and driving competitive spirit!"
          />
          
          <div className="text-center mt-64">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-full transition duration-300">
              Sign up for free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
