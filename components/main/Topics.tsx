import Image from "next/image";

export default function Topics() {
  return (
    <section
      id="topics"
      className="py-16 px-4 md:px-10 max-w-7xl mx-auto overflow-hidden"
    >
      <div className="flex flex-col md:flex-row justify-center md:justify-around gap-8 md:gap-5">
        {/* First block: Text only */}
        <div
          className="group relative flex bg-[#487307] flex-col justify-center items-center font-semibold 
                     w-full md:w-[310px] h-[480px] md:h-[664px] border rounded-3xl overflow-hidden shadow-xl 
                     transition-all duration-500 ease-out hover:scale-105 hover:shadow-2xl"
        >
          <span className="text-2xl mb-2 text-[#fffaf1] transition-opacity duration-500 group-hover:opacity-80">
            Nova Agro Forum
          </span>
          <span
            className="text-6xl md:text-8xl font-bold uppercase text-[#fffaf1] leading-snug
                       transform transition-transform duration-700 group-hover:scale-110"
          >
            Нап <br /> рям <br /> ки
          </span>

          {/* Light gradient overlay on hover */}
          <div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#00000033]
                       opacity-0 group-hover:opacity-100 transition-opacity duration-700"
          ></div>
        </div>

        {/* Card 1 */}
        <div
          className="group flex flex-col w-full md:w-[310px] h-[480px] md:h-[664px] rounded-3xl border overflow-hidden 
                     shadow-lg bg-white transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-2"
        >
          <div className="relative overflow-hidden h-2/3">
            <Image
              className="w-full h-full object-cover rounded-t-3xl transform transition-transform duration-700 group-hover:scale-110"
              src="/default-long.png"
              alt="combainer"
              height={232}
              width={310}
            />
            <div
              className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-60 transition-opacity duration-500"
            ></div>
          </div>
          <div
            className="text-gray-700 text-center text-base md:text-xl p-4 flex flex-col justify-center flex-1 
                       transition-all duration-500 group-hover:bg-[#f7f7f7]"
          >
            <span className="font-bold text-2xl md:text-xl block mb-2 transition-colors duration-500 group-hover:text-[#487307]">
              Сільськогосподарські технології
            </span>
            <p className="transition-opacity duration-500 group-hover:opacity-90">
              Фермерів і керівників господарств, які прагнуть впроваджувати
              новітні агротехнології
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className="group flex flex-col w-full md:w-[310px] h-[480px] md:h-[664px] rounded-3xl border overflow-hidden 
                     shadow-lg bg-white transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-2"
        >
          <div
            className="text-gray-700 text-center text-base md:text-xl p-4 flex flex-col justify-center flex-1 
                       transition-all duration-500 group-hover:bg-[#f7f7f7]"
          >
            <span className="font-bold text-2xl md:text-3xl block mb-2 transition-colors duration-500 group-hover:text-[#487307]">
              IT технології
            </span>
            <p className="transition-opacity duration-500 group-hover:opacity-90">
              Науковців, агроекспертів та викладачів, які працюють над
              впровадженням інновацій
            </p>
          </div>
          <div className="relative overflow-hidden h-2/3">
            <Image
              className="w-full h-full object-cover rounded-b-3xl transform transition-transform duration-700 group-hover:scale-110"
              src="/default-long.png"
              alt="combainer"
              height={232}
              width={310}
            />
            <div
              className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-60 transition-opacity duration-500"
            ></div>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className="group flex flex-col w-full md:w-[310px] h-[480px] md:h-[664px] rounded-3xl border overflow-hidden 
                     shadow-lg bg-white transition-all duration-500 ease-out hover:shadow-2xl hover:-translate-y-2"
        >
          <div className="relative overflow-hidden h-2/3">
            <Image
              className="w-full h-full object-cover rounded-t-3xl transform transition-transform duration-700 group-hover:scale-110"
              src="/default-long.png"
              alt="combainer"
              height={232}
              width={310}
            />
            <div
              className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-60 transition-opacity duration-500"
            ></div>
          </div>
          <div
            className="text-gray-700 text-center text-base md:text-xl p-4 flex flex-col justify-center flex-1 
                       transition-all duration-500 group-hover:bg-[#f7f7f7]"
          >
            <span className="font-bold text-2xl md:text-3xl block mb-2 transition-colors duration-500 group-hover:text-[#487307]">
              Тваринництво
            </span>
            <p className="transition-opacity duration-500 group-hover:opacity-90">
              Розробників і постачальників агротехніки, добрив, кормів та
              IoT-рішень
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
