import { FiMenu, FiX } from "react-icons/fi";
import LogoKopijaTigota from "../assets/logo-only-nobg.png";
import AotcaLogo from "../assets/logo-AOTCA.png";
import IKPIlogo from "../assets/Logo-IKPI.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar({
  onClickAboutRef,
  onClickActivitiesRef,
  onClickGalleryRefRef,
  onClickPartnerRef,
}) {
  const navigate = useNavigate();
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
            onClick={() => navigate("/")}
            className="hover:underline cursor-pointer"
          >
            Home
          </button>
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
          <div>
            <img
              className=" w-10 ml-5"
              src={AotcaLogo}
              alt="logo-aotca-navbar"
            />
          </div>
        </div>
        <button
          className="md:hidden p-2 rounded bg-white/10"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 grid grid-cols-1 justify-center">
          <button onClick={() => navigate("/")} className="block py-2">
            Home
          </button>
          <button className="block py-2">About</button>
          <button className="block py-2">Activities</button>
          <button className="block py-2">Gallery</button>
          <button className="block py-2">Partners</button>
          <div className=" flex justify-between">
            <img
              className=" w-20 ml-5 pt-3"
              src={AotcaLogo}
              alt="logo-aotca-navbar"
            />
            <img
              className=" w-20 ml-5 pt-3"
              src={IKPIlogo}
              alt="logo-ikpi-navbar"
            />
          </div>
        </div>
      )}
    </nav>
  );
}
