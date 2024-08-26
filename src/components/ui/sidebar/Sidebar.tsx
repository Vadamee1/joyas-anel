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
      <SheetTrigger>
        <p className="p-2 rounded-lg transition-all hover:bg-yellow-100">
          Menú
        </p>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menú</SheetTitle>
        </SheetHeader>
        <SheetDescription className="mt-5">
          <Input isSearch type="text" placeholder="Search" />
          <div className="flex flex-col mt-10 gap-5">
            <Link
              href="/"
              className="flex items-center gap-2 hover:bg-yellow-50 rounded transition-all h-10"
            >
              <IoPersonOutline size={30} />
              <span className="text-xl">Perfil</span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 hover:bg-yellow-50 rounded transition-all h-10"
            >
              <IoTicketOutline size={30} />
              <span className="text-xl">Orders</span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 hover:bg-yellow-50 rounded transition-all h-10"
            >
              <IoLogInOutline size={30} />
              <span className="text-xl">Log In</span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 hover:bg-yellow-50 rounded transition-all h-10"
            >
              <IoLogOutOutline size={30} />
              <span className="text-xl">Log Out</span>
            </Link>
          </div>
          <Divider />
          <div className="flex flex-col gap-5">
            <Link
              href="/"
              className="flex items-center gap-2 hover:bg-yellow-50 rounded transition-all h-10"
            >
              <IoShirtOutline size={30} />
              <span className="text-xl">Products</span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 hover:bg-yellow-50 rounded transition-all h-10"
            >
              <IoTicketOutline size={30} />
              <span className="text-xl">Orders</span>
            </Link>
            <Link
              href="/"
              className="flex items-center gap-2 hover:bg-yellow-50 rounded transition-all h-10"
            >
              <IoPeopleOutline size={30} />
              <span className="text-xl">Users</span>
            </Link>
          </div>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
