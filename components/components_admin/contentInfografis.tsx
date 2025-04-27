import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from "@heroui/react";
import ModalViewInfografis from "./modalReviewInfografis";
import ModalDelateInfografis from "./modalDelateInfografis";
import ModalEditInfografis from "./modalEditInfografis";

export default function ContentInfografis() {
  return (
    <div>
      <Table
        aria-label="Account Management Table"
        className="border-separate border-spacing-y-2"
      >
        <TableHeader>
          <TableColumn className="bg-white text-dark-red font-bold text-sm text-center rounded-tl-md rounded-bl-md">
            NO
          </TableColumn>
          <TableColumn className="bg-white text-dark-red font-bold text-sm text-center rounded-tl-md rounded-bl-md">
            TITLE
          </TableColumn>
          <TableColumn className="bg-white text-dark-red font-bold text-sm text-center">
            IMAGE
          </TableColumn>
          <TableColumn className="bg-white text-dark-red font-bold text-sm text-center rounded-tr-md rounded-br-md">
            ACTION
          </TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1" className="bg-[#F9F9F9] rounded-lg shadow-md mb-2">
            <TableCell className="text-default-700 text-center">1</TableCell>
            <TableCell className="text-default-700 ">Books Borrowing</TableCell>
            <TableCell className="text-default-700 text-center">
              <img
                src="/assets/image/perpus.png"
                alt="Room 1"
                className="w-[130px] rounded-md inline-block"
              />
            </TableCell>
            <TableCell className="flex gap-2 text-white text-center items-center justify-center mt-5">
              <ModalViewInfografis />
              <ModalEditInfografis />
              <ModalDelateInfografis />
            </TableCell>
          </TableRow>
          <TableRow key="2" className="bg-[#F9F9F9] rounded-lg shadow-md mb-2">
            <TableCell className="text-default-700 text-center">2</TableCell>
            <TableCell className="text-default-700 ">Book Returning</TableCell>
            <TableCell className="text-default-700 text-center">
              <img
                src="/assets/image/perpus.png"
                alt="Room 1"
                className="w-[130px] rounded-md inline-block"
              />
            </TableCell>
            <TableCell className="flex gap-2 text-white text-center items-center justify-center mt-5">
              <ModalViewInfografis />
              <ModalEditInfografis />
              <ModalDelateInfografis />
            </TableCell>
          </TableRow>
          <TableRow key="3" className="bg-[#F9F9F9] rounded-lg shadow-md mb-2">
            <TableCell className="text-default-700 text-center">3</TableCell>
            <TableCell className="text-default-700 ">
              Online Book Revewal
            </TableCell>
            <TableCell className="text-default-700 text-center">
              <img
                src="/assets/image/perpus.png"
                alt="Room 1"
                className="w-[130px] rounded-md inline-block"
              />
            </TableCell>
            <TableCell className="flex gap-2 text-white text-center items-center justify-center mt-5">
              <ModalViewInfografis />
              <ModalEditInfografis />
              <ModalDelateInfografis />
            </TableCell>
          </TableRow>
          <TableRow key="4" className="bg-[#F9F9F9] rounded-lg shadow-md mb-2">
            <TableCell className="text-default-700 text-center">4</TableCell>
            <TableCell className="text-default-700 ">
              Room Reservation
            </TableCell>
            <TableCell className="text-default-700 text-center">
              <img
                src="/assets/image/perpus.png"
                alt="Room 1"
                className="w-[130px] rounded-md inline-block"
              />
            </TableCell>
            <TableCell className="flex gap-2 text-white text-center items-center justify-center mt-5">
              <ModalViewInfografis />
              <ModalEditInfografis />
              <ModalDelateInfografis />
            </TableCell>
          </TableRow>
          <TableRow key="5" className="bg-[#F9F9F9] rounded-lg shadow-md mb-2">
            <TableCell className="text-default-700 text-center">5</TableCell>
            <TableCell className="text-default-700 ">
              Online Journal Access
            </TableCell>
            <TableCell className="text-default-700 text-center">
              <img
                src="/assets/image/perpus.png"
                alt="Room 1"
                className="w-[130px] rounded-md inline-block"
              />
            </TableCell>
            <TableCell className="flex gap-2 text-white text-center items-center justify-center mt-5">
              <ModalViewInfografis />
              <ModalEditInfografis />
              <ModalDelateInfografis />
            </TableCell>
          </TableRow>
          <TableRow key="6" className="bg-[#F9F9F9] rounded-lg shadow-md mb-2">
            <TableCell className="text-default-700 text-center">6</TableCell>
            <TableCell className="text-default-700 ">E-Book Access</TableCell>
            <TableCell className="text-default-700 text-center">
              <img
                src="/assets/image/perpus.png"
                alt="Room 1"
                className="w-[130px] rounded-md inline-block"
              />
            </TableCell>
            <TableCell className="flex gap-2 text-white text-center items-center justify-center mt-5">
              <ModalViewInfografis />
              <ModalEditInfografis />
              <ModalDelateInfografis />
            </TableCell>
          </TableRow>
          <TableRow key="7" className="bg-[#F9F9F9] rounded-lg shadow-md mb-2">
            <TableCell className="text-default-700 text-center">7</TableCell>
            <TableCell className="text-default-700 ">
              Library Clearance Certificate Procedure (SKBP)
            </TableCell>
            <TableCell className="text-default-700 text-center">
              <img
                src="/assets/image/perpus.png"
                alt="Room 1"
                className="w-[130px] rounded-md inline-block"
              />
            </TableCell>
            <TableCell className="flex gap-2 text-white text-center items-center justify-center mt-5">
              <ModalViewInfografis />
              <ModalEditInfografis />
              <ModalDelateInfografis />
            </TableCell>
          </TableRow>
          <TableRow key="8" className="bg-[#F9F9F9] rounded-lg shadow-md mb-2">
            <TableCell className="text-default-700 text-center">8</TableCell>
            <TableCell className="text-default-700 ">Upload Journal</TableCell>
            <TableCell className="text-default-700 text-center">
              <img
                src="/assets/image/perpus.png"
                alt="Room 1"
                className="w-[130px] rounded-md inline-block"
              />
            </TableCell>
            <TableCell className="flex gap-2 text-white text-center items-center justify-center mt-5">
              <ModalViewInfografis />
              <ModalEditInfografis />
              <ModalDelateInfografis />
            </TableCell>
          </TableRow>
          <TableRow key="9" className="bg-[#F9F9F9] rounded-lg shadow-md mb-2">
            <TableCell className="text-default-700 text-center">9</TableCell>
            <TableCell className="text-default-700 ">
              Upload Journal Requirement
            </TableCell>
            <TableCell className="text-default-700 text-center">
              <img
                src="/assets/image/perpus.png"
                alt="Room 1"
                className="w-[130px] rounded-md inline-block"
              />
            </TableCell>
            <TableCell className="flex gap-2 text-white text-center items-center justify-center mt-5">
              <ModalViewInfografis />
              <ModalEditInfografis />
              <ModalDelateInfografis />
            </TableCell>
          </TableRow>
          <TableRow key="10" className="bg-[#F9F9F9] rounded-lg shadow-md mb-2">
            <TableCell className="text-default-700 text-center">10</TableCell>
            <TableCell className="text-default-700 ">
              Upload Lecture&apos;s Book
            </TableCell>
            <TableCell className="text-default-700 text-center">
              <img
                src="/assets/image/perpus.png"
                alt="Room 1"
                className="w-[130px] rounded-md inline-block"
              />
            </TableCell>
            <TableCell className="flex gap-2 text-white text-center items-center justify-center mt-5">
              <ModalViewInfografis />
              <ModalEditInfografis />
              <ModalDelateInfografis />
            </TableCell>
          </TableRow>
          <TableRow key="11" className="bg-[#F9F9F9] rounded-lg shadow-md mb-2">
            <TableCell className="text-default-700 text-center">11</TableCell>
            <TableCell className="text-default-700 ">
              Assistive Technology Service
            </TableCell>
            <TableCell className="text-default-700 text-center">
              <img
                src="/assets/image/perpus.png"
                alt="Room 1"
                className="w-[130px] rounded-md inline-block"
              />
            </TableCell>
            <TableCell className="flex gap-2 text-white text-center items-center justify-center mt-5">
              <ModalViewInfografis />
              <ModalEditInfografis />
              <ModalDelateInfografis />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <div className="w-full flex justify-center py-3 mt-5">
        <Pagination
          total={7}
          classNames={{
            wrapper:
              "gap-0 overflow-visible h-8 rounded-md border border-divider",
            item: "w-8 h-8 text-small rounded-none bg-white",
            cursor:
              "bg-gradient-to-b shadow-lg from-red-700 to-dark-red dark:from-defaefault-100 text-white font-bold",
          }}
        />
      </div>
    </div>
  );
}
