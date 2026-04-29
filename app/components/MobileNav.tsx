"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const links = [
    { href: "#services", label: "Services" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  const overlay = open && mounted && createPortal(
    <div
      className="fixed inset-0 top-16 z-40 flex flex-col items-center justify-start pt-12 gap-8"
      style={{ backgroundColor: '#0a0a0a' }}
    >
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          onClick={() => setOpen(false)}
          className="text-2xl font-semibold text-white hover:text-accent transition-colors"
        >
          {link.label}
        </a>
      ))}
      <a
        href="tel:07377745544"
        className="mt-4 px-8 py-3 bg-accent text-white font-bold rounded-lg"
      >
        Call Now
      </a>
    </div>,
    document.body
  );

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="text-white p-2 cursor-pointer"
        aria-label="Toggle menu"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {overlay}
    </div>
  );
}
