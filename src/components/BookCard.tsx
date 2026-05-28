import Link from "next/link";
import { Book } from "@/data/books";

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <Link href={`/books/${book.id}`} className="group block">
      <div className="bg-stone-900 rounded-2xl overflow-hidden border border-stone-800 hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-400/10">
        {/* Book Cover */}
        <div className={`bg-gradient-to-br ${book.coverColor} h-56 relative overflow-hidden flex items-end p-5`}>
          <div className="absolute top-4 right-4">
            <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full font-medium">
              {book.genre}
            </span>
          </div>
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-6 left-6 w-20 h-20 rounded-full bg-white" />
            <div className="absolute bottom-0 right-0 w-32 h-32 rounded-full bg-black" />
          </div>
          <div className="relative z-10">
            <div className="text-white/70 text-xs mb-1">{book.year}</div>
            <h3 className="text-white font-bold text-lg leading-tight line-clamp-2">{book.title}</h3>
          </div>
        </div>

        {/* Info */}
        <div className="p-5">
          <div className="flex items-center gap-1.5 mb-3">
            <span className="text-amber-400 text-xs">✍️</span>
            <span className="text-stone-300 text-sm font-medium">{book.author}</span>
          </div>

          <p className="text-stone-400 text-sm leading-relaxed line-clamp-2 mb-4">{book.description}</p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {book.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="bg-stone-800 text-stone-400 text-xs px-2 py-0.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <span className="text-amber-400 text-sm">{"★".repeat(Math.floor(book.rating))}</span>
              <span className="text-stone-500 text-xs ml-1">{book.rating}</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-amber-400 font-bold text-lg">${book.price}</span>
              <span className="text-stone-500 text-xs">{book.pages}p</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
