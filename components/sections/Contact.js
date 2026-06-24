"use client";

import { useState } from "react";
import { Reveal } from "@/components/motion";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="section-pad bg-navy-50/40">
      <div className="container-max grid gap-12 lg:grid-cols-2">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-widest text-gold">
            Contact Us
          </span>
          <h2 className="mt-3 text-3xl font-bold text-navy md:text-4xl">
            Let's start the conversation
          </h2>
          <p className="mt-4 text-navy/70">
            Book a visit or ask us anything about admissions, programmes and therapy.
            We'd love to hear from you.
          </p>
          <ul className="mt-8 space-y-4 text-sm text-navy/80">
            <li className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white shadow-sm">📞</span>
              +94 74 102 2110
            </li>
            <li className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white shadow-sm">✉️</span>
              info@tthi.lk
            </li>
            <li className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-white shadow-sm">📍</span>
              17/14 Captain Sumudu Rajapaksa Mawatha, Dehiwala
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.15}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-2xl bg-white p-7 shadow-sm"
          >
            <div className="grid gap-4">
              <Field label="Full name" placeholder="Jane Doe" />
              <Field label="Email" type="email" placeholder="jane@example.com" />
              <div>
                <label className="mb-1 block text-sm font-medium text-navy">Message</label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your child's needs…"
                  className="w-full rounded-xl border border-navy-50 px-4 py-3 text-sm outline-none transition-colors focus:border-sky"
                />
              </div>
              <button
                type="submit"
                className="rounded-full bg-navy px-6 py-3 text-sm font-semibold text-white transition-transform hover:scale-[1.02]"
              >
                {sent ? "Thank you — we'll be in touch! ✓" : "Send enquiry"}
              </button>
              {sent && (
                <p className="text-center text-xs text-navy/50">
                  (Mock form — no message was actually sent.)
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, type = "text", placeholder }) {
  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-navy">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-navy-50 px-4 py-3 text-sm outline-none transition-colors focus:border-sky"
      />
    </div>
  );
}
