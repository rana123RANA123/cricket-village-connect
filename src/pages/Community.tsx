
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Community = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              Join Our Growing 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600"> Cricket Community</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Connect with passionate cricketers, share experiences, and be part of a movement 
              that's revolutionizing village cricket across the country.
            </p>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8">
              <div className="text-4xl font-bold text-green-600 mb-2">500+</div>
              <div className="text-slate-600">Villages Connected</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="text-4xl font-bold text-blue-600 mb-2">2,500+</div>
              <div className="text-slate-600">Active Players</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8">
              <div className="text-4xl font-bold text-purple-600 mb-2">1,200+</div>
              <div className="text-slate-600">Matches Played</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-8">
              <div className="text-4xl font-bold text-yellow-600 mb-2">50+</div>
              <div className="text-slate-600">Live Streams Daily</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">What Our Community Says</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real stories from real cricketers who are part of the Cricket Village family.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Rajesh Kumar",
                role: "Team Captain, Village Warriors",
                location: "Dharampur, Gujarat",
                quote: "Cricket Village has completely transformed how we organize our matches. The live streaming feature lets our supporters watch from anywhere in the world. It's brought our whole village together!",
                avatar: "🏏",
                rating: 5
              },
              {
                name: "Priya Sharma",
                role: "Cricket Administrator",
                location: "Kanjhawala, Delhi",
                quote: "As someone who manages multiple teams, this app is a lifesaver. The scheduling system prevents conflicts, and the automatic notifications ensure no one misses important updates.",
                avatar: "👩‍💼",
                rating: 5
              },
              {
                name: "Amit Patel",
                role: "Opening Batsman",
                location: "Anand, Gujarat",
                quote: "The player statistics feature helps me track my progress. I love seeing my batting average improve over the season. The team chat keeps us motivated between matches.",
                avatar: "⚾",
                rating: 5
              },
              {
                name: "Sunita Devi",
                role: "Village Council Member",
                location: "Jaipur, Rajasthan",
                quote: "Our village cricket tournament was organized entirely through this app. From registration to live streaming the finals, everything worked perfectly. Highly recommended!",
                avatar: "🏆",
                rating: 5
              },
              {
                name: "Mohammad Ali",
                role: "Fast Bowler",
                location: "Meerut, Uttar Pradesh",
                quote: "Being able to stream our matches live has attracted sponsors to our village team. It's given us opportunities we never had before. Thank you Cricket Village!",
                avatar: "🎾",
                rating: 5
              },
              {
                name: "Lakshmi Nair",
                role: "Team Manager",
                location: "Kochi, Kerala",
                quote: "The admin tools are incredibly powerful yet easy to use. I can manage player registrations, schedule practices, and coordinate with other teams all from one app.",
                avatar: "📱",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center text-xl">
                    {testimonial.avatar}
                  </div>
                  <div className="ml-4">
                    <div className="font-bold text-slate-900">{testimonial.name}</div>
                    <div className="text-sm text-slate-600">{testimonial.role}</div>
                    <div className="text-xs text-green-600">{testimonial.location}</div>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">⭐</span>
                  ))}
                </div>
                <p className="text-slate-700 italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Success Stories</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              How Cricket Village is making a real difference in communities across India.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Dharampur Tournament Goes Digital
              </h3>
              <p className="text-slate-600 mb-6">
                The annual Dharampur Cricket Tournament, running for over 30 years, 
                used Cricket Village for the first time in 2024. The result? Record participation 
                with 32 teams, live streaming to over 10,000 viewers, and seamless organization 
                that impressed players and spectators alike.
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">32</div>
                  <div className="text-sm text-slate-600">Teams</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">10K+</div>
                  <div className="text-sm text-slate-600">Viewers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">15</div>
                  <div className="text-sm text-slate-600">Days</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Women's Cricket Takes Center Stage
              </h3>
              <p className="text-slate-600 mb-6">
                The Anand Women's Cricket League used our platform to organize their 
                inaugural season. With 16 teams and live streaming of every match, 
                they've inspired similar leagues in neighboring villages and gained 
                sponsorship from local businesses.
              </p>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">16</div>
                  <div className="text-sm text-slate-600">Teams</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-pink-600">200+</div>
                  <div className="text-sm text-slate-600">Players</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">₹2L</div>
                  <div className="text-sm text-slate-600">Prize Money</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Join Community CTA */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join the Movement?</h2>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Download Cricket Village today and connect with passionate cricketers in your area. 
            Be part of a community that's preserving the spirit of village cricket while embracing the future.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-slate-900 px-8 py-4 rounded-xl font-semibold hover:bg-slate-100 transition-colors text-lg">
              📱 Download for iOS
            </button>
            <button className="bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold hover:bg-slate-700 transition-colors text-lg">
              🤖 Download for Android
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Community;
