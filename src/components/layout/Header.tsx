import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const navItems = [
    { name: "Services", href: "/services" },
    { name: "Projects", href: "/projects" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <header className="border-b border-border py-6">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
        <Link
          href="/"
          className="text-2xl font-bold text-foreground flex items-center"
        >
          <Image src={"/rp-logo.svg"} alt="Rovani Projects Logo" width={50} height={50} />
          Rovani Projects
        </Link>
        <nav>
          <ul className="flex flex-wrap justify-center gap-4 sm:gap-8">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}