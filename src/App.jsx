import "./App.css";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FiChevronRight, FiCamera } from "react-icons/fi";
import { MdOutlineDateRange } from "react-icons/md";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80",
    caption: "Workshop Pajak: Diskusi kasus dan praktik terbaik",
  },
  {
    src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=1200&q=80",
    caption: "Silaturahmi alumni setelah acara resmi",
  },
  {
    src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80",
    caption: "Sesi networking dan tukar pengalaman",
  },
  {
    src: "https://images.unsplash.com/photo-1555375771-6a0b19b83b16?w=1200&q=80",
    caption: "Studi kasus bersama narasumber",
  },
  {
    src: "https://images.unsplash.com/photo-1551836022-1f6b1a0e5b6b?w=1200&q=80",
    caption: "Foto bersama peserta AOTCA",
  },
  {
    src: "https://images.unsplash.com/photo-1526318472351-c75fcf070d8b?w=1200&q=80",
    caption: "Kegiatan sosial: donor & edukasi masyarakat",
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200&q=80",
    caption: "Rekreasi edukatif: outbound & bonding",
  },
  {
    src: "https://images.unsplash.com/photo-1543269865-cbf427effbad?w=1200&q=80",
    caption: "Diskusi panel: inovasi perpajakan",
  },
];

const poweredCompanies = [
  "PT. Nexus TaxTech",
  "PT. Fiscal Bridge",
  "PT. SmartLedger",
  "PT. AuditFlow",
  "PT. EduTax Solutions",
  "PT. GreenLedger",
];

