"use client";
import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import {
  Pagination,
  Tabs,
  Tab,
  Card,
  CardBody,
  CardFooter,
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
  Button,
  Chip,
} from "@heroui/react";
import ModalExtend from "./modalExtend";
const bookRows = [
  {
    id: "1",
    date: "20/12/41",
    title: "Belajar Pemograman Web untuk Pemula",
    returnDate: "20/12/41",
    status: "Not Returned",
  },
  {
    id: "2",
    date: "20/12/43",
    title: "Belajar Pemograman Web untuk Pemula",
    returnDate: "20/12/41",
    status: "Returned",
  },
  {
    id: "3",
    date: "20/12/41",
    title: "Belajar Pemograman Web untuk Pemula",
    returnDate: "20/12/41",
    status: "Overdue",
  },
  {
    id: "4",
    date: "20/12/41",
    title: "Belajar Pemograman Web untuk Pemula",
    returnDate: "20/12/41",
    status: "Returned",
  },
];
const bookColumns = [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "date",
    label: "Date",
  },
  {
    key: "title",
    label: "Book Title",
  },
  {
    key: "returnDate",
    label: "Return Date",
  },
  {
    key: "status",
    label: "Status",
  },
  {
    key: "action",
    label: "Action",
  },
];
const roomRows = [
  {
    id: "1",
    date: "20/12/41",
    name: "Room-1 JKT A",
    start: "11.00",
    end: "12.00",
    status: "Attended",
  },
  {
    id: "2",
    date: "20/12/43",
    name: "Room-1 JKT A",
    start: "11.00",
    end: "12.00",
    status: "Approved",
  },
  {
    id: "3",
    date: "20/12/41",
    name: "Room-1 JKT A",
    start: "11.00",
    end: "12.00",
    status: "Rejected",
  },
  {
    id: "4",
    date: "20/12/41",
    name: "Room-1 JKT A",
    start: "11.00",
    end: "12.00",
    status: "Requested",
  },
];
const roomColumns = [
  {
    key: "id",
    label: "ID",
  },
  {
    key: "date",
    label: "Date",
  },
  {
    key: "name",
    label: "Room Name",
  },
  {
    key: "start",
    label: "Start Time",
  },
  {
    key: "end",
    label: "End Time",
  },
  {
    key: "status",
    label: "Status",
  },
];

export default function HistoryPage(props: any) {
  return (
    <section className="bg-white shadow-md shadow-gray-600 rounded-lg p-5">
      {/* Book Section */}
      <div>
        <h4 className="flex gap-2 text-dark-red text-xl font-bold items-center underline">
          <FontAwesomeIcon icon={faClockRotateLeft} className="w-[17px]" />
          Activities History
        </h4>

        {/* Collection of Popular Books */}
        <div className="flex w-full flex-col mt-5">
          <Tabs aria-label="Options">
            <Tab key="books" title="Books">
              <Card>
                <CardBody>
                  <Table
                    aria-label="Example table with dynamic content"
                    removeWrapper
                  >
                    <TableHeader columns={bookColumns}>
                      {(column) => (
                        <TableColumn key={column.key}>
                          {column.label}
                        </TableColumn>
                      )}
                    </TableHeader>
                    <TableBody
                      items={bookRows}
                      emptyContent={"No data to display."}
                    >
                      {(item) => (
                        <TableRow key={item.id}>
                          <TableCell>{item.id}</TableCell>
                          <TableCell>{item.date}</TableCell>
                          <TableCell>{item.title}</TableCell>
                          <TableCell>{item.returnDate}</TableCell>
                          <TableCell
                            className={`${item.status == "Returned" ? "text-forest-green" : item.status == "Overdue" ? "text-red-600" : "text-black"}`}
                          >
                            {item.status}
                          </TableCell>
                          <TableCell>
                            {item.status == "Returned" ? (
                              <Button
                                className="bg-forest-green text-white"
                                isDisabled
                              >
                                Not Available
                              </Button>
                            ) : item.status == "Overdue" ? (
                              <Button
                                className="bg-red-600 text-white"
                                isDisabled
                              >
                                Rp.1500/Day
                              </Button>
                            ) : (
                              <ModalExtend />
                            )}
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </CardBody>
                <CardFooter>
                  <div className="w-full flex justify-center py-3 mt-5">
                    <Pagination
                      total={10}
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
            </Tab>
            <Tab key="rooms" title="Rooms">
              <Card>
                <CardBody>
                  <Table
                    aria-label="Example table with dynamic content"
                    removeWrapper
                  >
                    <TableHeader columns={roomColumns}>
                      {(column) => (
                        <TableColumn key={column.key}>
                          {column.label}
                        </TableColumn>
                      )}
                    </TableHeader>
                    <TableBody
                      items={roomRows}
                      emptyContent={"No data to display."}
                    >
                      {(item) => (
                        <TableRow key={item.id}>
                          <TableCell>{item.id}</TableCell>
                          <TableCell>{item.date}</TableCell>
                          <TableCell>{item.name}</TableCell>
                          <TableCell>{item.start}</TableCell>
                          <TableCell>{item.end}</TableCell>
                          <TableCell>
                            {item.status == "Rejected" ? (
                              <Chip
                                variant="shadow"
                                className="text-white bg-red-600 font-semibold"
                              >
                                {item.status}
                              </Chip>
                            ) : item.status == "Approved" ? (
                              <Chip
                                variant="shadow"
                                className="text-white bg-blue-600 font-semibold"
                              >
                                {item.status}
                              </Chip>
                            ) : item.status == "Attended" ? (
                              <Chip
                                variant="shadow"
                                className="text-white bg-green-600 font-semibold"
                              >
                                {item.status}
                              </Chip>
                            ) : (
                              <Chip
                                variant="shadow"
                                className="text-white bg-orange-600 font-semibold"
                              >
                                {item.status}
                              </Chip>
                            )}
                          </TableCell>
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
            </Tab>
          </Tabs>
        </div>
      </div>
    </section>
  );
}
