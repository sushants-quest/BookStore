import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-stone-950 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <span className="text-2xl">📚</span>
              <span className="text-white font-bold text-xl tracking-tight">
                Bound<span className="text-amber-400">Pages</span>
              </span>
            </Link>
            <p className="text-stone-400 text-sm leading-relaxed max-w-xs">
              Your curated destination for exceptional books. We believe the right book at the right moment can change a life.
            </p>
            <div className="flex gap-4 mt-6">
              {["Twitter", "Instagram", "Goodreads"].map((s) => (
                <a key={s} href="#" className="text-stone-500 hover:text-amber-400 transition-colors text-xs">
                  {s}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Explore</h4>
            <ul className="space-y-2">
              {[
                { label: "All Books", href: "/#books" },
                { label: "Authors", href: "/#authors" },
                { label: "Blog", href: "/blog" },
                { label: "New Releases", href: "/#books" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-stone-400 hover:text-amber-400 transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4 text-sm">Newsletter</h4>
            <p className="text-stone-400 text-sm mb-4">Get curated book recommendations every week.</p>
            <div className="flex flex-col gap-2">
              <input
                type="email"
                placeholder="your@email.com"
                className="bg-stone-800 border border-stone-700 rounded-lg px-3 py-2 text-sm text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-400"
              />
              <button className="bg-amber-400 text-stone-950 rounded-lg px-4 py-2 text-sm font-semibold hover:bg-amber-300 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-stone-800 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-stone-500 text-xs">© 2024 BoundPages. All rights reserved.</p>
          <p className="text-stone-500 text-xs">Built with love for readers everywhere.</p>
        </div>
      </div>
    </footer>
  );
}