const officialPartner = "PT. Sinergi Pajak Nusantara";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const carouselRef = useRef(null);

  const scrollCarousel = (dir = "right") => {
    if (!carouselRef.current) return;
    const el = carouselRef.current;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({
      left: dir === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen font-sans bg-amber-50 text-slate-800">
      <Navbar setModalOpen={setModalOpen} />

      {/* HERO */}
      <header className="pt-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-green-900">
                KOPIJATIGOTA
              </h1>
              <p className="mt-4 text-lg text-slate-700">
                Sarana komunikasi dan silaturahmi bagi Alumni dan Calon Peserta
                AOTCA. Bergabunglah untuk memperluas jejaring, berbagi ilmu, dan
                ikut serta dalam kegiatan edukatif serta sosial kami.
              </p>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={() => setModalOpen(true)}
                  className="px-5 py-3 rounded-lg bg-green-900 text-amber-50 font-semibold shadow-lg hover:scale-[1.02] transform transition"
                >
                  Gabung Sekarang
                </button>
                <a
                  href="#about"
                  className="px-5 py-3 rounded-lg border border-green-900 text-green-900 font-semibold hover:bg-green-50"
                >
                  Pelajari Lebih Lanjut
                </a>
              </div>

              <div className="mt-8 flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <MdOutlineDateRange size={22} />
                  <div>
                    <div className="text-sm font-medium">Member of</div>
                    <div className="text-xs">IKPI · AOTCA</div>
                  </div>
                </div>

                <div className="h-8 w-px bg-green-200/40" />

                <div className="flex items-center gap-2">
                  <FiCamera size={20} />
                  <div>
                    <div className="text-sm font-medium">Kegiatan</div>
                    <div className="text-xs">Workshop · Networking · CSR</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={photos[0].src}
                alt="hero"
                className="w-full h-80 md:h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent" />
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="absolute left-6 bottom-6 bg-amber-50/90 rounded-xl p-4 backdrop-blur-sm"
              >
                <div className="text-sm font-semibold text-green-900">
                  Upcoming: Workshop Pajak
                </div>
                <div className="text-xs text-slate-600">
                  Sesi praktek & studi kasus bersama narasumber
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </header>

      {/* ABOUT */}
      <section id="about" className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-green-900">
              Tentang KOPIJATIGOTA
            </h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Komunitas IKPI Jaktim Goes To AOTCA, disingkat Kopijatigota, hadir
              sebagai wadah silaturahmi dan komunikasi bagi alumni AOTCA serta
              calon peserta. Tujuan utama kami adalah membangun jejaring
              profesional, berbagi ilmu, dan mempererat hubungan antar anggota
              melalui kegiatan edukatif, rekreasi, dan sosial. Walau tidak ada
              kewajiban untuk berangkat ke AOTCA, semangat kebersamaan dan
              kolaborasi menjadi pondasi komunitas ini. Kopijatigota berfokus
              pada interaksi yang bermakna, pengembangan profesional, serta
              kegiatan yang menyenangkan dan bermanfaat.
            </p>

            <div className="mt-8">
              <h3 className="font-semibold text-green-900">
                Tiga Makna pada Logo
              </h3>
              <div className="mt-3 grid sm:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 shadow">
                  1. Jabat tangan — simbol silaturahmi, kepercayaan, dan koneksi
                  antar anggota.
                </div>
                <div className="bg-white rounded-lg p-4 shadow">
                  2. Lingkaran penuh — melambangkan komunitas yang utuh,
                  inklusif, dan berkesinambungan.
                </div>
                <div className="bg-white rounded-lg p-4 shadow">
                  3. Daun kecil — simbol pertumbuhan, semangat positif, dan
                  kesegaran komunitas muda.
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="font-semibold text-green-900">
                Tiga Manfaat Silaturahmi
              </h3>
              <ol className="mt-3 list-decimal list-inside space-y-2">
                <li>Memperluas jejaring profesional dan peluang kolaborasi.</li>
                <li>
                  Berbagi pengalaman & pengetahuan praktis seputar perpajakan.
                </li>
                <li>
                  Membangun dukungan emosional dan profesional antar alumni.
                </li>
              </ol>
            </div>
          </div>

          <aside className="p-6 bg-white rounded-2xl shadow flex flex-col gap-4">
            <h4 className="font-bold text-green-900">Ringkasan Cepat</h4>
            <div className="text-sm text-slate-600">
              Kopijatigota: wadah silaturahmi alumni & calon peserta AOTCA —
              fokus pada jejaring, edukasi, dan kegiatan bermakna.
            </div>

            <div className="mt-4">
              <h5 className="text-sm font-semibold">Kegiatan Unggulan</h5>
              <ul className="text-xs mt-2 space-y-1 text-slate-600">
                <li>Workshop Pajak</li>
                <li>Study Group</li>
                <li>Studi Banding & Outbound</li>
                <li>Acara Sosial & CSR</li>
                <li>Sharing Session</li>
                <li>Networking Night</li>
              </ul>
            </div>

            <div className="mt-4">
              <h5 className="text-sm font-semibold">CSR & Kontribusi</h5>
              <div className="text-xs mt-2 text-slate-600">
                1. Edukasi pajak untuk UMKM lokal
                <br />
                2. Donor & bantuan sosial berbasis komunitas
              </div>
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="mt-auto py-2 rounded-lg bg-green-900 text-amber-50 font-semibold"
            >
              Daftar Jadi Anggota
            </button>
          </aside>
        </div>
      </section>

      {/* ACTIVITIES - horizontal carousel scroll */}
      <section id="activities" className="bg-green-600/6 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-green-900">
              Kegiatan Komunitas (6)
            </h3>
            <div className="flex gap-2">
              <button
                onClick={() => scrollCarousel("left")}
                className="p-2 rounded bg-white/90 shadow"
              >
                ◀
              </button>
              <button
                onClick={() => scrollCarousel("right")}
                className="p-2 rounded bg-white/90 shadow"
              >
                ▶
              </button>
            </div>
          </div>

          <div
            ref={carouselRef}
            className="overflow-x-auto no-scrollbar scroll-smooth py-2"
          >
            <div className="flex gap-4 w-max">
              {[
                {
                  title: "Workshop Pajak",
                  desc: "Sesi praktek & studi kasus",
                  img: photos[3].src,
                },
                {
                  title: "Study Group",
                  desc: "Kelompok belajar terstruktur",
                  img: photos[2].src,
                },
                {
                  title: "Networking Night",
                  desc: "Perkenalan & kolaborasi",
                  img: photos[1].src,
                },
                {
                  title: "Outbond & Rekreasi",
                  desc: "Team building & fun",
                  img: photos[6].src,
                },
                {
                  title: "CSR & Aksi Sosial",
                  desc: "Edukasi UMKM & donasi",
                  img: photos[5].src,
                },
                {
                  title: "Sharing Session",
                  desc: "Sesi pengalaman praktis",
                  img: photos[7].src,
                },
              ].map((it, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -6 }}
                  className="min-w-[320px] bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <img src={it.img} className="h-40 w-full object-cover" />
                  <div className="p-4">
                    <div className="font-semibold text-green-900">
                      {it.title}
                    </div>
                    <div className="text-sm text-slate-600 mt-2">{it.desc}</div>
                    <div className="mt-3 flex items-center justify-between">
                      <div className="text-xs text-slate-500">Lebih lanjut</div>
                      <FiChevronRight />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="max-w-6xl mx-auto px-4 py-16">
        <h3 className="text-2xl font-bold text-green-900 mb-6">
          Galeri Kegiatan
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {photos.map((p, i) => (
            <motion.figure
              key={i}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg overflow-hidden shadow"
            >
              <img
                src={p.src}
                alt={p.caption}
                className="w-full h-48 object-cover"
              />
              <figcaption className="p-3 text-sm text-slate-700">
                {p.caption}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* PARTNERS */}
      <section id="partners" className="bg-green-600/6 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-xl font-bold text-green-900 mb-6">
            Partners & Supporters
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl shadow">
              <h4 className="font-semibold">Official Partner</h4>
              <div className="mt-2 text-sm text-slate-600">
                {officialPartner}
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl shadow">
              <h4 className="font-semibold">Powered By (6)</h4>
              <ul className="mt-3 text-sm text-slate-600 space-y-1">
                {poweredCompanies.map((c, idx) => (
                  <li key={idx}>• {c}</li>
                ))}
              </ul>
            </div>

            <div className="p-6 bg-white rounded-xl shadow">
              <h4 className="font-semibold">Member Of</h4>
              <div className="mt-2 text-sm text-slate-600">IKPI · AOTCA</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* MODAL */}
      {modalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          <div className="p-4">
            <h3 className="text-xl font-bold text-green-900">
              Form Pendaftaran Singkat
            </h3>
            <p className="text-sm text-slate-600 mt-2">
              Isi data singkat untuk bergabung atau dapatkan info acara terbaru.
            </p>
            <form className="mt-4 grid gap-3">
              <input
                className="p-3 rounded border"
                placeholder="Nama Lengkap"
              />
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
                  className="py-2 px-4 rounded bg-green-900 text-amber-50 font-semibold"
                >
                  Kirim
                </button>
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="py-2 px-4 rounded border"
                >
                  Batal
                </button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </div>
  );
}

function Modal({ children, onClose }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/30" onClick={onClose} />
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="relative z-10 w-full max-w-md bg-white rounded-xl shadow-xl overflow-hidden"
      >
        {children}
      </motion.div>
    </div>
  );
}
