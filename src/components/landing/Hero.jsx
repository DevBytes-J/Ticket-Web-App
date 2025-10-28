export const Hero = ({ onGetStarted }) => (
  <div className="bg-gradient-to-br from-primary to-dark-bg relative overflow-hidden pt-16 pb-20 md:pb-32 text-white">
    <div className="absolute top-10 right-10 w-64 h-64 bg-white opacity-10 rounded-full"></div>
    <div className="absolute bottom-20 left-10 w-40 h-40 bg-white opacity-10 rounded-full"></div>

    <div className="max-w-7xl mx-auto px-4 py-20 relative z-10">
      <div className="container mx-auto px-4 relative z-20 text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 leading-tight">
          SwiftPass Ticketing
        </h1>
        <p className="text-xl md:text-2xl font-light mb-8 max-w-3xl mx-auto">
          The ultimate platform for streamlined support, tracking, and issue
          resolution.
        </p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button
            onClick={onGetStarted}
            className="py-3 px-8 text-lg font-bold rounded-full  text-gray-900 shadow-xl transition transform hover:scale-105 hover:text-primary hover:cursor-pointer hover:border-primary border-2 border-black"
          >
            Start Managing Tickets
          </button>
          <button
            onClick={() => onGetStarted("auth", "login")}
            className="py-3 px-8 text-lg font-bold rounded-full border-2 border-white bg-transparent transition transform hover:scale-105 hover:bg-white hover:text-primary hover:cursor-pointer"
          >
            Already a user? Login
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
