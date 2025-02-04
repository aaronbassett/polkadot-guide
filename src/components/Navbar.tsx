import Link from "next/link";
import type { FC } from "react";

const Navbar: FC = () => {
  return (
    <div className="navbar w-full border-neutral border-t border-b bg-secondary text-secondary-content">
      <div className="flex-1">
        <Link href="/" className="btn btn-ghost text-xl">
          Doctrinaire
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal gap-4 [&_.active]:bg-primary [&_.active]:font-bold [&_.active]:text-primary-content">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
