"use client";

import Image from "next/image";
import { useState } from "react";
import feedScreenshot from "./images/Screenshot 2025-10-03 182303.png";
import notificationsScreenshot from "./images/Screenshot 2025-10-03 182339.png";
import profileScreenshot from "./images/Screenshot 2025-10-03 182357.png";

export default function Home() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("https://sheetdb.io/api/v1/sh16knppyx70j", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [
            {
              waitlist: email,
            },
          ],
        }),
      });

      if (response.ok) {
        setStatus("success");
        setMessage("Thank you! You've been added to our waitlist. ☁️");
        setEmail("");
      } else {
        setStatus("error");
        setMessage("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      setStatus("error");
      setMessage("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-900 via-purple-900 to-indigo-950 text-white overflow-hidden">
      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ top: '10%', left: '20%', animationDelay: '0s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ top: '20%', left: '80%', animationDelay: '1s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ top: '60%', left: '10%', animationDelay: '2s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ top: '80%', left: '70%', animationDelay: '1.5s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ top: '40%', left: '50%', animationDelay: '0.5s' }}></div>
        
        {/* Additional stars */}
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ top: '15%', left: '45%', animationDelay: '0.3s' }}></div>
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ top: '25%', left: '30%', animationDelay: '1.2s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ top: '35%', left: '85%', animationDelay: '0.8s' }}></div>
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ top: '45%', left: '15%', animationDelay: '1.7s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ top: '55%', left: '65%', animationDelay: '0.4s' }}></div>
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ top: '65%', left: '40%', animationDelay: '1.3s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ top: '75%', left: '25%', animationDelay: '0.9s' }}></div>
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ top: '85%', left: '55%', animationDelay: '1.6s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ top: '5%', left: '60%', animationDelay: '0.2s' }}></div>
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ top: '12%', left: '75%', animationDelay: '1.4s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ top: '22%', left: '5%', animationDelay: '0.7s' }}></div>
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ top: '32%', left: '90%', animationDelay: '1.1s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ top: '42%', left: '35%', animationDelay: '0.6s' }}></div>
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ top: '52%', left: '95%', animationDelay: '1.8s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ top: '62%', left: '50%', animationDelay: '0.1s' }}></div>
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ top: '72%', left: '8%', animationDelay: '1.9s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ top: '90%', left: '45%', animationDelay: '0.5s' }}></div>
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ top: '8%', left: '88%', animationDelay: '1.5s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ top: '18%', left: '52%', animationDelay: '0.3s' }}></div>
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ top: '28%', left: '12%', animationDelay: '2.1s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ top: '38%', left: '68%', animationDelay: '0.9s' }}></div>
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ top: '48%', left: '22%', animationDelay: '1.2s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ top: '58%', left: '78%', animationDelay: '0.4s' }}></div>
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ top: '68%', left: '92%', animationDelay: '1.7s' }}></div>
        <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ top: '78%', left: '38%', animationDelay: '0.8s' }}></div>
        <div className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ top: '88%', left: '82%', animationDelay: '2.0s' }}></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        
        {/* Header */}
        <header className="text-center mb-16 sm:mb-24">
          <div className="inline-block mb-6 animate-[fadeInLeft_1s_ease-out_infinite]">
            <Image 
              src="/overcast_3431405.png"
              alt="Overcast Icon"
              width={100}
              height={100}
              className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28"
            />
          </div>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold mb-6 text-white font-[family-name:var(--font-dancing-script)]">
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
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
            Stay tuned...
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
          
          {/* Desktop Layout - Hidden on mobile */}
          <div className="hidden md:block relative h-[600px] max-w-6xl mx-auto px-4">
            {/* Screenshot 1 - Far Left (Notifications) */}
            <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-[220px] transform hover:scale-105 transition-all duration-300 hover:z-40">
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-3xl shadow-2xl border border-white/20">
                <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
                  <Image 
                    src={notificationsScreenshot}
                    alt="Nephophile Notifications Screenshot"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Screenshot 2 - Center Left (Feed) - BIGGER */}
            <div className="absolute left-[23%] top-1/2 -translate-y-1/2 z-20 w-[280px] transform hover:scale-105 transition-all duration-300 hover:z-40">
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-3xl shadow-2xl border border-white/20">
                <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
                  <Image 
                    src={feedScreenshot}
                    alt="Nephophile Feed Screenshot"
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Screenshot 3 - Center Right (Profile) - BIGGER */}
            <div className="absolute right-[23%] top-1/2 -translate-y-1/2 z-30 w-[280px] transform hover:scale-105 transition-all duration-300 hover:z-40">
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-3xl shadow-2xl border border-white/20">
                <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
                  <Image 
                    src={profileScreenshot}
                    alt="Nephophile Profile Screenshot"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Screenshot 4 - Far Right (New Screenshot) */}
            <div className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-[220px] transform hover:scale-105 transition-all duration-300 hover:z-40">
              <div className="bg-white/10 backdrop-blur-sm p-3 rounded-3xl shadow-2xl border border-white/20">
                <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
                  <Image 
                    src="/Screenshot-2025-10-04-191919.png"
                    alt="Nephophile Screenshot"
                    width={280}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout - Grid on mobile */}
          <div className="md:hidden grid grid-cols-2 gap-6 max-w-lg mx-auto px-4">
            {/* Screenshot 1 - Feed */}
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="bg-white/10 backdrop-blur-sm p-2 rounded-2xl shadow-2xl border border-white/20">
                <div className="bg-gray-900 rounded-xl overflow-hidden shadow-xl">
                  <Image 
                    src={feedScreenshot}
                    alt="Nephophile Feed Screenshot"
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Screenshot 2 - Notifications */}
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="bg-white/10 backdrop-blur-sm p-2 rounded-2xl shadow-2xl border border-white/20">
                <div className="bg-gray-900 rounded-xl overflow-hidden shadow-xl">
                  <Image 
                    src={notificationsScreenshot}
                    alt="Nephophile Notifications Screenshot"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Screenshot 3 - Profile */}
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="bg-white/10 backdrop-blur-sm p-2 rounded-2xl shadow-2xl border border-white/20">
                <div className="bg-gray-900 rounded-xl overflow-hidden shadow-xl">
                  <Image 
                    src={profileScreenshot}
                    alt="Nephophile Profile Screenshot"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>

            {/* Screenshot 4 - New Screenshot */}
            <div className="transform hover:scale-105 transition-all duration-300">
              <div className="bg-white/10 backdrop-blur-sm p-2 rounded-2xl shadow-2xl border border-white/20">
                <div className="bg-gray-900 rounded-xl overflow-hidden shadow-xl">
                  <Image 
                    src="/Screenshot-2025-10-04-191919.png"
                    alt="Nephophile Screenshot"
                    width={280}
                    height={600}
                    className="w-full h-auto"
                  />
                </div>
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
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={status === "loading"}
                className="w-full sm:flex-1 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 placeholder-gray-300 text-white focus:outline-none focus:ring-2 focus:ring-purple-400 disabled:opacity-50"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === "loading" ? "Sending..." : "Notify Me"}
              </button>
            </form>
            {message && (
              <p className={`mt-4 text-sm ${status === "success" ? "text-green-300" : "text-red-300"}`}>
                {message}
              </p>
            )}
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
