import Link from "next/link";

export default function Hero() {
  return (
    <section id="home" className="mx-auto">
      {/* Top Info Bar */}
      <div className="grid grid-cols-3 text-center border-b text-sm sm:text-base">
        <div className="py-3">Ресторан “Мамай”</div>
        <div className="border-x font-bold py-3">Geluka Agro Corp</div>
        <div className="py-3">27 листопада 2025</div>
      </div>

      {/* Hero Section */}
      <div className="relative min-h-100 md:min-h-screen  overflow-hidden">
        {/* Text for PC */}
        <div className="hidden md:block relative top-10 text-9xl font-bold text-center px-20">
          NOVA AGRO <br /> FORUM
          <span className="absolute text-base font-medium text-left bottom-5 text-gray-700 max-w-xs">
            Платформа для обміну знаннями, досвідом та інноваціями у сфері
            смарт-агро, сталого сільського господарства і тваринництва
          </span>
        </div>

        {/* Text for Mobile */}
        <div className="block md:hidden relative mt-20 px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">NOVA AGRO FORUM</h1>
          <p className="text-sm text-gray-700">
            Платформа для обміну знаннями, досвідом та інноваціями у сфері
            смарт-агро, сталого сільського господарства і тваринництва
          </p>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 w-full h-full bg-[url('/bg-mountain.png')] bg-bottom bg-no-repeat bg-cover z-0"></div>

        {/* Button */}
        <Link
          href="/buy-a-ticket"
          className="absolute cursor-pointer p-3 z-2 bg-white font-normal text-lg rounded-lg 
             border border-transparent hover:bg-transparent hover:text-white hover:border-white 
             transition-colors duration-300 bottom-1/4 left-1/2 -translate-x-1/2 md:bottom-1/4"
        >
          Купити квиток
        </Link>
      </div>
    </section>
  );
}
