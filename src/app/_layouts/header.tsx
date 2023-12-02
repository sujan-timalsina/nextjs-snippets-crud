import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-indigo-50">
      <nav className="flex items-center justify-between p-6 h-16 shadow-sm">
        <div className="p-3 rounded-full bg-gradient-to-r from-indigo-700 to-blue-500 text-sm text-white font-semibold shadow-lg hover:cursor-pointer hover:shadow-lg">
          Snippets
        </div>
        <ul>
          <li className="space-x-5 font-semibold">
            <Link
              href="/"
              className="hidden sm:inline-block text-gray-600 hover:text-indigo-700"
            >
              Home
            </Link>
            <Link
              href="/snippets/new"
              className="hidden sm:inline-block text-gray-600 hover:text-indigo-700"
            >
              Create a snippet
            </Link>
          </li>
          <div className="sm:hidden space-y-1 hover:cursor-pointer">
            <span className="w-10 h-1 bg-gray-600 rounded-full block"></span>
            <span className="w-10 h-1 bg-gray-600 rounded-full block"></span>
            <span className="w-10 h-1 bg-gray-600 rounded-full block"></span>
          </div>
        </ul>
      </nav>
    </header>
  );
}
