export default function Sidebar() {
  const navItems = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Bands", href: "/bands" },
    { name: "Users", href: "/users" },
  ]

  return (
    <aside className="w-48 bg-blue-400 text-white">
      <nav className="flex flex-col">
        {navItems.map((item) => (
          <a key={item.name} href={item.href} className="py-4 px-6 hover:bg-blue-500 text-center font-medium">
            {item.name}
          </a>
        ))}
      </nav>
    </aside>
  )
}
