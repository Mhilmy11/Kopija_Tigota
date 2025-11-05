import { motion } from "framer-motion";

export default function Modal({ onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative z-10 w-full max-w-md bg-white rounded-xl shadow-xl overflow-hidden"
      >
        <div className="p-4">
          <h3 className="text-xl font-bold text-green-900">
            Form Pendaftaran Singkat
          </h3>
          <p className="text-sm text-slate-600 mt-2">
            Isi data singkat untuk bergabung atau dapatkan info acara terbaru.
          </p>
          <form className="mt-4 grid gap-3">
            <input className="p-3 rounded border" placeholder="Nama Lengkap" />
            <input className="p-3 rounded border" placeholder="Email" />
            <input
              className="p-3 rounded border"
              placeholder="No. HP (opsional)"
            />
            <div className="flex gap-3">
              <button
                type="button"
                onClick={() => {
                  alert("Terima kasih! (demo)");
                }}
                className="py-2 px-4 rounded bg-green-900 text-amber-50 font-semibold cursor-pointer"
              >
                Kirim
              </button>
              <button
                type="button"
                onClick={onClose}
                className="py-2 px-4 rounded border cursor-pointer"
              >
                Batal
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
