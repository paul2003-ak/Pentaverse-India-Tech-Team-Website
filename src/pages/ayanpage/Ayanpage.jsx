import React from 'react';
import { Heart, Star, Cpu, MessageSquare, Layout, Zap } from 'lucide-react';
import image from '../../assets/Gemini_Generated_Image_ch3u0vch3u0vch3u.png';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-bl from-black via-red-950 to-black text-white p-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid md:grid-cols-2 gap-12 mb-16 md:mb-24">
          
          <div className="space-y-6 flex flex-col justify-center">
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Design. Think.<br />
              Solve. Develop.
            </h1>
            <p className="text-gray-400 text-lg max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate.
            </p>
            <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition-colors self-start">
              join us now
            </button>
          </div>
          
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 my-auto">
            
            
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">AI</h3>
                <p className="text-sm text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>

           
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-pink-400 rounded-xl flex items-center justify-center flex-shrink-0">
                <Layout className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Title 1</h3>
                <p className="text-sm text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>

          
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Star className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">web3</h3>
                <p className="text-sm text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>

           
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-green-400 rounded-xl flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Title 2</h3>
                <p className="text-sm text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">web2</h3>
                <p className="text-sm text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-cyan-400 rounded-xl flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Title 3</h3>
                <p className="text-sm text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              </div>
            </div>
            
          </div>
        </div>

      
        <div className="relative rounded-3xl overflow-hidden bg-gray-900 border border-gray-700/50">
          <div className="absolute inset-0 z-0">
            <img
             
              src={image}
              alt="Tech background"
              className="w-full h-full object-cover object-[16/19] opacity-80"
           
            />
           
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 via-gray-900/70 to-transparent"></div>
          </div>

          <div className="relative z-10 p-12 md:p-16">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold mb-4">
                Let's make things happen
              </h2>
              <p className="text-gray-300 mb-8 max-w-md">
                Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
              </p>
              <button className="bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold hover:bg-gray-700 transition-colors border border-gray-600">
                apply for it
              </button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}