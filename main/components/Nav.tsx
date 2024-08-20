import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

export default function Nav() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 flex items-center justify-between px-6 py-3 text-white">
      <Link href={"https://github.com/hylinz"}>
        <FaGithub className="text-3xl mix-blend-difference" />
      </Link>
      <button
        onClick={() => {
          document.getElementById("about-section")?.scrollIntoView({
            behavior: "smooth",
          });
        }}
        className="flex items-center gap-1 text-xs text-zinc-400"
      >
        About <FiArrowRight />
      </button>
    </nav>
  );
}
