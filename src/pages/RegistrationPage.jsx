import photos from "../assets/data/media";

import { useEffect, useState } from "react";

import LogoKopijatigota from "../assets/logo-only-nobg.png";

export default function RegistrationPage() {
  const [current, setCurrent] = useState(0);
  const [form, setIsForm] = useState({
    name: "",
    from: "",
    company: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setIsForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "6287772089553";

    const message = `Halo, saya ingin menjadi anggota KOPIJATIGOTA.
    
    *Nama:* ${form.name}
    *IKPI Cabang:* ${form.from}
    *Company/Kantor:* ${form.company}
    *No HP:* ${form.phone}
    *Email:* ${form.email}
    
Bagaimana Informasi lebih lanjut? Terima Kasih`;

    const encodedMessage = encodeURIComponent(message);

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank",
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className=" p-5 font-sans">
        <div className=" bg-gradient-to-tr from-black to-green-900 text-white p-3">
          <div className=" grid md:grid-cols-2 grid-cols-1 gap-3">
            <div>
              <div className=" relative w-full overflow-hidden rounded-xl h-[220px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
                {photos.map((img, index) => (
                  <img
                    key={index}
                    src={img.src}
                    alt={`slide-${index}`}
                    className={` absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"}`}
                  />
                ))}
              </div>

              <div className=" mt-3">
                <div className=" bg-green-900 rounded-xl p-3">
                  <div className=" flex gap-1 items-center">
                    <img
                      className=" w-10"
                      src={LogoKopijatigota}
                      alt="logo-register"
                    />
                    <p className=" font-bold text-amber-50 text-2xl">
                      KOPIJATIGOTA
                    </p>
                  </div>

                  <div className=" px-4 pt-3 text-sm">
                    <p className=" font-semibold">CSR & Kontribusi</p>
                    <p>
                      1. Penyaluran Magang : Membuka kesempatan magang bagi
                      mahasiswa untuk belajar praktik perpajakan di lingkungan
                      profesional
                    </p>
                    <p className=" pt-1">
                      2. Klinik Pajak (Probono) : Memberikan layanan konsultasi
                      pajak gratis bagi masyarakat dan UMKM.
                    </p>

                    <div className="text-sm italic text-center pt-8">
                      © {new Date().getFullYear()} KOPIJATIGOTA — All rights
                      reserved
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className=" bg-amber-50 text-black pt-10 md:pb-0 pb-5 md:px-14 px-10 rounded-xl">
              <p className=" font-bold md:text-4xl text-3xl">
                DAFTARKAN DIRI ANDA SEBAGAI ANGGOTA KOPIJATIGOTA
              </p>
              <p className=" pt-3 md:text-sm text-xs text-gray-500 px-1">
                Kopijatigota: wadah silaturahmi alumni & calon peserta AOTCA —
                fokus pada jejaring, edukasi, dan kegiatan bermakna.
              </p>

              <div className=" pt-5">
                <form onSubmit={handleSubmit}>
                  <div className=" pb-3">
                    <p className=" text-sm pb-1 font-semibold">Nama</p>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border border-gray-300 p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-900"
                    />
                  </div>

                  <div className=" pb-3">
                    <p className=" text-sm pb-1 font-semibold">IKPI Cabang</p>
                    <input
                      type="text"
                      name="from"
                      value={form.from}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border border-gray-300 p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-900"
                    />
                  </div>

                  <div className=" pb-3">
                    <p className=" text-sm pb-1 font-semibold">
                      Company/Kantor
                    </p>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border border-gray-300 p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-900"
                    />
                  </div>

                  <div className=" pb-3">
                    <p className=" text-sm pb-1 font-semibold">Phone</p>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border border-gray-300 p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-900"
                    />
                  </div>

                  <div className=" pb-6">
                    <p className=" text-sm pb-1 font-semibold">Email</p>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      className="w-full rounded-md border border-gray-300 p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-900"
                    />
                  </div>

                  <button
                    type="submit"
                    className=" bg-green-900 cursor-pointer hover:bg-green-700 w-full py-3 text-amber-50 rounded-lg font-semibold"
                  >
                    Daftar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
