import React, { useEffect, useRef, useState } from "react";
import avatar from "../../assets/Gemini_Generated_Image_ch3u0vch3u0vch3u.png";

const testimonialsData = [
  {
    name: "Mary Hill",
    role: "Participant",
    text: "Amazing experience — the team helped me grow and learn. Highly recommend!",
    rating: 5,
    image: avatar,
  },
  {
    name: "Ravi Kumar",
    role: "Sponsor",
    text: "A wonderful platform to meet talented people and collaborate.",
    rating: 5,
    image: avatar,
  },
  {
    name: "John Doe",
    role: "Attendee",
    text: "Great community and excellent resources for developers.",
    rating: 4,
    image: avatar,
  },
  {
    name: "Aisha Khan",
    role: "Volunteer",
    text: "Loved the energy and the workshops were top-notch.",
    rating: 5,
    image: avatar,
  },
  {
    name: "Patricia OKeefe",
    role: "Customer",
    text: "Professional and supportive. The mentorship was outstanding.",
    rating: 5,
    image: avatar,
  },
  {
    name: "Kimberly Stone",
    role: "Speaker",
    text: "The event was very well organized and impactful!",
    rating: 5,
    image: avatar,
  },
  {
    name: "Liam Moore",
    role: "Student",
    text: "Learned a lot and met amazing people.",
    rating: 4,
    image: avatar,
  },
  {
    name: "Sarah Johnson",
    role: "Developer",
    text: "Incredible networking opportunities and fantastic workshops!",
    rating: 5,
    image: avatar,
  },
  {
    name: "Michael Chen",
    role: "Mentor",
    text: "Inspiring young talent and seeing their growth was rewarding.",
    rating: 5,
    image: avatar,
  },
  {
    name: "Emma Wilson",
    role: "Designer",
    text: "Best hackathon experience. Great energy and supportive community!",
    rating: 5,
    image: avatar,
  },
];

export default function Testimonials() {
  // Duplicate cards to show 2 at a time seamlessly
  const items = [...testimonialsData, ...testimonialsData];

  return (
    <section
      id="testimonials"
      className="py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14 relative">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white relative z-10">
            Testimonials
          </h2>

          {/* Horizontal line only */}
          <div className="flex items-center justify-center mt-4 sm:mt-5 md:mt-6 mb-6 sm:mb-7 md:mb-8">
            <span className="h-0.5 bg-gray-400 opacity-40 w-20 sm:w-24 md:w-32" />
          </div>

          <div className="pointer-events-none absolute inset-0 flex justify-center items-center -z-10">
            <span className="text-[64px] sm:text-[80px] md:text-[100px] lg:text-[160px] font-extrabold tracking-wider text-white/8">
              Stories
            </span>
          </div>
        </div>

        {/* 2-Card Marquee Carousel */}
        <div className="marquee overflow-hidden">
          <style>{`
            .marquee { width: 100%; }
            .marquee .track { display: flex; gap: 16px; padding: 4px 0; }
            .marquee .track > * { flex: 0 0 calc(50% - 8px); }
            @media (max-width: 640px) {
              .marquee .track { gap: 12px; padding: 4px 0; }
              .marquee .track > * { flex: 0 0 100%; }
            }
            @media (min-width: 641px) and (max-width: 1024px) {
              .marquee .track { gap: 16px; }
              .marquee .track > * { flex: 0 0 calc(50% - 8px); }
            }
            .marquee .track { animation: scroll-left 10s linear infinite; }
            .marquee:hover .track { animation-play-state: paused; }
            @keyframes scroll-left {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>

          <div className="track">
            {items.map((t, i) => (
              <article
                key={i}
                className="bg-white text-gray-900 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex gap-3 sm:gap-4 md:gap-5 items-start">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg object-cover shadow flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-2">
                      <h3 className="text-base sm:text-lg md:text-xl font-semibold truncate">
                        {t.name}
                      </h3>
                      <span className="text-xs sm:text-sm text-gray-500 whitespace-nowrap">
                        {t.role}
                      </span>
                    </div>
                    <p className="text-gray-600 mt-2 sm:mt-3 md:mt-3 text-xs sm:text-sm line-clamp-2 sm:line-clamp-3">
                      {t.text}
                    </p>
                    <div className="mt-3 sm:mt-4 flex items-center gap-1 text-yellow-500 text-xs sm:text-sm">
                      {Array.from({ length: t.rating }).map((_, k) => (
                        <span key={k}>★</span>
                      ))}
                      {Array.from({ length: 5 - t.rating }).map((_, k) => (
                        <span key={`e-${k}`} className="text-gray-300">
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
