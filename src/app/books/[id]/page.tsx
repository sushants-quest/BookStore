import { books } from "@/data/books";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return books.map((book) => ({ id: book.id }));
}

export default async function BookPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const book = books.find((b) => b.id === id);
  if (!book) notFound();

  const related = books.filter((b) => b.id !== book.id && b.genre === book.genre).slice(0, 3);

  return (
    <main className="bg-stone-950 min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-stone-500 text-sm mb-10">
          <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/#books" className="hover:text-amber-400 transition-colors">Books</Link>
          <span>/</span>
          <span className="text-stone-300">{book.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Book Cover */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className={`w-64 h-96 rounded-2xl bg-gradient-to-br ${book.coverColor} shadow-2xl flex flex-col justify-end p-8 relative overflow-hidden`}>
                <div className="absolute top-0 left-0 w-full h-full opacity-15">
                  <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white" />
                  <div className="absolute -bottom-8 -left-8 w-48 h-48 rounded-full bg-black" />
                </div>
                <div className="relative z-10">
                  <p className="text-white/60 text-xs mb-2 uppercase tracking-widest">{book.genre}</p>
                  <h2 className="text-white font-bold text-xl leading-tight mb-2">{book.title}</h2>
                  <p className="text-white/70 text-sm">{book.author}</p>
                </div>
              </div>
              <div className={`absolute -bottom-3 left-4 right-4 h-8 bg-gradient-to-br ${book.coverColor} rounded-b-2xl blur-sm opacity-40`} />
            </div>
          </div>

          {/* Book Info */}
          <div>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-amber-400/10 border border-amber-400/30 text-amber-400 text-xs px-3 py-1 rounded-full font-medium">
                {book.genre}
              </span>
              {book.featured && (
                <span className="bg-purple-400/10 border border-purple-400/30 text-purple-400 text-xs px-3 py-1 rounded-full font-medium">
                  ★ Featured
                </span>
              )}
            </div>

            <h1 className="text-4xl font-bold text-white mb-2">{book.title}</h1>
            <p className="text-amber-400 text-lg font-medium mb-6">by {book.author}</p>

            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1">
                <span className="text-amber-400 text-lg">{"★".repeat(Math.floor(book.rating))}</span>
                <span className="text-stone-400 text-sm ml-1">({book.rating}/5)</span>
              </div>
              <span className="text-stone-700">|</span>
              <span className="text-stone-400 text-sm">{book.pages} pages</span>
              <span className="text-stone-700">|</span>
              <span className="text-stone-400 text-sm">{book.year}</span>
            </div>

            <p className="text-stone-300 text-base leading-relaxed mb-8">{book.longDescription}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {book.tags.map((tag) => (
                <span key={tag} className="bg-stone-800 text-stone-400 text-xs px-3 py-1 rounded-full">
                  {tag}
                </span>
              ))}
            </div>

            <div className="bg-stone-900 rounded-2xl p-6 border border-stone-800 mb-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-amber-400 text-3xl font-bold">${book.price}</span>
                <span className="text-stone-500 text-sm">Free shipping over $35</span>
              </div>
              <div className="flex gap-3">
                <button className="flex-1 bg-amber-400 text-stone-950 py-3 rounded-xl font-bold hover:bg-amber-300 transition-colors">
                  Add to Cart
                </button>
                <button className="bg-stone-800 border border-stone-700 text-stone-300 px-4 py-3 rounded-xl hover:border-amber-400/50 hover:text-amber-400 transition-colors">
                  ♡
                </button>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-center">
              {[
                { label: "Genre", value: book.genre },
                { label: "Year", value: book.year },
                { label: "Pages", value: book.pages },
              ].map((item) => (
                <div key={item.label} className="bg-stone-900 rounded-xl p-3 border border-stone-800">
                  <div className="text-stone-500 text-xs mb-1">{item.label}</div>
                  <div className="text-white text-sm font-semibold">{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Books */}
        {related.length > 0 && (
          <div>
            <h2 className="text-white text-2xl font-bold mb-6">More in {book.genre}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((r) => (
                <Link
                  key={r.id}
                  href={`/books/${r.id}`}
                  className={`bg-gradient-to-br ${r.coverColor} rounded-xl p-5 flex flex-col justify-end h-36 relative overflow-hidden group hover:scale-[1.02] transition-all`}
                >
                  <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-white" />
                  </div>
                  <div className="relative z-10">
                    <p className="text-white font-bold leading-tight line-clamp-1">{r.title}</p>
                    <p className="text-white/70 text-sm">{r.author}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
