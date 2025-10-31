export default function About() {
  return (
    <section id="about">
      {/* Верхній блок із фоном */}
      <div className="relative flex flex-col items-center p-12 pb-24 overflow-hidden">
        {/* Фон у тому ж контейнері */}
        <div className="absolute inset-0 bg-bottom bg-no-repeat bg-cover bg-[url('/bg-mountain.png')] z-11 -bottom-60"></div>

        {/* Текст поверх фону */}
        <div className="relative z-10 text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            ХТО МИ ТА ЩО РОБИМО?
          </h2>
          <p className="text-lg text-gray-700 font-semibold">
            Geluka Agro Corp
          </p>
        </div>
      </div>

      {/* Грід секція */}
      <div className="grid grid-rows-2 relative z-10 bg-white/90 backdrop-blur-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gray-200">
          <div className="flex flex-col text-left text-gray-700 p-10 md:px-12">
            <span className="font-bold uppercase mb-2">
              ОРГАНІЗАЦІЯ АГРАРНИХ ФОРУМІВ, КОНФЕРЕНЦІЙ ТА ВИСТАВОК
            </span>
            <span>
              Ми розробляємо події з нуля: від концепції та логістики до
              запрошення спікерів і роботи з медіа.
            </span>
          </div>
          <div className="flex flex-col text-left text-gray-700 p-10 md:px-12 border-t md:border-t-0 md:border-x border-gray-200">
            <span className="font-bold uppercase mb-2">
              ПРОФЕСІЙНИЙ НЕТВОРКІНГ
            </span>
            <span>
              Створюємо простір, де фермери, агрокомпанії, інвестори та
              інноватори знаходять спільні точки для співпраці.
            </span>
          </div>
          <div className="flex flex-col text-left text-gray-700 p-10 md:px-12 border-t md:border-t-0 border-gray-200">
            <span className="font-bold uppercase mb-2">
              ФОКУС НА АГРОІННОВАЦІЇ
            </span>
            <span>
              Наші заходи висвітлюють новітні технології: точне землеробство,
              агродрони, IoT, автоматизацію тваринництва та інше.
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-gray-200">
          <div className="flex flex-col text-left text-gray-700 p-10 md:pl-20 border-gray-200">
            <span className="font-bold uppercase mb-2">
              ПІДТРИМКА АГРАРНОЇ СПІЛЬНОТИ
            </span>
            <span>
              Ми працюємо з аграрними асоціаціями, освітніми закладами та
              технопарками для розвитку галузі.
            </span>
          </div>
          <div className="flex flex-col text-left text-gray-700 p-10 md:pr-20 border-t md:border-t-0 md:border-l border-gray-200">
            <span className="font-bold uppercase mb-2">
              ІНДИВІДУАЛЬНІ РІШЕННЯ ДЛЯ БІЗНЕСУ
            </span>
            <span>
              Допомагаємо компаніям представити себе на ринку через B2B-зустрічі,
              брендовані події, демо-дні та інші формати.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
