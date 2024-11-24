"use client";
import { sidebarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import { Sheet, SheetTrigger, SheetContent, SheetClose } from "./ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileNavbar({ user }: MobileNavProps) {
  const pathname = usePathname();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <Image
            className="cursor-pointer"
            src="/icons/hamburger.svg"
            width={30}
            height={30}
            alt="Menu"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <Link
            href="/"
            className="cursor-pointer flex items-center gap-1 px-4"
          >
            <Image
              src="/icons/logo.svg"
              width={34}
              height={34}
              alt="Horizon Logo"
            />
            <h1 className="text-26 font-ibm-plex-serif font-bold text-black-1">
              Horizon
            </h1>
          </Link>
          <div className="mobilenav-sheet">
            <SheetClose asChild>
              <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                {sidebarLinks.map((item) => {
                  const isActive =
                    pathname === item.route ||
                    pathname.startsWith(`${item.route}/`);

                  return (
                    <SheetClose asChild key={item.route}>
                      <Link
                        href={item.route}
                        className={cn("mobilenav-sheet_close w-full", {
                          "bg-bank-gradient": isActive,
                        })}
                      >
                        <Image
                          className={cn({
                            "brightness-[3] invert-0": isActive,
                          })}
                          src={item.imgURL}
                          alt={item.label}
                          width={20}
                          height={20}
                        />
                        <p
                          className={cn("text-17 font-semibold text-black-2", {
                            "text-white": isActive,
                          })}
                        >
                          {item.label}
                        </p>
                      </Link>
                    </SheetClose>
                  );
                })}
                USER
              </nav>
            </SheetClose>
            FOOTER
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
}