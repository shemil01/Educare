import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function FloatingButton() {
  return (
    <div className="fixed top-24 right-5 z-50  flex justify-center items-center space-x-2  ">
      <Link
        href="https://wa.me/+974 55555 3458?text=Hello"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="bg-green-500 border hover:text-[#00dc93] hover:border-[#00dc93] w-12 text-2xl h-12 flex justify-center items-center rounded-full">
          <FaWhatsapp size={24} />
        </span>
      </Link>
    </div>
  );
}
