import { FiMenu, FiX } from "react-icons/fi";
import LogoKopijaTigota from "../assets/logo-only-nobg.png";
import { useState } from "react";

export default function Navbar({ setModalOpen }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav className="fixed w-full z-40 bg-green-600/80 backdrop-blur-md text-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center">
              <img src={LogoKopijaTigota} alt="navbar-logo" />
            </div>
          </div>

          <div>
            <div className="font-bold text-lg tracking-tight">KOPIJATIGOTA</div>
            <div className="text-xs opacity-90">
              Sarana komunikasi dan silaturahmi bagi Alumni dan Calon Peserta
              AOTCA.
            </div>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <a href="#about" className="hover:underline">
            About
          </a>
          <a href="#activities" className="hover:underline">
            Activities
          </a>
          <a href="#gallery" className="hover:underline">
            Gallery
          </a>
          <a href="#partners" className="hover:underline">
            Partners
          </a>
          <button
            onClick={() => setModalOpen(true)}
            className="ml-4 px-4 py-2 rounded-full bg-amber-50 text-green-700 font-semibold shadow"
          >
            Join
          </button>
        </div>
        <button
          className="md:hidden p-2 rounded bg-white/10"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden px-4 pb-4">
          <a href="#about" className="block py-2">
            About
          </a>
          <a href="#activities" className="block py-2">
            Activities
          </a>
          <a href="#gallery" className="block py-2">
            Gallery
          </a>
          <a href="#partners" className="block py-2">
            Partners
          </a>
          <button
            onClick={() => {
              setModalOpen(true);
              setMenuOpen(false);
            }}
            className="w-full mt-2 py-2 rounded bg-amber-50 text-green-700 font-semibold"
          >
            Join
          </button>
        </div>
      )}
    </nav>
  );
}
