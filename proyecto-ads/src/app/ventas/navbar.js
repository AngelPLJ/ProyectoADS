import NavLinks from "./navlinks";
import Brand from "./brand";

export default function Navbar() {
    return (
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center py-4">
            {/* Brand Logo or Name */}
            <Brand />
  
            {/* Navigation Links */}
            <NavLinks />
          </div>
        </div>
      </nav>
    );
  }