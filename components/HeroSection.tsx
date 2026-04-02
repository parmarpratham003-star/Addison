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

// 🔥 Counter
function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 820;
    const duration = 1200;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, []);

  return <span>{count}+</span>;
}

export function HeroSection() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  // 🔥 Scroll Animation
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

  return (
    <section
      ref={ref}
      className={`${outfit.className} w-full bg-[#eaebd0]/1 py-10 `}
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-stretch">

        {/* LEFT CONTENT (EQUAL HEIGHT) */}
        <div
          className={`flex flex-col justify-between h-full space-y-7 transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div>
            <h1
              className={`text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.15] tracking-tight text-[#2d3c59] ${cormorant.className}`}
            >
              Addison&apos;s Disease
              <span className="block mt-3">Community</span>
            </h1>

            <p className="mt-6 text-[#2d3c59]/70 text-base md:text-lg leading-relaxed max-w-xl">
              Information, support, and a free emergency card for patients and
              families. Connect with vetted endocrinologists and psychiatrists.
            </p>
            <div>
  

  {/* 🔥 Feature Bullets */}
  <div className="mt-5 space-y-3">
    
    <div className="flex items-start gap-3">
      <div className="w-2.5 h-2.5 mt-2 rounded-full bg-[#2d3c59]" />
      <p className="text-sm text-[#2d3c59]/80">
        Free emergency card for quick medical identification during critical situations
      </p>
    </div>

    <div className="flex items-start gap-3">
      <div className="w-2.5 h-2.5 mt-2 rounded-full bg-[#2d3c59]" />
      <p className="text-sm text-[#2d3c59]/80">
        Connect with verified specialists and a supportive patient community
      </p>
    </div>

  </div>
</div>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/emergency-card"
              className="bg-[#2d3c59] text-white px-7 py-3 rounded-xl text-sm font-medium tracking-wide hover:bg-[#1f2a40] transition"
            >
              Create Your Free Emergency Card →
            </Link>

            <Link
              href="/about-addisons"
              className="px-6 py-3 rounded-xl text-sm font-medium border border-[#2d3c59]/30 text-[#2d3c59] bg-white hover:bg-[#2d3c59] hover:text-white transition"
            >
              Learn About Addison&apos;s
            </Link>
          </div>
        </div>

       {/* RIGHT GRID */}
<div className="grid grid-cols-2 gap-4 sm:gap-5 h-full">

  {/* Image */}
  <div
    className={`rounded-2xl overflow-hidden h-[160px] sm:h-[200px] transition-all duration-700 delay-100 ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
    } animate-float`}
  >
    <img
      src="https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1200&q=80"
      className="w-full h-full object-cover"
      alt="Team"
    />
  </div>

  {/* Stats Card */}
  <div
    className={`bg-[#2d3c59] text-white rounded-2xl p-4 sm:p-6 flex flex-col justify-between h-[160px] sm:h-[200px] transition-all duration-700 delay-200 ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
    } hover:-translate-y-1 hover:shadow-2xl`}
  >
    <div>
      <h3 className="text-2xl sm:text-3xl font-bold">
        <Counter />
      </h3>
      <p className="text-xs sm:text-sm opacity-80 mt-1">
        Project Finish With Superbly
      </p>
    </div>

    <div className="w-full h-px bg-white/20 my-2"></div>

    <div className="flex justify-between text-xs sm:text-sm">
      <div>
        <p className="opacity-70">Success</p>
        <p className="font-semibold">98%</p>
      </div>
      <div>
        <p className="opacity-70">Users</p>
        <p className="font-semibold">1.2k+</p>
      </div>
    </div>
  </div>

  {/* Content Card */}
  <div
    className={`bg-[#2d3c59] text-white rounded-2xl p-4 sm:p-5 flex flex-col justify-center h-[160px] sm:h-[200px] transition-all duration-700 delay-300 ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
    } hover:-translate-y-1 hover:shadow-xl`}
  >
    <h3 className="text-sm sm:text-lg font-semibold leading-snug">
      Mastering <br />
      The Art Of Digital <br />
      <span className="text-[#eaebd0]">Marketing</span>
    </h3>
    <p className="text-[10px] sm:text-xs opacity-70 mt-2 sm:mt-3">
      Lorem ipsum dolor sit amet consectetur.
    </p>
  </div>

  {/* Image */}
  <div
    className={`relative rounded-2xl overflow-hidden h-[160px] sm:h-[200px] transition-all duration-700 delay-500 ${
      visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
    } animate-float delay-200`}
  >
    <img
      src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1200&auto=format&fit=crop"
      className="w-full h-full object-cover"
      alt="Work"
    />

    <div className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-[#eaebd0] text-[#2d3c59] w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full shadow">
      ↗
    </div>
  </div>

</div>

        </div>
   
    </section>
  );
}