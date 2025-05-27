
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      
      {/* Screenshots Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              See the App in Action
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Take a peek at the beautiful, intuitive interface designed specifically for cricket communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Player Dashboard", description: "View your stats, upcoming matches, and team updates" },
              { title: "Match Scheduling", description: "Easy scheduling with automated notifications" },
              { title: "Live Chat", description: "Stay connected with your teammates" }
            ].map((screen, index) => (
              <div key={index} className="text-center">
                <div className="bg-slate-800 rounded-3xl p-4 shadow-2xl mx-auto w-48 h-80 mb-6">
                  <div className="bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl w-full h-full flex items-center justify-center text-white">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4"></div>
                      <div className="text-sm font-medium">{screen.title}</div>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{screen.title}</h3>
                <p className="text-slate-600">{screen.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Join the Growing Community
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Cricket villages across the country are already using our platform to strengthen their communities.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                role: "Team Captain, Village Warriors",
                quote: "This app has transformed how we organize our cricket activities. The live streaming feature is amazing!",
                avatar: "🏏"
              },
              {
                name: "Priya Sharma",
                role: "Village Cricket Admin",
                quote: "Managing multiple teams and scheduling matches has never been easier. Highly recommend!",
                avatar: "👩‍💼"
              },
              {
                name: "Amit Patel",
                role: "Player, Green Valley CC",
                quote: "Love the team chat feature. Keeps us all connected between matches and training sessions.",
                avatar: "⚾"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-xl">
                    {testimonial.avatar}
                  </div>
                  <div className="ml-4">
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-slate-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
