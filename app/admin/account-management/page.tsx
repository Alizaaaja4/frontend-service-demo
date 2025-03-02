"use client";
import React from "react";
import AdminLayout from "./layout";
import { Sidebar } from "@/components/components_admin/sidebar";
import HeaderAdmin from "@/components/components_admin/headerAdmin";
import ModalAddUser from "@/components/components_admin/modalAddUser";
import ContentAccountManagement from "@/components/components_admin/contentAccountManagement";
import { Select, SelectItem, Input } from "@heroui/react"; // Pastikan Input diimpor
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function HomeAdmin() {
  const library = [
    { key: "bdg", label: "Open Library TelU - Bandung" },
    { key: "jktA", label: "Open Library TelU - Jakarta A" },
    { key: "jktB", label: "Open Library TelU - Jakarta B" },
    { key: "srby", label: "Open Library TelU - Surabaya" },
  ];

  const role = [
    { key: "admin", label: "Administrator" },
    { key: "coadmin", label: "Co-Administrator" },
    { key: "staff", label: "Library Staff" },
    { key: "lecture", label: "Lecture" },
    { key: "student", label: "Student" },
  ];

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
      placeholder="Search by name..."
      startContent={
        <FontAwesomeIcon
          icon={faSearch}
          className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0"
        />
      }
    />
  );

  return (
    <AdminLayout>
      <section>
        {/* content header */}
        <div className="bg-[url('/assets/image/kampus-surabaya.png')] bg-cover bg-center bg-no-repeat w-full h-[32vh] text-white pb-2 pt-2 shadow-md">
          <div className="flex h-screen pb-14">
            {/* Sidebar */}
            <div className="fixed h-full bottom-7 p-4">
              <div className="w-12 h-full">
                <Sidebar />
              </div>
            </div>

            <div className="mt-8 grow space-y-5 pl-20 md:pl-28 pr-5 pb-5 z-0">
              {/* Header dengan kalimat Good Morning */}
              <HeaderAdmin />

              <div className="flex flex-col md:flex-row md:justify-between bg-white p-3 rounded-lg shadow-md w-full gap-2 relative">
                {/* Search input */}
                <div className="flex max-w-[400px] w-full items-center">
                  {searchInput}
                </div>

                {/* dropdown */}
                <Select
                  label="Select a library"
                  placeholder="Select a library"
                  className="flex-grow max-w-[290px] text-dark-red font-bold"
                >
                  {library.map((library) => (
                    <SelectItem key={library.key}>{library.label}</SelectItem>
                  ))}
                </Select>
                <Select
                  label="Select a user"
                  placeholder="Select a user"
                  className="flex-grow max-w-[220px] text-dark-red font-bold"
                >
                  {role.map((role) => (
                    <SelectItem key={role.key}>{role.label}</SelectItem>
                  ))}
                </Select>

                {/* add data */}
                <div className="flex items-center">
                  <ModalAddUser />
                </div>
              </div>
              {/* content table */}
              <div className="">
                <ContentAccountManagement />
              </div>
            </div>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
}
