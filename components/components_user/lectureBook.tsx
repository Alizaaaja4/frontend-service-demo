"use client";
import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFileArrowUp,
  faFileCirclePlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import {
  Pagination,
  Card,
  CardBody,
  CardFooter,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Button,
  CardHeader,
  Input,
} from "@heroui/react";

import ModalExtend from "./modalExtend";
const roomRows = [
  {
    id: "1",
    time: "20/12/41",
    nim: "1892010232",
    author: "Amba",
    workflow: "Materi Pembelajaran",
    title: "Perjalanan mencari kitab python",
  },
  {
    id: "2",
    time: "20/12/43",
    nim: "1892010232",
    author: "Jamal",
    workflow: "Materi Pembelajaran",
    title: "Perjalanan mencari kitab python",
  },
  {
    id: "3",
    time: "20/12/41",
    nim: "1892010232",
    author: "Faiz",
    workflow: "Materi Pembelajaran",
    title: "Perjalanan mencari kitab python",
  },
  {
    id: "4",
    time: "20/12/41",
    nim: "1892010232",
    author: "Rizki",
    workflow: "Materi Pembelajaran",
    title: "Perjalanan mencari kitab python",
  },
];
const roomColumns = [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "author",
    label: "Author",
  },
  {
    key: "workflow",
    label: "Workflow",
  },
  {
    key: "title",
    label: "Title",
  },
];

export default function LectureBook() {
  return (
    <section className="bg-white shadow-md shadow-gray-600 rounded-lg p-5">
      {/* Book Section */}
      <div>
        <h4 className="flex gap-2 text-dark-red text-xl font-bold items-center underline">
          <FontAwesomeIcon icon={faFileArrowUp} className="w-[17px]" />
          Lecture&apos;s Book
        </h4>

        <div className="flex justify-between">
          <div className="flex space-x-5"></div>
        </div>
        {/* Collection of Popular Books */}
        <div className="flex w-full flex-col mt-5">
          <Card>
            <CardHeader className="px-5 pt-5">
              <div className="flex justify-between w-full">
                <div>
                  <Input
                    label="Filter: "
                    labelPlacement="outside-left"
                    placeholder="Search.."
                    className="max-w-xs"
                    endContent={
                      <FontAwesomeIcon
                        icon={faSearch}
                        className="w-[17px] text-default"
                      />
                    }
                  />
                </div>
                <div>
                  <NextLink
                    href="/user/lecture-book-upload/add"
                    className="rounded-lg hover:bg-white pl-2 duration-200"
                  >
                    <Button
                      color="primary"
                      startContent={
                        <FontAwesomeIcon
                          icon={faFileCirclePlus}
                          className="w-[17px]"
                        />
                      }
                    >
                      Add Data
                    </Button>
                  </NextLink>
                </div>
              </div>
            </CardHeader>
            <CardBody>
              <Table isStriped aria-label="Example table with dynamic content">
                <TableHeader columns={roomColumns}>
                  {(column) => (
                    <TableColumn key={column.key}>{column.label}</TableColumn>
                  )}
                </TableHeader>
                <TableBody
                  items={roomRows}
                  emptyContent={"No data to display."}
                >
                  {(item) => (
                    <TableRow key={item.id}>
                      <TableCell>{item.id}</TableCell>
                      <TableCell>
                        <p className="font-semibold">{item.nim}</p>
                        <p>{item.author}</p>
                        <p>{item.time}</p>
                      </TableCell>
                      <TableCell>{item.workflow}</TableCell>
                      <TableCell>{item.title}</TableCell>
                    </TableRow>
                  )}
                </TableBody>
              </Table>
            </CardBody>
            <CardFooter>
              <div className="w-full flex justify-center py-3 mt-5">
                <Pagination
                  total={7}
                  classNames={{
                    wrapper:
                      "gap-0 overflow-visible h-8 rounded border border-divider",
                    item: "w-8 h-8 text-small rounded-none bg-transparent",
                    cursor:
                      "bg-gradient-to-b shadow-lg from-red-700 to-dark-red dark:from-default-300 dark:to-default-100 text-white font-bold",
                  }}
                />
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
}
