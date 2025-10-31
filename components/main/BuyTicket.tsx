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
    <section id="buy-ticket" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">🎟️ Придбати квиток</h2>
          <p className="text-gray-600 text-lg">
            Оберіть свій формат участі та долучіться до провідної аграрної події року
          </p>
        </div>

        {/* Карточки квитків */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tickets.map((ticket, i) => (
            <div
              key={i}
              className={`flex flex-col p-10 rounded-3xl text-white ${ticket.color} shadow-lg hover:shadow-2xl transition-all duration-300`}
            >
              {/* Заголовок і ціна */}
              <div className="flex justify-between items-center mb-4">
                <span className="font-light">Пакет</span>
                <span className="bg-white text-2xl font-bold text-green-900 rounded-full px-4 py-2">
                  {ticket.price}
                </span>
              </div>

              <h3 className="text-3xl font-bold uppercase py-2 border-b border-white mb-4">
                {ticket.type}
              </h3>

              {/* Список переваг */}
              <ul className="list-disc list-inside space-y-2 text-sm md:text-base">
                {ticket.perks.map((perk, idx) => (
                  <li key={idx}>{perk}</li>
                ))}
              </ul>

              {/* Кнопка */}
              <Link
                href="/buy-a-ticket"
                className={`block mx-auto mt-8 py-3 px-6 font-medium text-lg rounded-lg border-2 border-white text-white transition-colors duration-300 ${ticket.hover}`}
              >
                Оплатити / Зареєструватися
              </Link>
            </div>
          ))}
        </div>

        {/* Інтеграція з платіжною системою (приклад) */}
        {/* <div className="text-center mt-12 text-gray-500 text-sm">
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
