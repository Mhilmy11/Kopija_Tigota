import LogoKopijaTigota from "../assets/logo-only-nobg.png";

export default function Footer() {
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
        </div>

        <div>
          <h5 className="font-semibold">Quick Links</h5>
          <ul className="mt-3 text-sm space-y-2 opacity-90">
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#activities">Activities</a>
            </li>
            <li>
              <a href="#gallery">Gallery</a>
            </li>
          </ul>
        </div>

        <div>
          <h5 className="font-semibold">Contact</h5>
          <div className="mt-3 text-sm opacity-90">
            Email: kopijatigota@example.com
            <br />
            Instagram: @kopijatigota
          </div>
        </div>
      </div>
    </footer>
  );
}
