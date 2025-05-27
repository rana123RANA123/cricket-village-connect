
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-green-50 via-white to-blue-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 rounded-full bg-green-600"></div>
        <div className="absolute top-40 right-32 w-24 h-24 rounded-full bg-blue-600"></div>
        <div className="absolute bottom-32 left-1/4 w-20 h-20 rounded-full bg-green-600"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Connect Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                Cricket Village
              </span>
            </h1>
            <p className="text-xl text-slate-600 mt-6 max-w-2xl">
              Join teams, schedule matches, stream live games, and chat with teammates. 
              The ultimate app for village cricket communities across the country.
            </p>
            
            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
              <Button className="bg-black hover:bg-slate-800 text-white px-8 py-6 text-lg rounded-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-black text-xs font-bold">🍎</span>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-slate-300">Download on the</div>
                    <div className="text-lg font-semibold">App Store</div>
                  </div>
                </div>
              </Button>
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg rounded-xl">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <span className="text-green-600 text-xs font-bold">▶</span>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-green-100">Get it on</div>
                    <div className="text-lg font-semibold">Google Play</div>
                  </div>
                </div>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-12 justify-center lg:justify-start">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">500+</div>
                <div className="text-sm text-slate-600">Villages Connected</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">2,500+</div>
                <div className="text-sm text-slate-600">Active Players</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-700">1,200+</div>
                <div className="text-sm text-slate-600">Matches Played</div>
              </div>
            </div>
          </div>

          {/* Phone Mockup */}
          <div className="relative">
            <div className="relative mx-auto w-64 h-[500px] bg-slate-900 rounded-[3rem] p-2 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-green-600 via-green-500 to-blue-600 rounded-[2.5rem] flex flex-col items-center justify-center text-white p-6">
                <div className="w-16 h-16 bg-white rounded-full mb-6 flex items-center justify-center">
                  <div className="w-10 h-10 bg-green-600 rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">Cricket Village</h3>
                <p className="text-center text-green-100 text-sm mb-6">
                  Connect • Play • Stream
                </p>
                <div className="space-y-3 w-full">
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium">My Team: Village Warriors</div>
                    <div className="text-xs text-green-100">Next match: Sunday 10 AM</div>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                    <div className="text-sm font-medium">Live Stream</div>
                    <div className="text-xs text-green-100">Local Derby - 45 overs</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-yellow-400 to-yellow-500 rounded-full shadow-lg animate-bounce"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-lg animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
