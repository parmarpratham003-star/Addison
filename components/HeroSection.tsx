"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Cormorant_Garamond, Outfit } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export function HeroSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const images = ["Hero1.png", "Hero2.png"]; // 👈 add second image

  // scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // 🔥 auto slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // 🔥 split words for animation
  const text = "Addison's Disease Community".split(" ");

  return (
    <section
      ref={ref}
      className="relative w-full min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* 🌄 Background Slider */}
      <div className="absolute inset-0">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              currentImage === index ? "opacity-100" : "opacity-0"
            }`}
            alt="Background"
          />
        ))}

        {/* gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-10 items-center">
        {/* LEFT CONTENT */}
        <div
  className={`lg:pl-8 xl:pl-12 transition-all duration-700 ${
    visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
  }`}
>
          {/* 🔥 WORD ANIMATION */}
        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.1] text-[#f5f5f5] ${cormorant.className}`}>
            {text.map((word, i) => (
              <span
                key={i}
                className="inline-block mr-2 opacity-0 animate-word"
                style={{
                  animationDelay: `${i * 0.3}s`,
                }}
              >
                {word}
              </span>
            ))}
          </h1>

         <p className="mt-6 text-[#f5f5f5]/70 text-base md:text-lg max-w-xl">
            Information, support, and a free emergency card for patients and families.
            Connect with trusted doctors and a supportive community.
          </p>

         <div className="mt-6 space-y-3">
  <div className="flex gap-3">
    <div className="w-2 h-2 mt-2 rounded-full bg-[#f5f5f5]" />
    <p className="text-sm text-[#f5f5f5]/70">
      Free emergency card for quick medical identification
    </p>
  </div>

  <div className="flex gap-3">
    <div className="w-2 h-2 mt-2 rounded-full bg-[#f5f5f5]" />
    <p className="text-sm text-[#f5f5f5]/70">
      Connect with verified specialists & community
    </p>
  </div>
</div>

          {/* Buttons */}
          <div className="flex gap-4 mt-8">
  {/* Button 1 */}
  <Link
    href="/emergency-card"
    className="group relative overflow-hidden bg-[#2d3c59] text-[#f5f5f5]/70 px-7 py-3 rounded-xl text-sm font-medium border border-[#2d3c59] transition-all duration-300 hover:bg-transparent hover:text-[#eaebd0] hover:border-[#eaebd0]/50 hover:shadow-lg"
  >
    <span className="relative z-10">Get Emergency Help</span>

    {/* Shine */}
    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
  </Link>

  {/* Button 2 */}
  <Link
    href="/about-addisons"
    className="group relative overflow-hidden px-6 py-3 rounded-xl text-sm font-medium border border-[#eaebd0]/50 text-[#f5f5f5]/70 transition-all duration-300 hover:bg-[#2d3c59] hover:border-[#2d3c59] hover:shadow-lg"
  >
    <span className="relative z-10">Learn More</span>

    {/* Shine */}
    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-full transition-transform duration-700 ease-in-out"></span>
  </Link>
</div>
        </div>

        {/* RIGHT EMPTY */}
        <div></div>
      </div>

      {/* 🔥 Animations */}
      <style jsx>{`
        .animate-word {
          animation: fadeUp 0.6s ease forwards;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}