import Link from "next/link";
import Image from "next/image";

import { homeTitleFont } from "@/config/font";
import { navPages } from "@/config/site";
import { IoCartOutline, IoSearchOutline } from "react-icons/io5";
import Sidebar from "../sidebar/Sidebar";

export default function TopMenu() {
  return (
    <nav className="flex px-5 py-2 justify-between items-center w-full">
      <div>
        <Link href={navPages.home.href} className="flex gap-2 items-center">
          <Image alt="Logo" height={50} width={50} src={navPages.home.icon} />
          <span
            className={`${homeTitleFont.className} antialiased font-bold text-xl`}
          >
            Joyas Anel
          </span>
        </Link>
      </div>
      <div className="hidden sm:block">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-yellow-100"
          href={navPages.categories.accessories.href}
        >
          {navPages.categories.accessories.name}
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-yellow-100"
          href={navPages.categories.craft.href}
        >
          {navPages.categories.craft.name}
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-yellow-100"
          href={navPages.categories.spiritual.href}
        >
          {navPages.categories.spiritual.name}
        </Link>
      </div>
      <div className="flex items-center">
        <Link href="search" className="mx-2">
          <IoSearchOutline className="w-6 h-6" />
        </Link>
        <Link href={navPages.cart.href} className="mx-2">
          <IoCartOutline className="w-6 h-6" />
        </Link>
        <Sidebar />
      </div>
    </nav>
  );
}
