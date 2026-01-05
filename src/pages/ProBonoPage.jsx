import { useState } from "react";
import ProbonoImage from "../assets/media/image-probono-page.jpeg";

export default function ProBonoPage() {
  const [form, setForm] = useState({
    nama: "",
    email: "",
    phone: "",
    pesan: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const phoneNumber = "6287772089553";

    const message = `Halo, saya ingin konsultasi.

Nama: ${form.nama}
Email: ${form.email}
No HP: ${form.phone}

Pertanyaan:
${form.pesan}`;

    const encodedMessage = encodeURIComponent(message);

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedMessage}`,
      "_blank"
    );
  };

  return (
    <>
      <div className=" md:pt-18 pt-20">
        <h2 className=" md:py-10 py-5 text-center mb-10 font-bold md:text-3xl text-xl text-white bg-gradient-to-br from-green-900 via-green-500 to-green-700">
          Layanan Pro Bono
        </h2>

        <div className=" max-w-6xl mx-auto">
          <div className=" grid md:grid-cols-2 grid-cols-1">
            <div className=" px-5">
              <div className=" pb-5">
                <img
                  className=" rounded-2xl"
                  src={ProbonoImage}
                  alt="image-probono"
                />
              </div>

              <div className=" pb-4">
                <h3 className=" font-semibold pb-2 text-2xl">
                  Lembaga Bantuan Pajak(LBP) KOPIJATIGOTA
                </h3>
                <p>
                  Didasarkan pada fakta bahwa masih banyak masyarakat yang belum
                  memahami perpajakan dan banyaknya jumlah wajib pajak yang
                  belum melaksanakan kewajiban perpajakannya maka Komunitas
                  Kopijatigota dalam rangka membantu Pemerintah khususnya
                  Direktorat Jenderal Pajak memberikan Layanan Bantuan
                  Konsultasi, Edukasi dan Sosialisasi khusus Perpajakan kepada
                  masyarakat umum dan UMKM dalam melaksanakan kewajiban
                  perpajakan Tanpa dipungut biaya. (Gratis)
                </p>
                <p className=" pt-2">
                  Anggota Komunitas Kopijatigota terdiri dari profesional
                  perpajakan mempunyai ijin resmi terdaftar di Departemen
                  Keuangan dan juga merupakan anggota Asosiasi Perpajakan IKPI
                  yang ahli dibidangnya masing2 terdiri dari, Konsultan,
                  Praktisi dan Dosen. Yang siap memberikan bantuan secara
                  cuma-cuma alias gratis.
                </p>
              </div>

              <div className=" pl-3 pt-6">
                <p className=" font-semibold">🎥 Edukasi & Sosialisi</p>
                <p className=" pl-2">
                  Melalui daring online Webinar / seminar perpajakan
                </p>
              </div>

              <div className=" pl-3 py-6">
                <p className=" font-semibold">🕖 Waktu Operasional</p>
                <p className=" pl-2">
                  Senin sd Kamis | 10.00 - 16.00 (Kecuali Libur)
                </p>
              </div>
            </div>

            <div className=" px-10">
              <div>
                {/* <p className=" font-semibold">⚖️ Konsultasi</p> */}
                <p className=" pl-2 pb-1">
                  Diadakan secara tatap muka (onsite) di Warkop Kopijatigota
                  alamat ada dibawah ini :{" "}
                </p>
                <div className="aspect-[16/9] w-full pl-2">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.690912808303!2d106.8412859739909!3d-6.304280093684942!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ed0057db8fe1%3A0x2d6a8c8e85ab3695!2sWarkop%20KOPIJATIGOTA!5e0!3m2!1sen!2sid!4v1767605842947!5m2!1sen!2sid"
                    className="w-full h-full rounded-lg"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                </div>
              </div>

              <div className=" text-center pt-10">
                <h3 className=" text-green-900 font-bold text-xl">
                  Konsultasikan di sini
                </h3>
                <p className=" py-5">
                  Masukkan nama, email serta pertanyaan Anda dan jawaban akan
                  kami publikasikan di halaman ini.
                </p>
              </div>

              <div className="w-full max-w-lg mx-auto rounded-xl">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    name="nama"
                    placeholder="Nama Lengkap"
                    required
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />

                  <input
                    type="email"
                    name="email"
                    placeholder="Alamat Email"
                    required
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />

                  <input
                    type="tel"
                    name="phone"
                    placeholder="No Handphone"
                    required
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
                  />

                  <textarea
                    name="pesan"
                    rows="4"
                    placeholder="Pertanyaan"
                    required
                    onChange={handleChange}
                    className="w-full rounded-md border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 resize-none"
                  />

                  <button
                    type="submit"
                    className="w-full rounded-md bg-green-900 py-3 text-white font-semibold hover:bg-green-600 cursor-pointer transition"
                  >
                    Kirim
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
