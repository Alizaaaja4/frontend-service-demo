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
import ModalReviewUserA from "./modalReviewUserA";
import ModalDelateData from "./modalDelateUser";
import ModalEditUser from "./modalEditUser";

export default function ContentAccountManagement() {
  return (
    <div className="">
      <Table aria-label="Account Management Table" className="">
        <TableHeader>
          <TableColumn className="bg-white text-dark-red font-bold text-sm text-center rounded-tl-md rounded-bl-md">
            NO
          </TableColumn>
          <TableColumn className="bg-white text-dark-red font-bold text-sm text-center">
            NAME
          </TableColumn>
          <TableColumn className="bg-white text-dark-red font-bold text-sm text-center">
            ID NUMBER
          </TableColumn>
          <TableColumn className="bg-white text-dark-red font-bold text-sm text-center">
            USERNAME
          </TableColumn>
          <TableColumn className="bg-white text-dark-red font-bold text-sm text-center">
            PASSWORD
          </TableColumn>
          <TableColumn className="bg-white text-dark-red font-bold text-sm text-center">
            EMAIL
          </TableColumn>
          <TableColumn className="bg-white text-dark-red font-bold text-sm text-center rounded-tr-md rounded-br-md">
            ACTION
          </TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow
            key="1"
            className="bg-[#F9F9F9] text-default-700 rounded-lg shadow-md mb-2"
          >
            <TableCell className="text-center">1</TableCell>
            <TableCell className="text-center">Tony Reichert</TableCell>
            <TableCell className="text-center">1101223089</TableCell>
            <TableCell className="text-center">ndn-rg</TableCell>
            <TableCell className="text-center">app&paltform</TableCell>
            <TableCell className="text-center">
              username@telkomuniversity.ac.id
            </TableCell>
            <TableCell className="flex gap-2 text-white text-center items-center justify-center">
              <ModalReviewUserA />
              <ModalEditUser />
              <ModalDelateData />
            </TableCell>
          </TableRow>
          <TableRow
            key="2"
            className="bg-[#F9F9F9] text-default-700 rounded-lg shadow-md mb-2"
          >
            <TableCell className="text-center">2</TableCell>
            <TableCell className="text-center">Zoey Lang</TableCell>
            <TableCell className="text-center">1101229067</TableCell>
            <TableCell className="text-center">ndn-rg</TableCell>
            <TableCell className="text-center">app&paltform</TableCell>
            <TableCell className="text-center">
              username@telkomuniversity.ac.id
            </TableCell>
            <TableCell className="flex gap-2 text-white text-center items-center justify-center">
              <ModalReviewUserA />
              <ModalEditUser />
              <ModalDelateData />
            </TableCell>
          </TableRow>
          <TableRow
            key="3"
            className="bg-[#F9F9F9] text-default-700 rounded-lg shadow-md mb-2"
          >
            <TableCell className="text-center">3</TableCell>
            <TableCell className="text-center">Jane Fisher</TableCell>
            <TableCell className="text-center">1101229053</TableCell>
            <TableCell className="text-center">ndn-rg</TableCell>
            <TableCell className="text-center">app&paltform</TableCell>
            <TableCell className="text-center">
              username@telkomuniversity.ac.id
            </TableCell>
            <TableCell className="flex gap-2 text-white text-center items-center justify-center">
              <ModalReviewUserA />
              <ModalEditUser />
              <ModalDelateData />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
      {/* Move Pagination outside of Table */}
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
