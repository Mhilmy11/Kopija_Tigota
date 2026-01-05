import { FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import LogoKopijaTigota from "../assets/logo-only-nobg.png";
import { useNavigate } from "react-router-dom";

export default function Footer({
  onClickAboutRef,
  onClickActivitiesRef,
  onClickGalleryRefRef,
}) {
  const navigate = useNavigate();
  return (
    <footer className="mt-12 bg-green-900 text-amber-50 py-10">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-6">
        <div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center">
              <img src={LogoKopijaTigota} alt="navbar-logo" />
            </div>
          </div>

          <div className="mt-3 text-sm opacity-90">
            KOPIJATIGOTA — Sarana komunikasi & silaturahmi untuk alumni dan
            calon peserta AOTCA.
          </div>

          <div className="text-sm mt-3 italic">
            © {new Date().getFullYear()} KOPIJATIGOTA — All rights reserved
          </div>
        </div>

        <div>
          <h5 className="font-semibold">Quick Links</h5>
          <ul className="mt-3 text-sm space-y-2 opacity-90">
            <li>
              <button
                className=" cursor-pointer hover:underline"
                onClick={() => navigate("/")}
              >
                Home
              </button>
            </li>
            <li>
              <button
                className=" cursor-pointer hover:underline"
                onClick={onClickAboutRef}
              >
                About
              </button>
            </li>
            <li>
              <button
                className=" cursor-pointer hover:underline"
                onClick={onClickActivitiesRef}
              >
                Activities
              </button>
            </li>
            <li>
              <button
                className=" cursor-pointer hover:underline"
                onClick={onClickGalleryRefRef}
              >
                Gallery
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold">Contact</h5>
          <div className="mt-3 text-sm opacity-90">
            <div className=" flex items-center gap-1">
              <HiOutlineMail size={20} />
              <p>info.admin@kopijatigota.id</p>
            </div>
            <div className=" flex items-center gap-1 mt-2">
              <FaInstagram size={20} />
              <p>@kopijatigota</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
