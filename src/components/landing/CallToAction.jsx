export const CallToAction = ({ onGetStarted }) => (
  <div className="relative py-16 bg-gray-50">
    <div className="absolute top-10 right-20 w-32 h-32 bg-indigo-200 opacity-30 rounded-full"></div>
    <div className="max-w-7xl mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Ready to Get Started?
      </h2>
      <p className="text-gray-600 mb-8 text-lg">
        Join thousands of teams managing their tickets efficiently
      </p>
      <button
        onClick={onGetStarted}
        className="bg-indigo-600 text-white px-10 py-4 rounded-lg text-lg font-semibold hover:bg-indigo-700 transition shadow-lg"
      >
        Start Free Trial
      </button>
    </div>
  </div>
);
