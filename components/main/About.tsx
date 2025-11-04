"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative py-24 rounded-2xl max-w-7xl mx-auto bg-linear-to-b from-white via-green-50 to-green-100">
      {/* Main Background Image */}
      {/* <motion.div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: "url('/bg-mountain.png')" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      /> */}
      
      {/* Section Container */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 md:px-12">

        {/* Title Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-[#fffaf1] bg-[#487307] p-5 rounded-4xl mb-4">
            ХТО МИ ТА ЩО РОБИМО?
          </h2>
          <p className="text-xl text-gray-600 font-semibold">
            Geluka Agro Corp
          </p>
        </motion.div>

        {/* Mission and Goals Section */}
        <motion.div
          className="bg-white p-10 md:p-16 rounded-lg shadow-lg mb-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Місія та мета форуму
          </h3>
          <p className="text-lg text-gray-700 text-center">
            Наша мета – об'єднати аграрних професіоналів, інвесторів та інноваторів для обміну досвідом, пошуку нових рішень та розвитку аграрного сектора. Через інтерактивні заходи ми сприяємо розширенню горизонтів для всіх учасників.
          </p>
        </motion.div>

        {/* Target Audience Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="bg-white p-10 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Цільова аудиторія</h3>
            <p className="text-lg text-gray-700">
              Форум орієнтований на фермерів, агрокомпанії, дистриб'юторів, стартапи, а також інвесторів, які прагнуть втілювати інновації в аграрному секторі.
            </p>
          </div>
          <div className="bg-white p-10 rounded-lg shadow-lg">
            <h3 className="text-3xl font-bold text-gray-800 mb-6">Для кого цей форум?</h3>
            <ul className="list-disc pl-6 text-lg text-gray-700">
              <li>Фермери та агровиробники</li>
              <li>Агрокомпанії та корпорації</li>
              <li>Інвестори та стартапи</li>
              <li>Експерти та інноватори в агрономії та технологіях</li>
            </ul>
          </div>
        </motion.div>

        {/* History and Past Results Section */}
        <motion.div
          className="bg-white p-10 md:p-16 rounded-lg shadow-lg mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Історія та попередні результати</h3>
          <p className="text-lg text-gray-700 mb-8">
            Ми проводимо успішні заходи з 2015 року, об'єднуючи тисячі учасників на щорічних форумах, конференціях і виставках. Ось деякі з попередніх результатів:
          </p>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <div className="bg-gray-200 p-6 rounded-lg hover:scale-105 transform transition-all duration-300">
              <img
                src="/event-photo1.jpg"
                alt="Фото з минулого заходу"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
            <div className="bg-gray-200 p-6 rounded-lg hover:scale-105 transform transition-all duration-300">
              <img
                src="/event-photo2.jpg"
                alt="Фото з минулого заходу"
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Media and Gallery Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Фото/Відео з минулих заходів</h3>
          <p className="text-lg text-gray-700 mb-8">
            Подивіться на фото та відео з наших попередніх подій, щоб отримати більше інформації про атмосферу та результати.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-200 p-4 rounded-lg hover:scale-105 transform transition-all duration-300">
              <img src="/event-video1.jpg" alt="Відео 1" className="w-full h-64 object-cover rounded-lg" />
            </div>
            <div className="bg-gray-200 p-4 rounded-lg hover:scale-105 transform transition-all duration-300">
              <img src="/event-video2.jpg" alt="Відео 2" className="w-full h-64 object-cover rounded-lg" />
            </div>
            <div className="bg-gray-200 p-4 rounded-lg hover:scale-105 transform transition-all duration-300">
              <img src="/event-photo3.jpg" alt="Фото 3" className="w-full h-64 object-cover rounded-lg" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
