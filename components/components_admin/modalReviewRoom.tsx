"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  useDisclosure,
  Select,
  SelectItem,
  Button,
  Textarea,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCamera } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

export default function ModalViewRoom() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedImage] = useState("/assets/image/perpus.png"); // Contoh gambar yang telah dipilih
  const [status] = useState("paid"); // Status yang telah ditentukan
  const [price] = useState("50000"); // Harga yang telah ditentukan

  const libraries = [
    { key: "bdg", label: "Open Library TelU - Bandung" },
    { key: "jktA", label: "Open Library TelU - Jakarta A" },
    { key: "jktB", label: "Open Library TelU - Jakarta B" },
    { key: "srby", label: "Open Library TelU - Surabaya" },
  ];

  const statuses = [
    { key: "paid", label: "Paid" },
    { key: "free", label: "Free" },
  ];

  return (
    <>
      <div
        role="button"
        className="flex bg-forest-green text-white  rounded-md p-1 text-xs cursor-pointer"
        onClick={onOpen}
      >
        <FontAwesomeIcon icon={faEye} className="w-[13px]" />
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        size="4xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex text-dark-red font-bold text-xl gap-2 items-center">
                <FontAwesomeIcon
                  icon={faEye}
                  style={{ width: "25px", height: "25px" }}
                />
                View Room Reservation
              </ModalHeader>
              <ModalBody>
                <div className="grid grid-cols-3 gap-4">
                  {/* Image Display Section */}
                  <div className="flex flex-col items-center text-center">
                    {selectedImage ? (
                      <img
                        src={selectedImage}
                        alt="Selected"
                        className="mt-4 rounded-md h-32 w-52 object-cover"
                      />
                    ) : (
                      <div className="mt-4 rounded-md h-32 w-52 bg-gray-200 flex items-center justify-center border-2 border-dark-red">
                        <FontAwesomeIcon icon={faCamera} size="2x" />
                      </div>
                    )}
                  </div>

                  {/* Room Name & Capacity */}
                  <div className="col-span-2 grid grid-cols-2 gap-4">
                    <Input
                      type="text"
                      variant="flat"
                      label="Room Name"
                      placeholder="Enter room name.."
                      className="mb-2"
                      isReadOnly
                      value="Meeting Room 1"
                    />
                    <Select
                      label="Library"
                      placeholder="Select a library"
                      className="flex-grow max-w-[290px]"
                      isDisabled
                      value="bdg"
                    >
                      {libraries.map((library) => (
                        <SelectItem key={library.key} value={library.key}>
                          {library.label}
                        </SelectItem>
                      ))}
                    </Select>

                    <Input
                      type="number"
                      variant="flat"
                      label="Capacity"
                      placeholder="Enter capacity room..."
                      className="mb-2"
                      isReadOnly
                      value="50"
                    />
                    <Select
                      label="Status"
                      placeholder="Select a status"
                      className="flex-grow max-w-[290px]"
                      isDisabled
                      value={status}
                    >
                      {statuses.map((statusItem) => (
                        <SelectItem key={statusItem.key} value={statusItem.key}>
                          {statusItem.label}
                        </SelectItem>
                      ))}
                    </Select>

                    {/* Conditionally Render Price Display */}
                    {status === "paid" && (
                      <Input
                        type="number"
                        variant="flat"
                        label="Price"
                        placeholder="Rp.xx.xxx."
                        className="col-span-2"
                        isReadOnly
                        value={price}
                      />
                    )}
                  </div>
                </div>

                {/* Description */}
                <div className="mt-3">
                  <Textarea
                    isDisabled
                    label="Description"
                    labelPlacement="outside"
                    placeholder="Enter your description"
                    defaultValue="NextUI is a React UI library that provides a set of accessible, reusable, and beautiful components."
                    className="mb-2"
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  onPress={onClose}
                  className="bg-dark-red text-white font-bold"
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
