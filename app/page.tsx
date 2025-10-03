import Image from "next/image";
import feedScreenshot from "./images/Screenshot 2025-10-03 182303.png";
import notificationsScreenshot from "./images/Screenshot 2025-10-03 182339.png";
import profileScreenshot from "./images/Screenshot 2025-10-03 182357.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-900 via-purple-900 to-indigo-950 text-white overflow-hidden">
      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ top: '10%', left: '20%', animationDelay: '0s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ top: '20%', left: '80%', animationDelay: '1s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ top: '60%', left: '10%', animationDelay: '2s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ top: '80%', left: '70%', animationDelay: '1.5s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ top: '40%', left: '50%', animationDelay: '0.5s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        
        {/* Header */}
        <header className="text-center mb-16 sm:mb-24">
          <div className="inline-block mb-6 animate-bounce">
            <div className="text-6xl sm:text-7xl">🌥️</div>
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent font-[family-name:var(--font-dancing-script)]">
            nephophile
          </h1>
          <p className="text-xl sm:text-2xl lg:text-3xl text-blue-100 mb-4 italic">
            The sky never repeats the same art
          </p>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            A social platform for sharing the ever-changing beauty of the sky
          </p>
        </header>

        {/* Coming Soon Badge */}
        <div className="text-center mb-12">
          <p className="text-lg sm:text-xl text-gray-300 mb-2">
            Clouds are gathering…
          </p>
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
            stay tuned.
          </p>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 sm:mb-24">
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all">
            <h3 className="text-xl font-semibold mb-2">Share Sky Moments</h3>
            <p className="text-gray-300">Capture and share stunning sky photos and videos</p>
          </div>
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all">
            <h3 className="text-xl font-semibold mb-2">Connect & Inspire</h3>
            <p className="text-gray-300">Engage with fellow sky enthusiasts worldwide</p>
          </div>
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all">
            <h3 className="text-xl font-semibold mb-2">Daily Sky Stories</h3>
            <p className="text-gray-300">Share quotes and stories about endless possibilities</p>
          </div>
        </div>

        {/* App Screenshots */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-blue-100">
            Sneak Peek
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Screenshot 1 - Feed */}
            <div className="group relative transform hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-white/10 backdrop-blur-sm p-4 rounded-3xl shadow-2xl">
                <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
                  <Image 
                    src={feedScreenshot}
                    alt="Nephophile Feed Screenshot"
                    className="w-full h-auto"
                    priority
                  />
                </div>
                <p className="text-center mt-4 text-sm font-medium text-blue-200">Share & Discover</p>
              </div>
            </div>

            {/* Screenshot 2 - Notifications */}
            <div className="group relative transform hover:scale-105 transition-all duration-300 md:mt-8">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-300 to-blue-300 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-white/10 backdrop-blur-sm p-4 rounded-3xl shadow-2xl">
                <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
                  <Image 
                    src={notificationsScreenshot}
                    alt="Nephophile Notifications Screenshot"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-center mt-4 text-sm font-medium text-sky-200">Stay Connected</p>
              </div>
            </div>

            {/* Screenshot 3 - Profile */}
            <div className="group relative transform hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-300 to-blue-300 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <div className="relative bg-white/10 backdrop-blur-sm p-4 rounded-3xl shadow-2xl">
                <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
                  <Image 
                    src={profileScreenshot}
                    alt="Nephophile Profile Screenshot"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-center mt-4 text-sm font-medium text-sky-200">Your Sky Gallery</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mb-12">
          <div className="max-w-2xl mx-auto p-8 bg-white/10 backdrop-blur-md rounded-3xl border border-white/20">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Be the First to Know
            </h3>
            <p className="text-gray-300 mb-6">
              Join our waitlist and get notified when we launch
            </p>
            <form className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full sm:flex-1 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Notify Me
              </button>
            </form>
          </div>
        </div>

        {/* Quote */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <blockquote className="text-xl sm:text-2xl italic text-blue-100">
            "Every time I look up, I'm reminded that the sky never looks the same twice — 
            always changing, yet always beautiful."
          </blockquote>
        </div>

      </div>

      {/* Footer */}
      <footer className="relative z-10 text-center py-8 border-t border-white/10">
        <p className="text-gray-400">
          © 2025 Nephophile. Made with ☁️ for sky lovers everywhere.
        </p>
      </footer>
    </div>
  );
}
