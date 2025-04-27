"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Link,
  Checkbox,
  TimeInput,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faClock } from "@fortawesome/free-solid-svg-icons";
import { Time } from "@internationalized/date";
import React from "react";

export default function ModalAddHours() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  // Define days of the week
  const days = [
    { label: "Monday", value: "monday" },
    { label: "Tuesday", value: "tuesday" },
    { label: "Wednesday", value: "wednesday" },
    { label: "Thursday", value: "thursday" },
    { label: "Friday", value: "friday" },
    { label: "Saturday", value: "saturday" },
  ];

  return (
    <>
      <Button
        isExternal
        as={Link}
        className="text-dark-red bg-white border-none shadow-none hover:bg-white"
        onPress={onOpen}
      >
        <FontAwesomeIcon
          icon={faPenToSquare}
          style={{ width: "27px", height: "27px" }}
        />
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        size="5xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex text-dark-red font-bold text-xl gap-2 items-center">
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  style={{ width: "25px", height: "25px" }}
                />
                Operating Hours Timing
              </ModalHeader>
              <ModalBody className="">
                <div className="grid grid-cols-2 gap-4 mt-4">
                  {days.map((day) => (
                    <div
                      key={day.value}
                      className="grid grid-cols-3 items-center gap-3"
                    >
                      {/* Checkbox for the day */}
                      <Checkbox value={day.value}>{day.label} </Checkbox>

                      {/* Start Time Input */}
                      <TimeInput
                        label="Start Time"
                        labelPlacement="outside"
                        defaultValue={new Time(8, 0)} // Set to a common start time like 8:00 AM
                        startContent={
                          <FontAwesomeIcon
                            icon={faClock}
                            className="text-md text-default-400 pointer-events-none flex-shrink-0"
                          />
                        }
                      />

                      {/* End Time Input */}
                      <TimeInput
                        label="End Time"
                        labelPlacement="outside"
                        defaultValue={new Time(17, 0)} // Set to a common end time like 5:00 PM
                        startContent={
                          <FontAwesomeIcon
                            icon={faClock}
                            className="text-md text-default-400 pointer-events-none flex-shrink-0"
                          />
                        }
                      />
                    </div>
                  ))}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  onPress={onClose}
                  className="bg-dark-red text-white font-bold"
                >
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
