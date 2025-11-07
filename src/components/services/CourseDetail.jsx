import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaStar, FaClock, FaUser, FaCheckCircle } from "react-icons/fa";

const CourseDetail = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);

  // Ambil data dari JSON lokal
  useEffect(() => {
    fetch("/data/courses.json")
      .then((res) => res.json())
      .then((data) => {
        const foundCourse = data.find((c) => c.id === parseInt(id));
        setCourse(foundCourse);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Gagal memuat data kursus:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[80vh] text-gray-500">
        <span className="animate-pulse text-lg">Memuat data kursus...</span>
      </div>
    );
  }

  if (!course) {
    return (
      <div className="text-center py-10 text-gray-600">
        Kursus tidak ditemukan 😢
      </div>
    );
  }

  // Fungsi enroll
  const handleEnroll = () => {
    const enrolledCourses =
      JSON.parse(localStorage.getItem("enrolledCourses")) || [];
    const isAlreadyEnrolled = enrolledCourses.some(
      (c) => c.id === course.id
    );

    if (isAlreadyEnrolled) {
      alert(`Kamu sudah terdaftar di kursus "${course.name}" 😄`);
    } else {
      enrolledCourses.push(course);
      localStorage.setItem(
        "enrolledCourses",
        JSON.stringify(enrolledCourses)
      );
      alert(`Berhasil mendaftar kursus "${course.name}" 🎉`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid md:grid-cols-2">
          {/* Gambar */}
          <div className="relative">
            <img
              src={course.image}
              alt={course.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            <div className="absolute bottom-4 left-4 text-white">
              <h2 className="text-2xl font-bold">{course.name}</h2>
              <p className="flex items-center gap-2 text-sm mt-1">
                <FaStar className="text-yellow-400" />
                {course.rating} / 5.0
              </p>
            </div>
          </div>

          {/* Detail Konten */}
          <div className="p-8 flex flex-col justify-center space-y-6">
            <h1 className="text-3xl font-bold text-gray-800">
              {course.name}
            </h1>
            <p className="text-gray-600 leading-relaxed">
              {course.description}
            </p>

            {/* Info Kursus */}
            <div className="grid grid-cols-3 gap-4 text-center bg-gray-100 rounded-xl py-3">
              <div>
                <FaClock className="mx-auto text-blue-600 text-lg mb-1" />
                <p className="text-sm font-semibold">{course.duration}</p>
              </div>
              <div>
                <FaStar className="mx-auto text-yellow-500 text-lg mb-1" />
                <p className="text-sm font-semibold">{course.rating}</p>
              </div>
              <div>
                <FaUser className="mx-auto text-indigo-500 text-lg mb-1" />
                <p className="text-sm font-semibold">
                  {course.instructor || "Instruktur Tidak Diketahui"}
                </p>
              </div>
            </div>

            {/* Materi Pembelajaran */}
            <div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                Materi Pembelajaran
              </h3>
              <ul className="space-y-2">
                {course.lessons && course.lessons.length > 0 ? (
                  course.lessons.map((lesson, index) => (
                    <li
                      key={index}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <FaCheckCircle className="text-green-500" />
                      {lesson}
                    </li>
                  ))
                ) : (
                  <li className="text-gray-500">Belum ada materi tersedia</li>
                )}
              </ul>
            </div>

            {/* Tombol Enroll */}
            <button
              onClick={handleEnroll}
                className="mt-6 bg-gradient-to-r from-yellow-300 to-amber-400 
                            text-black px-8 py-3 rounded-full font-semibold 
                            shadow-md hover:shadow-lg hover:scale-105 
                            transition-all duration-300"
            >
              Enroll Sekarang 🚀
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
