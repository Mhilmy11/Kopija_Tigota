import { AiOutlineArrowDown } from "react-icons/ai";
import "./App.css";

import { BsInstagram } from "react-icons/bs";

import Container from "./components/Container";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <div className=" bg-gradient-to-bl from-green-600 via-amber-50 to-amber-50 h-screen">
        <Container>
          <Navbar />

          <div className=" flex justify-center w-full pt-14">
            <div>
              <div className=" text-center w-3xl">
                <h1 className=" text-5xl font-bold">
                  Komunitas IKPI Jaktim Goes To AOTCA{" "}
                  <span className=" text-green-600">"KOPIJATIGOTA"</span>
                </h1>

                <h2 className=" text-2xl font-semibold px-10 pt-5 text-green-700">
                  Sarana komunikasi dan silaturahmi bagi Alumni dan Calon
                  Peserta AOTCA.
                </h2>
              </div>

              <div className=" flex justify-center pt-10 gap-5 text-xl font-semibold">
                <button className=" flex items-center gap-2 cursor-pointer bg-orange-500 py-3 px-6 rounded-l-full transition hover:scale-105 rounded-br-full text-white">
                  <BsInstagram />
                  <p>Instagram</p>
                </button>
                <button className=" flex items-center gap-2 cursor-pointer border-2 border-green-600 hover:bg-green-600 hover:scale-105 transition py-3 px-6 rounded-r-full rounded-bl-full">
                  <p>More Info</p>
                  <AiOutlineArrowDown />
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default App;
