export default function Footer() {
  return (
    <footer className="bg-navy text-white/80">
      <div className="container-max grid gap-10 px-5 py-16 md:grid-cols-3 md:px-10">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gold text-sm font-bold text-black">
              TH
            </span>
            <span className="font-semibold text-white">The Tree House International</span>
          </div>
          <p className="text-sm leading-relaxed text-white/60">
            The Science of Learning, The Art of Independence. Evidence-based special
            education combining scientific precision with compassion.
          </p>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gold">
            Explore
          </h4>
          <ul className="space-y-2 text-sm">
            {["Our Team", "Programmes", "Services", "Social Values", "Contact"].map((i) => (
              <li key={i}>
                <a href="#" className="text-white/60 transition-colors hover:text-white">
                  {i}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-gold">
            Contact
          </h4>
          <ul className="space-y-2 text-sm text-white/60">
            <li>📞 +94 74 102 2110</li>
            <li>✉️ info@tthi.lk</li>
            <li>📍 17/14 Captain Sumudu Rajapaksa Mawatha, Dehiwala</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} The Tree House International · Mock demo, placeholder content.
      </div>
    </footer>
  );
}
