
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Admin = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              Admin & Village Owner 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600"> Information</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Comprehensive tools and information for village cricket administrators, 
              team managers, and community organizers.
            </p>
          </div>
        </div>
      </section>

      {/* Admin Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Admin Dashboard Features</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Powerful tools designed specifically for cricket administrators and community managers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Team Management",
                description: "Create and manage multiple teams, assign players, set roles, and track team performance.",
                features: ["Player registration", "Role assignments", "Team statistics", "Performance tracking"],
                icon: "👥"
              },
              {
                title: "Match Scheduling",
                description: "Advanced scheduling system with venue management, opponent coordination, and automated notifications.",
                features: ["Calendar integration", "Venue booking", "Automated reminders", "Weather alerts"],
                icon: "📅"
              },
              {
                title: "Tournament Management",
                description: "Organize and manage tournaments from registration to trophy presentation.",
                features: ["Tournament brackets", "Live scoring", "Prize distribution", "Sponsor management"],
                icon: "🏆"
              },
              {
                title: "Live Streaming Controls",
                description: "Professional streaming setup with commentary support and viewer engagement tools.",
                features: ["Multi-camera support", "Live commentary", "Viewer chat", "Stream analytics"],
                icon: "📺"
              },
              {
                title: "Community Analytics",
                description: "Detailed insights into community engagement, player participation, and growth metrics.",
                features: ["Participation rates", "Engagement metrics", "Growth tracking", "Custom reports"],
                icon: "📊"
              },
              {
                title: "Financial Management",
                description: "Track registration fees, sponsorship deals, prize money, and community fundraising.",
                features: ["Fee collection", "Sponsor tracking", "Budget management", "Payment processing"],
                icon: "💰"
              }
            ].map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="text-3xl">{feature.icon}</div>
                    <CardTitle className="text-xl text-green-600">{feature.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.features.map((feat, featIndex) => (
                      <li key={featIndex} className="flex items-center text-sm text-slate-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Getting Started */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Getting Started as an Admin</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Follow these simple steps to set up your cricket community on Cricket Village.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Register Your Village",
                description: "Sign up and provide basic information about your cricket community, including location and contact details.",
                action: "Start Registration"
              },
              {
                step: "02",
                title: "Get Verified",
                description: "Submit verification documents to confirm your role as a legitimate cricket administrator in your community.",
                action: "Upload Documents"
              },
              {
                step: "03",
                title: "Set Up Teams",
                description: "Create team profiles, invite players, and organize your cricket community structure.",
                action: "Create Teams"
              },
              {
                step: "04",
                title: "Start Playing",
                description: "Schedule your first match, set up live streaming, and begin engaging your cricket community.",
                action: "Schedule Match"
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-lg">
                  {step.step}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600 mb-4">{step.description}</p>
                <Button variant="outline" className="border-green-600 text-green-600 hover:bg-green-50">
                  {step.action}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Verification Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Verification Process</h2>
              <p className="text-lg text-slate-600 mb-6">
                To ensure the authenticity and quality of our cricket community, we have a straightforward 
                verification process for all administrators and village owners.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">✓</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Identity Verification</h4>
                    <p className="text-slate-600">Government-issued ID and proof of residence</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">✓</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Community Authorization</h4>
                    <p className="text-slate-600">Letter from village council or cricket association</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-bold mt-1">✓</div>
                  <div>
                    <h4 className="font-semibold text-slate-900">Ground Documentation</h4>
                    <p className="text-slate-600">Photos and location details of cricket facilities</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl">
                  🛡️
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Secure & Trusted</h3>
                <p className="text-slate-600 mb-6">
                  Our verification process ensures that only legitimate cricket communities 
                  join our platform, maintaining the quality and trust of our network.
                </p>
                <Button className="bg-gradient-to-r from-green-600 to-blue-600 text-white">
                  Start Verification
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Admin Pricing</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Affordable pricing designed to support cricket communities of all sizes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Basic</h3>
              <div className="text-4xl font-bold mb-2">Free</div>
              <p className="text-green-100 mb-6">Perfect for small villages getting started</p>
              <ul className="space-y-3 mb-8">
                <li>• Up to 2 teams</li>
                <li>• Basic match scheduling</li>
                <li>• Community chat</li>
                <li>• Player profiles</li>
              </ul>
              <Button className="w-full bg-white text-slate-900 hover:bg-slate-100">
                Get Started
              </Button>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 text-center border-2 border-white/50">
              <div className="bg-yellow-500 text-slate-900 text-sm font-bold px-3 py-1 rounded-full inline-block mb-4">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold mb-4">Pro</h3>
              <div className="text-4xl font-bold mb-2">₹999<span className="text-xl">/month</span></div>
              <p className="text-green-100 mb-6">Ideal for active cricket communities</p>
              <ul className="space-y-3 mb-8">
                <li>• Up to 10 teams</li>
                <li>• Live streaming</li>
                <li>• Tournament management</li>
                <li>• Advanced analytics</li>
                <li>• Priority support</li>
              </ul>
              <Button className="w-full bg-yellow-500 text-slate-900 hover:bg-yellow-400">
                Choose Pro
              </Button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
              <div className="text-4xl font-bold mb-2">Custom</div>
              <p className="text-green-100 mb-6">For large cricket associations</p>
              <ul className="space-y-3 mb-8">
                <li>• Unlimited teams</li>
                <li>• Multi-venue management</li>
                <li>• Custom branding</li>
                <li>• API access</li>
                <li>• Dedicated support</li>
              </ul>
              <Button className="w-full bg-slate-800 text-white hover:bg-slate-700">
                Contact Sales
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Admin;
