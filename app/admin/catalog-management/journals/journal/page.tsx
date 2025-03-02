"use client";
import React from "react";
import AdminLayout from "./layout";
import HeaderAdmin from "@/components/components_admin/headerAdmin";
import ContentCatalogJournal from "@/components/components_admin/contentJournal";
import { Sidebar } from "@/components/components_admin/sidebar";

export default function HomeAdmin() {
  return (
    <AdminLayout>
      <section>
        <div className="bg-[url('/assets/image/kampus-surabaya.png')] bg-cover bg-center bg-no-repeat w-full h-[32vh] text-white pb-2 pt-2 shadow-md">
          <div className="flex  h-screen pb-14">
            {/* Sidebar */}
            <div className="fixed h-full bottom-7 p-4">
              <div className="w-12 h-full z-20">
                <Sidebar />
              </div>
            </div>

            <div className="mt-8 grow space-y-5 pl-20 md:pl-28 pr-5 pb-5">
              {/* Header dengan kalimat Good Morning */}
              <HeaderAdmin />
              {/* content table */}
              <div className="-mt-12 mb-9 mx-auto">
                <ContentCatalogJournal />
              </div>
            </div>
          </div>
        </div>
      </section>
    </AdminLayout>
  );
}
