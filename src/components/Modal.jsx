import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import LogoKopijaTigota from "../assets/logo-only-nobg.png";
import AotcaLogo from "../assets/logo-AOTCA.png";
import IKPIlogo from "../assets/Logo-IKPI.png";

export default function Modal({ onClose }) {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative z-10 w-full max-w-md bg-amber-50 rounded-xl shadow-xl overflow-hidden"
      >
        <div className="p-4">
          <h2 className="text-lg font-semibold text-center">
            Apakah anda anggota dari "Ikatan Konsultan Pajak Indonesia" (IKPI)?
          </h2>

          <div className="flex flex-col gap-3 mt-6">
            <button
              onClick={() => navigate("/registrasi-anggota-umum")}
              className="w-full py-2 rounded-lg border border-gray-400 hover:bg-gray-100 transition cursor-pointer"
            >
              Bukan, saya bukan anggota IKPI
            </button>

            <button
              onClick={() => navigate("/registrasi-anggota-ikpi")}
              className="w-full py-2 rounded-lg text-white bg-green-900 hover:bg-green-800 transition cursor-pointer"
            >
              Ya, saya anggota IKPI
            </button>
          </div>

          <div className=" pt-5 flex justify-center items-center gap-4">
            <img
              className=" w-10"
              src={LogoKopijaTigota}
              alt="kopijatigota-logo"
            />
            <img className=" w-10" src={AotcaLogo} alt="aotca-logo" />
            <img className=" w-10" src={IKPIlogo} alt="ikpi-logo" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
