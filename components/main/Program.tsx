import Image from "next/image";

export default function Program() {
  return (
    <section id="program" className="bg-white py-5 px-3 rounded-2xl">
      <div className="flex justify-between">
        <span className="font-bold text-8xl uppercase">Програма</span>
        <div className="flex flex-col w-1/3 text-right">
          <span className="font-bold text-2xl uppercase">
            NOVA AGRO FORUM 2025
          </span>
          <p className="text-gray-700">
            {" "}
            На вас чекатиме насичений день, створений для <br /> обміну
            знаннями, натхнення та якісного нетворкінгу:
          </p>
        </div>
      </div>

      <div className="grid grid-cols-[2fr_0.8fr_2fr] border-y">
        <div className="relative">
          <Image
            src="/default-wide.png"
            alt="template"
            fill
            className=""
          ></Image>
        </div>

        <span className=" text-yellow-500 text-9xl text-center items-center flex justify-center border-x border-b border-[#487307]">
          01
        </span>
        <span className="text-gray-700 border-b p-10">
          <span className="font-bold">5 провідних спікерів</span> – експерти
          агросфери, які поділяться практичними кейсами та новітніми рішеннями у
          сфері смарт-агро, цифровізації та сталого розвитку.
        </span>

        <span className="text-gray-700 border-b p-10">
          <span className="font-bold">5 провідних спікерів</span> – експерти
          агросфери, які поділяться практичними кейсами та новітніми рішеннями у
          сфері смарт-агро, цифровізації та сталого розвитку.
        </span>
        <span className="text-yellow-500 text-9xl text-center items-center flex justify-center border-x border-b border-[#487307]">
          01
        </span>
        <div className="relative">
          <Image
            src="/default-wide.png"
            alt="template"
            fill
            className=""
          ></Image>
        </div>
        <div className="relative">
          <Image
            src="/default-wide.png"
            alt="template"
            fill
            className=""
          ></Image>
        </div>
        <span className="text-yellow-500 text-9xl text-center items-center flex justify-center border-x border-b border-[#487307]">
          01
        </span>
        <span className="text-gray-700 border-b p-10">
          <span className="font-bold">5 провідних спікерів</span> – експерти
          агросфери, які поділяться практичними кейсами та новітніми рішеннями у
          сфері смарт-агро, цифровізації та сталого розвитку.
        </span>
      </div>
    </section>
  );
}
