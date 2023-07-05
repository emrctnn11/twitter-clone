'use client'

import { usePathname } from "next/navigation";
import { BsTwitter } from "react-icons/bs";

const SidebarLogo = () => {
  const router = usePathname();

  return (
    <div
      onClick={() => router.search("/")}
      className="rounded-full h-14 w-14 p-4 flex items-center justify-center hover:bg-blue-300 hover:bg-opacity-10 cursor-pointer transition"
    >
      <BsTwitter size={28} color="white" />
    </div>
  );
};

export default SidebarLogo;
