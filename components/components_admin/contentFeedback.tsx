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
import ModalFeedback from "./modalFeedback";

export default function ContentFeedback() {
  return (
    <div>
      <Table
        aria-label="Account Management Table"
        className="border-separate border-spacing-y-2"
      >
        <TableHeader>
          <TableColumn className="bg-white text-dark-red font-bold text-md text-center rounded-tl-md rounded-bl-md">
            Date
          </TableColumn>
          <TableColumn className="bg-white text-dark-red font-bold text-md text-center">
            Report Author
          </TableColumn>
          <TableColumn className="bg-white text-dark-red font-bold text-md text-center">
            Feedback Types
          </TableColumn>
          <TableColumn className="bg-white text-dark-red font-bold text-md text-center">
            Description
          </TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key="1" className="bg-[#F9F9F9] rounded-lg shadow-md mb-2">
            <TableCell className="text-center">23/03/2024</TableCell>
            <TableCell className="text-center">
              Aliza Nurfitrian Meizahra
            </TableCell>
            <TableCell className="text-center ">
              {" "}
              <span className="bg-orange-red text-white rounded-md p-1 pr-6 pl-6 text-xs font-semibold">
                Suggestions
              </span>
            </TableCell>
            <TableCell className="flex gap-2 text-white text-center items-center justify-center">
              <ModalFeedback />
            </TableCell>
          </TableRow>
          <TableRow key="2" className="bg-[#F9F9F9] rounded-lg shadow-md mb-2">
            <TableCell className="text-center">23/03/2024</TableCell>
            <TableCell className="text-center">
              Aliza Nurfitrian Meizahra
            </TableCell>
            <TableCell className="text-center">
              <span className="bg-medium-violet text-white rounded-md p-1 pr-6 pl-6 text-xs font-semibold">
                Appreciation{" "}
              </span>
            </TableCell>
            <TableCell className="flex gap-2 text-white text-center items-center justify-center">
              <ModalFeedback />
            </TableCell>
          </TableRow>
          <TableRow key="3" className="bg-[#F9F9F9] rounded-lg shadow-md mb-2">
            <TableCell className="text-center">23/03/2024</TableCell>
            <TableCell className="text-center">
              Aliza Nurfitrian Meizahra
            </TableCell>
            <TableCell className="text-center">
              <span className="bg-fire-brick text-white rounded-md p-1 pr-7 pl-7 text-xs font-semibold">
                Complaints
              </span>
            </TableCell>
            <TableCell className="flex gap-2 text-white text-center items-center justify-center">
              <ModalFeedback />
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
