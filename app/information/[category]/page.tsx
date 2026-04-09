"use client";

import Link from "next/link";
import { notFound } from "next/navigation";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { use } from "react";
import { motion } from "framer-motion";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-outfit",
});

const content: Record<string, any> = {
  medications: {
    title: "Medications",
    images: {
      hero: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=2000",
      left1: "https://images.unsplash.com/photo-1583454110551-21f2fa20211c?q=80&w=800",
      left2: "https://images.unsplash.com/photo-1576091160550-2173bdb999ef?q=80&w=800",
      right: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=1000",
      bottom1: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=800",
      bottom2: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=800",
    },
    sections: {
      main: [
        "Hydrocortisone: Taken 2–3 times daily in divided doses.",
        "Never skip doses to maintain hormone stability.",
        "Increase dose during illness, injury, or stress.",
        "Fludrocortisone: Vital for managing salt and water balance.",
      ],
      extra: [
        "Always keep an emergency hydrocortisone injection kit.",
        "Inject 100 mg intramuscularly if crisis signs appear.",
        "Ensure family members are trained for emergencies.",
      ],
    },
  },
  diet: {
    title: "Diet & Nutrition",
    images: {
      hero: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2000",
      left1: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800",
      left2: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=800",
      right: "https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1000",
      bottom1: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800",
      bottom2: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=800",
    },
    sections: {
      main: [
        "Increase salt intake during heat or exercise.",
        "Stay consistently hydrated to manage blood pressure.",
        "Eat regular, balanced meals to stabilize blood sugar.",
        "Avoid excessive alcohol to prevent cortisol interference.",
      ],
      extra: [
        "Carry salty snacks for unexpected physical exertion.",
        "Maintain a balanced diet rich in essential minerals.",
      ],
    },
  },
  stress: {
    title: "Stress Management",
    images: {
        hero: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2000",
        left1: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=800",
        left2: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=800",
        right: "https://images.unsplash.com/photo-1526401485004-2fda9f2b3c11?q=80&w=1000",
        bottom1: "https://images.unsplash.com/photo-1516585424572-c07344e22218?q=80&w=800",
        bottom2: "https://images.unsplash.com/photo-1474418397713-7ded018049cb?q=80&w=800",
      },
      sections: {
        main: [
          "Apply stress dosing during fever or infection.",
          "Double or triple medication if symptoms persist.",
          "Strictly follow your endocrinologist’s sick-day plan.",
        ],
        extra: [
          "Professional mental health support is recommended.",
          "Prioritize rest and manage overall workload.",
        ],
      },
  },
  travel: {
    title: "Travel Tips",
    images: {
        hero: "https://images.unsplash.com/photo-1436491865332-7a61a109c0f2?q=80&w=2000",
        left1: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800",
        left2: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=800",
        right: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?q=80&w=1000",
        bottom1: "https://images.unsplash.com/photo-1517084459274-124bdc449334?q=80&w=800",
        bottom2: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800",
      },
      sections: {
        main: [
          "Carry double the amount of required medication.",
          "Keep all medications in your hand luggage.",
          "Always carry a recent official doctor’s letter.",
        ],
        extra: [
          "Research emergency care facilities at your destination.",
          "Adjust dosing schedule for different time zones.",
        ],
      },
  }
};

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const resolvedParams = use(params);
  const category = resolvedParams.category;
  
  const data = content[category];
  if (!data) notFound();

  return (
    <section 
      className={`${cormorant.variable} ${outfit.variable} min-h-screen bg-white py-20 px-6 sm:px-10 lg:px-20 relative overflow-hidden`}
      style={{ fontFamily: "var(--font-outfit)" }}
    >
      {/* 🌫️ MEDICAL TEXTURE BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_20%_30%,#2d3c59_1px,transparent_1px)] bg-[length:32px_32px]" />
      
      <div className="relative z-12 max-w-[1100px] mx-auto">
        
        {/* BACK NAVIGATION */}
        <motion.div {...fadeInUp}>
          <Link href="/information" className="inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.3em] text-[#2d3c59]/40 hover:text-[#2d3c59] transition-colors mb-12">
            <span>←</span> Back to Hub
          </Link>
        </motion.div>

        {/* HEADER SECTION */}
        <motion.div className="mb-12" {...fadeInUp}>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#94a378]" />
            <span className="text-[0.7rem] uppercase tracking-[0.4em] text-[#94a378] font-bold">Clinical Resource</span>
          </div>
          <h1 className="text-[3.5rem] md:text-[5rem] text-[#2d3c59] leading-[1.1]" style={{ fontFamily: "var(--font-cormorant)" }}>
            {data.title.split(' ')[0]} <span className="italic font-light text-[#2d3c59]/60">{data.title.split(' ').slice(1).join(' ')}</span>
          </h1>
        </motion.div>

        {/* HERO IMAGE */}
        <motion.div 
          className="relative w-full h-[450px] mb-12 grayscale hover:grayscale-0 transition-all duration-1000 overflow-hidden border border-[#2d3c59]/10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.img 
            src={data.images.hero} 
            className="w-full h-full object-cover" 
            alt="hero" 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.8 }}
          />
          <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md px-6 py-3 text-[10px] uppercase tracking-[0.4em] text-[#2d3c59] font-bold">
            Visual Reference // {category}
          </div>
        </motion.div>

        {/* GRID 1: ASYMMETRIC COLLAGE */}
        <motion.div 
            className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
          {/* LEFT: IMAGE STACK */}
          <div className="md:col-span-3 flex flex-col gap-6">
            {[data.images.left1, data.images.left2].map((img, i) => (
              <motion.div key={i} className="h-52 overflow-hidden border border-[#2d3c59]/5 grayscale opacity-80" variants={fadeInUp}>
                <motion.img src={img} className="w-full h-full object-cover" whileHover={{ scale: 1.1 }} alt="ref" />
              </motion.div>
            ))}
          </div>

          {/* CENTER: MAIN CLINICAL BOX */}
          <motion.div 
            className="md:col-span-5 bg-[#f5f7fa] p-12 relative flex flex-col justify-center border-l-4 border-[#94a378]"
            variants={fadeInUp}
          >
            <span className="text-[10px] uppercase tracking-[0.4em] text-[#2d3c59]/40 mb-8 block font-bold">Standard Guidelines</span>
            <ul className="space-y-8">
              {data.sections.main.map((item: string, i: number) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="text-[#94a378] text-sm mt-1 font-bold">+</span>
                  <p className="text-[1.05rem] leading-relaxed text-[#2d3c59]/80 font-light italic">{item}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT: TALL IMAGE */}
          <motion.div className="md:col-span-4 h-full min-h-[400px] overflow-hidden border border-[#2d3c59]/10" variants={fadeInUp}>
            <motion.img src={data.images.right} className="w-full h-full object-cover grayscale" whileHover={{ scale: 1.05 }} alt="right" />
          </motion.div>
        </motion.div>

        {/* GRID 2: BOTTOM PROTOCOL */}
        <motion.div 
            className="grid grid-cols-1 md:grid-cols-12 gap-6"
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
        >
          {/* LEFT: EXTRA SAFETY BOX */}
          <motion.div className="md:col-span-4 bg-[#2d3c59] p-12 text-white relative flex flex-col justify-center overflow-hidden" variants={fadeInUp}>
            <div className="absolute top-0 right-0 p-4 text-[6rem] font-bold text-white/5 pointer-events-none">!</div>
            <span className="text-[10px] uppercase tracking-[0.4em] text-white/40 mb-8 block font-bold tracking-widest">Safety Protocol</span>
            <div className="space-y-6">
              {data.sections.extra.map((item: string, i: number) => (
                <div key={i} className="border-l border-white/20 pl-6 py-1">
                  <p className="text-[1rem] leading-relaxed text-white/80 font-light">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div className="md:col-span-4 h-72 overflow-hidden grayscale opacity-70 border border-[#2d3c59]/5" variants={fadeInUp}>
            <motion.img src={data.images.bottom1} className="w-full h-full object-cover" whileHover={{ scale: 1.1 }} alt="b1" />
          </motion.div>
          <motion.div className="md:col-span-4 h-72 overflow-hidden grayscale opacity-70 border border-[#2d3c59]/5" variants={fadeInUp}>
            <motion.img src={data.images.bottom2} className="w-full h-full object-cover" whileHover={{ scale: 1.1 }} alt="b2" />
          </motion.div>
        </motion.div>

        {/* FOOTER */}
        <motion.div 
            className="mt-24 pt-10 border-t border-[#2d3c59]/10 flex justify-between items-center opacity-40"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
        >
           <p className="text-[10px] uppercase tracking-[0.4em] text-[#2d3c59] font-bold">Addison's Disease Information Protocol // Reference 2024</p>
           <div className="w-3 h-3 rounded-full bg-[#94a378]" />
        </motion.div>

      </div>
    </section>
  );
}