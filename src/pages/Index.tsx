import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  const inspirationImages = [
    {
      id: 1,
      url: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop",
      title: "Modern Brand Strategy"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
      title: "Digital Innovation"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      title: "Creative Solutions"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
      title: "Tech Excellence"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&h=600&fit=crop",
      title: "Brand Vision"
    }
  ];

  const brands = [
    "Nike", "Adidas", "Apple", "Samsung", "Google", "Microsoft", "Amazon", "Tesla"
  ];

  const trustedClients = [
    "Reliance Industries", "Tata Group", "Infosys", "Wipro", "HDFC Bank", "ICICI Bank", "Bajaj Auto", "Mahindra Group"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Inspiration Gallery Carousel - Full Screen */}
      <div className="h-screen bg-white relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
            <div className="text-center mb-8">
              <h2 className="text-5xl font-bold text-gray-900 mb-4">Inspiration Gallery</h2>
              <p className="text-xl text-gray-600">Discover amazing brand transformations and creative solutions</p>
            </div>
            
            <Carousel className="w-full">
              <CarouselContent className="-ml-2 md:-ml-4">
                {inspirationImages.map((image) => (
                  <CarouselItem key={image.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CardContent className="p-0">
                        <div className="relative overflow-hidden rounded-lg">
                          <img 
                            src={image.url} 
                            alt={image.title}
                            className="w-full h-96 object-cover hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                          <div className="absolute bottom-4 left-4 text-white">
                            <h3 className="font-semibold text-lg">{image.title}</h3>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="text-red-600 border-red-600 hover:bg-red-50" />
              <CarouselNext className="text-red-600 border-red-600 hover:bg-red-50" />
            </Carousel>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="py-12">
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

      {/* Brands We Deal With */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Brands We Deal With</h2>
            <p className="text-xl text-gray-600">Partnering with global leaders across industries</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {brands.map((brand) => (
              <div key={brand} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 flex items-center justify-center">
                <span className="text-gray-700 font-semibold text-center">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Trusted Clients */}
      <div className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Trusted Clients</h2>
            <p className="text-xl text-gray-600">Building long-term partnerships with industry leaders</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustedClients.map((client) => (
              <div key={client} className="bg-gray-50 rounded-lg p-8 text-center hover:bg-red-50 transition-colors duration-300 border border-gray-200 hover:border-red-200">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-600 font-bold text-xl">{client.charAt(0)}</span>
                </div>
                <h3 className="font-semibold text-gray-900 text-lg">{client}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
