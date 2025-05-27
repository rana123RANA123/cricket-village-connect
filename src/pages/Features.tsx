
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Features = () => {
  const featureCategories = [
    {
      title: "Player Features",
      features: [
        {
          name: "Complete Player Profiles",
          description: "Create detailed profiles with personal stats, playing history, achievements, and skill ratings.",
          benefits: ["Track your cricket journey", "Showcase achievements", "Connect with other players"]
        },
        {
          name: "Performance Analytics",
          description: "Detailed statistics tracking including batting averages, bowling figures, and match performance.",
          benefits: ["Monitor improvement", "Set personal goals", "Compare with peers"]
        },
        {
          name: "Match Participation",
          description: "Easy registration for matches, availability status, and match reminders.",
          benefits: ["Never miss a match", "Plan ahead", "Stay organized"]
        }
      ]
    },
    {
      title: "Team Management",
      features: [
        {
          name: "Team Formation",
          description: "Create and manage teams with player invitations, role assignments, and squad management.",
          benefits: ["Build strong teams", "Assign roles clearly", "Manage squad rotation"]
        },
        {
          name: "Match Scheduling",
          description: "Comprehensive scheduling system with venue booking, opponent coordination, and automated notifications.",
          benefits: ["Streamlined planning", "Automated reminders", "Conflict resolution"]
        },
        {
          name: "Team Communication",
          description: "Built-in chat system for team discussions, match strategies, and social interaction.",
          benefits: ["Stay connected", "Share strategies", "Build team spirit"]
        }
      ]
    },
    {
      title: "Live Streaming & Community",
      features: [
        {
          name: "Live Match Streaming",
          description: "Stream matches live to the community with commentary support and viewer interaction.",
          benefits: ["Share exciting moments", "Build audience", "Professional presentation"]
        },
        {
          name: "Community Features",
          description: "Village-wide leaderboards, tournaments, and community challenges.",
          benefits: ["Healthy competition", "Community engagement", "Recognition system"]
        },
        {
          name: "Event Management",
          description: "Organize tournaments, training sessions, and community cricket events.",
          benefits: ["Professional events", "Easy registration", "Comprehensive management"]
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              Powerful Features for 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600"> Every Cricket Need</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              From individual player tracking to complete tournament management, 
              Cricket Village provides everything your cricket community needs to thrive.
            </p>
          </div>
        </div>
      </section>

      {/* Features Sections */}
      {featureCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center">{category.title}</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {category.features.map((feature, index) => (
                <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-green-600">{feature.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-slate-600 mb-4">{feature.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-slate-900">Key Benefits:</h4>
                      <ul className="space-y-1">
                        {feature.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center text-sm text-slate-600">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Technical Features */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Built for Performance</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Our app is designed with cutting-edge technology to ensure reliability, security, and optimal performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "⚡", title: "Lightning Fast", description: "Optimized for quick loading and smooth performance" },
              { icon: "🔒", title: "Secure & Private", description: "Your data is protected with enterprise-grade security" },
              { icon: "📱", title: "Mobile First", description: "Designed specifically for mobile devices and tablets" },
              { icon: "🌐", title: "Offline Support", description: "Core features work even without internet connection" }
            ].map((tech, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{tech.icon}</div>
                <h3 className="text-xl font-bold mb-2">{tech.title}</h3>
                <p className="text-green-100">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Features;
