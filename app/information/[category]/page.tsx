  "use client";

  import Link from "next/link";
  import { notFound } from "next/navigation";
  import { Cormorant_Garamond, Outfit } from "next/font/google";
  import { use } from "react";
  import { motion, Variants } from "framer-motion";

  const cormorant = Cormorant_Garamond({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    style: ["normal"],
    variable: "--font-cormorant",
  });

  const outfit = Outfit({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600"],
    variable: "--font-outfit",
  });

  const content: Record<string, any> = {
    medications: {
      title: "Medications",
      images: {
        hero: "https://plus.unsplash.com/premium_photo-1663936756535-6c29f2dc04a4?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        img1: "https://plus.unsplash.com/premium_photo-1676325101744-ce4a45a331c7?q=80&w=870",
        img2: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?q=80&w=800",
        img3: "https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?q=80&w=1000",
        img4: "https://images.unsplash.com/photo-1628771065518-0d82f1938462?w=500",
        img5: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?q=80&w=800",
      },
      sections: {
        main: ["Hydrocortisone: 2–3 daily doses.", "Maintain hormone stability.", "Increase dose during stress.", "Fludrocortisone for salt balance."],
        extra: ["Keep emergency injection kit.", "Inject 100 mg for crisis.", "Train family for emergencies."],
      },
    },
    diet: {
      title: "Diet & Nutrition",
      images: {
          hero: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2000",
          img1: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800",
          img2: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=800",
          img3: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1000",
          img4: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800",
          img5: "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=800",
      },
      sections: {
        main: ["Increase salt during heat.", "Hydrate for blood pressure.", "Eat regular meals.", "Limit alcohol consumption."],
        extra: ["Carry salty snacks.", "Maintain mineral balance."],
      },
    },
    stress: {
      title: "Stress Management",
      images: {
          hero: "https://images.unsplash.com/photo-1564121211835-e88c852648ab?q=80&w=870",
          img1: "https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=800",
          img2: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&w=870",
          img3: "https://images.unsplash.com/photo-1774205884989-37f0f2271503?q=80&w=881",
          img4: "https://images.unsplash.com/photo-1759215524566-8aea4761a926?q=80&w=870",
          img5: "https://images.unsplash.com/photo-1558021212-51b6ecfa0db9?q=80&w=883",
      },
      sections: {
        main: ["Dose during fever/infection.", "Adjust for persistent symptoms.", "Follow sick-day protocols."],
        extra: ["Mental health support.", "Manage total rest workload."],
      },
    },
    travel: {
      title: "Travel Tips",
      images: {
          hero: "https://images.unsplash.com/flagged/photo-1558954157-7104f14c2ecc?q=80&w=1032",
          img1: "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?q=80&w=800",
          img2: "https://images.unsplash.com/photo-1496950866446-3253e1470e8e?q=80&w=870",
          img3: "https://images.unsplash.com/photo-1530789253388-582c481c54b0?q=80&w=1000",
          img4: "https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=800",
          img5: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800",
      },
      sections: {
        main: ["Carry double medication.", "Hand luggage only for meds.", "Official doctor letter required."],
        extra: ["Research destination care.", "Plan for time zone shifts."],
      },
    }
  };

  const scrollReveal: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  const ProtocolImage = ({ src, className }: { src: string, className?: string }) => (
    <motion.div 
      variants={scrollReveal}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      className={`overflow-hidden bg-slate-200 group ${className}`}
    >
      <img 
        src={src} 
        className="w-full h-full object-cover grayscale transition-all duration-500 ease-in-out group-hover:grayscale-0" 
        alt="Protocol visual" 
      />
    </motion.div>
  );

  export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const resolvedParams = use(params);
    const category = resolvedParams.category;
    const data = content[category];
    
    if (!data) notFound();

    return (
      <section className={`${cormorant.variable} ${outfit.variable} min-h-screen bg-[#fcfcfc] py-8 sm:py-12 px-4 sm:px-10 lg:px-20`} style={{ fontFamily: "var(--font-outfit)" }}>
        <div className="max-w-[1100px] mx-auto">
          
          {/* TOP NAV */}
          <motion.div initial="hidden" animate="visible" variants={scrollReveal} className="mb-8">
            <Link href="/information" className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-[#2d3c59]/40 hover:text-[#94a378] transition-colors font-bold">
              ← Information Hub 
            </Link>
          </motion.div>

          {/* HEADER SECTION */}
          <motion.div 
            className="mb-8 sm:mb-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scrollReveal}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className="h-[2px] w-8 bg-[#94a378]" />
              <span className="text-[10px] uppercase tracking-[0.4em] text-[#94a378] font-bold">Protocol {category}</span>
            </div>
            <h1 className="text-[5rem] text-[#2d3c59] leading-[1.1] tracking-tight" style={{ fontFamily: "var(--font-cormorant)" }}>
              {data.title.split(' ')[0]} <span className="font-light text-[#2d3c59]/20">{data.title.split(' ').slice(1).join(' ')}</span>
            </h1>
          </motion.div>

          {/* --- MAIN LAYOUT --- */}
          <div className="flex flex-col gap-8 sm:gap-12">
            
            {/* ROW 1: Hero + Intro */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start">
              <div className="lg:col-span-8">
                <ProtocolImage src={data.images.hero} className=" sm:h-[300px] rounded-sm" />
              </div>
              <motion.div 
                className="lg:col-span-4 lg:pt-4" 
                variants={scrollReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <p className="text-lg sm:text-xl font-light text-[#2d3c59]/70 leading-relaxed font-serif" style={{ fontFamily: "var(--font-cormorant)" }}>
                    Adhering to clinical guidelines ensures long-term stability and crisis prevention. 
                </p>
                <div className="mt-4 pt-4 border-t border-[#2d3c59]/10">
                    <p className="text-[10px] uppercase tracking-widest leading-loose opacity-40 font-bold">
                      Daily maintenance and emergency readiness requirements.
                    </p>
                </div>
              </motion.div>
            </div>

            {/* ROW 2: Interlocking Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
              
              {/* Left Column */}
              <div className="hidden md:flex lg:col-span-3 flex-col gap-6">
                <ProtocolImage src={data.images.img1} className="h-80" />
                <ProtocolImage src={data.images.img2} className="h-80" />
              </div>

              {/* Middle Column */}
              <div className="lg:col-span-6 flex flex-col gap-8">
                  <motion.div 
                    className="py-6 border-y border-[#2d3c59]/10"
                    variants={scrollReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <h2 className="text-[9px] uppercase tracking-[0.4em] text-[#2d3c59]/40 mb-6 font-bold">Maintenance Protocol</h2>
                    <ul className="space-y-4">
                      {data.sections.main.map((item: string, i: number) => (
                        <li key={i} className="flex items-center gap-4">
                          <span className="text-[9px] font-bold text-[#94a378] opacity-60">0{i+1}</span>
                          <p className="text-[#2d3c59] text-base sm:text-lg font-light tracking-tight">
                            {item}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </motion.div>

                  <motion.div 
                    className="bg-[#2d3c59] p-6 sm:p-8 text-white relative overflow-hidden"
                    variants={scrollReveal}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    <h2 className="text-[9px] uppercase tracking-[0.4em] text-white/40 mb-6 font-bold">Safety Standards</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {data.sections.extra.map((item: string, i: number) => (
                          <div key={i} className="flex flex-col gap-1">
                            <div className="w-4 h-[1px] bg-[#94a378]" />
                            <p className="text-[13px] font-light text-white/70 leading-relaxed uppercase tracking-wide">{item}</p>
                          </div>
                        ))}
                    </div>
                  </motion.div>

                  <ProtocolImage src={data.images.img3} className="h-56" />
              </div>

              {/* Right Column */}
              <div className="lg:col-span-3 flex flex-col gap-6">
                <ProtocolImage src={data.images.img4} className="h-80" />
                <motion.div 
                  className="p-6 border border-[#2d3c59]/5 bg-white"
                  variants={scrollReveal}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                    <p className="text-[9px] uppercase tracking-[0.3em] font-bold opacity-30 mb-2">Reference</p>
                    <p className="text-[11px] leading-relaxed text-[#2d3c59]/60">Consult your doctor before making adjustments to dosages.</p>
                </motion.div>
                <ProtocolImage src={data.images.img5} className="h-56" />
              </div>

            </div>

          </div>  
        </div>
      </section>
    );
  }