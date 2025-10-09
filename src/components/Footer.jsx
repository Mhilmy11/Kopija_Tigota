import { AiOutlineCopyrightCircle } from "react-icons/ai";

import LogoFooter from "../assets/logo-pdf-nobg.png";

import Container from "./Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <>
      <div className=" pt-20 pb-10 bg-gradient-to-t from-green-600 via-amber-50 to-amber-50">
        <Container>
          <div className=" px-10">
            <p className=" md:text-xl text-xs font-semibold text-center">
              "Tidak ada kewajiban untuk berangkat, yang terpenting adalah
              <span className=" font-bold text-green-600"> silaturahmi</span>.
              Yuk, jadi bagian dari komunitas yang hangat dan saling mendukung!"
            </p>

            <div className=" flex justify-center mb-10 mt-5">
              <img
                className=" md:w-80 w-40"
                src={LogoFooter}
                alt="logo-footer"
              />
            </div>

            <div className=" flex justify-center items-center italic">
              <AiOutlineCopyrightCircle />
              <p className=" text-center pl-1 md:text-sm text-xs">
                <span className=" font-semibold">{currentYear}</span> Komunitas
                IKPIJaktim Goes To AOTCA.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}
