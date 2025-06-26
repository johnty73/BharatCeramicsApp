const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">About Us</h1>
          <div className="prose prose-lg text-gray-600">
            <p className="mb-6">
              Welcome to Brand Navigator, your comprehensive solution for brand management and business analytics.
            </p>
            <p className="mb-6">
              We help businesses streamline their operations with powerful tools for inventory management, 
              billing, estimates, and analytics - all in one integrated platform.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Mission</h3>
                <p className="text-gray-600">
                  To empower businesses with intuitive tools that simplify complex processes and drive growth.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Our Vision</h3>
                <p className="text-gray-600">
                  To be the leading platform for small and medium businesses seeking efficient brand management solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;