"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import MenuIcon from "./menu-icon";
import { useRouter } from "next/navigation";
import Link from "next/link";

type CategoriesMenuProps = {
  year: string;
  categories: string[];
};

export default function CategoriesMenu({
  year,
  categories,
}: CategoriesMenuProps) {
  return (
    <Menu>
      <MenuButton className="p-2">
        <MenuIcon />
      </MenuButton>
      <MenuItems
        anchor={{
          to: "right",
          offset: 10,
        }}
        className="scrollbar scrollbar-thumb-slate-500 scrollbar-track-slate-700 mr-16 mt-3 flex h-[90%] w-72 flex-col gap-y-2 rounded-lg bg-slate-800 p-1"
      >
        {categories.map((category) => (
          <MenuItem key={category}>
            <Link
              href={`/oscars/${year}?category=${category}`}
              className="block rounded-lg p-2 text-sm text-white data-[focus]:bg-slate-600"
            >
              {category}
            </Link>
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  );
}
