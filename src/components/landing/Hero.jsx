import { Ticket } from "lucide-react";

export const Hero = ({ onGetStarted }) => (
  <div className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 overflow-hidden">
    <div className="absolute top-10 right-10 w-64 h-64 bg-white opacity-10 rounded-full"></div>
    <div className="absolute bottom-20 left-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>

    <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
      <div className="text-center text-white mb-16">
        <Ticket className="w-20 h-20 mx-auto mb-6" />
        <h1 className="text-6xl font-bold mb-4">TicketFlow</h1>
        <p className="text-2xl mb-8">Streamline Your Support Workflow</p>
        <div className="flex gap-4 justify-center flex-wrap">
          <button
            onClick={onGetStarted}
            className="bg-white text-indigo-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition shadow-lg"
          >
            Login
          </button>
          <button
            onClick={onGetStarted}
            className="bg-indigo-800 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-indigo-900 transition shadow-lg"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>

    <svg
      className="absolute bottom-0 w-full"
      viewBox="0 0 1440 120"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="#ffffff"
        d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,58.7C960,64,1056,64,1152,58.7C1248,53,1344,43,1392,37.3L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
      ></path>
    </svg>
  </div>
);
