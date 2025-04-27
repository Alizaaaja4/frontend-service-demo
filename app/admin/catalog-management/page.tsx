"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";
import AdminLayout from "./layout";
import HeaderAdmin from "@/components/components_admin/headerAdmin";
import ContentCatalogs from "@/components/components_admin/contentCatalogs";
import { Sidebar } from "@/components/components_admin/sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faBook,
  faJournalWhills,
  faSwatchbook,
} from "@fortawesome/free-solid-svg-icons";

export default function HomeAdmin() {
  const [selectedKeys, setSelectedKeys] = React.useState(
    new Set(["Select Telkom University Library"]),
  );

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys],
  );

  return (
    <AdminLayout>
      <section>
        <div className="bg-[url('/assets/image/kampus-surabaya.png')] bg-cover bg-center bg-no-repeat w-full h-[32vh] text-white pb-2 pt-2 shadow-md">
          <div className="flex h-screen pb-14">
            {/* Sidebar */}
            <div className="fixed h-full bottom-7 p-4">
              <div className="w-12 h-full">
                <Sidebar />
              </div>
            </div>
            <div className="mt-8 grow space-y-5 pl-20 md:pl-28 pr-5 pb-5">
              {/* Header dengan kalimat Good Morning */}
              <HeaderAdmin />

              {/* Dropdown untuk pemilihan library */}
              <div className="flex justify-between py-3 rounded-lg w-full gap-2 z-0">
                <Dropdown>
                  <DropdownTrigger>
                    <Button
                      variant="bordered"
                      className="capitalize bg-white shadow-md shadow-black text-[12px] font-semibold pl-6 pr-6"
                    >
                      {selectedValue}{" "}
                      <FontAwesomeIcon
                        icon={faCaretDown}
                        className="w-[12px]"
                      />
                    </Button>
                  </DropdownTrigger>
                  <DropdownMenu
                    aria-label="Single selection example"
                    variant="flat"
                    disallowEmptySelection
                    selectionMode="single"
                    selectedKeys={selectedKeys}
                    onSelectionChange={() => setSelectedKeys}
                  >
                    <DropdownItem key="Open Library - Bandung">
                      Open Library - Bandung
                    </DropdownItem>
                    <DropdownItem key="Open Library - Jakarta A">
                      Open Library - Jakarta A
                    </DropdownItem>
                    <DropdownItem key="Open Library - Jakarta B">
                      Open Library - Jakarta B
                    </DropdownItem>
                    <DropdownItem key="Open Library - Surabaya">
                      Open Library - Surabaya
                    </DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>

              {/* Total catalog dan lainnya */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                {/* Container catalogs */}
                <div className="bg-white p-2 rounded-lg shadow-md w-[120px] h-[13vh]">
                  <h6 className="text-start text-dark-red text-[13px] font-bold gap-2">
                    <FontAwesomeIcon icon={faSwatchbook} className="w-[25px]" />
                    Catalogs
                  </h6>
                  <h4 className="text-maroon text-center font-bold text-xl mt-1">
                    21,789
                  </h4>
                </div>

                {/* Container journals */}
                <div className="bg-white p-2 rounded-lg shadow-md w-[120px] h-[13vh]">
                  <h6 className="text-start text-dark-red text-[13px] font-bold gap-2">
                    <FontAwesomeIcon
                      icon={faJournalWhills}
                      className="w-[25px]"
                    />
                    Journals
                  </h6>
                  <h4 className="text-maroon text-center font-bold text-xl mt-1">
                    11,589
                  </h4>
                </div>

                {/* Container books */}
                <div className="bg-white p-2 rounded-lg shadow-md w-[120px] h-[13vh]">
                  <h6 className="text-start text-dark-red text-[13px] font-bold gap-2">
                    <FontAwesomeIcon icon={faBook} className="w-[25px]" />
                    Books
                  </h6>
                  <h4 className="text-maroon text-center font-bold text-xl mt-1">
                    10,200
                  </h4>
                </div>
              </div>
              {/* content table */}
              <div className="mt-11 mb-9">
                <ContentCatalogs />
              </div>
            </div>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
}
