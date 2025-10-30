import Image from "next/image";

export default function Topics() {
  return (
    <section id="topics">
      <div className="flex justify-around gap-5 my-10">
        {/* First block: Text only */}
        <div className="flex bg-[#487307] flex-col justify-center items-center font-semibold w-[310px] h-[664px] border rounded-4xl overflow-hidden">
          <span className="text-2xl mb-2 text-[#fffaf1]">Nova Agro Forum</span>
          <span className="text-8xl font-bold uppercase text-[#fffaf1]">
            Нап <br /> рям <br /> ки
          </span>
        </div>

        {/* Card 1 */}
        <div className="flex flex-col w-[310px] h-[664px] rounded-4xl border overflow-hidden">
          <Image
            className="w-full h-2/3 object-cover rounded-4xl"
            src="/default-long.png"
            alt="combainer"
            height={232}
            width={310}
          />
          <div className="text-gray-700 text-center text-xl p-4 flex flex-col justify-center flex-1">
            <span className="font-bold text-2xl block mb-2">
              Сільськогосподарські технології
            </span>
            <p>
              Фермерів і керівників господарств, які прагнуть впроваджувати
              новітні агротехнології
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col w-[310px] h-[664px] rounded-4xl border overflow-hidden">
          <div className="text-gray-700 text-center text-xl p-4 flex flex-col justify-center flex-1">
            <span className="font-bold text-3xl block mb-2">IT технології</span>
            <p>
              Науковців, агроекспертів та викладачів, які працюють над
              впровадженням інновацій
            </p>
          </div>
          <Image
            className="w-full h-2/3 object-cover rounded-4xl"
            src="/default-long.png"
            alt="combainer"
            height={232}
            width={310}
          />
        </div>

        {/* Card 3 */}
        <div className="flex flex-col w-[310px] h-[664px] rounded-4xl border overflow-hidden">
          <Image
            className="w-full h-2/3 object-cover rounded-4xl"
            src="/default-long.png"
            alt="combainer"
            height={232}
            width={310}
          />
          <div className="text-gray-700 text-center text-xl p-4 flex flex-col justify-center flex-1">
            <span className="font-bold text-3xl block mb-2">Тваринництво</span>
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
