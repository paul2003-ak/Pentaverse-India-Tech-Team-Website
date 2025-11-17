import React from "react";
import logo from "../../assets/Gemini_Generated_Image_ch3u0vch3u0vch3u.png";

const Sponsors = () => {
  // Dummy sponsor data - replace with actual data as needed
  const sponsorName = "PentaVerse";
  const partnerName = "Community Partner";
  const sponsors = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    name: sponsorName,
    logo,
  }));
  const communityPartners = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    name: partnerName,
    logo,
  }));

  return (
    <div
      id="sponsors"
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Sponsors & Partners Section */}
        <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white relative">
            <span className="relative z-10">SPONSORS & PARTNERS</span>
            <span className="absolute inset-0 text-white/8 text-[64px] sm:text-[80px] md:text-[100px] lg:text-[160px] font-extrabold tracking-wider -z-10 flex items-center justify-center">
              Supporters
            </span>
          </h2>
          {/* Horizontal line only */}
          <div className="flex items-center justify-center mt-4 sm:mt-5 md:mt-6 mb-8 sm:mb-10 md:mb-12">
            <span className="h-0.5 bg-gray-400 opacity-40 w-20 sm:w-24 md:w-32" />
          </div>
          {/* Sponsors Grid - Responsive */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-6 sm:mb-8">
            {sponsors.slice(0, 8).map((s) => (
              <div
                key={s.id}
                className="bg-[#FFA527] rounded-lg sm:rounded-xl md:rounded-2xl aspect-video hover:shadow-lg transition-shadow duration-300 flex items-center justify-center p-2 sm:p-3 md:p-4"
              >
                <div className="flex flex-col items-center gap-1 sm:gap-2">
                  <img
                    src={s.logo}
                    alt={s.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-cover rounded-md shadow"
                  />
                  <h3 className="text-xs sm:text-sm font-semibold text-white text-center line-clamp-2">
                    {s.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          {/* 2 centered boxes below */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            {sponsors.slice(8, 10).map((s) => (
              <div
                key={`centered-${s.id}`}
                className="bg-[#FFA527] rounded-lg sm:rounded-xl md:rounded-2xl w-24 sm:w-32 md:w-40 lg:w-48 aspect-video hover:shadow-lg transition-shadow duration-300 flex items-center justify-center p-2 sm:p-3"
              >
                <div className="flex flex-col items-center gap-1 sm:gap-2">
                  <img
                    src={s.logo}
                    alt={s.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-cover rounded-md shadow"
                  />
                  <h3 className="text-xs sm:text-sm font-semibold text-white text-center line-clamp-1">
                    {s.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Community Partners Section */}
        <div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center text-white relative">
            <span className="relative z-10">COMMUNITY PARTNERS</span>
            <span className="absolute inset-0 text-white/8 text-[64px] sm:text-[80px] md:text-[100px] lg:text-[160px] font-extrabold tracking-wider -z-10 flex items-center justify-center">
              Networks
            </span>
          </h2>
          {/* Horizontal line only */}
          <div className="flex items-center justify-center mt-4 sm:mt-5 md:mt-6 mb-8 sm:mb-10 md:mb-12">
            <span className="h-0.5 bg-gray-400 opacity-40 w-20 sm:w-24 md:w-32" />
          </div>
          {/* Community Partners Grid - Responsive */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4 lg:gap-6 mb-6 sm:mb-8">
            {communityPartners.slice(0, 8).map((p) => (
              <div
                key={`partner-${p.id}`}
                className="bg-[#FFA527] rounded-lg sm:rounded-xl md:rounded-2xl aspect-video hover:shadow-lg transition-shadow duration-300 flex items-center justify-center p-2 sm:p-3 md:p-4"
              >
                <div className="flex flex-col items-center gap-1 sm:gap-2">
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-cover rounded-md shadow"
                  />
                  <h3 className="text-xs sm:text-sm font-semibold text-white text-center line-clamp-2">
                    {p.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
          {/* 2 centered boxes below */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            {communityPartners.slice(8, 10).map((p) => (
              <div
                key={`partner-centered-${p.id}`}
                className="bg-[#FFA527] rounded-lg sm:rounded-xl md:rounded-2xl w-24 sm:w-32 md:w-40 lg:w-48 aspect-video hover:shadow-lg transition-shadow duration-300 flex items-center justify-center p-2 sm:p-3"
              >
                <div className="flex flex-col items-center gap-1 sm:gap-2">
                  <img
                    src={p.logo}
                    alt={p.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 object-cover rounded-md shadow"
                  />
                  <h3 className="text-xs sm:text-sm font-semibold text-white text-center line-clamp-1">
                    {p.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
