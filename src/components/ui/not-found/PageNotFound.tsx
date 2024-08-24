import { titleFont } from "@/config/font";
import { navPages } from "@/config/site";
import Image from "next/image";
import Link from "next/link";

export default function PageNotFound() {
  return (
    <div className="flex flex-col-reverse md:flex-row h-[800px] w-full justify-center items-center align-middle">
      <div className="text-center px-5 mx-5">
        <h1 className={`${titleFont.className} antialiased text-9xl`}>404</h1>
        <p className="font-semibold text-xl">Whoops! Lo sentimos mucho.</p>
        <p className="font-light">
          <span>Puedes regresar al </span>
          <Link
            href={navPages.home.href}
            className="font-normal hover:underline transition-all"
          >
            inicio
          </Link>
        </p>
      </div>

      {/* <div className="px-5 mx-5">
        <Image alt="" />
      </div> */}
    </div>
  );
}
