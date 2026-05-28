export interface Book {
  id: string;
  title: string;
  author: string;
  genre: string;
  year: number;
  pages: number;
  price: number;
  rating: number;
  description: string;
  longDescription: string;
  coverColor: string;
  coverAccent: string;
  featured: boolean;
  tags: string[];
}

export const books: Book[] = [
  {
    id: "1",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    genre: "Classic Fiction",
    year: 1925,
    pages: 180,
    price: 14.99,
    rating: 4.5,
    description: "A portrait of the Jazz Age in all of its decadence and excess.",
    longDescription:
      "Set in the summer of 1922, the novel follows the mysterious millionaire Jay Gatsby and his obsession with beautiful Daisy Buchanan. Narrated by Nick Carraway, the story explores themes of decadence, idealism, resistance to change, social upheaval, and excess.",
    coverColor: "from-emerald-800 to-emerald-600",
    coverAccent: "bg-yellow-400",
    featured: true,
    tags: ["Classic", "American Literature", "Romance"],
  },
  {
    id: "2",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    genre: "Literary Fiction",
    year: 1960,
    pages: 281,
    price: 13.99,
    rating: 4.8,
    description: "A timeless story of racial injustice and the loss of innocence.",
    longDescription:
      "Set in the American South during the 1930s, the novel follows young Scout Finch as her father, attorney Atticus Finch, defends a Black man falsely accused of raping a white woman. A profound exploration of human morality, compassion, and justice.",
    coverColor: "from-amber-800 to-amber-600",
    coverAccent: "bg-amber-300",
    featured: true,
    tags: ["Classic", "Justice", "Coming of Age"],
  },
  {
    id: "3",
    title: "1984",
    author: "George Orwell",
    genre: "Dystopian Fiction",
    year: 1949,
    pages: 328,
    price: 12.99,
    rating: 4.7,
    description: "A chilling prophecy about the future of our world.",
    longDescription:
      "In a totalitarian future society, Winston Smith works for the Ministry of Truth, where his job is to rewrite historical records. As Winston begins to question the system and falls in love, he risks everything in a desperate fight for truth and freedom.",
    coverColor: "from-slate-800 to-slate-600",
    coverAccent: "bg-red-500",
    featured: true,
    tags: ["Dystopian", "Political", "Sci-Fi"],
  },
  {
    id: "4",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    genre: "Romance",
    year: 1813,
    pages: 432,
    price: 11.99,
    rating: 4.6,
    description: "A witty exploration of love, class, and marriage in Regency England.",
    longDescription:
      "The story follows Elizabeth Bennet and her sisters as they navigate societal pressures to marry. Elizabeth's relationship with the proud and wealthy Mr. Darcy evolves from mutual dislike to love, challenging their preconceptions and personal growth.",
    coverColor: "from-pink-700 to-rose-500",
    coverAccent: "bg-pink-200",
    featured: false,
    tags: ["Romance", "Classic", "Historical"],
  },
  {
    id: "5",
    title: "The Alchemist",
    author: "Paulo Coelho",
    genre: "Philosophical Fiction",
    year: 1988,
    pages: 197,
    price: 15.99,
    rating: 4.4,
    description: "A magical journey about following your dreams.",
    longDescription:
      "Santiago, an Andalusian shepherd boy, dreams of finding a treasure in the Egyptian pyramids. His journey across the desert is filled with lessons about life, love, and the importance of following one's personal legend — one's true destiny.",
    coverColor: "from-orange-600 to-yellow-500",
    coverAccent: "bg-orange-200",
    featured: true,
    tags: ["Philosophy", "Adventure", "Inspirational"],
  },
  {
    id: "6",
    title: "Sapiens",
    author: "Yuval Noah Harari",
    genre: "Non-Fiction",
    year: 2011,
    pages: 443,
    price: 19.99,
    rating: 4.5,
    description: "A brief history of humankind — bold, wide-ranging and provocative.",
    longDescription:
      "From a renowned historian comes a groundbreaking narrative of humanity's creation and evolution, exploring how Homo sapiens came to dominate the world. Harari surveys the history of humankind from the evolution of archaic human species in the Stone Age up to the twenty-first century.",
    coverColor: "from-blue-800 to-blue-600",
    coverAccent: "bg-cyan-400",
    featured: false,
    tags: ["History", "Science", "Anthropology"],
  },
  {
    id: "7",
    title: "Atomic Habits",
    author: "James Clear",
    genre: "Self-Help",
    year: 2018,
    pages: 320,
    price: 18.99,
    rating: 4.9,
    description: "Tiny changes, remarkable results.",
    longDescription:
      "James Clear reveals how tiny, incremental changes compound over time and create extraordinary results. He draws on the most proven ideas from biology, psychology, and neuroscience to craft an easy-to-understand guide for making good habits inevitable and bad habits impossible.",
    coverColor: "from-indigo-800 to-purple-600",
    coverAccent: "bg-indigo-300",
    featured: true,
    tags: ["Productivity", "Psychology", "Self-Improvement"],
  },
  {
    id: "8",
    title: "Dune",
    author: "Frank Herbert",
    genre: "Science Fiction",
    year: 1965,
    pages: 688,
    price: 16.99,
    rating: 4.7,
    description: "The greatest science fiction novel of all time.",
    longDescription:
      "Set in the distant future amidst a feudal interstellar society, the story follows young Paul Atreides as his family accepts stewardship of the desert planet Arrakis — the only source of the most valuable substance in the universe. An epic tale of politics, religion, ecology, and human potential.",
    coverColor: "from-yellow-700 to-amber-500",
    coverAccent: "bg-yellow-200",
    featured: false,
    tags: ["Sci-Fi", "Epic", "Political"],
  },
];

export const authors = [
  {
    name: "F. Scott Fitzgerald",
    bio: "American novelist and short story writer, widely regarded as one of the greatest American writers of the 20th century.",
    booksCount: 4,
    nationality: "American",
    avatar: "from-emerald-600 to-teal-700",
  },
  {
    name: "Harper Lee",
    bio: "American novelist best known for To Kill a Mockingbird, which won the Pulitzer Prize in 1961.",
    booksCount: 2,
    nationality: "American",
    avatar: "from-amber-600 to-orange-700",
  },
  {
    name: "George Orwell",
    bio: "English novelist, essayist, and critic, whose work is marked by lucid prose, social criticism, and opposition to totalitarianism.",
    booksCount: 8,
    nationality: "British",
    avatar: "from-slate-600 to-gray-700",
  },
  {
    name: "Paulo Coelho",
    bio: "Brazilian lyricist and novelist, best known for his novel The Alchemist. Translated into 88 languages.",
    booksCount: 30,
    nationality: "Brazilian",
    avatar: "from-orange-500 to-yellow-600",
  },
];
