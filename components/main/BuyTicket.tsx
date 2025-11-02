import Link from "next/link";

export default function BuyTicket() {
  const tickets = [
    {
      type: "Standard",
      price: "2 500 грн",
      color: "bg-green-700",
      hover: "hover:text-green-700 hover:bg-white",
      perks: [
        "Доступ до всіх панельних дискусій та виступів.",
        "Місце у загальній зоні учасників.",
        "Кава-брейки та обід.",
        "Бейдж учасника, блокнот і брендовані матеріали.",
      ],
    },
    {
      type: "VIP",
      price: "6 000 грн",
      color: "bg-green-500",
      hover: "hover:text-green-500 hover:bg-white",
      perks: [
        "Усе зі Standard пакету.",
        "Місця у VIP-зоні біля сцени.",
        "Окремий VIP-обід з учасниками панелей.",
        "Доступ до закритого нетворкінгу.",
        "VIP-бейдж + подарунковий набір.",
      ],
    },
    {
      type: "Partner",
      price: "100 000 грн",
      color: "bg-yellow-500",
      hover: "hover:text-yellow-500 hover:bg-white",
      perks: [
        "Статус офіційного партнера заходу.",
        "Виступ з презентацією або панельна участь.",
        "Логотип на матеріалах, сцені, сайті.",
        "5 VIP-квитків для гостей компанії.",
        "B2B-зустрічі + пост-івент інтеграція.",
      ],
    },
  ];

  return (
    <section
      id="buy-ticket"
      className="relative py-24 bg-linear-to-b from-white via-green-50 to-green-100 max-w-7xl mx-auto rounded-3xl overflow-hidden"
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 animate-fade-in-slow">
            🎟️ Придбати квиток
          </h2>
          <p className="text-gray-600 text-lg animate-fade-in-slow" style={{ animationDelay: "0.2s" }}>
            Оберіть свій формат участі та долучіться до провідної аграрної події року
          </p>
        </div>

        {/* Ticket Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {tickets.map((ticket, i) => (
            <div
              key={i}
              className={`relative flex flex-col p-10 rounded-3xl text-white ${ticket.color}
                         shadow-lg hover:shadow-2xl hover:-translate-y-2 transform
                         transition-all duration-500 animate-fade-in-slow`}
              style={{ animationDelay: `${i * 0.2}s` }}
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-3xl opacity-0 hover:opacity-30 transition-opacity duration-500 bg-white/20 pointer-events-none"></div>

              {/* Header */}
              <div className="flex justify-between items-center mb-4 relative z-10">
                <span className="font-light text-white/90">Пакет</span>
                <span className="bg-white text-2xl font-bold text-green-900 rounded-full px-4 py-2 shadow-sm">
                  {ticket.price}
                </span>
              </div>

              <h3 className="text-3xl font-bold uppercase py-2 border-b border-white/70 mb-4 relative z-10">
                {ticket.type}
              </h3>

              {/* Perks List */}
              <ul className="list-disc list-inside space-y-2 text-sm md:text-base relative z-10">
                {ticket.perks.map((perk, idx) => (
                  <li key={idx}>{perk}</li>
                ))}
              </ul>

              {/* Button */}
              <Link
                href="/buy-a-ticket"
                className={`block mx-auto mt-10 py-3 px-6 font-medium text-lg rounded-full border-2 border-white text-white 
                            transition-all duration-300 ${ticket.hover} hover:scale-105`}
              >
                Оплатити / Зареєструватися
              </Link>
            </div>
          ))}
        </div>

        {/* Optional note below */}
        {/* <div className="text-center mt-12 text-gray-500 text-sm animate-fade-in-slow" style={{ animationDelay: "0.8s" }}>
          <p>
            Оплата здійснюється через захищену систему. Якщо бажаєте рахунок для юрособи —{" "}
            <Link href="/contact" className="text-green-600 hover:underline">
              звʼяжіться з нами
            </Link>.
          </p>
        </div> */}
      </div>
    </section>
  );
}
