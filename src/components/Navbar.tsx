"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-stone-950/95 backdrop-blur-sm border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">📚</span>
            <span className="text-white font-bold text-xl tracking-tight">
              Bound<span className="text-amber-400">Pages</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-stone-300 hover:text-amber-400 transition-colors text-sm font-medium">
              Home
            </Link>
            <Link href="/#books" className="text-stone-300 hover:text-amber-400 transition-colors text-sm font-medium">
              Books
            </Link>
            <Link href="/#authors" className="text-stone-300 hover:text-amber-400 transition-colors text-sm font-medium">
              Authors
            </Link>
            <Link href="/blog" className="text-stone-300 hover:text-amber-400 transition-colors text-sm font-medium">
              Blog
            </Link>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button className="text-stone-300 hover:text-white transition-colors p-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
            <Link
              href="/#books"
              className="bg-amber-400 text-stone-950 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-amber-300 transition-colors"
            >
              Browse Books
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-stone-300 hover:text-white transition-colors p-2"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-stone-950 border-t border-stone-800 px-4 py-4 space-y-3">
          <Link href="/" className="block text-stone-300 hover:text-amber-400 transition-colors py-2 font-medium" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
          <Link href="/#books" className="block text-stone-300 hover:text-amber-400 transition-colors py-2 font-medium" onClick={() => setMenuOpen(false)}>
            Books
          </Link>
          <Link href="/#authors" className="block text-stone-300 hover:text-amber-400 transition-colors py-2 font-medium" onClick={() => setMenuOpen(false)}>
            Authors
          </Link>
          <Link href="/blog" className="block text-stone-300 hover:text-amber-400 transition-colors py-2 font-medium" onClick={() => setMenuOpen(false)}>
            Blog
          </Link>
        </div>
      )}
    </nav>
  );
}
