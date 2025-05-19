import { navLinks } from "../constants";
import SearchInput from "./SearchInput";

const Navbar = () => {
  return (
    <header className="border-b border-gray-200 py-4 px-4 md:px-8 font-satoshi">
      <div className="container mx-auto flex items-center justify-between">
        <a href="#" className="text-2xl font-bold text-shop-black">
          LWS.SHOP
        </a>

        <nav className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:opacity-50 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <SearchInput />

          <a href="#" className="hover:opacity-50 transition-colors">
            <img src="/assets/icons/cart.svg" alt="Cart" className="h-6 w-6" />
          </a>

          <a href="#" className="hover:opacity-50 transition-colors">
            <img src="/assets/icons/user.svg" alt="User" className="h-6 w-6" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
