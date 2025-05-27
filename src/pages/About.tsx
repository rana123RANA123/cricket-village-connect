
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 via-white to-blue-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-slate-900 mb-6">
              About 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600"> Cricket Village</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              We're passionate about bringing cricket communities together through technology, 
              preserving the spirit of village cricket while embracing modern innovation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">Our Mission</h2>
              <p className="text-lg text-slate-600 mb-6">
                Cricket Village was born from a simple observation: village cricket, the heart and soul of the sport, 
                needed a modern platform to thrive in the digital age. We believe that every cricket community, 
                no matter how small, deserves access to professional-grade tools for organizing, playing, and celebrating their passion.
              </p>
              <p className="text-lg text-slate-600">
                Our mission is to connect cricket villages across the country, making it easier for players to find teams, 
                organizers to manage events, and communities to share their love for the game with the world.
              </p>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-600 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center text-4xl">
                  🏏
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Connecting Communities</h3>
                <p className="text-slate-600">
                  Building bridges between cricket villages and fostering a nationwide network of passionate players.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Story</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Founded by cricket enthusiasts who grew up playing in village grounds across India.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                🌱
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">2020 - The Beginning</h3>
              <p className="text-slate-600">
                Started as a small project to help organize matches in our local village. 
                Realized the potential to scale nationwide.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                🚀
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">2022 - Expansion</h3>
              <p className="text-slate-600">
                Launched beta version with 50 villages. Added live streaming, 
                team management, and community features.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                🏆
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">2024 - Success</h3>
              <p className="text-slate-600">
                Now serving 500+ villages with 2,500+ active players. 
                Continuing to innovate and expand our reach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              The principles that guide everything we do at Cricket Village.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Community First",
                description: "Every decision we make prioritizes the needs and growth of cricket communities.",
                icon: "🤝"
              },
              {
                title: "Accessibility",
                description: "Making professional cricket management tools available to villages of all sizes.",
                icon: "📱"
              },
              {
                title: "Innovation",
                description: "Continuously improving our platform with cutting-edge features and user feedback.",
                icon: "💡"
              },
              {
                title: "Tradition",
                description: "Respecting and preserving the rich traditions of village cricket while embracing change.",
                icon: "🏏"
              }
            ].map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-50 to-green-50 rounded-2xl p-8">
                <div className="flex items-start space-x-4">
                  <div className="text-4xl">{value.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{value.title}</h3>
                    <p className="text-slate-600 text-lg">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet the Team</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              A passionate group of cricket lovers, technologists, and community builders.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Arjun Mehta",
                role: "Founder & CEO",
                description: "Former village cricket captain turned tech entrepreneur. Passionate about community building.",
                avatar: "👨‍💼"
              },
              {
                name: "Sneha Reddy",
                role: "Head of Product",
                description: "Cricket enthusiast and UX expert. Ensures our app serves real community needs.",
                avatar: "👩‍💻"
              },
              {
                name: "Ravi Kumar",
                role: "Community Manager",
                description: "Village cricket veteran who understands the grassroots needs of cricket communities.",
                avatar: "🏏"
              }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center text-4xl">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <div className="text-green-200 mb-3">{member.role}</div>
                <p className="text-green-100">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
