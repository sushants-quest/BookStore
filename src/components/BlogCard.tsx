import Link from "next/link";
import { Blog } from "@/data/blogs";

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  return (
    <Link href={`/blog/${blog.slug}`} className="group block">
      <article className="bg-stone-900 rounded-2xl overflow-hidden border border-stone-800 hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-400/10 h-full">
        {/* Cover */}
        <div className={`bg-gradient-to-br ${blog.coverColor} h-40 relative overflow-hidden flex items-end p-5`}>
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-white" />
            <div className="absolute -bottom-8 -left-4 w-40 h-40 rounded-full bg-black" />
          </div>
          <div className="relative z-10 flex items-center justify-between w-full">
            <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full font-medium">
              {blog.category}
            </span>
            <span className="text-white/70 text-xs">{blog.readTime} min read</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 flex flex-col h-[calc(100%-10rem)]">
          <h3 className="text-white font-bold text-base leading-snug mb-2 group-hover:text-amber-400 transition-colors line-clamp-2">
            {blog.title}
          </h3>
          <p className="text-stone-400 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">{blog.excerpt}</p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {blog.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="bg-stone-800 text-stone-400 text-xs px-2 py-0.5 rounded-full">
                #{tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between pt-3 border-t border-stone-800">
            <div>
              <div className="text-stone-200 text-xs font-medium">{blog.author}</div>
              <div className="text-stone-500 text-xs">{blog.authorRole}</div>
            </div>
            <div className="text-stone-500 text-xs">{blog.date}</div>
          </div>
        </div>
      </article>
    </Link>
  );
}
