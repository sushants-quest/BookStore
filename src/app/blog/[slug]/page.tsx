import { blogs } from "@/data/blogs";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return blogs.map((blog) => ({ slug: blog.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) return {};
  return { title: `${blog.title} — BoundPages Blog`, description: blog.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const blog = blogs.find((b) => b.slug === slug);
  if (!blog) notFound();

  const related = blogs.filter((b) => b.slug !== blog.slug).slice(0, 3);

  const paragraphs = blog.content
    .trim()
    .split("\n")
    .filter((line) => line.trim() !== "");

  return (
    <main className="bg-stone-950 min-h-screen pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-stone-500 text-sm mb-10">
          <Link href="/" className="hover:text-amber-400 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-amber-400 transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-stone-300 line-clamp-1">{blog.title}</span>
        </div>

        {/* Cover Hero */}
        <div className={`bg-gradient-to-br ${blog.coverColor} rounded-3xl h-72 relative overflow-hidden flex items-end p-10 mb-10`}>
          <div className="absolute inset-0 opacity-10">
            <div className="absolute -top-12 -right-12 w-64 h-64 rounded-full bg-white" />
            <div className="absolute -bottom-12 -left-12 w-80 h-80 rounded-full bg-black" />
          </div>
          <div className="relative z-10">
            <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium mb-4 inline-block">
              {blog.category}
            </span>
            <h1 className="text-white text-3xl sm:text-4xl font-bold leading-tight max-w-2xl">{blog.title}</h1>
          </div>
        </div>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 mb-10 pb-10 border-b border-stone-800">
          <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${blog.coverColor} flex items-center justify-center text-white font-bold text-sm`}>
            {blog.author.charAt(0)}
          </div>
          <div>
            <div className="text-stone-200 font-medium text-sm">{blog.author}</div>
            <div className="text-stone-500 text-xs">{blog.authorRole}</div>
          </div>
          <span className="text-stone-700">|</span>
          <span className="text-stone-500 text-sm">{blog.date}</span>
          <span className="text-stone-700">|</span>
          <span className="text-stone-500 text-sm">{blog.readTime} min read</span>
          <div className="flex gap-1.5 ml-auto">
            {blog.tags.map((tag) => (
              <span key={tag} className="bg-stone-800 text-stone-400 text-xs px-2 py-0.5 rounded-full">
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Excerpt */}
        <p className="text-stone-300 text-xl leading-relaxed mb-10 font-medium">{blog.excerpt}</p>

        {/* Content */}
        <div className="prose prose-invert prose-amber max-w-none">
          {paragraphs.map((para, i) => {
            if (para.startsWith("## ")) {
              return (
                <h2 key={i} className="text-white text-2xl font-bold mt-10 mb-4">
                  {para.replace("## ", "")}
                </h2>
              );
            }
            if (para.startsWith("### ")) {
              return (
                <h3 key={i} className="text-white text-xl font-semibold mt-8 mb-3">
                  {para.replace("### ", "")}
                </h3>
              );
            }
            if (para.startsWith("**") && para.endsWith("**")) {
              return (
                <p key={i} className="text-amber-400 font-semibold text-base mt-6 mb-2">
                  {para.replace(/\*\*/g, "")}
                </p>
              );
            }
            return (
              <p key={i} className="text-stone-400 leading-relaxed mb-4 text-base">
                {para}
              </p>
            );
          })}
        </div>

        {/* Share / Tags footer */}
        <div className="mt-14 pt-10 border-t border-stone-800">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap gap-2">
              {blog.tags.map((tag) => (
                <span key={tag} className="bg-stone-800 hover:bg-stone-700 text-stone-300 text-sm px-3 py-1 rounded-full cursor-pointer transition-colors">
                  #{tag}
                </span>
              ))}
            </div>
            <Link
              href="/blog"
              className="text-amber-400 hover:text-amber-300 transition-colors text-sm font-medium flex items-center gap-1"
            >
              ← Back to Blog
            </Link>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-white text-2xl font-bold mb-8">More Articles</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {related.map((r) => (
                <Link key={r.slug} href={`/blog/${r.slug}`} className="group block">
                  <div className={`bg-gradient-to-br ${r.coverColor} rounded-2xl h-36 relative overflow-hidden flex items-end p-5`}>
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-white" />
                    </div>
                    <div className="relative z-10">
                      <p className="text-white/70 text-xs mb-1">{r.category}</p>
                      <p className="text-white font-semibold text-sm line-clamp-2 group-hover:underline underline-offset-2">{r.title}</p>
                    </div>
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
