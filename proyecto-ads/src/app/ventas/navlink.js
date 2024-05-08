import Link from "next/link";
export default function NavLink({ href, text }) {
    return (
      <li>
        <Link href={href} className="text-gray-800 hover:text-green-600">{text}</Link>
      </li>
    );
  }