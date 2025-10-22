import "./App.css";

import { AiOutlineArrowDown } from "react-icons/ai";
import { BsInstagram } from "react-icons/bs";

import { useRef } from "react";

import Container from "./components/Container";
import LandingPage from "./pages/LandingPage";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import LogoIKPI from "./assets/Logo-IKPI.png";
import LogoAOTCA from "./assets/logo-AOTCA.png";

import Client1 from "./assets/clients/client1.png";
import Client2 from "./assets/clients/client2.png";
import Client3 from "./assets/clients/client3.png";
import Client4 from "./assets/clients/client4.png";
import Client5 from "./assets/clients/client5.png";

function App() {
  const openLink = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const moreInfo = useRef(null);
  const handleClickToProduct = () => {
    moreInfo.current?.scrollIntoView({ behavior: "smooth" });
  };

  const clients = [Client1, Client5, Client3];

  return (
    <>
      <div className=" bg-gradient-to-bl from-green-600 via-amber-50 to-amber-50">
        <Container>
          <Navbar openLink={openLink} />

          <div className=" flex justify-center w-full pt-14 md:pt-5">
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

              <div className=" flex justify-center pt-8 gap-5 text-xl font-semibold">
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

              <div className=" flex justify-center w-full pt-5">
                <div>
                  <p className=" text-xs pb-1 italic font-semibold">
                    Member of:
                  </p>

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

              <div className=" flex justify-center w-full pt-5">
                <div>
                  <p className=" text-xs italic font-semibold pb-2">
                    Powered by:
                  </p>

                  <div className=" grid md:grid-cols-5 grid-cols-2 gap-4 justify-center">
                    {clients.map((img, i) => (
                      <div key={i} className=" w-24">
                        <img src={img} alt={i} />
                      </div>
                    ))}
                    <div className=" w-16">
                      <img src={Client2} alt="client-2" />
                    </div>
                    <div className=" w-14">
                      <img src={Client4} alt="client-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div ref={moreInfo} className=" bg-amber-50">
        <Container>
          <LandingPage />
        </Container>
      </div>

      <Footer />
    </>
  );
}

export default App;
