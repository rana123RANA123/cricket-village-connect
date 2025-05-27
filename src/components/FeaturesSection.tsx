
import { Card, CardContent } from '@/components/ui/card';

const FeaturesSection = () => {
  const features = [
    {
      title: "Player Profiles",
      description: "Create detailed profiles with stats, achievements, and match history",
      icon: "👤",
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Team Management",
      description: "Form teams, invite players, and manage your cricket squad easily",
      icon: "👥",
      color: "from-green-500 to-green-600"
    },
    {
      title: "Match Scheduling",
      description: "Schedule matches, set venues, and send notifications to all players",
      icon: "📅",
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Live Streaming",
      description: "Stream your matches live and watch other village cricket games",
      icon: "📺",
      color: "from-red-500 to-red-600"
    },
    {
      title: "Team Chat",
      description: "Stay connected with teammates through built-in messaging",
      icon: "💬",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      title: "Leaderboards",
      description: "Track performance with village and player leaderboards",
      icon: "🏆",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      title: "Notifications",
      description: "Get instant updates about matches, team news, and live streams",
      icon: "🔔",
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Admin Tools",
      description: "Comprehensive tools for village owners and cricket administrators",
      icon: "⚙️",
      color: "from-slate-500 to-slate-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Everything You Need for 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600"> Village Cricket</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From player registration to live streaming, our comprehensive platform 
            brings your cricket community together like never before.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-to-br from-slate-50 to-white">
              <CardContent className="p-6">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Join the Cricket Village?</h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Download the app today and connect with cricket enthusiasts in your village and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-slate-900 px-8 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-colors">
                Download for iOS
              </button>
              <button className="bg-slate-800 text-white px-8 py-3 rounded-xl font-semibold hover:bg-slate-700 transition-colors">
                Download for Android
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
