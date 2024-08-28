"use client";

import {
  IoLogInOutline,
  IoLogOutOutline,
  IoPeopleOutline,
  IoPersonOutline,
  IoShirtOutline,
  IoTicketOutline,
} from "react-icons/io5";
import { Input } from "../input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../sheet";
import Link from "next/link";
import { Divider } from "../divider";

export default function Sidebar() {
  return (
    <Sheet>
      <SheetTrigger className="p-2 rounded-lg transition-all hover:bg-yellow-100">
        Menú
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menú</SheetTitle>
          <SheetDescription></SheetDescription>
          <div className="mt-5">
            <Input isSearch type="text" placeholder="Search" />
            <div className="flex flex-col mt-10 gap-5">
              <SheetClose asChild>
                <Link
                  href="/"
                  className="flex items-center gap-2 hover:bg-yellow-50 rounded transition-all h-10"
                >
                  <IoPersonOutline size={30} />
                  <span className="text-xl">Perfil</span>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link
                  href="/"
                  className="flex items-center gap-2 hover:bg-yellow-50 rounded transition-all h-10"
                >
                  <IoTicketOutline size={30} />
                  <span className="text-xl">Orders</span>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link
                  href="/"
                  className="flex items-center gap-2 hover:bg-yellow-50 rounded transition-all h-10"
                >
                  <IoLogInOutline size={30} />
                  <span className="text-xl">Log In</span>
                </Link>
              </SheetClose>

              <SheetClose asChild>
                <Link
                  href="/"
                  className="flex items-center gap-2 hover:bg-yellow-50 rounded transition-all h-10"
                >
                  <IoLogOutOutline size={30} />
                  <span className="text-xl">Log Out</span>
                </Link>
              </SheetClose>
            </div>
            <Divider />
            <div className="flex flex-col gap-5">
              <SheetClose asChild>
                <Link
                  href="/"
                  className="flex items-center gap-2 hover:bg-yellow-50 rounded transition-all h-10"
                >
                  <IoShirtOutline size={30} />
                  <span className="text-xl">Products</span>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="/"
                  className="flex items-center gap-2 hover:bg-yellow-50 rounded transition-all h-10"
                >
                  <IoTicketOutline size={30} />
                  <span className="text-xl">Orders</span>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="/"
                  className="flex items-center gap-2 hover:bg-yellow-50 rounded transition-all h-10"
                >
                  <IoPeopleOutline size={30} />
                  <span className="text-xl">Users</span>
                </Link>
              </SheetClose>
            </div>
          </div>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}
