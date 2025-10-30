import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full max-w-7xl mx-auto flex justify-between h-10 p-2 shadow-lg fixed inset-0 z-50 bg-[#fffaf1]">
      <Link href="/#home">Головна</Link>
      <Link href="/#about">Про захід</Link>
      <Link href="/#topics">Напрямки</Link>
      <Link href="/#program">Програма</Link>
      <Link href="/#speakers">Спікери</Link>
      <Link href="/#partners">Партнери</Link>
      <Link href="/#projects">Реалізовані проєкти</Link>
      <Link href="/#buy-a-ticket">Придбати квиток</Link>
      <Link href="/#contacts">Контакти</Link>
    </header>
  );
}
