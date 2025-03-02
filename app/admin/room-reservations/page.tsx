"use client";
import React from "react";
import AdminLayout from "./layout";
import { Sidebar } from "@/components/components_admin/sidebar";
import HeaderAdmin from "@/components/components_admin/headerAdmin";
import ModalAddRoom from "@/components/components_admin/modalAddRoom";
import ContentRoomRecervations from "@/components/components_admin/contentRoomRecervation";
import { Select, SelectItem } from "@heroui/react"; // Pastikan Input diimpor

export default function HomeAdmin() {
  const library = [
    { key: "bdg", label: "Open Library TelU - Bandung" },
    { key: "jktA", label: "Open Library TelU - Jakarta A" },
    { key: "jktB", label: "Open Library TelU - Jakarta B" },
    { key: "srby", label: "Open Library TelU - Surabaya" },
  ];

  return (
    <AdminLayout>
      <section>
        {/* content header */}
        <div className="bg-[url('/assets/image/kampus-surabaya.png')] bg-cover bg-center bg-no-repeat w-full h-[32vh] text-white pb-2 pt-2 shadow-md">
          <div className="flex h-screen pb-14">
            {/* Sidebar */}
            <div className="fixed h-full bottom-7 p-4">
              <div className="w-12 h-full z-20">
                <Sidebar />
              </div>
            </div>

            <div className="mt-8 grow space-y-5 pl-20 md:pl-28 pr-5 pb-5">
              {/* Header dengan kalimat Good Morning */}
              <HeaderAdmin />

              <div className="flex flex-col md:flex-row mt-6 justify-between bg-white p-3 rounded-lg shadow-md w-full gap-2 relative z-10">
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

                {/* add data */}
                <div className="flex items-center">
                  <ModalAddRoom />
                </div>
              </div>
              {/* content table */}
              <div className="mt-10 max-w-[960px] mx-auto">
                <ContentRoomRecervations />
              </div>
            </div>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
}
