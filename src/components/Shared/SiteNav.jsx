"use client";

import Link from "next/link";

const SiteNav = () => {
  return (
    <section>
      <ul>
        <li>
          <Link className="text-primary-200" href="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="font-font_poppins font-bold" href="/team">
            Team
          </Link>
        </li>
        <li>
          <Link href="/services">Services</Link>
        </li>
        <li>
          <Link href="/projects">Projects</Link>
        </li>
        <li>
          <Link href="/testimonials">Testimonials</Link>
        </li>
      </ul>
    </section>
  );
};

export default SiteNav;
