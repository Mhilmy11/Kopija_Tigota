import { MdWhatsapp } from "react-icons/md";
import photos from "../assets/data/media";

import { useEffect, useState } from "react";

import LogoKopijatigota from "../assets/logo-only-nobg.png";

export default function RegistrationPageIKPI() {
  const [current, setCurrent] = useState(0);
  const [form, setForm] = useState({
    fullname: "",
    ikpi_branch: "",
    company: "",
    phone: "",
    email: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://api.kopijatigota.id/index.php?route=register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        },
      );

      const result = await response.json();

      if (result.success) {
        setMessage("Registration successful!");
        setIsSuccess(true);
        setSubmitted(true);
      } else {
        setMessage(result.message);
      }
    } catch (error) {
      setMessage("Terjadi kesalahan server");
    } finally {
      setLoading(false);
    }
  };

  const verifyToAdmin = () => {
    const phoneNumber = "6287772089553";

    const message = `Halo Admin KOPIJATIGOTA,

Saya sudah melakukan registrasi sebagai anggota.

*Nama:* ${form.fullname}
*IKPI Cabang:* ${form.ikpi_branch}
*Kantor:* ${form.company}
*No HP:* ${form.phone}
*Email:* ${form.email}

Mohon ACC nya untuk saya bergabung ke group. Terima kasih.`;

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

            <div
              className={`bg-amber-50 text-black md:pb-0 pb-5 md:px-14 px-10 rounded-xl ${isSuccess ? "pt-5" : "pt-10"}`}
            >
              {isSuccess ? (
                <div className=" font-semibold text-center">
                  <p className=" text-lg">{message}</p>
                  <p className=" text-xs">Your data has been recorded.</p>
                </div>
              ) : (
                <>
                  <p className=" font-bold md:text-4xl text-3xl">
                    DAFTARKAN DIRI ANDA SEBAGAI ANGGOTA KOPIJATIGOTA
                  </p>
                  <p className=" pt-3 md:text-sm text-xs text-gray-500 px-1">
                    Kopijatigota: wadah silaturahmi alumni & calon peserta AOTCA
                    — fokus pada jejaring, edukasi, dan kegiatan bermakna.
                  </p>

                  {message && <p className=" mt-5">{message}</p>}
                </>
              )}

              <div className=" pt-5">
                <form onSubmit={handleSubmit}>
                  <div className=" pb-3">
                    <p className=" text-sm pb-1 font-semibold">Fullname</p>
                    <input
                      type="text"
                      name="fullname"
                      value={form.fullname}
                      onChange={handleChange}
                      disabled={submitted || loading}
                      required
                      className="w-full rounded-md border border-gray-300 p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-900"
                    />
                  </div>

                  <div className=" pb-3">
                    <p className=" text-sm pb-1 font-semibold">IKPI Cabang</p>
                    <input
                      type="text"
                      name="ikpi_branch"
                      value={form.ikpi_branch}
                      onChange={handleChange}
                      disabled={submitted || loading}
                      required
                      className="w-full rounded-md border border-gray-300 p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-900"
                    />
                  </div>

                  <div className=" pb-3">
                    <p className=" text-sm pb-1 font-semibold">Company</p>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      disabled={submitted || loading}
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
                      disabled={submitted || loading}
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
                      disabled={submitted || loading}
                      required
                      className="w-full rounded-md border border-gray-300 p-2 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-900"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading || submitted}
                    className={` w-full py-3 text-amber-50 rounded-lg font-semibold ${loading || submitted ? " bg-slate-300" : "bg-green-900 cursor-pointer hover:bg-green-700"}`}
                  >
                    {loading
                      ? "Loading..."
                      : submitted
                        ? "Sudah Terdaftar"
                        : "Daftar"}
                  </button>
                </form>
              </div>

              {isSuccess && (
                <div>
                  <p className=" font-semibold text-xs italic text-red-500">
                    *dikarnakan ini adalah private group
                  </p>
                  <div className=" py-2 text-sm">
                    <p>
                      Silahkan join Group Whatsapp{" "}
                      <span className=" font-semibold italic text-base text-green-900">
                        Member Kopijatigota Nasional
                      </span>
                      , lalu chat admin untuk melakukan Verifikasi Data dan
                      Request ACC pada Tombol dibawah ini :
                    </p>
                  </div>

                  <div className=" flex items-center gap-4">
                    <button
                      onClick={() =>
                        window.open(
                          "https://chat.whatsapp.com/G28wz8upk5kBp7qBiMhbiu?mode=gi_t",
                          "blank_",
                        )
                      }
                      className=" flex gap-1 items-center bg-green-600 p-2 rounded-lg font-semibold cursor-pointer hover:bg-green-500 transition text-white"
                    >
                      <MdWhatsapp size={25} /> Join Whatsapp Group
                    </button>

                    <button
                      onClick={verifyToAdmin}
                      className=" flex items-center gap-1 p-2 rounded-lg font-semibold cursor-pointer border border-slate-400 hover:bg-gray-100 transition"
                    >
                      <MdWhatsapp size={25} /> Admin KOPIJATIGOTA
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
