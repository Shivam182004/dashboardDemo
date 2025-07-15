import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = ["Home", "About", "Services", "Contact",];

  return (
    <nav className="bg-gradient-to-r from-indigo-500 to-purple-600 shadow-lg px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">MyNavbar</h1> 
        <ul className="hidden md:flex space-x-6">
          {links.map((link) => (
            <li key={link}>
              <a href={`#${link.toLowerCase()}`} className="text-white hover:text-green-400 transition ">
                {link}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <ul className="md:hidden mt-4 space-y-3">
          {links.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="block text-white hover:text-yellow-300 px-2"
              >
                {link}
              </a>
            </li>
            
            
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
