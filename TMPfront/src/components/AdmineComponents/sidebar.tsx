import React from "react"

type props = {
  isOpen?:boolean
  ClassName?:string
}

const Sidebar:React.FC<props> = ({ClassName,isOpen=false}) => {
  const navItems = [
    { name: "Home", href: "/admin" },
    { name: "Products", href: "/admin/products" },
    { name: "Users", href: "/users" },
  ]

  return (
    <aside className={`w-48 bg-blue-400 text-white md:block ${ClassName} ${isOpen?"block":"hidden"}`}>
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
export default Sidebar