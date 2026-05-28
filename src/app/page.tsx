import Link from "next/link";
import BookCard from "@/components/BookCard";
import BlogCard from "@/components/BlogCard";
import { books, authors } from "@/data/books";
import { blogs } from "@/data/blogs";

export default function Home() {
  const featuredBooks = books.filter((b) => b.featured);
  const recentBlogs = blogs.slice(0, 3);

  return (
    <main>
      {/* Hero */}
      <section className="min-h-screen bg-stone-950 flex items-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-10 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-600/5 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-400/3 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-400/10 border border-amber-400/20 rounded-full px-4 py-2 mb-6">
                <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
                <span className="text-amber-400 text-sm font-medium">New arrivals every week</span>
              </div>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.05] mb-6">
                Stories That
                <span className="block text-amber-400">Change Lives</span>
              </h1>
              <p className="text-stone-400 text-lg leading-relaxed mb-8 max-w-lg">
                Discover your next obsession. From timeless classics to contemporary masterpieces — every book curated to expand your world.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="#books"
                  className="bg-amber-400 text-stone-950 px-6 py-3 rounded-xl font-semibold text-base hover:bg-amber-300 transition-all hover:scale-105"
                >
                  Browse Collection
                </Link>
                <Link
                  href="/blog"
                  className="border border-stone-700 text-stone-300 px-6 py-3 rounded-xl font-semibold text-base hover:border-amber-400 hover:text-amber-400 transition-all"
                >
                  Read Our Blog
                </Link>
              </div>

              <div className="flex items-center gap-8 mt-12">
                {[
                  { value: "500+", label: "Books" },
                  { value: "150+", label: "Authors" },
                  { value: "10k+", label: "Happy Readers" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-white font-bold text-2xl">{stat.value}</div>
                    <div className="text-stone-500 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating books visual */}
            <div className="hidden lg:flex items-center justify-center relative h-[500px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-80 h-80">
                  {books.slice(0, 5).map((book, i) => {
                    const positions = [
                      "top-0 left-16 rotate-[-8deg]",
                      "top-8 right-0 rotate-[6deg]",
                      "bottom-8 left-0 rotate-[4deg]",
                      "bottom-0 right-16 rotate-[-5deg]",
                      "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[2deg] z-10",
                    ];
                    return (
                      <div
                        key={book.id}
                        className={`absolute ${positions[i]} w-32 h-44 rounded-lg bg-gradient-to-br ${book.coverColor} shadow-2xl flex items-end p-3`}
                      >
                        <p className="text-white text-xs font-bold leading-tight line-clamp-2">{book.title}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Genre Pills */}
      <section className="bg-stone-900 border-y border-stone-800 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 overflow-x-auto pb-1">
            <span className="text-stone-500 text-sm whitespace-nowrap mr-2">Browse by genre:</span>
            {["Classic Fiction", "Dystopian", "Romance", "Self-Help", "Science Fiction", "Non-Fiction", "Philosophy"].map((genre) => (
              <a
                key={genre}
                href="#books"
                className="whitespace-nowrap bg-stone-800 hover:bg-amber-400/10 hover:border-amber-400/50 border border-stone-700 text-stone-300 hover:text-amber-400 text-sm px-4 py-1.5 rounded-full transition-all"
              >
                {genre}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section id="books" className="bg-stone-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-2">Hand-picked for you</p>
              <h2 className="text-white text-4xl font-bold">Featured Books</h2>
            </div>
            <Link href="#all-books" className="text-stone-400 hover:text-amber-400 transition-colors text-sm font-medium flex items-center gap-1">
              View all <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredBooks.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      {/* All Books */}
      <section id="all-books" className="bg-stone-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-2">Complete Collection</p>
            <h2 className="text-white text-4xl font-bold">All Books</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {books.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      </section>

      {/* Authors */}
      <section id="authors" className="bg-stone-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-2">Meet the minds</p>
            <h2 className="text-white text-4xl font-bold">Featured Authors</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {authors.map((author) => (
              <div
                key={author.name}
                className="bg-stone-900 rounded-2xl p-6 border border-stone-800 hover:border-amber-400/30 transition-all group"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${author.avatar} mb-4 flex items-center justify-center text-white text-xl font-bold`}>
                  {author.name.charAt(0)}
                </div>
                <h3 className="text-white font-bold text-base mb-1 group-hover:text-amber-400 transition-colors">{author.name}</h3>
                <div className="text-stone-500 text-xs mb-3 flex items-center gap-2">
                  <span>{author.nationality}</span>
                  <span>·</span>
                  <span>{author.booksCount} books</span>
                </div>
                <p className="text-stone-400 text-sm leading-relaxed line-clamp-3">{author.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="bg-stone-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-2">From the editors</p>
              <h2 className="text-white text-4xl font-bold">Latest from the Blog</h2>
            </div>
            <Link href="/blog" className="text-stone-400 hover:text-amber-400 transition-colors text-sm font-medium flex items-center gap-1">
              All posts <span>→</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentBlogs.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-amber-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-stone-950 text-4xl font-bold mb-4">Start Reading Today</h2>
          <p className="text-stone-800 text-lg mb-8 max-w-2xl mx-auto">
            Join thousands of readers who discover something extraordinary every week. Free shipping on orders over $35.
          </p>
          <Link
            href="#books"
            className="bg-stone-950 text-amber-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-stone-800 transition-all inline-block hover:scale-105"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </main>
  );
}
