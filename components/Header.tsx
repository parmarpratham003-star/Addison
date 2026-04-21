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

const aboutLinks = [
  { href: "/about-addisons", label: "About Addison's" },
  { href: "/information", label: "Information" },
];

const crisisLinks = [
  { href: "/emergency", label: "Addisonian Crisis" },
  { href: "/emergency-card", label: "Emergency Card" },
];

const communityLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/directory", label: "Directory" },
  { href: "/map", label: "Community Map" },
];

type DropdownType = "about" | "crisis" | "community" | null;

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<DropdownType>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { status } = useSession();

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

  const U = ({ children }: { children: React.ReactNode }) => (
    <span
      className="relative
        after:absolute after:left-0 after:bottom-[-2px]
        after:h-[1.5px] after:w-0 after:bg-[#2d3c59]
        after:transition-[width] after:duration-300 after:ease-out
        group-hover:after:w-full"
    >
      {children}
    </span>
  );

  type DropdownMenuProps = {
    id: string;
    labelId: string;
    isOpen: boolean;
    links: { href: string; label: string }[];
    onClose: () => void;
  };

  function DropdownMenu({ id, labelId, isOpen, links, onClose }: DropdownMenuProps) {
    return (
      <div
        id={id}
        role="menu"
        aria-orientation="vertical"
        aria-labelledby={labelId}
        style={{
          fontFamily: "var(--font-outfit), Outfit, sans-serif",
          pointerEvents: isOpen ? "auto" : "none",
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? "translateY(0) scale(1)" : "translateY(-8px) scale(0.97)",
          transition: "opacity 220ms cubic-bezier(0.16,1,0.3,1), transform 220ms cubic-bezier(0.16,1,0.3,1)",
        }}
        className="absolute left-0 top-full z-50 w-max min-w-[160px] rounded-xl pt-4 pb-1.5
          bg-[#f5f6e9]/95 border border-[rgba(45,60,89,0.1)]
          shadow-[0_8px_30px_rgba(45,60,89,0.12)]"
      >
        {links.map((link, i) => (
          <Link
            key={link.href}
            href={link.href}
            role="menuitem"
            onClick={onClose}
            style={{
              fontFamily: "var(--font-outfit), Outfit, sans-serif",
              transitionDelay: isOpen ? `${i * 35}ms` : "0ms",
              opacity: isOpen ? 1 : 0,
              transform: isOpen ? "translateX(0)" : "translateX(-6px)",
              transition: "opacity 200ms ease, transform 200ms ease, background 150ms ease, padding-left 150ms ease",
              display: "block",
            }}
            className="px-5 py-2.5 text-[#2d3c59] text-[0.8125rem] tracking-[0.02em] whitespace-nowrap
              hover:bg-[rgba(45,60,89,0.07)] hover:pl-[22px]"
          >
            {link.label}
          </Link>
        ))}
      </div>
    );
  }

  // ✅ All nav items use same height, line-height, and vertical alignment
  const navItemBase = `
    group inline-flex items-center justify-center gap-1
    h-8
    text-[#2d3c59] text-[12px] tracking-[0.04em] uppercase
    opacity-80 hover:opacity-100 transition-opacity duration-200
    outline-none focus:outline-none leading-none
  `;

  const authBtnBase = `
    inline-flex items-center justify-center
    h-8 px-4
    text-[0.72rem] font-medium tracking-[0.05em] uppercase leading-none
    bg-transparent text-[#2d3c59]
    border border-[rgba(45,60,89,0.35)]
    hover:bg-[rgba(45,60,89,0.07)] hover:border-[rgba(45,60,89,0.6)]
    transition-all duration-150
  `;

  return (
    <>
      <header
        className={`
          ${cormorant.variable} ${outfit.variable}
          sticky top-0 z-50
          bg-[#f5f6e9]/90 backdrop-blur-md
          transition-all duration-300
          border-b border-[rgba(45,60,89,0.08)]
        `}
        style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-8 py-2.5 lg:px-8">

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
              className="text-[#2d3c59] text-[1.1rem] sm:text-[1.50rem] font-semibold leading-tight tracking-[0.01em]"
              style={{ fontFamily: "var(--font-cormorant), 'Cormorant Garamond', serif" }}
            >
              Addison&apos;s Community India
            </span>
          </Link>

          {/* ✅ Desktop nav — single flex row, all items aligned to center */}
          <div
            ref={dropdownRef}
            className="hidden md:flex items-center gap-7"
            style={{ height: "40px" }} // fixed row height so all items align
          >

            {/* Home */}
            <Link href="/" className={navItemBase}>
              <U>Home</U>
            </Link>

            {/* About Addison's dropdown */}
            <div
              className="relative flex items-center h-full"
              onMouseEnter={() => setOpenDropdown("about")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                onClick={() => setOpenDropdown((prev) => prev === "about" ? null : "about")}
                className={`${navItemBase} bg-transparent border-none cursor-pointer ${openDropdown === "about" ? "!opacity-100" : ""}`}
                aria-expanded={openDropdown === "about"}
                aria-haspopup="true"
                aria-controls="about-menu"
                id="about-button"
              >
                <U>About Addison&apos;s</U>
                <svg
                  className={`h-3 w-3 flex-shrink-0 transition-transform duration-200 ${openDropdown === "about" ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <DropdownMenu
                id="about-menu" labelId="about-button"
                isOpen={openDropdown === "about"} links={aboutLinks}
                onClose={() => setOpenDropdown(null)}
              />
            </div>

            {/* Crisis dropdown */}
            <div
              className="relative flex items-center h-full"
              onMouseEnter={() => setOpenDropdown("crisis")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                onClick={() => setOpenDropdown((prev) => prev === "crisis" ? null : "crisis")}
                className={`${navItemBase} bg-transparent border-none cursor-pointer ${openDropdown === "crisis" ? "!opacity-100" : ""}`}
                aria-expanded={openDropdown === "crisis"}
                aria-haspopup="true"
                aria-controls="crisis-menu"
                id="crisis-button"
              >
                <U>Crisis</U>
                <svg
                  className={`h-3 w-3 flex-shrink-0 transition-transform duration-200 ${openDropdown === "crisis" ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <DropdownMenu
                id="crisis-menu" labelId="crisis-button"
                isOpen={openDropdown === "crisis"} links={crisisLinks}
                onClose={() => setOpenDropdown(null)}
              />
            </div>

            {/* Community dropdown */}
            <div
              className="relative flex items-center h-full"
              onMouseEnter={() => setOpenDropdown("community")}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                type="button"
                onClick={() => setOpenDropdown((prev) => prev === "community" ? null : "community")}
                className={`${navItemBase} bg-transparent border-none cursor-pointer ${openDropdown === "community" ? "!opacity-100" : ""}`}
                aria-expanded={openDropdown === "community"}
                aria-haspopup="true"
                aria-controls="community-menu"
                id="community-button"
              >
                <U>Community</U>
                <svg
                  className={`h-3 w-3 flex-shrink-0 transition-transform duration-200 ${openDropdown === "community" ? "rotate-180" : ""}`}
                  fill="none" stroke="currentColor" viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <DropdownMenu
                id="community-menu" labelId="community-button"
                isOpen={openDropdown === "community"} links={communityLinks}
                onClose={() => setOpenDropdown(null)}
              />
            </div>

            {/* ✅ Auth buttons — same h-8 height, vertically centered with divider */}
            <div className="flex items-center gap-2.5 ml-6">
              <div className="h-5 w-[0.5px] bg-[#2d3c59] opacity-20 mr-1" />

              {status === "authenticated" ? (
                <>
                  <Link
                    href="/dashboard"
                    className={authBtnBase}
                    style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif", borderRadius: "3px" }}
                  >
                    Dashboard
                  </Link>
                  <button
                    type="button"
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className={authBtnBase}
                    style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif", borderRadius: "3px" }}
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <Link
                  href="/login"
                  className={authBtnBase}
                  style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif", borderRadius: "3px" }}
                >
                  Sign in
                </Link>
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
            border-t border-[rgba(45,60,89,0.10)] bg-[#f5f6e9]
            ${mobileMenuOpen ? "max-h-[90vh] opacity-100" : "max-h-0 opacity-0"}
          `}
          style={{ fontFamily: "var(--font-outfit), Outfit, sans-serif" }}
        >
          <div className="flex flex-col overflow-y-auto px-5 py-4 gap-1">

            <Link
              href="/"
              onClick={closeMobileMenu}
              className="flex items-center rounded-xl px-4 py-3
                text-[#2d3c59] text-[0.8rem] font-medium tracking-[0.06em] uppercase
                hover:bg-[rgba(45,60,89,0.06)] active:bg-[rgba(45,60,89,0.1)]
                transition-colors duration-150"
            >
              Home
            </Link>

            <div className="h-px bg-[rgba(45,60,89,0.08)] my-1" />

            <div className="flex flex-col gap-0.5">
              <p className="px-4 pt-2 pb-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#2d3c59] opacity-40">
                About Addison&apos;s
              </p>
              {aboutLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={closeMobileMenu}
                  className="flex items-center gap-2 rounded-xl px-4 py-2.5
                    text-[#2d3c59] text-[0.82rem] tracking-[0.02em] font-normal
                    hover:bg-[rgba(45,60,89,0.06)] active:bg-[rgba(45,60,89,0.1)]
                    transition-colors duration-150"
                >
                  <span className="w-1 h-1 rounded-full bg-[#2d3c59] opacity-30 flex-shrink-0" />
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="h-px bg-[rgba(45,60,89,0.08)] my-1" />

            <div className="flex flex-col gap-0.5">
              <p className="px-4 pt-2 pb-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#2d3c59] opacity-40">
                Crisis
              </p>
              {crisisLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={closeMobileMenu}
                  className="flex items-center gap-2 rounded-xl px-4 py-2.5
                    text-[#2d3c59] text-[0.82rem] tracking-[0.02em] font-normal
                    hover:bg-[rgba(45,60,89,0.06)] active:bg-[rgba(45,60,89,0.1)]
                    transition-colors duration-150"
                >
                  <span className="w-1 h-1 rounded-full bg-[#2d3c59] opacity-30 flex-shrink-0" />
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="h-px bg-[rgba(45,60,89,0.08)] my-1" />

            <div className="flex flex-col gap-0.5">
              <p className="px-4 pt-2 pb-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#2d3c59] opacity-40">
                Community
              </p>
              {communityLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={closeMobileMenu}
                  className="flex items-center gap-2 rounded-xl px-4 py-2.5
                    text-[#2d3c59] text-[0.82rem] tracking-[0.02em] font-normal
                    hover:bg-[rgba(45,60,89,0.06)] active:bg-[rgba(45,60,89,0.1)]
                    transition-colors duration-150"
                >
                  <span className="w-1 h-1 rounded-full bg-[#2d3c59] opacity-30 flex-shrink-0" />
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-3 pt-4 flex flex-col gap-2.5 border-t border-[rgba(45,60,89,0.10)]">
              {status === "authenticated" ? (
                <>
                  <Link href="/dashboard" onClick={closeMobileMenu}
                    className="rounded-xl px-4 py-3 text-center
                      text-[0.78rem] font-semibold tracking-[0.08em] uppercase
                      bg-[#2d3c59] text-[#eaebd0]
                      shadow-[0_2px_10px_rgba(45,60,89,0.2)]
                      hover:bg-[#3a4e72] transition-all duration-150"
                  >
                    Dashboard
                  </Link>
                  <button type="button"
                    onClick={() => { closeMobileMenu(); signOut({ callbackUrl: "/" }); }}
                    className="rounded-xl px-4 py-3 text-center
                      text-[0.78rem] font-semibold tracking-[0.08em] uppercase
                      bg-transparent text-[#2d3c59]
                      border border-[rgba(45,60,89,0.25)]
                      hover:bg-[rgba(45,60,89,0.06)] transition-all duration-150 cursor-pointer"
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" onClick={closeMobileMenu}
                    className="rounded-xl px-4 py-3 text-center
                      text-[0.78rem] font-semibold tracking-[0.08em] uppercase
                      bg-transparent text-[#2d3c59]
                      border border-[rgba(45,60,89,0.25)]
                      hover:bg-[rgba(45,60,89,0.06)] transition-all duration-150"
                  >
                    Sign in
                  </Link>
                  <Link href="/register" onClick={closeMobileMenu}
                    className="rounded-xl px-4 py-3 text-center
                      text-[0.78rem] font-semibold tracking-[0.08em] uppercase
                      bg-[#2d3c59] text-[#eaebd0]
                      shadow-[0_2px_10px_rgba(45,60,89,0.2)]
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

      {/* Floating Emergency Button */}
      <Link
        href="/emergency-card"
        aria-label="Emergency Card"
        className="fixed bottom-6 right-6 z-[100] flex items-center justify-center
          w-14 h-14 rounded-full
          bg-red-500 text-white
          shadow-[0_4px_20px_rgba(192,57,43,0.5)]
          hover:bg-red-600 hover:shadow-[0_6px_28px_rgba(192,57,43,0.65)] hover:scale-110
          active:scale-100 active:shadow-[0_2px_10px_rgba(192,57,43,0.4)]
          transition-all duration-200"
      >
        <span className="absolute inset-0 rounded-full bg-[#c0392b] animate-ping opacity-20 pointer-events-none" />
        <svg className="h-5 w-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
        </svg>
      </Link>
    </>
  );
}