import { FiMenu, FiX } from "react-icons/fi";
import LogoKopijaTigota from "../assets/logo-only-nobg.png";
import { useState } from "react";

export default function Navbar({
  setModalOpen,
  onClickAboutRef,
  onClickActivitiesRef,
  onClickGalleryRefRef,
  onClickPartnerRef,
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-40 bg-green-600/80 backdrop-blur-md text-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full p-1 bg-white flex items-center justify-center">
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
          <button
            onClick={onClickAboutRef}
            className="hover:underline cursor-pointer"
          >
            About
          </button>
          <button
            onClick={onClickActivitiesRef}
            className="hover:underline cursor-pointer"
          >
            Activities
          </button>
          <button
            onClick={onClickGalleryRefRef}
            className="hover:underline cursor-pointer"
          >
            Gallery
          </button>
          <button
            onClick={onClickPartnerRef}
            className="hover:underline cursor-pointer"
          >
            Partners
          </button>
          <button
            onClick={() => setModalOpen(true)}
            className="ml-4 px-4 py-2 rounded-full bg-amber-50 text-green-700 font-semibold shadow cursor-pointer"
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
          <button className="block py-2">About</button>
          <button className="block py-2">Activities</button>
          <button className="block py-2">Gallery</button>
          <button className="block py-2">Partners</button>
          <button
            onClick={() => {
              setModalOpen(true);
              setMenuOpen(false);
            }}
            className="w-full mt-2 py-2 rounded bg-amber-50 text-green-700 font-semibold cursor-pointer"
          >
            Join
          </button>
        </div>
      )}
    </nav>
  );
}
