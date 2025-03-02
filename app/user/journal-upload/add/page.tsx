"use client";
import React from "react";
import LectureLayout from "./layout";
import Sidebar from "@/components/components_user/sidebar";
import LectureHeader from "@/components/components_user/header";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UploadJournal from "@/components/components_user/uploadJournal";

export default function HomeLecture() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <LectureLayout>
      <section className="flex flex-row">
        <div className="grow max-w-min">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        </div>
        <div
          className={`mt-8 grow space-y-5 ${sidebarOpen ? "pl-96" : "pl-20 md:pl-28"} pr-5 pb-5 duration-200 max-w-full`}
          onClick={() => setSidebarOpen(false)}
        >
          <LectureHeader />
          <UploadJournal/>
        </div>
      </section>
    </LectureLayout>
  );
}
