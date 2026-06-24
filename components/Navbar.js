"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Home", href: "#home" },
  { label: "Our Team", href: "#team" },
  { label: "Programmes", href: "#programmes" },
  { label: "Services", href: "#services" },
  { label: "Social Values", href: "#values" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 border-b border-navy-50 bg-black/85 backdrop-blur-md"
    >
      <nav className="container-max flex items-center justify-between px-5 py-4 md:px-10">
        <a href="#home" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gold text-sm font-bold text-black">
            TH
          </span>
          <span className="text-sm font-semibold leading-tight text-white">
            The Tree House
            <span className="block text-[10px] font-normal uppercase tracking-widest text-gold">
              International
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-white/70 transition-colors hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-gold px-5 py-2 text-sm font-semibold text-black transition-transform hover:scale-105 lg:inline-block"
        >
          Enquire
        </a>

        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="grid h-10 w-10 place-items-center rounded-lg border border-navy-50 lg:hidden"
        >
          <span className="text-white">{open ? "✕" : "☰"}</span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.ul
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-navy-50 bg-black lg:hidden"
          >
            {links.map((l) => (
              <li key={l.href} className="border-b border-navy-50/60">
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-3 text-sm font-medium text-white/80"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
