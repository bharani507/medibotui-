// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black border-b border-cyan-400 px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="bg-cyan-400 text-black font-bold px-2 py-1">W</div>
        <span className="text-cyan-400 font-semibold">WYN_AI</span>
      </div>

      <Link
        to="/login"
        className="border border-cyan-400 text-cyan-400 px-4 py-2 hover:bg-cyan-400 hover:text-black transition"
      >
        → Login
      </Link>
    </nav>
  );
}
