import NavLink from "./navlink";

export default function NavLinks() {
    return (
      <ul className="flex space-x-4">
        <NavLink href="/" text="Inicio" />
        <NavLink href="" text="About" />
        <NavLink href="" text="Contact" />
      </ul>
    );
  }