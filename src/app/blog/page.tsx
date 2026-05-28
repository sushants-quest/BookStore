import BlogCard from "@/components/BlogCard";
import { blogs } from "@/data/blogs";
import Link from "next/link";

export const metadata = {
  title: "Blog — BoundPages",
  description: "Reading guides, author insights, and literary culture from our editors.",
};

export default function BlogPage() {
  const [featured, ...rest] = blogs;

  return (
    <main className="bg-stone-950 min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="flex items-center gap-2 text-stone-500 text-sm mb-8 justify-center">
            <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-stone-300">Blog</span>
          </div>
          <p className="text-amber-400 text-sm font-semibold uppercase tracking-widest mb-3">From our editors</p>
          <h1 className="text-5xl font-bold text-white mb-4">The BoundPages Blog</h1>
          <p className="text-stone-400 text-lg max-w-2xl mx-auto">
            Reading guides, author interviews, and the stories behind the stories. Everything a book lover needs.
          </p>
        </div>

        {/* Featured Post */}
        <Link href={`/blog/${featured.slug}`} className="group block mb-14">
          <article className={`bg-gradient-to-br ${featured.coverColor} rounded-3xl overflow-hidden relative h-80 flex items-end`}>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-white" />
              <div className="absolute -bottom-12 -left-12 w-80 h-80 rounded-full bg-black" />
            </div>
            <div className="relative z-10 p-10 w-full">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium">
                  {featured.category}
                </span>
                <span className="text-white/70 text-sm">★ Featured Post</span>
              </div>
              <h2 className="text-white text-3xl font-bold mb-2 group-hover:underline underline-offset-4 max-w-2xl">
                {featured.title}
              </h2>
              <p className="text-white/80 max-w-xl line-clamp-2">{featured.excerpt}</p>
              <div className="flex items-center gap-4 mt-4 text-white/70 text-sm">
                <span>{featured.author}</span>
                <span>·</span>
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.readTime} min read</span>
              </div>
            </div>
          </article>
        </Link>

        {/* All Posts */}
        <div>
          <h2 className="text-white text-2xl font-bold mb-8">All Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {rest.map((blog) => (
              <BlogCard key={blog.slug} blog={blog} />
            ))}
          </div>
        </div>

        {/* All 5 as list */}
        <div className="mt-16">
          <h2 className="text-white text-2xl font-bold mb-8">All Posts</h2>
          <div className="space-y-4">
            {blogs.map((blog, i) => (
              <Link key={blog.slug} href={`/blog/${blog.slug}`} className="group block">
                <div className="bg-stone-900 rounded-2xl p-5 border border-stone-800 hover:border-amber-400/40 transition-all flex items-center gap-5">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${blog.coverColor} shrink-0 flex items-center justify-center text-white font-bold text-lg`}>
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-amber-400 text-xs font-medium">{blog.category}</span>
                      <span className="text-stone-600 text-xs">·</span>
                      <span className="text-stone-500 text-xs">{blog.readTime} min read</span>
                    </div>
                    <h3 className="text-white font-semibold group-hover:text-amber-400 transition-colors line-clamp-1">
                      {blog.title}
                    </h3>
                    <p className="text-stone-400 text-sm line-clamp-1">{blog.excerpt}</p>
                  </div>
                  <div className="text-stone-500 text-sm shrink-0 hidden sm:block">{blog.date}</div>
                  <span className="text-stone-600 group-hover:text-amber-400 transition-colors">→</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
