import Link from "next/link";
import { Cormorant_Garamond, Outfit } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-outfit",
});

const footerLinks = {
  community: [
    { href: "/emergency-card", label: "Emergency Card" },
    { href: "/directory", label: "Find Professionals" },
    { href: "/map", label: "Community Map" },
    { href: "/blog", label: "Blog" },
  ],
  information: [
    { href: "/about-addisons", label: "About Addison's" },
    { href: "/emergency", label: "Addisonian Crisis" },
    { href: "/information", label: "Information Hub" },
    { href: "/information/children", label: "Addison's in Children" },
  ],
  account: [
    { href: "/login", label: "Sign in" },
    { href: "/register", label: "Register" },
  ],
};

export function Footer() {
  return (
    <footer
      className={`${cormorant.variable} ${outfit.variable} bg-[#2d3c59] text-[#eaebd0]`}
      style={{ fontFamily: "var(--font-outfit)" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-16">

        {/* TOP */}
        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT */}
          <div>
            <h2
              className="text-4xl sm:text-5xl leading-tight"
              style={{ fontFamily: "var(--font-cormorant)" }}
            >
              Addison&apos;s Community India
            </h2>

            <p className="mt-6 text-sm text-[#eaebd0]/60 max-w-md">
              Supporting patients across India with trusted information,
              professional connections, and a compassionate community.
            </p>

            <Link
              href="/register"
              className="inline-block mt-8 bg-[#94a378] text-white px-6 py-3 rounded-full text-sm hover:bg-[#7e8f5e] transition"
            >
              Join Community →
            </Link>
          </div>

          {/* RIGHT */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10">

            <div>
              <h4 className="text-xs uppercase tracking-[0.25em] text-[#eaebd0]/40 mb-4">
                Community
              </h4>
              <ul className="space-y-3">
                {footerLinks.community.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-[#eaebd0]/60 hover:text-white transition">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.25em] text-[#eaebd0]/40 mb-4">
                Information
              </h4>
              <ul className="space-y-3">
                {footerLinks.information.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-[#eaebd0]/60 hover:text-white transition">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs uppercase tracking-[0.25em] text-[#eaebd0]/40 mb-4">
                Account
              </h4>
              <ul className="space-y-3">
                {footerLinks.account.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-[#eaebd0]/60 hover:text-white transition">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* 🔥 BOTTOM (CENTERED + LESS SPACE) */}
        <div className="mt-10 pt-4 border-t border-[#eaebd0]/10 text-center">
          <p className="text-xs text-[#eaebd0]/50">
            © {new Date().getFullYear()} Addison&apos;s Disease Community India
          </p>
        </div>

      </div>
    </footer>
  );
}