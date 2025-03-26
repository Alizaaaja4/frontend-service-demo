"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  useDisclosure,
  Link,
  Select,
  SelectItem,
  Textarea,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

export default function ModalAddRoom() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const [status, setStatus] = useState(""); // State untuk status
  const [price, setPrice] = useState(""); // State untuk harga

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setSelectedImage(reader.result); // Sekarang TypeScript tidak error
        }
      };
      reader.readAsDataURL(file);
    }
  };

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
      <Button
        isExternal
        as={Link}
        className="text-dark-red bg-white border-none shadow-none hover:bg-white"
        onPress={onOpen}
      >
        <FontAwesomeIcon
          icon={faSquarePlus}
          style={{ width: "30px", height: "30px" }}
        />
      </Button>
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
                  icon={faSquarePlus}
                  style={{ width: "25px", height: "25px" }}
                />
                Add Room Reservations
              </ModalHeader>
              <ModalBody className="">
                <div className="grid grid-cols-3 gap-4">
                  {/* Image Upload Section */}
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
                    <input
                      type="file"
                      onChange={handleImageChange}
                      className="mt-4 w-1/2 px-2 py-1 text-sm text-center border rounded cursor-pointer"
                    />
                  </div>

                  {/* Room Name & Capacity */}
                  <div className="col-span-2 grid grid-cols-2 gap-4">
                    <Input
                      type="text"
                      variant="flat"
                      label="Room Name"
                      placeholder="Enter room name.."
                      className="mb-2"
                    />
                    <Select
                      label="Library"
                      placeholder="Select a library"
                      className="flex-grow max-w-[290px]"
                    >
                      {libraries.map((library) => (
                        <SelectItem key={library.key}>
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
                    />
                    <Select
                      label="Status"
                      placeholder="Select a status"
                      className="flex-grow max-w-[290px]"
                      onChange={(e) => setStatus(e.target.value)} // Menangkap perubahan status
                    >
                      {statuses.map((status) => (
                        <SelectItem key={status.key} value={status.key}>
                          {status.label}
                        </SelectItem>
                      ))}
                    </Select>

                    {/* Conditionally Render Price Input */}
                    {status === "paid" && (
                      <Input
                        type="number"
                        variant="flat"
                        label="Price"
                        placeholder="Rp.xx.xxx."
                        className="col-span-2"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                      />
                    )}
                  </div>
                </div>

                {/* deskripsi */}
                <div className="mt-3">
                  <Textarea
                    type="text"
                    variant="flat"
                    label="Description"
                    placeholder="Enter description.."
                    className="mb-2"
                  />
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
