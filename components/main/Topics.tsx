import Image from "next/image";

export default function Topics() {
  return (
    <section id="topics" className="py-12 px-4 md:px-10">
      <div className="flex flex-col md:flex-row justify-center md:justify-around gap-8 md:gap-5">
        {/* First block: Text only */}
        <div className="flex bg-[#487307] flex-col justify-center items-center font-semibold w-full md:w-[310px] h-[480px] md:h-[664px] border rounded-3xl overflow-hidden shadow-lg p-6 text-center">
          <span className="text-2xl mb-2 text-[#fffaf1]">Nova Agro Forum</span>
          <span className="text-6xl md:text-8xl font-bold uppercase text-[#fffaf1] leading-snug">
            Нап <br /> рям <br /> ки
          </span>
        </div>

        {/* Card 1 */}
        <div className="flex flex-col w-full md:w-[310px] h-[480px] md:h-[664px] rounded-3xl border overflow-hidden shadow-lg">
          <Image
            className="w-full h-2/3 object-cover rounded-t-3xl"
            src="/default-long.png"
            alt="combainer"
            height={232}
            width={310}
          />
          <div className="text-gray-700 text-center text-base md:text-xl p-4 flex flex-col justify-center flex-1">
            <span className="font-bold text-2xl md:text-xl block mb-2">
              Сільськогосподарські технології
            </span>
            <p>
              Фермерів і керівників господарств, які прагнуть впроваджувати
              новітні агротехнології
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col w-full md:w-[310px] h-[480px] md:h-[664px] rounded-3xl border overflow-hidden shadow-lg">
          <div className="text-gray-700 text-center text-base md:text-xl p-4 flex flex-col justify-center flex-1">
            <span className="font-bold text-2xl md:text-3xl block mb-2">
              IT технології
            </span>
            <p>
              Науковців, агроекспертів та викладачів, які працюють над
              впровадженням інновацій
            </p>
          </div>
          <Image
            className="w-full h-2/3 object-cover rounded-b-3xl"
            src="/default-long.png"
            alt="combainer"
            height={232}
            width={310}
          />
        </div>

        {/* Card 3 */}
        <div className="flex flex-col w-full md:w-[310px] h-[480px] md:h-[664px] rounded-3xl border overflow-hidden shadow-lg">
          <Image
            className="w-full h-2/3 object-cover rounded-t-3xl"
            src="/default-long.png"
            alt="combainer"
            height={232}
            width={310}
          />
          <div className="text-gray-700 text-center text-base md:text-xl p-4 flex flex-col justify-center flex-1">
            <span className="font-bold text-2xl md:text-3xl block mb-2">
              Тваринництво
            </span>
            <p>
              Розробників і постачальників агротехніки, добрив, кормів та
              IoT-рішень
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
