"use client"; // Required for Next.js components that use hooks
import Link from "next/link";
import "../navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>Care360</h2>
      <ul>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/features">Features</Link></li>
        <li><Link href="/pricing">Pricing</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}
