import Link from "next/link";
import { Cormorant_Garamond, Outfit } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
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
    <footer className={`bg-[#2d3c59] text-[#eaebd0] ${outfit.className}`}>
      <div className="mx-auto max-w-6xl px-6 pt-10 pb-6 text-center">

        {/* Grid */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* About */}
          <div>
            <h3 className={`${cormorant.className} text-2xl font-semibold mb-3 whitespace-nowrap`}>
              Addison&apos;s Community India
            </h3>
            <p className="text-sm text-[#eaebd0]/70 leading-relaxed max-w-xs">
              Supporting patients across India, connecting with professionals,
              and spreading awareness with care and trust.
            </p>
          </div>

          {/* Community */}
          <div>
            <h4 className={`${cormorant.className} text-sm font-semibold mb-4`}>
              Community
            </h4>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#eaebd0]/70 hover:text-white transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Information */}
          <div>
            <h4 className={`${cormorant.className} text-sm font-semibold mb-4`}>
              Information
            </h4>
            <ul className="space-y-2">
              {footerLinks.information.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#eaebd0]/70 hover:text-white transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Account */}
          <div>
            <h4 className={`${cormorant.className} text-sm font-semibold mb-4`}>
              Account
            </h4>
            <ul className="space-y-2">
              {footerLinks.account.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#eaebd0]/70 hover:text-white transition"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mt-8 border-t border-[#eaebd0]/20 pt-4 text-center">
          <p className="text-xs text-[#eaebd0]/60">
            © {new Date().getFullYear()} Addison&apos;s Disease Community India.  
            Not medical advice. Consult your doctor.
          </p>
        </div>

      </div>
    </footer>
  );
}