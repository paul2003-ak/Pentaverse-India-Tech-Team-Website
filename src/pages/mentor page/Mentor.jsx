import React from 'react';
import trophyImage from '../../assets/trophy3.png';
import mentorImage from '../../assets/mentor.png';

export default function MentorsVenuePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-red-950 to-black text-white p-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 right-0 text-center text-[12rem] font-bold text-gray-300 leading-none">OUR MENTORS</div>
      </div>

      <div className="max-w-5xl mx-auto space-y-16 relative z-10">
        
        {/* Prizes Section */}
        <div className="text-center space-y-19 pt-8">
          <div className="inline-block ">
            <span className="bg-lime-400 text-black px-5 py-2 rounded-lg text-sm font-bold">
              Prizes
            </span>
          </div>

          {/* Trophy Display */}
          <div className="relative">
            {/* Glow effect behind trophies */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-gradient-to-br from-yellow-600/40 via-orange-500/40 to-transparent rounded-full blur-3xl -z-10"></div>
            
            <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-[3rem] p-8 shadow-2xl max-w-2xl mx-auto">
              <div className="flex justify-center items-end gap-8 -mt-16">
                {/* Second Place Trophy */}
                <div className="flex flex-col items-center">
                  <img 
                    src={trophyImage}
                    alt="Second Place Trophy"
                    className="w-36 h-48 drop-shadow-2xl object-contain bg-transparent"
                  />
                </div>

                {/* First Place Trophy - Largest and extending above container */}
                <div className="flex flex-col items-center transform scale-150 z-20">
                  <img 
                    src={trophyImage}
                    alt="First Place Trophy"
                    className="w-40 h-56 drop-shadow-2xl object-contain bg-transparent"
                  />
                </div>

                {/* Third Place Trophy */}
                <div className="flex flex-col items-center transform scale-110">
                  <img 
                    src={trophyImage}
                    alt="Third Place Trophy"
                    className="w-36 h-48 drop-shadow-2xl object-contain bg-transparent"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Mentors Section */}
        <div className="text-center space-y-12 py-8">
          <div className="relative">
            <h2 className="text-8xl font-bold text-gray-800/20 tracking-wider">
              OUR MENTORS
            </h2>
            <h2 className="text-5xl font-bold absolute inset-0 flex items-center justify-center tracking-wide">
              OUR MENTORS
            </h2>
          </div>

          <p className="text-gray-300 max-w-xl mx-auto text-sm">
            Hear firsthand how our solutions have boosted online success for users like you.
          </p>

          {/* Mentor Card with Testimonial */}
          <div className="relative max-w-xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-yellow-500 to-orange-600 rounded-3xl blur-3xl opacity-50"></div>
            
            <div className="relative bg-gradient-to-br from-orange-900/60 to-amber-900/60 backdrop-blur-sm rounded-3xl p-8 border border-orange-500/30 shadow-2xl">
              <div className="flex items-start gap-6">
                {/* Profile Image */}
                <div className="flex-shrink-0">
                  <div className="w-28 h-32 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src={mentorImage}
                      alt="Mentor"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Testimonial Text */}
                <div className="flex-1 text-left">
                  <p className="text-yellow-300 mb-3 text-base leading-relaxed">
                    "This product has completely transformed how I manage my projects and deadlines"
                  </p>
                  <h4 className="text-white font-semibold text-sm">Talia Taylor</h4>
                  <p className="text-orange-200 text-xs mt-1">Digital Marketing Director at Quantum</p>
                </div>
              </div>
            </div>

            {/* Floating circular badge
            <div className="absolute -right-4 top-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-gray-700 to-gray-800 rounded-full shadow-xl border-4 border-gray-600 flex items-center justify-center">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-500 to-gray-600 rounded-full"></div>
            </div> */}
          </div>
        </div>

        {/* Venue Partners Section */}
        <div className="space-y-8 pb-16">
          <h2 className="text-3xl font-semibold text-center text-white">
            Venue Partners
          </h2>

          {/* Large Partner Card */}
          <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-[2.5rem] h-72 shadow-2xl"></div>

          {/* Three Small Partner Cards */}
          <div className="grid grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-[2rem] h-24 shadow-xl"></div>
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-[2rem] h-24 shadow-xl"></div>
            <div className="bg-gradient-to-br from-gray-200 to-gray-300 rounded-[2rem] h-24 shadow-xl"></div>
          </div>
        </div>

      </div>
    </div>
  );
}