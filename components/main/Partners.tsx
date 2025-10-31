"use client";

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
    <section
      id="partners"
      className="relative py-20 bg-linear-to-b from-white via-green-50 to-green-100 max-w-7xl mx-auto rounded-2xl overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5 pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Заголовок */}
        <div className="text-center mb-20 animate-fade-in-slow">
          <h2 className="text-5xl md:text-6xl font-extrabold mb-4 text-gray-900 uppercase tracking-tight">
            🤝 Партнери
          </h2>
          <div className="w-24 h-1 bg-green-700 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Ми вдячні нашим партнерам за підтримку та спільний розвиток аграрної
            спільноти
          </p>
        </div>

        {/* Генеральний партнер */}
        <div
          className="mb-24 text-center animate-fade-in-slow"
          style={{ animationDelay: "0.2s" }}
        >
          <h3 className="text-2xl font-bold uppercase mb-8 text-green-800 tracking-wide">
            Генеральний партнер
          </h3>
          <div className="flex flex-col items-center justify-center">
            <div className="relative group">
              <img
                src="/logos/main-partner.png"
                alt="Генеральний партнер"
                className="w-48 md:w-56 mb-4 object-contain transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-green-600 transition-all duration-500"></div>
            </div>
            <p className="max-w-xl text-gray-700 text-lg leading-relaxed">
              Компанія <strong>AgroFuture</strong> — лідер у впровадженні
              інноваційних технологій для сталого розвитку агросектору.
            </p>
          </div>
        </div>

        {/* Офіційні партнери */}
        <div
          className="mb-24 animate-fade-in-slow"
          style={{ animationDelay: "0.4s" }}
        >
          <h3 className="text-2xl font-bold uppercase text-center mb-10 text-green-800">
            Офіційні партнери
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 items-center justify-center">
            {officialPartners.map((partner, i) => (
              <div
                key={i}
                className="flex justify-center items-center group transition-all duration-500"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-36 md:w-44 object-contain grayscale group-hover:grayscale-0 
                             group-hover:scale-105 transition-all duration-500 drop-shadow-sm"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Медіапартнери */}
        <div
          className="animate-fade-in-slow"
          style={{ animationDelay: "0.6s" }}
        >
          <h3 className="text-2xl font-bold uppercase text-center mb-10 text-green-800">
            Медіапартнери
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 items-center justify-center">
            {mediaPartners.map((media, i) => (
              <a
                key={i}
                href={media.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center items-center group opacity-80 hover:opacity-100 
                           transition-all duration-500 hover:scale-105"
              >
                <img
                  src={media.logo}
                  alt={media.name}
                  className="w-36 md:w-44 object-contain drop-shadow-sm"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
