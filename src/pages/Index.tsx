const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-lg shadow-sm p-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-red-600">Brand Navigator</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Your comprehensive solution for brand management, inventory tracking, billing, 
            estimates, and business analytics - all in one powerful platform.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="p-6 border border-gray-200 rounded-lg hover:border-red-300 transition-colors">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 font-bold">📦</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Inventory</h3>
              <p className="text-sm text-gray-600">Track and manage your products efficiently</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:border-red-300 transition-colors">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 font-bold">💳</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Billing</h3>
              <p className="text-sm text-gray-600">Create invoices and manage payments</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:border-red-300 transition-colors">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 font-bold">📋</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Estimates</h3>
              <p className="text-sm text-gray-600">Generate professional quotes quickly</p>
            </div>
            <div className="p-6 border border-gray-200 rounded-lg hover:border-red-300 transition-colors">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 font-bold">📊</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Analytics</h3>
              <p className="text-sm text-gray-600">Monitor performance with detailed reports</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;