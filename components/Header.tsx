"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { useSession, signOut } from "next-auth/react";
import { Cormorant_Garamond, Outfit } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-outfit",
});

const informationLinks = [
  { href: "/about-addisons", label: "About Addison's" },
  { href: "/emergency", label: "Addisonian Crisis" },
  { href: "/information", label: "Information" },
];

const communityLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/directory", label: "Directory" },
  { href: "/map", label: "Community Map" },
];

type DropdownType = "info" | "community" | null;

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownType>(null);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { status } = useSession();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeMobileMenu = () => setMobileMenuOpen(false);



  const navLinkClass = `
  relative text-[#2d3c59] text-[0.8125rem] font-normal tracking-[0.04em] uppercase
  opacity-80 hover:opacity-100 transition-opacity duration-150

  after:absolute after:left-1/2 after:-translate-x-1/2
  after:bottom-[-15px]
  after:h-[1.5px] after:w-[55%]
  after:bg-[#2d3c59]
  after:opacity-0
  after:transition-opacity after:duration-200

  hover:after:opacity-100
`;

const dropdownBtnClass = `
  relative flex items-center gap-1
  text-[#2d3c59] text-[0.8125rem] font-normal tracking-[0.04em] uppercase
  opacity-80 hover:opacity-100 transition-opacity duration-150

  after:absolute after:left-1/2 after:-translate-x-1/2
  after:bottom-[-4px]
  after:h-[1.5px] after:w-[55%]
  after:bg-[#2d3c59]
  after:opacity-0
  after:transition-opacity after:duration-200

  hover:after:opacity-100

  bg-transparent border-none cursor-pointer p-0
`;

  return (
    <header
  className={`
    ${cormorant.variable} ${outfit.variable}
    sticky top-0  z-50
    bg-[#eaebd0]
    
    relative

    transition-all duration-300
    border-b border-[rgba(45,60,89,0.12)]
  
  `}
  style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
>
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-3.5 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 flex-shrink-0"
          aria-label="Addison's Community India - Home"
        >
          <Image
            src="/logo.png"
            alt="Addison's Disease India"
            width={50}
            height={50}
            className="h-10 w-10 sm:h-11 sm:w-11 object-contain"
            priority
          />
          <span
            className="text-[#2d3c59] text-[1.1rem] sm:text-[1.35rem] font-semibold leading-tight tracking-[0.01em]"
            style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
          >
            Addison&apos;s Community India
          </span>
        </Link>

        {/* Desktop nav */}
        <div ref={dropdownRef} className="hidden md:flex items-center gap-7">

          <Link href="/" className={navLinkClass}>Home</Link>

          <Link href="/emergency-card" className={navLinkClass}>Emergency Card</Link>

          {/* Information dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() =>
                setOpenDropdown((prev) => (prev === "info" ? null : "info"))
              }
              className={`${dropdownBtnClass} ${openDropdown === "info" ? "!opacity-100" : ""}`}
              aria-expanded={openDropdown === "info"}
              aria-haspopup="true"
              aria-controls="information-menu"
              id="information-button"
            >
              Information
              <svg
                className={`h-3.5 w-3.5 transition-transform duration-200 ${openDropdown === "info" ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openDropdown === "info" && (
              <div
                id="information-menu"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="information-button"
                className="absolute left-0 top-full z-50 mt-2 min-w-[190px] rounded-xl py-2
                  bg-[#eaebd0] border border-[rgba(45,60,89,0.1)]
                  shadow-[0_8px_30px_rgba(45,60,89,0.12)]"
              >
                {informationLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    role="menuitem"
                    onClick={() => setOpenDropdown(null)}
                    className="block px-5 py-2.5 text-[#2d3c59] text-[0.8125rem] tracking-[0.02em]
                      transition-all duration-150
                      hover:bg-[rgba(45,60,89,0.07)] hover:pl-[22px]"
                    style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Community dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() =>
                setOpenDropdown((prev) => prev === "community" ? null : "community")
              }
              className={`${dropdownBtnClass} ${openDropdown === "community" ? "!opacity-100" : ""}`}
              aria-expanded={openDropdown === "community"}
              aria-haspopup="true"
              aria-controls="community-menu"
              id="community-button"
            >
              Community
              <svg
                className={`h-3.5 w-3.5 transition-transform duration-200 ${openDropdown === "community" ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {openDropdown === "community" && (
              <div
                id="community-menu"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="community-button"
                className="absolute left-0 top-full z-50 mt-2 min-w-[190px] rounded-xl py-2
                  bg-[#eaebd0] border border-[rgba(45,60,89,0.1)]
                  shadow-[0_8px_30px_rgba(45,60,89,0.12)]"
              >
                {communityLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    role="menuitem"
                    onClick={() => setOpenDropdown(null)}
                    className="block px-5 py-2.5 text-[#2d3c59] text-[0.8125rem] tracking-[0.02em]
                      transition-all duration-150
                      hover:bg-[rgba(45,60,89,0.07)] hover:pl-[22px]"
                    style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Auth buttons */}
          <div className={`ml-1 flex items-center gap-2.5 pl-5 border-l transition-colors duration-300 ${scrolled ? "border-[rgba(45,60,89,0.18)]" : "border-[rgba(45,60,89,0.15)]"}`}>
            {status === "authenticated" ? (
              <>
                <Link
                  href="/dashboard"
                  className="rounded-lg px-5 py-2 text-[0.8rem] font-medium tracking-[0.05em] uppercase
                    bg-[#2d3c59] text-[#eaebd0]
                    shadow-[0_1px_4px_rgba(45,60,89,0.18)]
                    hover:bg-[#3a4e72] hover:-translate-y-px hover:shadow-[0_3px_10px_rgba(45,60,89,0.28)]
                    transition-all duration-150"
                  style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                >
                  Dashboard
                </Link>
                <button
                  type="button"
                  onClick={() => signOut({ callbackUrl: "/" })}
                  className="rounded-lg px-5 py-2 text-[0.8rem] font-medium tracking-[0.05em] uppercase
                    bg-transparent text-[#2d3c59]
                    border border-[rgba(45,60,89,0.35)]
                    hover:bg-[rgba(45,60,89,0.07)] hover:border-[rgba(45,60,89,0.6)]
                    transition-all duration-150 cursor-pointer"
                  style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className="rounded-lg px-5 py-2 text-[0.8rem] font-medium tracking-[0.05em] uppercase
                    bg-transparent text-[#2d3c59]
                    border border-[rgba(45,60,89,0.35)]
                    hover:bg-[rgba(45,60,89,0.07)] hover:border-[rgba(45,60,89,0.6)]
                    transition-all duration-150"
                  style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                >
                  Sign in
                </Link>
                <Link
                  href="/register"
                  className="rounded-lg px-5 py-2 text-[0.8rem] font-medium tracking-[0.05em] uppercase
                    bg-[#2d3c59] text-[#eaebd0]
                    shadow-[0_1px_4px_rgba(45,60,89,0.18)]
                    hover:bg-[#3a4e72] hover:-translate-y-px hover:shadow-[0_3px_10px_rgba(45,60,89,0.28)]
                    transition-all duration-150"
                  style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden inline-flex items-center justify-center rounded-lg p-2
            text-[#2d3c59] hover:bg-[rgba(45,60,89,0.08)] transition-colors duration-150"
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
          border-t border-[rgba(45,60,89,0.12)] bg-[#eaebd0]
          ${mobileMenuOpen ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"}
        `}
        style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
      >
        <div className="flex flex-col gap-0.5 overflow-y-auto px-4 py-5">

          <Link
            href="/"
            onClick={closeMobileMenu}
            className="rounded-lg px-4 py-3 text-[#2d3c59] text-sm tracking-[0.04em] uppercase
              hover:bg-[rgba(45,60,89,0.07)] transition-colors duration-150"
          >
            Home
          </Link>
<div className="mt-3">
          <Link
            href="/emergency-card"
            onClick={closeMobileMenu}
            className="rounded-lg px-4 py-1.5 text-[#2d3c59] text-sm tracking-[0.04em] uppercase
              hover:bg-[rgba(45,60,89,0.07)] transition-colors duration-150"
          >
            Emergency Card
          </Link>
</div>
          {/* Information section */}
          <div className="mt-3">
            <p className="px-4 py-1.5 text-[0.6rem] font-semibold uppercase tracking-widest text-[#2d3c59] opacity-35">
              Information
            </p>
            {informationLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="block rounded-lg px-6 py-2.5 text-[#2d3c59] text-sm tracking-[0.02em]
                  hover:bg-[rgba(45,60,89,0.07)] transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Community section */}
          <div className="mt-2">
            <p className="px-4 py-1.5 text-[0.6rem] font-semibold uppercase tracking-widest text-[#2d3c59] opacity-35">
              Community
            </p>
            {communityLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobileMenu}
                className="block rounded-lg px-6 py-2.5 text-[#2d3c59] text-sm tracking-[0.02em]
                  hover:bg-[rgba(45,60,89,0.07)] transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Auth section */}
          <div className="mt-5 pt-5 flex flex-col gap-2.5 border-t border-[rgba(45,60,89,0.12)]">
            {status === "authenticated" ? (
              <>
                <Link
                  href="/dashboard"
                  onClick={closeMobileMenu}
                  className="rounded-lg px-4 py-3 text-center text-[0.8rem] font-medium tracking-[0.06em] uppercase
                    bg-[#2d3c59] text-[#eaebd0] shadow-[0_2px_8px_rgba(45,60,89,0.2)]
                    hover:bg-[#3a4e72] transition-all duration-150"
                >
                  Dashboard
                </Link>
                <button
                  type="button"
                  onClick={() => { closeMobileMenu(); signOut({ callbackUrl: "/" }); }}
                  className="rounded-lg px-4 py-3 text-center text-[0.8rem] font-medium tracking-[0.06em] uppercase
                    bg-transparent text-[#2d3c59] border border-[rgba(45,60,89,0.35)]
                    hover:bg-[rgba(45,60,89,0.07)] transition-all duration-150 cursor-pointer"
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  onClick={closeMobileMenu}
                  className="rounded-lg px-4 py-3 text-center text-[0.8rem] font-medium tracking-[0.06em] uppercase
                    bg-transparent text-[#2d3c59] border border-[rgba(45,60,89,0.35)]
                    hover:bg-[rgba(45,60,89,0.07)] transition-all duration-150"
                >
                  Sign in
                </Link>
                <Link
                  href="/register"
                  onClick={closeMobileMenu}
                  className="rounded-lg px-4 py-3 text-center text-[0.8rem] font-medium tracking-[0.06em] uppercase
                    bg-[#2d3c59] text-[#eaebd0] shadow-[0_2px_8px_rgba(45,60,89,0.2)]
                    hover:bg-[#3a4e72] transition-all duration-150"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}