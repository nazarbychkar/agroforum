export default function Partners() {
  const officialPartners = [
    { name: "AgroTech", logo: "/logos/agrotech.png" },
    { name: "GreenField", logo: "/logos/greenfield.png" },
    { name: "FarmVision", logo: "/logos/farmvision.png" },
  ];

  const mediaPartners = [
    {
      name: "AgroNews",
      logo: "/logos/agro-news.png",
      url: "https://agro-news.ua",
    },
    {
      name: "UA Farming",
      logo: "/logos/ua-farming.png",
      url: "https://uafarming.com",
    },
    {
      name: "AgroTimes",
      logo: "/logos/agro-times.png",
      url: "https://agrotimes.ua",
    },
  ];

  return (
    <section id="partners" className="relative py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        {/* Заголовок */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">🤝 Партнери</h2>
          <p className="text-gray-600 text-lg">
            Ми вдячні нашим партнерам за підтримку та спільний розвиток аграрної
            спільноти
          </p>
        </div>

        {/* Генеральний партнер */}
        <div className="mb-20 text-center">
          <h3 className="text-2xl font-bold uppercase mb-6">
            Генеральний партнер
          </h3>
          <div className="flex flex-col items-center justify-center">
            <img
              src="/logos/main-partner.png"
              alt="Генеральний партнер"
              className="w-48 md:w-56 mb-4 object-contain"
            />
            <p className="max-w-xl text-gray-700">
              Компанія <strong>AgroFuture</strong> — лідер у впровадженні
              інноваційних технологій для сталого розвитку агросектору.
            </p>
          </div>
        </div>

        {/* Офіційні партнери */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold uppercase text-center mb-8">
            Офіційні партнери
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 items-center justify-center">
            {officialPartners.map((partner, i) => (
              <div key={i} className="flex justify-center items-center">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-36 md:w-44 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Медіапартнери */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold uppercase text-center mb-8">
            Медіапартнери
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 items-center justify-center">
            {mediaPartners.map((media, i) => (
              <a
                key={i}
                href={media.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center opacity-80 hover:opacity-100 transition-all"
              >
                <img
                  src={media.logo}
                  alt={media.name}
                  className="w-36 md:w-44 object-contain"
                />
              </a>
            ))}
          </div>
        </div>

        {/* Опціонально — партнерські пакети */}
        {/* <div className="text-center">
          <h3 className="text-2xl font-bold uppercase mb-4">Партнерські пакети</h3>
          <p className="text-gray-700 mb-6">
            Хочете стати партнером заходу? Ми пропонуємо кілька форматів співпраці:
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-6">
            <div className="border border-gray-200 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <h4 className="font-bold text-lg mb-2">Silver</h4>
              <p className="text-gray-600 text-sm">Логотип на сайті + згадка в соціальних мережах</p>
            </div>
            <div className="border border-gray-200 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <h4 className="font-bold text-lg mb-2">Gold</h4>
              <p className="text-gray-600 text-sm">Участь у панельній дискусії + банер на події</p>
            </div>
            <div className="border border-gray-200 bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <h4 className="font-bold text-lg mb-2">Platinum</h4>
              <p className="text-gray-600 text-sm">Головне партнерство + стенд на виставці</p>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}
