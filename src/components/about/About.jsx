import React from "react";

const About = () => {
  return (
    <section id="about" className="bg-white dark:bg-slate-800 dark:text-white">
      <div className="container md:w-[70%] sm:py-16 py-10">
        <div className="grid items-center gap-4 grid-cols-1 sm:grid-cols-2">
          {/* Judul besar transparan */}
          <div className="font-bold relative">
            <div className="text-center text-6xl xl:text-8xl font-bold text-black/5 dark:text-gray-700">
              ABOUT
            </div>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-4xl">
              Tentang Aplikasi
            </h1>
          </div>

          {/* Isi teks */}
          <div className="text-slate-500 dark:text-gray-300 leading-relaxed">
            <p>
              Aplikasi ini dirancang sebagai platform pembelajaran online yang
              interaktif dan mudah digunakan. Pengguna dapat memilih berbagai
              kursus seperti <b>React Development</b>, <b>Data Science</b>,{" "}
              <b>Cyber Security</b>, dan banyak lagi.
            </p>
            <br />
            <p>
              Dengan sistem <b>enroll otomatis</b> dan tampilan yang responsif,
              aplikasi ini memudahkan siapa pun untuk belajar dan mengembangkan
              keterampilan digital secara mandiri. Semua data kursus dikelola
              secara lokal untuk kecepatan dan efisiensi terbaik.
            </p>

            {/* Tombol aksi */}
            <div className="mt-6">
              <a
                href="#courses"
                className="primary-btn my-6 mr-6 inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition"
              >
                Lihat Kursus
              </a>
              <a
                href="mailto:support@learningapp.com"
                title="Hubungi Kami"
                className="outline-btn my-6 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-full font-semibold transition"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;