import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="max-w-7xl mx-auto">
      <div className="grid grid-cols-3 text-center border-b">
        <div className="py-3">Ресторан “Мамай”</div>
        <div className="border-x font-bold py-3">Geluka Agro Corp</div>
        <div className="py-3"> 27 листопада 2025</div>
      </div>

      <div className="relative min-h-[800px] text-9xl font-bold text-center overflow-hidden">
        <div className="relative top-10">
          NOVA AGRO <br /> FORUM{" "}
          <span className="absolute text-base ml-3 mr-25 font-medium bottom-4 text-left text-gray-700">
            Платформа для обміну знаннями, досвідом та інноваціями у сфері
            смарт-агро, сталого сільського господарства і тваринництва
          </span>
        </div>

        <div className="absolute bg-bottom translate-y-25 inset-0 bg-[url('/bg-mountain.png')] bg-no-repeat bg-contain z-1"></div>
        <Link
          href="/buy-a-ticket"
          className="absolute cursor-pointer p-3 z-2 bg-blue-700 text-white font-normal text-lg bottom-1/4 left-1/2 -translate-x-1/2 rounded-lg hover:shadow-lg"
        >
          Купити квиток
        </Link>
      </div>
    </section>
  );
}
