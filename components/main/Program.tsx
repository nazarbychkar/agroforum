"use client";
import { Fragment, useState } from "react";
import Image from "next/image";

export default function Program() {
  const [activeDay, setActiveDay] = useState<1 | 2>(1);

  const program: Record<
    1 | 2,
    Array<{ id: string; img: string; text: string }>
  > = {
    1: [
      {
        id: "01",
        img: "/default-wide.png",
        text: "5 провідних спікерів — експерти агросфери, які поділяться практичними кейсами та новітніми рішеннями у сфері смарт-агро, цифровізації та сталого розвитку.",
      },
      {
        id: "02",
        img: "/default-wide.png",
        text: "Панельна дискусія «Агроінновації 2025» — як штучний інтелект, дрони та big data змінюють підходи до управління господарствами.",
      },
      {
        id: "03",
        img: "/default-wide.png",
        text: "Networking-сесія з інвесторами та стартапами — можливість знайти партнерів і представити свої ідеї.",
      },
    ],
    2: [
      {
        id: "04",
        img: "/default-wide.png",
        text: "Практичний воркшоп з точного землеробства — демонстрація обладнання та програмних рішень.",
      },
      {
        id: "05",
        img: "/default-wide.png",
        text: "Експозиційна зона: демонстрація новітніх технологій, агродронів, IoT та рішень автоматизації.",
      },
      {
        id: "06",
        img: "/default-wide.png",
        text: "Заключна дискусія: “Майбутнє українського агробізнесу — сталість, інновації, освіта.”",
      },
    ],
  };

  return (
    <section
      id="program"
      className="bg-white py-16 px-4 md:px-10 rounded-2xl relative"
    >
      {/* Заголовок */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
        <h2 className="font-extrabold text-5xl md:text-7xl uppercase text-gray-900 tracking-tight">
          📅 Програма
        </h2>
        <div className="mt-6 md:mt-0 md:w-1/3 text-left md:text-right">
          <h3 className="font-bold text-2xl uppercase text-green-800 mb-2">
            NOVA AGRO FORUM 2025
          </h3>
          <p className="text-gray-700 text-sm md:text-base leading-relaxed">
            На вас чекатиме насичена програма для обміну знаннями, натхнення та
            якісного нетворкінгу.
          </p>
        </div>
      </div>

      {/* Вкладки по днях */}
      <div className="flex justify-center gap-3 mb-10 flex-wrap">
        {[1, 2].map((day) => (
          <button
            key={day}
            onClick={() => setActiveDay(day as 1 | 2)}
            className={`px-6 py-2 rounded-full font-semibold border transition-all shadow-sm ${
              activeDay === day
                ? "bg-green-700 text-white border-green-700 shadow-md scale-105"
                : "bg-white text-green-700 border-green-700 hover:bg-green-700 hover:text-white"
            }`}
          >
            День {day}
          </button>
        ))}
      </div>

      {/* Сітка для десктопу */}
      <div className="hidden md:grid md:grid-cols-[2fr_0.7fr_2fr] border-y border-gray-200">
        {program[activeDay].map((item, index) => (
          <Fragment key={index}>
            {index % 2 === 0 ? (
              <>
                <div className="relative min-h-[180px] border-b border-gray-200">
                  <Image
                    src={item.img}
                    alt={item.text.slice(0, 20)}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <span className="text-yellow-500 text-8xl flex justify-center items-center border-x border-b border-green-800 font-extrabold bg-white">
                  {item.id}
                </span>
                <div className="text-gray-700 border-b border-gray-200 p-8 flex items-center bg-white">
                  <p className="text-lg leading-relaxed">{item.text}</p>
                </div>
              </>
            ) : (
              <>
                <div className="text-gray-700 border-b border-gray-200 p-8 flex items-center bg-white">
                  <p className="text-lg leading-relaxed">{item.text}</p>
                </div>
                <span className="text-yellow-500 text-8xl flex justify-center items-center border-x border-b border-green-800 font-extrabold bg-white">
                  {item.id}
                </span>
                <div className="relative min-h-[180px] border-b border-gray-200">
                  <Image
                    src={item.img}
                    alt={item.text.slice(0, 20)}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
              </>
            )}
          </Fragment>
        ))}
      </div>

      {/* Мобільна версія */}
      <div className="md:hidden flex flex-col gap-6">
        {program[activeDay].map((item) => (
          <div
            key={item.id}
            className="rounded-2xl overflow-hidden shadow-md border border-gray-200 bg-linear-to-b from-white to-green-50"
          >
            <div className="relative h-48 w-full">
              <Image
                src={item.img}
                alt={item.text.slice(0, 20)}
                fill
                className="object-cover"
              />
              <div className="absolute top-3 left-3 bg-green-700 text-white text-lg font-bold rounded-full w-12 h-12 flex items-center justify-center shadow-md">
                {item.id}
              </div>
            </div>
            <div className="p-5 text-gray-700">
              <p className="text-base leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Кнопка завантаження PDF */}
      {/* <div className="text-center mt-12">
        <a
          href="/program-nova-agro-2025.pdf"
          download
          className="inline-flex items-center gap-3 bg-green-700 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-800 transition shadow-md hover:shadow-lg"
        >
          📄 Завантажити PDF-версію програми
        </a>
      </div> */}
    </section>
  );
}
