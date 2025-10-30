export default function Contacts() {
  return (
    <section>
      <div className="p-10 relative min-h-[80vh] lg:min-h-[1080px]">
        {/* Header */}
        <div className="flex flex-col py-3 border-b z-10 relative">
          <span className="font-bold uppercase text-9xl">Контакти</span>
          <span className="font-bold text-2xl">Geluka Agro Crop</span>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col py-3 z-10 relative">
          <span className="font-bold uppercase text-4xl">
            +38 067 919 29 46
          </span>
          <span className="font-bold text-2xl">Альона Гелукаp</span>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 bg-bottom bg-[url('/bg-mountain.png')] bg-no-repeat bg-contain z-0 pointer-events-none"></div>
      </div>
    </section>
  );
}
