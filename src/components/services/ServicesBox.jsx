import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ServicesBox = () => {
  const [courses, setCourses] = useState([]);

  // Ambil data dari JSON lokal
  useEffect(() => {
    fetch("/data/courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data))
      .catch((err) => console.error("Gagal memuat data kursus:", err));
  }, []);

  // Fungsi Enroll
  const handleEnroll = (course) => {
    const enrolledCourses = JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    const isAlreadyEnrolled = enrolledCourses.some((c) => c.id === course.id);

    if (isAlreadyEnrolled) {
      alert(`Kamu sudah terdaftar di kursus "${course.name}" 😄`);
    } else {
      enrolledCourses.push(course);
      localStorage.setItem("enrolledCourses", JSON.stringify(enrolledCourses));
      alert(`Berhasil mendaftar kursus "${course.name}" 🎉`);
    }
  };

  return (
    <section id="courses" className="my-10 container">
      <h2 className="text-3xl font-bold text-center mb-10">Kursus Populer</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map(({ id, name, description, image, duration, rating, bgColor }) => (
          <div
            key={id}
            className={`relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition duration-300 bg-cover bg-center text-white`}
            style={{ backgroundImage: `url(${image})` }}
          >
            {/* Overlay hitam transparan */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Konten */}
            <div className="relative p-6 md:p-8 space-y-3 rounded-xl">
              <h2 className="text-2xl font-bold">{name}</h2>
              <p className="text-sm text-gray-200">{description}</p>
              <div className="flex justify-between items-center mt-4 text-sm font-medium">
                <span>{duration}</span>
                <span>⭐ {rating}</span>
              </div>
              <div className="flex gap-3 mt-5">
                <button
                  onClick={() => handleEnroll({ id, name, description, image, duration, rating })}
                  className="bg-white text-gray-900 px-4 py-2 rounded-full font-semibold hover:bg-gray-200 transition"
                >
                  Enroll Now
                </button>
                <Link
                  to={`/course/${id}`}
                  className="bg-transparent border border-white text-white px-4 py-2 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition"
                >
                  Detail
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesBox;