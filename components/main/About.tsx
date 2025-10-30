export default function About() {
  return (
    <section id="about">
      <div className="flex flex-col items-center p-15 pb-25 relative overflow-hidden">
        <span className="text-7xl font-bold">ХТО МИ ТА ЩО РОБИМО?</span>
        <span className="text-lg text-gray-700 font-bold">
          Geluka Agro Corp
        </span>
        <div className="absolute inset-0 bg-bottom -bottom-120 bg-no-repeat bg-[url('/bg-mountain.png')] bg-cover z-1"></div>
      </div>

      <div className="grid grid-row-2">
        <div className="grid grid-cols-3">
          <div className="flex flex-col items-center text-left text-gray-700 p-10 px-15">
            <span className="font-bold uppercase ">
              ОРГАНІЗАЦІЯ АГРАРНИХ ФОРУМІВ, КОНФЕРЕНЦІЙ ТА ВИСТАВОК
            </span>
            <span className="">
              Ми розробляємо події з нуля: від концепції та логістики до
              запрошення спікерів і роботи з медіа.
            </span>
          </div>
          <div className="flex flex-col text-left text-gray-700 p-10 px-15 border-x">
            <span className="font-bold uppercase ">
              ПРОФЕСІЙНИЙ НЕТВОРКІНГ{" "}
            </span>
            <span className="">
              Створюємо простір, де фермери, агрокомпанії, інвестори та
              інноватори знаходять спільні точки для співпраці.
            </span>
          </div>
          <div className="flex flex-col text-left text-gray-700 px-15 p-10">
            <span className="font-bold uppercase ">
              ФОКУС НА АГРОІННОВАЦІЇ{" "}
            </span>
            <span className="">
              Наші заходи висвітлюють новітні технології: точне землеробство,
              агродрони, IoT, автоматизацію тваринництва та інше.
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2">
          <div className="flex flex-col text-left text-gray-700 border-t p-10 pl-75">
            <span className="font-bold uppercase ">
              ПІДТРИМКА АГРАРНОЇ СПІЛЬНОТИ{" "}
            </span>
            <span className="">
              Ми працюємо з аграрними асоціаціями, освітніми закладами та
              технопарками для розвитку галузі.
            </span>
          </div>
          <div className="flex flex-col text-left text-gray-700 border-t border-l p-10 pr-67">
            <span className="font-bold uppercase ">
              ІНДИВІДУАЛЬНІ РІШЕННЯ ДЛЯ БІЗНЕСУ{" "}
            </span>
            <span className="">
              Допомагаємо компаніям представити себе на ринку через
              B2B-зустрічі, брендовані події, демо-дні та інші формати.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
