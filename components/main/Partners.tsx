import Image from "next/image";

export default function Partners() {
  return (
    <section className="text-center py-10">
      <h1 className="text-6xl mb-8 text-[#fffaf1] bg-[#487307]  p-5 rounded-2xl">Партнери</h1>

      <div className="grid grid-cols-4 gap-4 justify-center items-center mx-auto max-w-fit">
        {Array.from({ length: 12 }).map((_, i) => (
          <Image
            key={i}
            src="/default-logo.png"
            alt={`partner logo ${i + 1}`}
            width={128}
            height={128}
            className="mx-auto"
          />
        ))}
      </div>
    </section>
  );
}
