import { AiFillCloseCircle } from "react-icons/ai";
import { useState } from "react";

import Media1 from "../assets/media/Instagram1.jpg";
import Media2 from "../assets/media/Instagram2.jpg";
import Media3 from "../assets/media/Instagram3.jpg";
import Media4 from "../assets/media/Instagram4.jpg";
import Media5 from "../assets/media/Instagram5.jpg";
import Media6 from "../assets/media/Instagram6.jpg";
import Media7 from "../assets/media/Instagram7.jpg";
import Media8 from "../assets/media/Instagram8.jpg";

import LogoKopijaTigota from "../assets/logo-only-nobg.png";

export default function LandingPage() {
  const [lightbox, setLightbox] = useState({ open: false, src: "" });

  const activities = [
    {
      title: "AOTCA Annual Event",
      desc: "Partisipasi komunitas dalam event internasional AOTCA.",
    },
    {
      title: "Kegiatan Pajak (DN/LS)",
      desc: "Seminar, pelatihan, serta diskusi isu pajak dalam & luar negeri.",
    },
    {
      title: "Golf",
      desc: "Pertemuan santai sekaligus olahraga untuk networking.",
    },
    {
      title: "Menembak",
      desc: "Kegiatan rekreasional yang menjaga disiplin dan fokus.",
    },
    {
      title: "Tenis Meja",
      desc: "Aktivitas ringan yang mempererat kebersamaan.",
    },
    {
      title: "Pengajian",
      desc: "Kegiatan rohani rutin sebagai wadah memperkuat silaturahmi.",
    },
  ];

  const gallery = [
    Media1,
    Media2,
    Media3,
    Media4,
    Media5,
    Media6,
    Media7,
    Media8,
  ];
  return (
    <div className="min-h-screen text-slate-800 font-sans">
      <main className="max-w-6xl mx-auto px-6 py-20">
        <section id="about" className=" my-20">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                Tentang Kopijatigota
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Komunitas{" "}
                <span className="font-semibold">IKPI Jaktim Goes To AOTCA</span>
                , disingkat
                <span className="font-semibold"> Kopijatigota</span>, hadir
                sebagai wadah silaturahmi dan komunikasi bagi alumni AOTCA serta
                calon peserta. Tujuan utama kami adalah membangun jejaring
                profesional, berbagi ilmu, dan mempererat hubungan antar anggota
                melalui kegiatan edukatif, rekreasi, dan sosial.
              </p>
              <p className="text-slate-700 leading-relaxed">
                Walau tidak ada kewajiban untuk berangkat ke AOTCA, semangat
                kebersamaan dan kolaborasi menjadi pondasi komunitas ini.
                Kopijatigota berfokus pada interaksi yang bermakna, pengembangan
                profesional, serta kegiatan yang menyenangkan dan bermanfaat.
              </p>
            </div>

            <div className=" rounded-2xl py-2 px-4 hover:shadow-2xl transition duration-300">
              <div className=" bg-cover bg-center">
                <img
                  className=" h-60 rounded-md"
                  src={Media8}
                  alt="foto-about"
                />
              </div>
              <p className="mt-1 text-sm text-slate-400 italic">
                *Foto dokumentasi kegiatan &amp; kebersamaan anggota.
              </p>
            </div>
          </div>
        </section>

        <section id="logo" className="my-20 py-20">
          <div className="rounded-xl p-6 transition duration-300 hover:bg-gradient-to-bl hover:from-green-400 hover:via-amber-50 hover:to-amber-50">
            <h3 className=" md:text-4xl text-2xl font-bold mb-4">
              Makna Simbol Logo
            </h3>
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="w-40 h-40 rounded-full bg-center bg-contain bg-no-repeat shadow-inner hover:scale-105 transition-transform">
                <img src={LogoKopijaTigota} alt="arti-simbol-logo" />
              </div>
              <div className="flex-1 text-slate-700 leading-relaxed">
                <p className="mb-3">
                  Logo Kopijatigota memadukan simbol yang bermakna:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-semibold">Jabat tangan</span>: simbol
                    silaturahmi, kepercayaan, dan koneksi antar anggota.
                  </li>
                  <li>
                    <span className="font-semibold">Lingkaran penuh</span>:
                    melambangkan komunitas yang utuh, inklusif, dan
                    berkesinambungan.
                  </li>
                  <li>
                    <span className="font-semibold">Daun kecil</span>: simbol
                    pertumbuhan, semangat positif, dan kesegaran komunitas muda.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="benefits"
          className=" transition-all duration-500 my-20 py-20"
        >
          <div className="rounded-xl p-6 shadow-2xl border border-slate-200">
            <h3 className=" md:text-4xl text-2xl font-bold mb-4">
              Manfaat Silaturahmi
            </h3>
            <p className="text-slate-700 mb-4">
              Silaturahmi bagi Kopijatigota bukan sekadar berkumpul — melainkan
              sumber kekuatan sosial dan spiritual yang membawa banyak manfaat.
            </p>
            <ol className="list-decimal pl-5 text-slate-700 space-y-2">
              <li>Memperbanyak rezeki</li>
              <li>Memperpanjang umur</li>
              <li>Menolak bala</li>
            </ol>
          </div>
        </section>

        <section id="activities" className=" my-20 py-20">
          <div className="rounded-xl p-6">
            <h3 className=" md:text-4xl text-2xl font-bold mb-4">
              Kegiatan Komunitas
            </h3>
            <p className="text-slate-600 mb-6">
              Beragam kegiatan yang mempertemukan anggota dalam suasana
              edukatif, rekreatif, dan spiritual.
            </p>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {activities.map((a, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <h4 className="font-semibold mb-2">{a.title}</h4>
                  <p className="text-sm text-slate-600">{a.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="gallery" className=" my-20 py-20">
          <div className="rounded-xl p-6">
            <h3 className=" md:text-4xl text-2xl font-bold mb-4">
              Foto-Foto Kegiatan
            </h3>
            <p className="text-slate-600 mb-6">
              Dokumentasi momen penting Kopijatigota — event, latihan, dan
              kebersamaan.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {gallery.map((src, idx) => (
                <button
                  key={idx}
                  onClick={() => setLightbox({ open: true, src })}
                  className=" cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group overflow-hidden rounded-lg relative h-36 sm:h-40 bg-slate-100"
                >
                  <div className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transform transition-transform duration-300">
                    <img src={src} alt={idx} />
                  </div>
                  <span className="absolute bottom-2 left-2 text-xs bg-white/80 px-2 py-1 rounded">
                    Foto Kegiatan {idx + 1}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section id="csr" className=" my-20 py-20">
          <div className=" p-6 rounded-md shadow-2xl border border-slate-200">
            <h3 className="text-2xl font-bold mb-4">CSR &amp; Kontribusi</h3>
            <p className="text-slate-700 mb-4">
              Kopijatigota berkomitmen memberikan manfaat lebih pada masyarakat
              melalui program yang berfokus pada pendidikan dan layanan publik.
            </p>
            <ul className="list-disc pl-5 text-slate-700 space-y-2">
              <li>
                <span className="font-semibold">Penyaluran Magang</span>:
                Membuka kesempatan magang bagi mahasiswa untuk belajar praktik
                perpajakan di lingkungan profesional.
              </li>
              <li>
                <span className="font-semibold">Klinik Pajak (Probono)</span>:
                Memberikan layanan konsultasi pajak gratis bagi masyarakat dan
                UMKM.
              </li>
            </ul>
          </div>
        </section>
      </main>

      {lightbox.open && (
        <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-3xl w-full">
            <button
              onClick={() => setLightbox({ open: false, src: "" })}
              className=" cursor-pointer absolute -top-8 right-0 text-white"
            >
              <AiFillCloseCircle size={30} />
            </button>
            <div className="bg-white rounded-lg overflow-hidden">
              <div className="h-96 bg-cover bg-center">
                <img src={lightbox.src} alt={lightbox.src} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
