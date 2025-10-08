import "./App.css";

import { AiOutlineArrowDown } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

import { useRef } from "react";

import Container from "./components/Container";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import LogoKopijatigota from "../public/logo-only-nobg.png";

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

              <div className=" flex justify-center pt-10 gap-5 text-xl font-semibold">
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
            </div>
          </div>
        </Container>
      </div>

      <div ref={moreInfo} className=" bg-amber-50">
        <Container>
          <div className=" md:px-20 px-10 text-center md:text-xl text-xs">
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
        </Container>
      </div>

      <Footer />
    </>
  );
}

export default App;
