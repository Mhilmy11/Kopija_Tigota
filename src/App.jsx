import "./App.css";

import { AiOutlineArrowDown } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

import { useRef } from "react";

import Container from "./components/Container";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import LogoKopijatigota from "../public/logo-only-nobg.png";
import LogoIKPI from "./assets/Logo-IKPI.png";
import LogoAOTCA from "./assets/logo-AOTCA.png";
import Media1 from "./assets/media/Instagram1.jpg";
import Media2 from "./assets/media/Instagram2.jpg";
import Media3 from "./assets/media/Instagram3.jpg";
import Media4 from "./assets/media/Instagram4.jpg";
import Media5 from "./assets/media/Instagram5.jpg";
import Media6 from "./assets/media/Instagram6.jpg";
import Media7 from "./assets/media/Instagram7.jpg";
import Media8 from "./assets/media/Instagram8.jpg";

function App() {
  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const moreInfo = useRef(null);

  const handleClickToProduct = () => {
    moreInfo.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className=" bg-gradient-to-bl from-green-600 via-amber-50 to-amber-50 h-screen">
        <Container>
          <Navbar openLink={openLink} />

          <div className=" flex justify-center w-full pt-14">
            <div>
              <div className=" text-center md:w-3xl">
                <h1 className=" md:text-5xl text-2xl font-bold">
                  Komunitas IKPI Jaktim Goes To AOTCA{" "}
                  <span className=" text-green-600 italic">"KOPIJATIGOTA"</span>
                </h1>

                <h2 className=" md:text-2xl font-semibold px-10 pt-5 text-green-700">
                  Sarana komunikasi dan silaturahmi bagi Alumni dan Calon
                  Peserta AOTCA.
                </h2>
              </div>

              <div className=" flex justify-center py-10 gap-5 text-xl font-semibold">
                <button
                  onClick={() =>
                    openLink("https://www.instagram.com/kopijatigota/")
                  }
                  className=" flex items-center gap-2 cursor-pointer bg-orange-500 py-3 px-6 rounded-l-full transition hover:scale-105 rounded-br-full text-white"
                >
                  <BsInstagram />
                  <p>Instagram</p>
                </button>
                <button
                  onClick={handleClickToProduct}
                  className=" flex items-center gap-2 cursor-pointer border-2 border-green-600 hover:bg-green-600 hover:scale-105 transition py-3 px-6 rounded-r-full rounded-bl-full"
                >
                  <p>More Info</p>
                  <AiOutlineArrowDown />
                </button>
              </div>

              <div className=" flex justify-center w-full">
                <div>
                  <p className=" text-sm pb-1">Member of:</p>

                  <div className=" flex gap-5 items-center">
                    <img
                      className=" w-24 hover:scale-105 transition duration-300"
                      src={LogoIKPI}
                      alt="logo-ikpi"
                    />
                    <img
                      className=" w-24 hover:scale-105 transition duration-300"
                      src={LogoAOTCA}
                      alt="logo-aotca"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div ref={moreInfo} className=" bg-amber-50">
        <Container>
          <div className=" md:px-20 px-10 text-center md:text-xl text-xs py-20">
            <h2 className=" md:text-4xl text-2xl font-semibold">
              Tentang Komunitas
            </h2>

            <p className=" py-5">
              Komunitas{" "}
              <span className=" font-semibold text-green-600">
                KOPIJATIGOTA
              </span>{" "}
              dibentuk sebagai wadah komunikasi dan silaturahmi bagi Alumni
              AOTCA serta mereka yang akan berpartisipasi di masa mendatang.
            </p>

            <p>
              Fokus utama kami bukan pada keberangkatan, melainkan pada{" "}
              <span className=" font-semibold text-green-600">
                menjaga tali silaturahmi antar anggota IKPI Jakarta Timur
              </span>{" "}
              melalui kegiatan positif dan penuh semangat kebersamaan.
            </p>
          </div>

          <div className=" flex flex-col gap-10 py-20 px-10">
            <div className=" flex justify-center">
              <div className=" bg-green-600 md:p-4 p-2 rounded-2xl text-amber-50 md:w-3xs w-[150px]">
                <p className=" md:text-lg text-sm font-bold text-center pb-1">
                  Jabat Tangan:
                </p>
                <p className=" text-center md:text-sm text-xs">
                  Melambangkan silaturahmi, kepercayaan, dan koneksi antar
                  anggota.
                </p>
              </div>
            </div>

            <div className=" flex justify-center items-center md:gap-10 gap-3">
              <div className=" text-right md:text-5xl text-2xl font-bold">
                <p>Makna Simbol</p>
                <p>Logo</p>
              </div>

              <div className=" hover:scale-105 transition duration-300">
                <img
                  className=" w-xs"
                  src={LogoKopijatigota}
                  alt="makna-logo"
                />
              </div>

              <div className=" bg-green-600 md:p-4 p-2 rounded-2xl text-amber-50 md:w-3xs w-[150px]">
                <p className=" md:text-lg text-sm font-bold text-center pb-1">
                  Lingkaran Penuh:
                </p>
                <p className=" text-center md:text-sm text-xs">
                  Menunjukkan komunitas yang utuh, inklusif, dan
                  berkesinambungan.
                </p>
              </div>
            </div>

            <div className=" flex justify-center">
              <div className=" bg-green-600 md:p-4 p-2 rounded-2xl text-amber-50 md:w-3xs w-[150px]">
                <p className=" md:text-lg text-sm font-bold text-center pb-1">
                  Daun di Sisi Lingkaran:
                </p>
                <p className=" text-center md:text-sm text-xs">
                  Simbol pertumbuhan, semangat positif, dan kesegaran komunitas.
                </p>
              </div>
            </div>
          </div>

          <div className=" py-20 px-10">
            <div>
              <h3 className=" md:text-4xl text-2xl font-semibold text-center">
                Galeri & Media Sosial
              </h3>
            </div>

            <div className=" md:mt-16 marquee-container">
              <div className=" gap-10 marquee">
                <img className="w-xl" src={Media1} alt="media-1" />
                <img className="w-xl" src={Media2} alt="media-2" />
                <img className="w-xl" src={Media3} alt="media-3" />
                <img className="w-xl" src={Media4} alt="media-4" />
                <img className="w-xl" src={Media5} alt="media-5" />
                <img className="w-xl" src={Media6} alt="media-6" />
                <img className="w-xl" src={Media7} alt="media-7" />
                <img className="w-xl" src={Media8} alt="media-8" />
                <img className="w-xl" src={Media1} alt="media-1-duplicate" />
                <img className="w-xl" src={Media2} alt="media-2-duplicate" />
                <img className="w-xl" src={Media3} alt="media-3-duplicate" />
                <img className="w-xl" src={Media4} alt="media-4-duplicate" />
                <img className="w-xl" src={Media5} alt="media-5-duplicate" />
                <img className="w-xl" src={Media6} alt="media-6-duplicate" />
                <img className="w-xl" src={Media7} alt="media-7-duplicate" />
                <img className="w-xl" src={Media8} alt="media-8-duplicate" />
              </div>
            </div>

            <div className=" pt-10 px-10 flex md:gap-4 items-start">
              <p className=" font-semibold italic md:text-base text-xs">
                Lihat kegiatan terbaru dan update komunitas di Instagram kami :
              </p>
              <button
                onClick={() =>
                  openLink("https://www.instagram.com/kopijatigota/")
                }
                className=" cursor-pointer hover:scale-105 text-orange-500"
              >
                <BsInstagram size={35} />
              </button>
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </>
  );
}

export default App;
