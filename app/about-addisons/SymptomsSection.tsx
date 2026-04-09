"use client";

import Image from "next/image";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { AlertCircle } from "lucide-react";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
});

const symptoms = [
  { 
    text: "Extreme fatigue and weakness", 
    size: "large", 
    img: "https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?q=80&w=1200&auto=format&fit=crop" 
  },
  { 
    text: "Weight loss and loss of appetite", 
    size: "small", 
    img: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    text: "Darkening of the skin (hyperpigmentation)", 
    size: "medium", 
    img: "https://images.unsplash.com/photo-1614289371518-722f2615943d?q=80&w=800&auto=format&fit=crop"  // ✅ changed
  },
  { 
    text: "Low blood pressure, dizziness", 
    size: "small", 
    img: "https://images.unsplash.com/photo-1542332213-31f87348057f?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    text: "Salt craving", 
    size: "small", 
    img: "https://images.unsplash.com/photo-1518110925495-5fe2fda0442c?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    text: "Nausea, vomiting, diarrhea", 
    size: "medium", 
    img: "https://images.unsplash.com/photo-1584030373081-f37b7bb4fa8e?q=80&w=800&auto=format&fit=crop" 
  },
  { 
    text: "Muscle or joint pains", 
    size: "small", 
    img: "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=800&auto=format&fit=crop"  // ✅ changed
  },
  { 
    text: "Irritability or depression", 
    size: "medium", 
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=800&auto=format&fit=crop" 
  },
];

export function SymptomsSection() {
  return (
    <section
      className={`${cormorant.variable} ${outfit.variable} bg-[#2d3c59] py-24 px-6 lg:px-20 overflow-hidden`}
      style={{ fontFamily: "var(--font-outfit)" }}
    >
      <div className="max-w-7xl mx-auto">
        
        {/* TOP SECTION */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
             
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#eaebd0]/50 font-medium">
                Clinical Presentation
              </span>
            </div>
            
            <h2
              className="text-[3.5rem] sm:text-[5rem] leading-[0.95] text-[#eaebd0]"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Symp<span className=" text-[#eaebd0]/40 font-light">toms</span>
            </h2>
          </div>

        <div className="lg:max-w-sm text-left lg:text-right">
  <p className="text-[13px] leading-relaxed text-[#eaebd0]/50">
    "Early-stage Addison's is frequently misattributed to stress. A simple blood test can confirm adrenal insufficiency."
  </p>
</div>
        </div>

        {/* ASYMMETRICAL BENTO GRID WITH IMAGES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[130px]">
          {symptoms.map((item, i) => (
            <div
              key={i}
              className={`
                group relative p-6 rounded-2xl border border-[#eaebd0]/10 overflow-hidden
                flex flex-col justify-end transition-all duration-500 hover:-translate-y-1
                ${item.size === "large" ? "lg:col-span-2 lg:row-span-2" : ""}
                ${item.size === "medium" ? "lg:row-span-2" : ""}
                ${item.size === "small" ? "lg:col-span-1 lg:row-span-1" : ""}
              `}
            >
              {/* IMAGE LAYER */}
              <Image
                src={item.img}
                alt={item.text}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                
              />

              {/* REDUCED OVERLAY — from via-80%/to-40% down to via-50%/to-10% */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2d3c59]/90 via-[#2d3c59]/40 to-[#2d3c59]/10 transition-opacity duration-500 group-hover:opacity-50" />

              {/* CONTENT LAYER */}
              <div className="relative z-10">
                {/* DECORATIVE NUMBER */}
               

                {/* ICON FOR LARGE CARD */}
                {item.size === "large" && (
                  <div className="absolute -top-16 right-0 text-[#eaebd0]/40">
                    
                  </div>
                )}

                <p className={`
                  text-[#eaebd0] leading-snug tracking-wide
                  ${item.size === "large" ? "text-2xl sm:text-3xl font-light" : "text-[15px] font-normal"}
                `}>
                  {item.text}
                </p>

                {/* ACCENT LINE ON HOVER */}
                <div className="w-0 h-[1.5px] bg-[#eaebd0]/40 mt-3 transition-all duration-500 group-hover:w-12 rounded-full" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}