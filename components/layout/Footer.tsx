import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#487307] text-[#fffaf1]" >
    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center p-4  shadow-inner mt-12">
      {/* Left: Copyright */}
      <span className="text-sm mb-2 lg:mb-0">© 2025 Geluka Agro Forum</span>

      {/* Center: Privacy Policy */}
      <Link
        href="/privacy-policy"
        className="text-sm hover:underline mb-2 lg:mb-0"
      >
        Політика конфіденційності
      </Link>

      {/* Right: Social + Email */}
      <div className="flex items-center gap-4">
        {/* Social Icons */}
        <Link href="#">
          <i className="fab fa-facebook text-lg hover:text-gray-300"></i>
        </Link>
        <Link href="#">
          <i className="fab fa-instagram text-lg hover:text-gray-300"></i>
        </Link>
        <Link href="#">
          <i className="fab fa-telegram text-lg hover:text-gray-300"></i>
        </Link>

        {/* Email */}
        <a
          href="mailto:partners@geluka.com"
          className="text-sm hover:underline"
        >
          partners@geluka.com
        </a>
      </div>
      </div>
    </footer>
  );
}
