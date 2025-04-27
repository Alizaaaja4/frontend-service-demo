"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Input,
  useDisclosure,
  Button,
  Textarea,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCamera } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

export default function ModalViewDailyReports() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedImage] = useState("/assets/image/kampus-surabaya.png"); // Contoh gambar yang telah dipilih

  return (
    <>
      <div
        role="button"
        className="flex items-center bg-forest-green text-white rounded-md p-1 pr-3 pl-3 text-xs cursor-pointer gap-2"
        onClick={onOpen}
      >
        View Report
        <FontAwesomeIcon
          icon={faEye}
          className="w-[13px] h-[14px] mb-0.5 content-center"
        />
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
                View Daily Reports
              </ModalHeader>
              <ModalBody>
                <div className="grid grid-cols-3 gap-4">
                  {/* Image Display Section */}
                  <div className="flex flex-col items-center text-center">
                    {selectedImage ? (
                      <img
                        src={selectedImage}
                        alt="Selected"
                        className="mt-4 rounded-full h-32 w-32 object-cover"
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
                      label="Full Name"
                      placeholder="Enter your full name"
                      className="mb-2"
                      isReadOnly
                      value="Aliza Nurfitrian Meizahra"
                    />
                    <Input
                      type="text"
                      variant="flat"
                      label="Date"
                      placeholder="Enter date"
                      className="mb-2"
                      isReadOnly
                      value="23/03/2024"
                    />
                    <div className="col-span-3 grid grid-cols-3 gap-2">
                      <Input
                        type="number"
                        variant="flat"
                        label="ID Number"
                        placeholder="Enter your ID Number"
                        className="mb-2"
                        isReadOnly
                        value="110122308324"
                      />
                      <Input
                        type="number"
                        variant="flat"
                        label="Books"
                        placeholder="Enter the number of books"
                        className="mb-2"
                        isReadOnly
                        value="24"
                      />
                      <Input
                        type="number"
                        variant="flat"
                        label="Rooms"
                        placeholder="Enter the number of rooms"
                        className="mb-2"
                        isReadOnly
                        value="11"
                      />
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mt-3">
                  <Textarea
                    type="text"
                    variant="flat"
                    label="Description"
                    placeholder="Enter description.."
                    className="mb-2 h-full"
                    isReadOnly
                    value="Jadi hari keadaan nya sih aman aja, ga ada masalah. aman aja serius... Ga boong aman kok min jangan potong gaji saya... saya ga ada apa apapa"
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
