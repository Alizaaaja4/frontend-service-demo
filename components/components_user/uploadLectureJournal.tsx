"use client";
import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClockRotateLeft,
  faPeopleRoof,
  faFileArrowUp,
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
  Input,
  Select,
  SelectItem,
} from "@heroui/react";
import ModalBooking from "./modalBooking";
import QuillTextEditor from "../quillTextEditor";
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

export default function LectureUploadJournal(props: any) {
  return (
    <section className="bg-white shadow-md shadow-gray-600 rounded-lg p-5">
      <div className="space-y-5">
        <h4 className="flex gap-2 text-dark-red text-xl font-bold items-center underline">
          <FontAwesomeIcon icon={faFileArrowUp} className="w-[17px]" />
          Upload Lecture&apos;s Book
        </h4>
        <div className="bg-default-50 p-5 rounded-md">
          <h4 className="text-lg font-semibold text-default-700">Workflow</h4>
          <div className="flex w-full flex-col mt-5 space-y-5">
            <Input
              isReadOnly
              label="Author"
              defaultValue="jamal@oplib - jamaluddin albaghdadi"
            />
            <Select
              label="Workflow"
              placeholder="Select your workflow"
              className="flex-grow text-dark-red font-bold"
            >
              {rooms.map((subject) => (
                <SelectItem key={subject.id}>{subject.name}</SelectItem>
              ))}
            </Select>
            <Select
              label="Library Type"
              placeholder="Select your library type"
              className="flex-grow text-dark-red font-bold"
            >
              {rooms.map((subject) => (
                <SelectItem key={subject.id}>{subject.name}</SelectItem>
              ))}
            </Select>
          </div>
        </div>
        <div className="bg-default-50 p-5 rounded-md">
          <h4 className="text-lg font-semibold text-default-700">Document</h4>
          <div className="flex w-full flex-col mt-5 space-y-5">
            <Input label="Title" placeholder="Insert Your Book's Title" />
            <Select
              label="Subject"
              placeholder="Select your subject"
              className="flex-grow text-dark-red font-bold"
            >
              {rooms.map((subject) => (
                <SelectItem key={subject.id}>{subject.name}</SelectItem>
              ))}
            </Select>
            <QuillTextEditor />
            <Select
              label="Unit"
              placeholder="Select the unit"
              className="flex-grow text-dark-red font-bold z-0"
            >
              {rooms.map((subject) => (
                <SelectItem key={subject.id}>{subject.name}</SelectItem>
              ))}
            </Select>
            <Select
              label="Competence"
              placeholder="Select the competence"
              className="flex-grow text-dark-red font-bold z-0"
            >
              {rooms.map((subject) => (
                <SelectItem key={subject.id}>{subject.name}</SelectItem>
              ))}
            </Select>
          </div>
        </div>
      </div>
    </section>
  );
}
