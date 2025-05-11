import Link from 'next/link';

export default function Header() {
  return (
    <header className="border-b border-gray-200 py-6">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-gray-900"
        >
          Rovani Projects
        </Link>
        <nav>
          <ul className="flex space-x-8">
            <li>
              <Link href="/" className="text-gray-600 hover:text-gray-900">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-600 hover:text-gray-900">
                Services
              </Link>
            </li>
            <li>
              <Link href="/projects" className="text-gray-600 hover:text-gray-900">
                Projects
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}