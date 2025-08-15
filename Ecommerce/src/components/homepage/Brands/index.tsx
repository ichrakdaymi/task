import React from 'react';

interface Brand {
  id: string;
  stepNumber: string;
  icon: JSX.Element;
  title: string;
  description: string;
  cardColor: string;
}

const brandsData: Brand[] = [
  { 
    id: "step1", 
    stepNumber: "1",
    title: "Pick a subscription",
    cardColor: "from-purple-400 to-pink-500",
    icon: (
      <svg width="90" height="90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" fill="#FFD700"/>
        <path d="M12 7V17M8 11L12 7L16 11" stroke="#FF1493" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="12" cy="15" r="3" fill="#00BFFF"/>
        <circle cx="8" cy="9" r="1.5" fill="#32CD32"/>
        <circle cx="16" cy="9" r="1.5" fill="#32CD32"/>
        <path d="M6 18L18 18" stroke="#FF69B4" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    description: "Grow kids' lifetime by exploring dozens of STEM topics with colorful experiments!"
  },
  { 
    id: "step2", 
    stepNumber: "2",
    title: "Receive a monthly crate",
    cardColor: "from-green-400 to-blue-500",
    icon: (
      <svg width="90" height="90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 8H3L5 19H19L21 8Z" fill="#FFD700"/>
        <path d="M3 8L5 2H19L21 8" fill="#FF69B4"/>
        <path d="M8 12V16M12 12V16M16 12V16" stroke="#00BFFF" strokeWidth="3" strokeLinecap="round"/>
        <circle cx="7" cy="5" r="2" fill="#32CD32"/>
        <circle cx="17" cy="5" r="2" fill="#32CD32"/>
        <rect x="6" y="10" width="3" height="3" fill="#FF1493" rx="1"/>
        <rect x="10.5" y="10" width="3" height="3" fill="#9370DB" rx="1"/>
        <rect x="15" y="10" width="3" height="3" fill="#FF4500" rx="1"/>
      </svg>
    ),
    description: "Bring science, art, and engineering to life with super fun hands-on projects!"
  },
  { 
    id: "step3", 
    stepNumber: "3",
    title: "Continue the fun",
    cardColor: "from-yellow-400 to-red-500",
    icon: (
      <svg width="90" height="90" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="4" width="18" height="12" rx="2" fill="#FFD700"/>
        <path d="M10 8L16 12L10 16V8Z" fill="#FF1493"/>
        <rect x="5" y="18" width="4" height="2" fill="#00BFFF"/>
        <rect x="11" y="18" width="8" height="2" fill="#32CD32"/>
        <circle cx="20" cy="6" r="3" fill="#FF69B4"/>
        <circle cx="2" cy="10" r="2" fill="#9370DB"/>
        <path d="M6 2L8 4L6 6L4 4Z" fill="#FF4500"/>
        <path d="M18 18L20 20L18 22L16 20Z" fill="#00CED1"/>
      </svg>
    ),
    description: "Get amazing bonus content, like fun articles and awesome videos, along with your crate!"
  },
];

const FunProjectsSection: React.FC = () => {
  return (
    <>
      <style>{`
        @keyframes rainbow {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-15px) scale(1.1); }
        }
        
        @keyframes wiggle {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(-5deg); }
          75% { transform: rotate(5deg); }
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.3); }
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(100px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(100px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-rainbow {
          animation: rainbow 3s linear infinite;
        }
        
        .animate-bounce-fun {
          animation: bounce 2s ease-in-out infinite;
        }
        
        .animate-wiggle {
          animation: wiggle 2s ease-in-out infinite;
        }
        
        .animate-sparkle {
          animation: sparkle 1.5s ease-in-out infinite;
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out;
        }
        
        .animate-slideInUp {
          animation: slideInUp 0.8s ease-out;
        }
        
        .step-card:hover {
          transform: scale(1.05) rotate(2deg);
        }
        
        .fun-shadow {
          box-shadow: 0 20px 40px rgba(255, 105, 180, 0.3),
                      0 15px 30px rgba(0, 191, 255, 0.2),
                      0 10px 20px rgba(50, 205, 50, 0.2);
        }
      `}</style>
      
      <div className="bg-gradient-to-br from-pink-300 via-purple-400 via-blue-400 via-green-400 to-yellow-400 py-20 text-white relative overflow-hidden animate-rainbow">
        {/* Super colorful background elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-10 left-10 w-16 h-16 bg-pink-400 rounded-full animate-bounce-fun"></div>
          <div className="absolute top-32 left-32 w-12 h-12 bg-yellow-400 rounded-full animate-sparkle" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute top-20 right-20 w-20 h-20 bg-green-400 rounded-full animate-wiggle"></div>
          <div className="absolute top-48 right-48 w-8 h-8 bg-blue-400 rounded-full animate-bounce-fun" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-purple-400 rounded-full animate-sparkle" style={{animationDelay: '1.5s'}}></div>
          <div className="absolute bottom-32 left-48 w-14 h-14 bg-red-400 rounded-full animate-wiggle" style={{animationDelay: '2s'}}></div>
          <div className="absolute bottom-10 right-10 w-18 h-18 bg-orange-400 rounded-full animate-bounce-fun" style={{animationDelay: '0.8s'}}></div>
          <div className="absolute bottom-48 right-32 w-10 h-10 bg-cyan-400 rounded-full animate-sparkle" style={{animationDelay: '1.2s'}}></div>
          
          {/* Fun shapes */}
          <div className="absolute top-40 left-1/4 w-6 h-6 bg-yellow-300 transform rotate-45 animate-wiggle"></div>
          <div className="absolute top-60 right-1/3 w-8 h-8 bg-pink-300 transform rotate-12 animate-sparkle"></div>
          <div className="absolute bottom-40 left-1/3 w-5 h-5 bg-green-300 rounded-full animate-bounce-fun"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-black mb-6 text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 animate-bounce-fun drop-shadow-2xl">
              Fun & enriching projects
            </h2>
            <h3 className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-300 to-red-300 animate-wiggle">
              for all ages
            </h3>
            <div className="mt-6 flex justify-center space-x-4">
              <div className="w-4 h-4 bg-yellow-400 rounded-full animate-bounce-fun"></div>
              <div className="w-4 h-4 bg-pink-400 rounded-full animate-bounce-fun" style={{animationDelay: '0.2s'}}></div>
              <div className="w-4 h-4 bg-green-400 rounded-full animate-bounce-fun" style={{animationDelay: '0.4s'}}></div>
              <div className="w-4 h-4 bg-blue-400 rounded-full animate-bounce-fun" style={{animationDelay: '0.6s'}}></div>
              <div className="w-4 h-4 bg-purple-400 rounded-full animate-bounce-fun" style={{animationDelay: '0.8s'}}></div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-stretch">
            {brandsData.map((brand, index) => (
              <div
                key={brand.id}
                className={`step-card flex flex-col items-center text-center p-10 bg-gradient-to-br ${brand.cardColor} rounded-3xl hover:shadow-2xl transition-all duration-500 fun-shadow ${
                  index === 0 ? 'animate-slideInLeft' : 
                  index === 1 ? 'animate-slideInUp' : 
                  'animate-slideInRight'
                }`}
                style={{animationDelay: `${index * 0.3}s`}}
              >
                <div className="relative mb-8">
                  <div className="w-32 h-32 bg-white/30 rounded-full flex items-center justify-center backdrop-blur-sm animate-bounce-fun border-4 border-white/50">
                    <div className="animate-wiggle">
                      {brand.icon}
                    </div>
                  </div>
                  <div className="absolute -top-3 -right-3 w-12 h-12 bg-gradient-to-br from-yellow-300 to-orange-400 text-white rounded-full flex items-center justify-center font-black text-2xl shadow-xl animate-sparkle border-4 border-white">
                    {brand.stepNumber}
                  </div>
                  {/* Fun decorative elements */}
                  <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-yellow-300 rounded-full animate-bounce-fun" style={{animationDelay: '1s'}}></div>
                  <div className="absolute top-2 -left-4 w-4 h-4 bg-pink-300 rounded-full animate-sparkle" style={{animationDelay: '1.5s'}}></div>
                  <div className="absolute -top-1 right-8 w-5 h-5 bg-green-300 rounded-full animate-bounce-fun" style={{animationDelay: '2s'}}></div>
                </div>
                
                <h4 className="text-2xl md:text-3xl font-black mb-4 text-white drop-shadow-lg animate-wiggle">
                  {brand.title}
                </h4>
                
                <p className="text-white text-lg leading-relaxed max-w-sm font-bold drop-shadow-md">
                  {brand.description}
                </p>
                
                {/* Fun bottom decoration */}
                <div className="mt-6 flex space-x-2">
                  <div className="w-3 h-3 bg-white/70 rounded-full animate-bounce-fun"></div>
                  <div className="w-3 h-3 bg-white/70 rounded-full animate-bounce-fun" style={{animationDelay: '0.2s'}}></div>
                  <div className="w-3 h-3 bg-white/70 rounded-full animate-bounce-fun" style={{animationDelay: '0.4s'}}></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Fun bottom section */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-4 bg-white/20 backdrop-blur-sm rounded-full px-8 py-4 animate-wiggle">
              <div className="w-8 h-8 bg-yellow-400 rounded-full animate-bounce-fun"></div>
              <span className="text-2xl font-black text-white">Let's Learn & Play!</span>
              <div className="w-8 h-8 bg-pink-400 rounded-full animate-bounce-fun"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FunProjectsSection;