import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import photos from "../assets/data/media";

import AotcaLogo from "../assets/logo-AOTCA.png";
import IKPIlogo from "../assets/Logo-IKPI.png";

import Modal from "../components/Modal";

import { motion } from "framer-motion";
import { FiCamera } from "react-icons/fi";
import { BsInstagram } from "react-icons/bs";
import { AiFillRightCircle, AiFillLeftCircle } from "react-icons/ai";
import {
  FaGlobeAsia,
  FaHandshake,
  FaUsers,
  FaHeart,
  FaBullseye,
} from "react-icons/fa";

import KiaraGroupLogo from "../assets/kiara-group.png";

import Client1 from "../assets/clients/client1.png";
import Client2 from "../assets/clients/client2.png";
import Client3 from "../assets/clients/client3.png";
import Client4 from "../assets/clients/client4.png";
import Client5 from "../assets/clients/client5.png";
import Client6 from "../assets/clients/client6.png";
import Client7 from "../assets/clients/client7.png";

const FOR_HERO = [
  {
    id: 1,
    activity: "AOTCA 2024",
    location: "Hounzou, China",
    pict: photos[1].src,
  },
  {
    id: 2,
    activity: "AOTCA 2025",
    location: "Nepal, South Asia",
    pict: photos[8].src,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const handleClickInstagram = () => {
  window.open(
    "https://www.instagram.com/kopijatigota?igsh=MXN0ZjY1NXR2c290Ng==",
    "_blank",
  );
};

export default function HomePage({
  onClickAboutRef,
  aboutRef,
  activitiesRef,
  galleryRef,
  partnerRef,
}) {
  const [chooseModal, setIsChooseModal] = useState(false);

  const navigate = useNavigate();
  const carouselRef = useRef(null);

  const [idx, setIdx] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIdx((i) => (i + 1) % FOR_HERO.length), 3000);
    return () => clearInterval(t);
  }, []);

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
    <>
      {chooseModal && <Modal onClose={() => setIsChooseModal(false)} />}

      <header className="pt-32">
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
                  onClick={() => navigate("/layanan-probono")}
                  className="px-5 py-3 rounded-lg bg-green-900 text-amber-50 font-semibold shadow-lg hover:scale-[1.02] transform transition cursor-pointer"
                >
                  Layanan Pro Bono
                </button>
                <button
                  onClick={() => setIsChooseModal(true)}
                  className="px-5 py-3 rounded-lg border border-green-900 text-green-900 font-semibold hover:bg-green-50 cursor-pointer"
                >
                  Daftar Jadi Anggota
                </button>
              </div>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div>
                    <div className="text-sm font-medium">Member of</div>
                    <div className=" flex items-center gap-4 mt-1">
                      <img className=" w-8" src={AotcaLogo} alt="aotca-logo" />
                      <img className=" w-8" src={IKPIlogo} alt="ikpi-logo" />
                    </div>
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
              className="relative"
            >
              <div className="aspect-[16/9] rounded-xl overflow-hidden shadow-2xl border border-white/5">
                <div className="w-full h-full relative">
                  {FOR_HERO.map((b, i) => (
                    <img
                      key={b.id}
                      src={b.pict}
                      alt={b.activity}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
                        i === idx ? "opacity-100" : "opacity-0 scale-95"
                      }`}
                    />
                  ))}
                  <div className="absolute left-6 bottom-6 bg-white/6 px-4 py-3 rounded-2xl backdrop-blur-sm border border-white/8">
                    <div className="text-sm font-semibold text-white">
                      {FOR_HERO[idx].activity}
                    </div>
                    <div className="text-xs text-gray-300">
                      {FOR_HERO[idx].location}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      <section className="bg-amber-50 pt-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-green-900">
              Vision, Mission & Values
            </h2>
            <p className="mt-3 text-gray-600">
              Fondasi dan arah perjalanan Komunitas Konsultan Pajak
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-sm p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-900 text-white p-3 rounded-xl">
                  <FaGlobeAsia size={22} />
                </div>
                <h3 className="text-xl font-semibold text-green-900">Vision</h3>
              </div>

              <p className="text-gray-700 leading-relaxed">
                Menjadikan{" "}
                <span className="font-semibold">Komunitas Konsultan Pajak</span>{" "}
                sebagai komunitas kelas dunia yang profesional, kolaboratif, dan
                berdampak nyata.
              </p>

              <div className="mt-6 border-l-4 border-green-900 pl-4 italic text-gray-600">
                “Dari anggota, oleh anggota, dan untuk anggota”
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-2xl shadow-sm p-8"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-green-900 text-white p-3 rounded-xl">
                  <FaBullseye size={22} />
                </div>
                <h3 className="text-xl font-semibold text-green-900">
                  Mission
                </h3>
              </div>

              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-green-900">•</span>
                  Menyelenggarakan kegiatan edukatif dan profesional
                </li>
                <li className="flex gap-3">
                  <span className="text-green-900">•</span>
                  Meningkatkan prestasi dan kompetensi anggota
                </li>
                <li className="flex gap-3">
                  <span className="text-green-900">•</span>
                  Membangun kemitraan strategis yang berkelanjutan
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-semibold text-center text-green-900 mb-10">
              Pedoman Komunitas
            </h3>

            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: <FaHandshake />, title: "Keterbukaan" },
                { icon: <FaUsers />, title: "Kebersamaan" },
                { icon: <FaGlobeAsia />, title: "Kolaborasi" },
                { icon: <FaHeart />, title: "Kebaikan" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition"
                >
                  <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center bg-green-900 text-white rounded-xl">
                    {item.icon}
                  </div>
                  <p className="font-medium text-gray-800">{item.title}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 bg-green-900 rounded-2xl p-8 text-center text-white"
          >
            <h3 className="text-2xl font-semibold mb-4">Tujuan Komunitas</h3>
            <p className="max-w-3xl mx-auto leading-relaxed">
              Menjadi sarana komunikasi dan silaturahmi bagi anggota
              Kopijatigota, alumni AOTCA, serta individu yang berminat mengikuti
              AOTCA.
            </p>
          </motion.div>
        </div>
      </section>

      <section ref={aboutRef} className="max-w-6xl mx-auto px-4 py-32">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold text-green-900">
              Tentang KOPIJATIGOTA
            </h2>
            <p className="mt-4 text-slate-700 leading-relaxed">
              Komunitas IKPI Goes To AOTCA, disingkat Kopijatigota, hadir
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

          <aside className="p-6 bg-white rounded-2xl shadow flex flex-col gap-2">
            <h4 className="font-bold text-green-900">Ringkasan Cepat</h4>
            <div className="text-sm text-slate-600">
              Kopijatigota: wadah silaturahmi alumni & calon peserta AOTCA —
              fokus pada jejaring, edukasi, dan kegiatan bermakna.
            </div>

            <div className="mt-4">
              <h5 className="text-sm font-semibold">Kegiatan Unggulan</h5>
              <ul className="text-xs mt-2 space-y-1 text-slate-600 list-disc ml-5">
                <li>AOTCA Annual Event</li>
                <li>Kegiatan Pajak (DN/LS)</li>
                <li>Golf</li>
                <li>Menembak</li>
                <li>Tenis Meja</li>
                <li>Pengajian</li>
              </ul>
            </div>

            <div className="mt-4">
              <h5 className="text-sm font-semibold">CSR & Kontribusi</h5>
              <div className="text-xs mt-2 text-slate-600">
                1. Penyaluran Magang : Membuka kesempatan magang bagi mahasiswa
                untuk belajar praktik perpajakan di lingkungan profesional
                <br />
                <br />
                2. Klinik Pajak (Probono) : Memberikan layanan konsultasi pajak
                gratis bagi masyarakat dan UMKM.
              </div>
            </div>

            <div className=" mb-4 flex justify-center">
              <div>
                <h3 className="font-semibold text-green-900 text-sm">
                  {" "}
                  Member of:
                </h3>
                <div className=" flex items-center gap-4 mt-3">
                  <img className=" w-14" src={AotcaLogo} alt="aotca-logo" />
                  <img className=" w-14" src={IKPIlogo} alt="ikpi-logo" />
                </div>
              </div>
            </div>

            <div className=" flex gap-2">
              <button
                onClick={() => setIsChooseModal(true)}
                className="mt-auto py-2 rounded-lg bg-green-900 hover:bg-green-800 text-amber-50 font-semibold cursor-pointer w-full"
              >
                Daftar Jadi Anggota
              </button>
              <button
                onClick={handleClickInstagram}
                className=" bg-gradient-to-br from-orange-500 via-yellow-500 to-red-500 cursor-pointer rounded-lg px-2 hover:scale-105 transition duration-300"
              >
                <BsInstagram size={25} color="white" />
              </button>
            </div>
          </aside>
        </div>
      </section>

      <section ref={activitiesRef} className="bg-green-600/6 py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-bold text-green-900">
              Kegiatan Komunitas
            </h3>
            <div className="flex gap-2">
              <button
                onClick={() => scrollCarousel("left")}
                className=" text-green-800 hover:text-green-700 transition duration-300 cursor-pointer hover:scale-105"
              >
                <AiFillLeftCircle size={35} />
              </button>
              <button
                onClick={() => scrollCarousel("right")}
                className=" text-green-800 hover:text-green-700 transition duration-300 cursor-pointer hover:scale-105"
              >
                <AiFillRightCircle size={35} />
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
                  title: "AOTCA Annual Event",
                  desc: "Partisipasi komunitas dalam event internasional AOTCA.",
                  img: photos[3].src,
                },
                {
                  title: "Kegiatan Pajak (DN/LS)",
                  desc: "Seminar, pelatihan, serta diskusi isu pajak dalam & luar negeri.",
                  img: photos[2].src,
                },
                {
                  title: "Golf",
                  desc: "Pertemuan santai sekaligus olahraga untuk networking.",
                  img: photos[1].src,
                },
                {
                  title: "Menembak",
                  desc: "Kegiatan rekreasional yang menjaga disiplin dan fokus.",
                  img: photos[6].src,
                },
                {
                  title: "Tenis Meja",
                  desc: "Aktivitas ringan yang mempererat kebersamaan.",
                  img: photos[5].src,
                },
                {
                  title: "Pengajian",
                  desc: "Kegiatan rohani rutin sebagai wadah memperkuat silaturahmi.",
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
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section ref={galleryRef} className="max-w-6xl mx-auto px-4 py-20">
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

      <section ref={partnerRef} className="bg-green-600/6 py-12">
        <div className="max-w-6xl mx-auto px-4">
          <h3 className="text-xl font-bold text-green-900 mb-6">
            Partners & Supporters
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl shadow">
              <h4 className="font-semibold">Powered By</h4>
              <div className=" grid md:grid-cols-3 grid-cols-2 items-center gap-4 mt-2">
                <img className=" w-28" src={Client1} alt="logo-client-1" />
                <img className=" w-28" src={Client5} alt="logo-client-2" />
                <img className=" w-28" src={Client7} alt="logo-client-7" />
                <img className=" w-28" src={Client3} alt="logo-client-3" />
                <img className=" w-20" src={Client2} alt="logo-client-4" />
                <img className=" w-20" src={Client4} alt="logo-client-5" />
                <img className=" w-20" src={Client6} alt="logo-client-6" />
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl shadow">
              <h4 className="font-semibold">Official Partner</h4>
              <div className="mt-2 flex justify-center">
                <div>
                  <img
                    className=" w-20"
                    src={KiaraGroupLogo}
                    alt="kiara-group-logo"
                  />
                  <p className=" text-end font-bold text-2xl">KIARA</p>
                  <p className=" text-end font-bold">GROUP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
