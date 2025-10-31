"use client"

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative">
      {/* Верхній блок із фоном */}
      <div className="relative flex flex-col items-center p-12 pb-24 overflow-hidden">
        {/* Фон у тому ж контейнері */}
        <motion.div 
          className="absolute inset-0 bg-bottom bg-no-repeat bg-cover z-0 -bottom-60"
          style={{ backgroundImage: "url('/bg-mountain.png')" }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        />

        {/* Текст поверх фону */}
        <motion.div 
          className="relative z-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            ХТО МИ ТА ЩО РОБИМО?
          </h2>
          <p className="text-lg text-gray-700 font-semibold">
            Geluka Agro Corp
          </p>
        </motion.div>
      </div>

      {/* Грід секція */}
      <div className="grid grid-rows-2 relative z-10 bg-white/90 backdrop-blur-sm max-w-7xl mx-auto rounded-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-200">
          {[
            {
              title: "ОРГАНІЗАЦІЯ АГРАРНИХ ФОРУМІВ, КОНФЕРЕНЦІЙ ТА ВИСТАВОК",
              text: "Ми розробляємо події з нуля: від концепції та логістики до запрошення спікерів і роботи з медіа.",
            },
            {
              title: "ПРОФЕСІЙНИЙ НЕТВОРКІНГ",
              text: "Створюємо простір, де фермери, агрокомпанії, інвестори та інноватори знаходять спільні точки для співпраці.",
            },
            {
              title: "ФОКУС НА АГРОІННОВАЦІЇ",
              text: "Наші заходи висвітлюють новітні технології: точне землеробство, агродрони, IoT, автоматизацію тваринництва та інше.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`flex flex-col text-left text-gray-700 p-10 md:px-12 
                         ${index === 1 ? "border-t md:border-t-0 md:border-x border-gray-200" : ""} 
                         ${index === 2 ? "border-t md:border-t-0 border-gray-200" : ""}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3, duration: 0.6 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <span className="font-bold uppercase mb-2">{item.title}</span>
              <span>{item.text}</span>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-gray-200">
          {[
            {
              title: "ПІДТРИМКА АГРАРНОЇ СПІЛЬНОТИ",
              text: "Ми працюємо з аграрними асоціаціями, освітніми закладами та технопарками для розвитку галузі.",
              className: "md:pl-20",
            },
            {
              title: "ІНДИВІДУАЛЬНІ РІШЕННЯ ДЛЯ БІЗНЕСУ",
              text: "Допомагаємо компаніям представити себе на ринку через B2B-зустрічі, брендовані події, демо-дні та інші формати.",
              className: "md:pr-20 border-t md:border-t-0 md:border-l",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`flex flex-col text-left text-gray-700 p-10 ${item.className}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3, duration: 0.6 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <span className="font-bold uppercase mb-2">{item.title}</span>
              <span>{item.text}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
