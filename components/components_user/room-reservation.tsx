"use client";
import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClockRotateLeft,
  faPeopleRoof,
} from "@fortawesome/free-solid-svg-icons";
import { faCalendarPlus } from "@fortawesome/free-regular-svg-icons";
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
  ScrollShadow,
  Divider,
  DatePicker,
} from "@heroui/react";
import ModalExtend from "./modalExtend";
import ModalBooking from "./modalBooking";
import { useState, useEffect } from "react";

const rooms = [
  {
    id: "1",
    name: "Ruang Diskusi 1",
    capacity: "5-6",
    price: "10000/h",
  },
  {
    id: "2",
    name: "Ruang Diskusi 2",
    capacity: "5-6",
    price: "10000/h",
  },
  {
    id: "3",
    name: "Ruang Diskusi 3",
    capacity: "5-6",
    price: "10000/h",
  },
  {
    id: "4",
    name: "Ruang Diskusi 4",
    capacity: "5-6",
    price: "10000/h",
  },
  {
    id: "5",
    name: "Ruang Diskusi 4",
    capacity: "5-6",
    price: "10000/h",
  },
  {
    id: "6",
    name: "Ruang Diskusi 4",
    capacity: "5-6",
    price: "10000/h",
  },
  {
    id: "7",
    name: "Ruang Diskusi 4",
    capacity: "5-6",
    price: "10000/h",
  },
  {
    id: "8",
    name: "Ruang Diskusi 4",
    capacity: "5-6",
    price: "10000/h",
  },
  {
    id: "9",
    name: "Ruang Diskusi 4",
    capacity: "5-6",
    price: "10000/h",
  },
];
const times = [
  {
    key: "0",
    label: "Ruangan",
  },
  {
    key: "1",
    label: "8.00",
  },
  {
    key: "2",
    label: "9.00",
  },
  {
    key: "3",
    label: "10.00",
  },
  {
    key: "4",
    label: "11.00",
  },
  {
    key: "5",
    label: "12.00",
  },
  {
    key: "6",
    label: "13.00",
  },
  {
    key: "7",
    label: "14.00",
  },
  {
    key: "8",
    label: "15.00",
  },
  {
    key: "9",
    label: "20.00",
  },
  {
    key: "10",
    label: "17.00",
  },
  {
    key: "11",
    label: "18.00",
  },
];

export default function ReservationPage(props: any) {
  return (
    <section className="bg-white shadow-md shadow-gray-600 rounded-lg p-5">
      <div>
        <div className="flex justify-between flex-col md:flex-row space-y-3">
          <h4 className="flex gap-2 text-dark-red text-xl font-bold items-center underline">
            <FontAwesomeIcon icon={faPeopleRoof} className="w-[17px]" />
            Room Reservation
          </h4>
          <div className="flex space-x-5 flex-col space-y-3 md:flex-row">
            <DatePicker
              label={<p className="font-semibold">Select Date:</p>}
              className="max-w-[284px]"
              labelPlacement="outside-left"
            />
            <ModalBooking rooms={rooms} />
          </div>
        </div>

        <div className="flex w-full flex-col mt-5">
          <ScrollShadow orientation="horizontal" size={0} className="">
            <Table
              removeWrapper
              aria-label="Example static collection table"
              className=""
            >
              <TableHeader columns={times}>
                {(column) => (
                  <TableColumn
                    className="text-center text-white bg-dark-red border-white border-spacing-1 border"
                    key={column.key}
                  >
                    {column.label}
                  </TableColumn>
                )}
              </TableHeader>
              <TableBody items={rooms} className="">
                {(item) => (
                  <TableRow key={item.id} className="px-0 py-0">
                    <TableCell className="px-0 py-0">
                      <div className="bg-dark-red text-white p-3 min-w-40">
                        <p className="font-semibold">{item.name}</p>
                        <p className="">{`(Max ${item.capacity} People)`}</p>
                        <p className="">{`(Rp. ${item.price})`}</p>
                      </div>
                    </TableCell>
                    <TableCell className="px-0 py-0">
                      <div className="flex">
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                      </div>
                    </TableCell>
                    <TableCell className="px-0 py-0">
                      <div className="flex">
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                      </div>
                    </TableCell>
                    <TableCell className="px-0 py-0">
                      <div className="flex">
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                      </div>
                    </TableCell>
                    <TableCell className="px-0 py-0">
                      <div className="flex">
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                      </div>
                    </TableCell>
                    <TableCell className="px-0 py-0">
                      <div className="flex">
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                      </div>
                    </TableCell>
                    <TableCell className="px-0 py-0">
                      <div className="flex">
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                      </div>
                    </TableCell>
                    <TableCell className="px-0 py-0">
                      <div className="flex">
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                      </div>
                    </TableCell>
                    <TableCell className="px-0 py-0">
                      <div className="flex">
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                      </div>
                    </TableCell>
                    <TableCell className="px-0 py-0">
                      <div className="flex">
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                      </div>
                    </TableCell>
                    <TableCell className="px-0 py-0">
                      <div className="flex">
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                      </div>
                    </TableCell>
                    <TableCell className="px-0 py-0">
                      <div className="flex">
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                        <div className="h-20 w-6 border hover:bg-slate-100"></div>
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </ScrollShadow>
        </div>
      </div>
    </section>
  );
}
