"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import { Input } from "@heroui/input";
import NextLink from "next/link";
import { siteConfig } from "@/config/site";
import { SearchIcon } from "@/components/icons";
import ModalLogin from "./modalLogin";
import ModalSearch from "./modalSearch";

export const Navbar = () => {
  const searchInput = (
    <Input
      isClearable
      radius="lg"
      classNames={{
        input: [
          "bg-transparent",
          "text-black/90 dark:text-white/90",
          "placeholder:text-default-700/50 dark:placeholder:text-white/60",
        ],
        innerWrapper: "bg-transparent",
        inputWrapper: [
          "bg-default-200/50",
          "dark:bg-default/60",
          "backdrop-blur-xl",
          "backdrop-saturate-200",
          "hover:bg-default-200/70",
          "dark:hover:bg-default/70",
          "group-data-[focus=true]:bg-default-200/50",
          "dark:group-data-[focus=true]:bg-default/60",
          "!cursor-text",
        ],
      }}
      placeholder="Type to search..."
      startContent={
        <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
      }
    />
  );

  return (
    <NextUINavbar
      maxWidth="xl"
      position="sticky"
      className="bg-white shadow-md w-full"
    >
      <NavbarContent
        className="flex-grow basis-1/5 sm:basis-full"
        justify="start"
      >
        <NavbarBrand as="li" className="gap-5 max-w-fit pr-4">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <img
              src="/assets/logo/logo_oplib.svg"
              alt="Logo Oplib"
              className="h-10"
            />
          </NextLink>
        </NavbarBrand>
        <ul className="hidden md:flex gap-5 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className="text-dark-red font-bold hover:border-b-2 hover:border-dark-red"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden md:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem>{searchInput}</NavbarItem>
        <NavbarItem>
          <ModalSearch />
        </NavbarItem>
        <NavbarItem>
          <ModalLogin />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarMenuToggle className="text-dark-red" />
      </NavbarContent>

      <NavbarMenu>
        <div className="flex justify-between space-x-2">
          {searchInput}
          <ModalSearch />
        </div>

        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
