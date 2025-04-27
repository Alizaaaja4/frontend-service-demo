"use client ";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Textarea,
  Select,
  SelectItem,
  Input,
  Link,
  DatePicker,
  TimeInput,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faCalendarPlus,
  faBellConcierge,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { Time } from "@internationalized/date";

export default function ModalBooking(props: any) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const times = [
    {
      key: "1",
      label: "8.00",
    },
    {
      key: "2",
      label: "8.30",
    },
    {
      key: "3",
      label: "9.00",
    },
    {
      key: "4",
      label: "9.30",
    },
    {
      key: "5",
      label: "10.00",
    },
    {
      key: "6",
      label: "10.30",
    },
    {
      key: "7",
      label: "11.00",
    },
    {
      key: "8",
      label: "11.30",
    },
    {
      key: "9",
      label: "12.00",
    },
    {
      key: "10",
      label: "12.30",
    },
    {
      key: "11",
      label: "13.00",
    },
    {
      key: "11",
      label: "13.30",
    },
    {
      key: "12",
      label: "14.00",
    },
    {
      key: "12",
      label: "14.30",
    },
    {
      key: "13",
      label: "15.00",
    },
    {
      key: "14",
      label: "15.30",
    },
    {
      key: "15",
      label: "20.00",
    },
    {
      key: "16",
      label: "20.30",
    },
    {
      key: "17",
      label: "17.00",
    },
    {
      key: "18",
      label: "17.30",
    },
    {
      key: "19",
      label: "18.00",
    },
    {
      key: "20",
      label: "18.30",
    },
  ];
  const durationList = [
    {
      key: "1",
      label: 30,
    },
    {
      key: "2",
      label: 60,
    },
    {
      key: "3",
      label: 90,
    },
    {
      key: "4",
      label: 120,
    },
  ];

  return (
    <>
      <Button
        isExternal
        as={Link}
        onPress={onOpen}
        className="bg-dark-red text-white"
        startContent={<FontAwesomeIcon icon={faBellConcierge} />}
      >
        Order
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        backdrop="blur"
        size="4xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-dark-red font-bold text-xl">
                Order Your Room
              </ModalHeader>
              <ModalBody>
                <Select
                  label="Room"
                  placeholder="Select your room.."
                  className="flex-grow text-dark-red font-bold"
                >
                  {props.rooms.map((room: any) => (
                    <SelectItem
                      key={room.id}
                    >{`${room.name} (${room.price}) (${room.capacity} people)`}</SelectItem>
                  ))}
                </Select>
                <Input
                  isReadOnly
                  label="Phone Number"
                  defaultValue="082172819274"
                  className=""
                />
                <DatePicker label="Date" />
                <Select
                  label="Start Time"
                  placeholder="Select start time to use the room.."
                  className="flex-grow text-dark-red font-bold"
                >
                  {times.map((time) => (
                    <SelectItem key={time.key}>{time.label}</SelectItem>
                  ))}
                </Select>
                <Select
                  label="Duration"
                  placeholder="Select time duration.."
                  className="flex-grow text-dark-red font-bold"
                >
                  {durationList.map((duration) => (
                    <SelectItem
                      key={duration.key}
                    >{`${duration.label} Minutes`}</SelectItem>
                  ))}
                </Select>
              </ModalBody>
              <ModalFooter>
                <div className="flex justify-center w-full">
                  <Button
                    className="bg-dark-red text-white"
                    variant="flat"
                    onPress={onClose}
                  >
                    Make Reservation
                  </Button>
                </div>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
