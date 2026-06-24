"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "82%", label: "International student enrollment" },
  { value: "35", label: "Behaviour therapists & special needs educators" },
  { value: "100%", label: "Transition to mainstream or vocational study" },
];

export default function Stats() {
  return (
    <section className="bg-navy text-white">
      <div className="container-max grid gap-10 px-5 py-16 text-center md:grid-cols-3 md:px-10">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
          >
            <p className="text-5xl font-bold text-gold">{s.value}</p>
            <p className="mt-2 text-sm text-white/70">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
