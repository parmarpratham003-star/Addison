import Link from "next/link";
import { DM_Serif_Display, DM_Sans } from "next/font/google";

const dmSerif = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-display",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

export function ResourcesSection() {
  return (
    <section
      className={`${dmSerif.variable} ${dmSans.variable}`}
      style={{
        background: "#fff",
        fontFamily: "var(--font-body), 'DM Sans', sans-serif",
        padding: "96px 0 120px",
      }}
    >
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "0 48px" }}>

        {/* ── Header ── */}
        <div style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: 56,
          gap: 24,
          flexWrap: "wrap",
        }}>
          <div>
            <p style={{
              fontSize: 10,
              letterSpacing: "0.24em",
              textTransform: "uppercase",
              color: "rgba(15,20,50,0.36)",
              fontWeight: 600,
              margin: "0 0 14px",
            }}>
              Knowledge Base
            </p>
            <h2 style={{
              fontFamily: "var(--font-display), 'DM Serif Display', serif",
              fontSize: "clamp(36px, 4vw, 54px)",
              fontWeight: 400,
              color: "#0f1432",
              lineHeight: 1.06,
              margin: 0,
            }}>
              Resources<br />
              <span style={{ color: "rgba(15,20,50,0.26)" }}>&amp; Guides</span>
            </h2>
          </div>
          <p style={{
            maxWidth: 196,
            fontSize: 13,
            fontWeight: 300,
            lineHeight: 1.9,
            color: "rgba(15,20,50,0.42)",
            margin: 0,
          }}>
            Curated information, professional directories, and emergency support
          </p>
        </div>

        {/* ── Cards grid ── */}
        {/* Row 1: 3 cards */}
        <div style={{ display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr", gap: 14, marginBottom: 14 }}>

          {/* Emergency — tall hero card */}
          <Link href="/emergency" className="img-card img-card--hero" style={{
            borderRadius: 18,
            overflow: "hidden",
            display: "block",
            position: "relative",
            textDecoration: "none",
            minHeight: 480,
          }}>
            <img
              src="https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=800&q=85"
              alt="Emergency care"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />
            {/* Permanent subtle bottom gradient for tag readability */}
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(8,12,30,0.55) 0%, transparent 45%)",
            }} />
            {/* Tag always visible */}
            <span style={{
              position: "absolute", top: 20, left: 20,
              fontSize: 9.5, fontWeight: 600, letterSpacing: "0.22em",
              textTransform: "uppercase", color: "rgba(255,255,255,0.65)",
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.18)",
              padding: "5px 10px", borderRadius: 6,
            }}>Emergency</span>
            {/* Hover overlay */}
            <div className="hover-overlay hover-overlay--dark" />
            <div className="hover-content">
              <h3 className="hover-title">Addisonian<br />Crisis Info</h3>
              <p className="hover-desc">Recognize symptoms, respond quickly, and manage critical emergencies with confidence.</p>
              <p style={{ fontSize: 10.5, color: "rgba(255,255,255,0.28)", margin: "0 0 22px", letterSpacing: "0.04em" }}>
                Emergency signs · Treatment steps · Prevention
              </p>
              <div className="hover-cta">
                <span>Explore</span>
                <span className="h-arrow">→</span>
              </div>
            </div>
          </Link>

          {/* Blog — portrait with diagonal clip */}
          <Link href="/blog" className="img-card img-card--clip" style={{
            borderRadius: 18,
            overflow: "hidden",
            display: "block",
            position: "relative",
            textDecoration: "none",
            minHeight: 480,
          }}>
            <img
              src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&q=85"
              alt="Blog"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(8,12,30,0.5) 0%, transparent 40%)",
            }} />
            <span style={{
              position: "absolute", top: 20, left: 20,
              fontSize: 9.5, fontWeight: 600, letterSpacing: "0.22em",
              textTransform: "uppercase", color: "rgba(255,255,255,0.65)",
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.18)",
              padding: "5px 10px", borderRadius: 6,
            }}>Articles</span>
            <div className="hover-overlay hover-overlay--navy" />
            <div className="hover-content">
              <h3 className="hover-title">Blog</h3>
              <p className="hover-desc">Patient stories, expert insights, and practical guidance for daily life.</p>
              <div className="hover-cta">
                <span>Explore</span>
                <span className="h-arrow">→</span>
              </div>
            </div>
          </Link>

          {/* Directory — portrait */}
          <Link href="/directory" className="img-card img-card--clip" style={{
            borderRadius: 18,
            overflow: "hidden",
            display: "block",
            position: "relative",
            textDecoration: "none",
            minHeight: 480,
          }}>
            <img
              src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=85"
              alt="Find professionals"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(8,12,30,0.5) 0%, transparent 40%)",
            }} />
            <span style={{
              position: "absolute", top: 20, left: 20,
              fontSize: 9.5, fontWeight: 600, letterSpacing: "0.22em",
              textTransform: "uppercase", color: "rgba(255,255,255,0.65)",
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.18)",
              padding: "5px 10px", borderRadius: 6,
            }}>Directory</span>
            <div className="hover-overlay hover-overlay--navy" />
            <div className="hover-content">
              <h3 className="hover-title">Find Professionals</h3>
              <p className="hover-desc">Connect with trusted endocrinologists who specialise in Addison&apos;s disease.</p>
              <div className="hover-cta">
                <span>Explore</span>
                <span className="h-arrow">→</span>
              </div>
            </div>
          </Link>

        </div>

        {/* Row 2: wide landscape card + quote */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 0.48fr", gap: 14 }}>

          {/* Information Hub — wide landscape */}
          <Link href="/information" className="img-card img-card--wide" style={{
            borderRadius: 18,
            overflow: "hidden",
            display: "block",
            position: "relative",
            textDecoration: "none",
            height: 240,
          }}>
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1000&q=85"
              alt="Information hub"
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }}
            />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to right, rgba(8,12,30,0.55) 0%, transparent 60%)",
            }} />
            <span style={{
              position: "absolute", top: 22, left: 22,
              fontSize: 9.5, fontWeight: 600, letterSpacing: "0.22em",
              textTransform: "uppercase", color: "rgba(255,255,255,0.65)",
              background: "rgba(255,255,255,0.12)",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              border: "1px solid rgba(255,255,255,0.18)",
              padding: "5px 10px", borderRadius: 6,
            }}>Guides</span>
            <div className="hover-overlay hover-overlay--sage" />
            <div className="hover-content hover-content--wide">
              <h3 className="hover-title">Information Hub</h3>
              <p className="hover-desc" style={{ maxWidth: 380 }}>Verified knowledge, symptoms, and care strategies for everyday management.</p>
              <div className="hover-cta">
                <span>Explore</span>
                <span className="h-arrow">→</span>
              </div>
            </div>
          </Link>

          {/* Quote accent */}
          <div style={{
            borderRadius: 18,
            background: "#f4f5f8",
            border: "1px solid rgba(15,20,50,0.07)",
            padding: "30px 28px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: 240,
            boxSizing: "border-box",
          }}>
            <p style={{
              fontFamily: "var(--font-display), 'DM Serif Display', serif",
              fontSize: 22,
              fontWeight: 400,
              color: "rgba(15,20,50,0.42)",
              lineHeight: 1.38,
              margin: 0,
            }}>
              Your health,<br />
              <span style={{ color: "rgba(15,20,50,0.24)" }}>informed.</span>
            </p>
            <div style={{ display: "flex", gap: 4 }}>
              <div style={{ width: 22, height: 1, background: "rgba(15,20,50,0.12)" }} />
              <div style={{ width: 6, height: 1, background: "rgba(15,20,50,0.06)" }} />
            </div>
          </div>

        </div>
      </div>

      <style>{`
        /* ── Image card base ── */
        .img-card {
          cursor: pointer;
        }
        .img-card img {
          transition: transform 0.6s cubic-bezier(0.4,0,0.2,1);
        }
        .img-card:hover img {
          transform: scale(1.05);
        }

        /* ── Hover overlay ── */
        .hover-overlay {
          position: absolute;
          inset: 0;
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .hover-overlay--dark  { background: rgba(8,14,38,0.72); backdrop-filter: blur(2px); }
        .hover-overlay--navy  { background: rgba(14,24,64,0.75); backdrop-filter: blur(2px); }
        .hover-overlay--sage  { background: rgba(30,60,40,0.68); backdrop-filter: blur(2px); }

        .img-card:hover .hover-overlay { opacity: 1; }

        /* ── Hover content ── */
        .hover-content {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 28px 28px 32px;
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.38s ease, transform 0.38s cubic-bezier(0.4,0,0.2,1);
        }
        .hover-content--wide {
          justify-content: center;
          padding: 28px 36px;
        }
        .img-card:hover .hover-content {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Hover text ── */
        .hover-title {
          font-family: var(--font-display), 'DM Serif Display', serif;
          font-size: 28px;
          font-weight: 400;
          color: rgba(255,255,255,0.88);
          line-height: 1.18;
          margin: 0 0 12px;
        }
        .hover-desc {
          font-size: 13px;
          font-weight: 300;
          line-height: 1.78;
          color: rgba(255,255,255,0.52);
          margin: 0 0 18px;
        }
        .hover-cta {
          display: flex;
          align-items: center;
          gap: 7px;
        }
        .hover-cta span:first-child {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.42);
          transition: color 0.25s ease;
        }
        .h-arrow {
          font-size: 14px;
          color: rgba(255,255,255,0.42);
          display: inline-block;
          transition: transform 0.28s ease, color 0.25s ease;
        }
        .img-card:hover .hover-cta span:first-child { color: rgba(255,255,255,0.75); }
        .img-card:hover .h-arrow { transform: translateX(5px); color: rgba(255,255,255,0.75); }

        /* ── Unique card shapes ── */
        /* Hero — slight inner shadow ring */
        .img-card--hero {
          box-shadow: 0 0 0 1px rgba(255,255,255,0.06), 0 8px 32px rgba(10,16,40,0.14);
        }
        /* Clip cards — subtle top-right notch via clip-path */
        .img-card--clip {
          clip-path: polygon(0 0, calc(100% - 28px) 0, 100% 28px, 100% 100%, 0 100%);
          box-shadow: 0 8px 28px rgba(10,16,40,0.1);
        }
        /* Wide — angled left edge */
        .img-card--wide {
          clip-path: polygon(18px 0, 100% 0, 100% 100%, 0 100%, 0 18px);
          box-shadow: 0 6px 28px rgba(10,16,40,0.1);
        }
      `}</style>
    </section>
  );
}