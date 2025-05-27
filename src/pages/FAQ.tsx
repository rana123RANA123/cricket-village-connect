
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ = () => {
  const faqCategories = [
    {
      title: "Getting Started",
      faqs: [
        {
          question: "How do I join Cricket Village?",
          answer: "Download the Cricket Village app from the App Store or Google Play, create your profile, and search for cricket communities in your area. You can either join existing teams or create your own cricket community."
        },
        {
          question: "Is Cricket Village free to use?",
          answer: "Yes! Cricket Village offers a free plan for basic features including player profiles, team joining, and match participation. Premium features like live streaming and advanced analytics are available with our paid plans."
        },
        {
          question: "Do I need to be an experienced cricket player to join?",
          answer: "Not at all! Cricket Village welcomes players of all skill levels, from beginners to experienced cricketers. Many communities have teams for different skill levels and age groups."
        },
        {
          question: "How do I find cricket teams in my area?",
          answer: "Use the 'Find Teams' feature in the app, which uses your location to show nearby cricket communities. You can also search by village name, team name, or browse through different regions."
        }
      ]
    },
    {
      title: "Teams & Matches",
      faqs: [
        {
          question: "How do I create a new team?",
          answer: "Go to the 'Teams' section in the app, tap 'Create Team', fill in your team details including name, description, and playing level. Once created, you can invite players and start organizing matches."
        },
        {
          question: "How are matches scheduled?",
          answer: "Team captains or admins can schedule matches through the app. They select opponents, set date/time, choose venues, and send invitations. All team members receive automatic notifications about upcoming matches."
        },
        {
          question: "What if it rains on match day?",
          answer: "The app includes weather alerts and allows quick rescheduling. Admins can send instant notifications to all participants about match cancellations or venue changes."
        },
        {
          question: "Can I play for multiple teams?",
          answer: "Yes, you can be part of multiple teams as long as there are no scheduling conflicts. The app will alert you if matches overlap, and you can manage your availability for each team separately."
        }
      ]
    },
    {
      title: "Live Streaming",
      faqs: [
        {
          question: "How does live streaming work?",
          answer: "Admins can start live streams directly from the app during matches. The stream is automatically shared with team members and can be made public for the broader community. Viewers can comment and react in real-time."
        },
        {
          question: "Do I need special equipment for streaming?",
          answer: "No special equipment required! The app uses your smartphone camera for streaming. For better quality, you can use external microphones or tripods, but it's not necessary."
        },
        {
          question: "Can viewers interact during live streams?",
          answer: "Absolutely! Viewers can comment, react with emojis, and share the stream. There's also a live scoreboard feature where viewers can see real-time match statistics."
        },
        {
          question: "Are live streams saved for later viewing?",
          answer: "Yes, all live streams are automatically saved and can be viewed later. Teams can build a library of their matches for training analysis or sharing highlights."
        }
      ]
    },
    {
      title: "Admin & Village Management",
      faqs: [
        {
          question: "How do I become a verified village admin?",
          answer: "Submit your application through the app with required documents: government ID, proof of residence, community authorization letter, and cricket ground documentation. Our team reviews applications within 3-5 business days."
        },
        {
          question: "What tools are available for tournament management?",
          answer: "Admins get access to tournament brackets, automated scheduling, live scoring systems, prize tracking, sponsor management, and comprehensive analytics. Everything needed to run professional tournaments."
        },
        {
          question: "How do I collect registration fees through the app?",
          answer: "The app includes integrated payment processing for registration fees, tournament entries, and membership dues. Multiple payment methods are supported including UPI, cards, and digital wallets."
        },
        {
          question: "Can I customize the app for my village branding?",
          answer: "Enterprise customers can add custom branding, logos, and color schemes. This feature is available for large cricket associations and village councils managing multiple teams."
        }
      ]
    },
    {
      title: "Technical Support",
      faqs: [
        {
          question: "What devices are supported?",
          answer: "Cricket Village works on iOS (iPhone 8 and newer) and Android (Android 8.0 and newer) devices. The app is optimized for smartphones and tablets."
        },
        {
          question: "Does the app work offline?",
          answer: "Core features like viewing schedules, team information, and player profiles work offline. Live streaming, real-time chat, and match scheduling require internet connection."
        },
        {
          question: "How do I report a technical issue?",
          answer: "Use the 'Help & Support' section in the app to report issues. You can also email our support team at support@cricketvillage.com. We typically respond within 24 hours."
        },
        {
          question: "Is my personal data secure?",
          answer: "Yes, we use enterprise-grade encryption and follow strict data privacy policies. Your personal information is never shared with third parties without your explicit consent."
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
              Frequently Asked 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600"> Questions</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto">
              Find answers to common questions about Cricket Village. 
              Can't find what you're looking for? Contact our support team.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      {faqCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-16 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">{category.title}</h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {category.faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`${categoryIndex}-${index}`}
                  className="bg-white rounded-lg border border-slate-200 shadow-sm"
                >
                  <AccordionTrigger className="px-6 py-4 text-left font-semibold text-slate-900 hover:no-underline hover:bg-slate-50">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-slate-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      ))}

      {/* Quick Help Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Our support team is here to help you make the most of Cricket Village.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                📧
              </div>
              <h3 className="text-xl font-bold mb-2">Email Support</h3>
              <p className="text-green-100 mb-4">Get detailed help via email</p>
              <div className="text-green-200">support@cricketvillage.com</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                💬
              </div>
              <h3 className="text-xl font-bold mb-2">Live Chat</h3>
              <p className="text-green-100 mb-4">Chat with us in real-time</p>
              <button className="text-green-200 hover:text-white transition-colors">
                Start Chat
              </button>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl">
                📚
              </div>
              <h3 className="text-xl font-bold mb-2">Help Center</h3>
              <p className="text-green-100 mb-4">Browse our knowledge base</p>
              <button className="text-green-200 hover:text-white transition-colors">
                View Articles
              </button>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Video Tutorials</h3>
              <p className="text-green-100 mb-6">
                Watch step-by-step tutorials on how to use Cricket Village features.
              </p>
              <button className="bg-white text-slate-900 px-8 py-3 rounded-xl font-semibold hover:bg-slate-100 transition-colors">
                Watch Tutorials
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;
