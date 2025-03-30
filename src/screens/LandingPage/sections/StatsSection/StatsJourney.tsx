import React from 'react';

export const StatsJourney: React.FC = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Join Our Thriving Sports Community
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Trusted by thousands of athletes and organizers worldwide
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {/* Championships Card */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-4xl font-bold text-indigo-600 mb-2">250+</h3>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Championships Organized</h4>
            <p className="text-gray-600">
              Our platform powers over 250 successful championships, delivering seamless event management and top-tier competition experiences.
            </p>
          </div>

          {/* Athletes Card */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-4xl font-bold text-indigo-600 mb-2">3,000+</h3>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Athletes Empowered</h4>
            <p className="text-gray-600">
              Over 3,000 athletes trust our system to manage and celebrate their achievements. Join a community that's redefining excellence.
            </p>
          </div>

          {/* Events Card */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md text-center">
            <h3 className="text-4xl font-bold text-indigo-600 mb-2">100,000+</h3>
            <h4 className="text-xl font-semibold text-gray-900 mb-3">Events Logged</h4>
            <p className="text-gray-600">
              From local matches to international tournaments, we've tracked 100,000+ events, ensuring precision and reliability.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Sign up for free
          </button>
          <p className="mt-3 text-sm text-gray-500">
            No credit card required. Get started in minutes.
          </p>
        </div>
      </div>
    </div>
  );
};
