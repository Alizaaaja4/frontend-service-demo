"use client";
import React from "react";
import AdminLayout from "./layout";
import { Sidebar } from "@/components/components_admin/sidebar";
import HeaderAdmin from "@/components/components_admin/headerAdmin";
import ModalAddNews from "@/components/components_admin/modalAddNews";
import ContentNewsAdmin from "@/components/components_admin/contentNewsAdmin";
import ContentNewsPublish from "@/components/components_admin/contentNewsPublish";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Input } from "@heroui/react"; // Pastikan Input diimport

export default function HomeAdmin() {
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
      placeholder="Search Daily Reports"
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
              <div className="w-12 h-full z-20">
                <Sidebar />
              </div>
            </div>

            <div className="mt-8 grow space-y-5 pl-20 md:pl-28 pr-5 pb-5">
              {/* Header dengan kalimat Good Morning */}
              <HeaderAdmin />

              <div className="flex mt-6 justify-start bg-white p-3 rounded-lg shadow-md w-full gap-2 relative">
                {/* title */}
                <h3 className="flex text-dark-red text-2xl font-bold gap-2 items-center pl-3">
                  <FontAwesomeIcon icon={faNewspaper} />
                  News & Updates
                </h3>

                <div className="flex pr-3">
                  {/* add data */}
                  <div className="flex items-center">
                    <ModalAddNews />
                  </div>

                  {/* search data */}
                  <div className="flex items-center">{searchInput}</div>
                </div>
              </div>
              {/* content news */}
              <div className="flex flex-col md:flex-row mt-9 max-w-[960px] mx-auto gap-4">
                <ContentNewsAdmin />
                <ContentNewsPublish />
              </div>
            </div>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
}
