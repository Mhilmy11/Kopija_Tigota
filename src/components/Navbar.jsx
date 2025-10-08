import { MdOutlineArrowOutward } from "react-icons/md";

import LogoNavbar from "../assets/logo-pdf-nobg.png";

export default function Navbar() {
  return (
    <>
      <div className=" py-7 flex justify-between items-center">
        <button>
          <img className=" w-28" src={LogoNavbar} alt="logo-navbar" />
        </button>

        {/* <div className=" flex items-center gap-10">
          <button className=" font-semibold text-lg hover:underline hover:text-green-800 transition cursor-pointer">
            About Us
          </button>
          <button className=" font-semibold text-lg hover:underline hover:text-green-800 transition cursor-pointer">
            About Us
          </button>
          <button className=" font-semibold text-lg hover:underline hover:text-green-800 transition cursor-pointer">
            About Us
          </button>
        </div> */}

        <button className=" flex items-center gap-2 border-2 border-amber-50 rounded-r-full rounded-tl-full font-semibold py-1.5 px-4 transition text-amber-50 hover:text-green-600 cursor-pointer hover:bg-amber-50">
          <p className=" text-lg">Contact Us</p>
          <MdOutlineArrowOutward size={20} />
        </button>
      </div>
    </>
  );
}
