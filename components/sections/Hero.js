"use client";

import { motion } from "framer-motion";
import Placeholder from "@/components/Placeholder";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-navy-50/40">
      <div className="container-max grid items-center gap-10 px-5 py-20 md:px-10 lg:grid-cols-2 lg:py-28">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block rounded-full bg-gold/15 px-4 py-1 text-xs font-semibold uppercase tracking-widest text-gold"
          >
            Every Child Matters
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 text-4xl font-bold leading-tight text-navy md:text-5xl lg:text-6xl"
          >
            The Science of Learning,
            <span className="block text-sky">The Art of Independence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-md text-base leading-relaxed text-navy/70"
          >
            Sri Lanka's international school dedicated to learners with special needs —
            where evidence-based education meets genuine compassion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#programmes"
              className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-105"
            >
              Explore Programmes
            </a>
            <a
              href="#contact"
              className="rounded-full border border-navy/20 px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-white"
            >
              Book a Visit
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <Placeholder label="Hero Image" ratio="aspect-[4/5]" className="shadow-2xl" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute -bottom-6 -left-6 hidden rounded-2xl bg-white p-5 shadow-xl md:block"
          >
            <p className="text-3xl font-bold text-navy">100%</p>
            <p className="text-xs text-navy/60">transition to mainstream</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
