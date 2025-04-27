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
import ModalViewRoom from "./modalReviewRoom";
import ModalDelateData from "./modalDelateUser";
import ModalEditRoom from "./modalEditRoom";

export default function ContentRoomRecervations() {
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
          <TableColumn className="bg-white text-dark-red font-bold text-sm text-center">
            IMAGE
          </TableColumn>
          <TableColumn className="bg-white text-dark-red font-bold text-sm text-center">
            ROOM NAME
          </TableColumn>
          <TableColumn className="bg-white text-dark-red font-bold text-sm text-center">
            CAPACITY
          </TableColumn>
          <TableColumn className="bg-white text-dark-red font-bold text-sm text-center">
            STATUS
          </TableColumn>
          <TableColumn className="bg-white text-dark-red font-bold text-sm text-center rounded-tr-md rounded-br-md">
            ACTION
          </TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1" className="bg-[#F9F9F9] rounded-lg shadow-md mb-2">
            <TableCell className="text-default-700 text-center">1</TableCell>
            <TableCell className="text-default-700 text-center">
              <img
                src="/assets/image/perpus.png"
                alt="Room 1"
                className="w-[130px] rounded-md inline-block"
              />
            </TableCell>
            <TableCell className="text-default-700 text-center">
              Room 1
            </TableCell>
            <TableCell className="text-default-700 text-center">4</TableCell>
            <TableCell className="text-default-700 text-center">Free</TableCell>
            <TableCell className="text-default-700 flex gap-2 text-center items-center justify-center mt-5">
              <ModalViewRoom />
              <ModalEditRoom />
              <ModalDelateData />
            </TableCell>
          </TableRow>
          <TableRow key="2" className="bg-[#F9F9F9] rounded-lg shadow-md mb-2">
            <TableCell className="text-default-700 text-center">2</TableCell>
            <TableCell className="text-default-700 text-center">
              <img
                src="/assets/image/perpus.png"
                alt="Room 1"
                className="w-[130px] rounded-md inline-block"
              />
            </TableCell>
            <TableCell className="text-default-700 text-center">
              Room 2
            </TableCell>
            <TableCell className="text-default-700 text-center">8</TableCell>
            <TableCell className="text-default-700 text-center">Free</TableCell>
            <TableCell className="text-default-700 flex gap-2 text-center items-center justify-center mt-5">
              <ModalViewRoom />
              <ModalEditRoom />
              <ModalDelateData />
            </TableCell>
          </TableRow>
          <TableRow key="3" className="bg-[#F9F9F9] rounded-lg shadow-md mb-2">
            <TableCell className="text-default-700 text-center">3</TableCell>
            <TableCell className="text-default-700 text-center">
              <img
                src="/assets/image/perpus.png"
                alt="Room 1"
                className="w-[130px] rounded-md inline-block"
              />
            </TableCell>
            <TableCell className="text-default-700 text-center">
              Room 3
            </TableCell>
            <TableCell className="text-default-700 text-center">12</TableCell>
            <TableCell className="text-default-700 text-center">Paid</TableCell>
            <TableCell className="text-default-700 flex gap-2 text-center items-center justify-center mt-5">
              <ModalViewRoom />
              <ModalEditRoom />
              <ModalDelateData />
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
              "bg-gradient-to-b shadow-lg from-red-700 to-dark-red dark:from-default-300 dark:to-default-100 text-white font-bold",
          }}
        />
      </div>
    </div>
  );
}
