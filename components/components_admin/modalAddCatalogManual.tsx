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
  Textarea,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

export default function ModalAddCatalogManual() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [scrollBehavior, setScrollBehavior] = useState<
    "inside" | "normal" | "outside"
  >("inside");

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setSelectedImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Button
        isExternal
        as={Link}
        className="bg-dodger-blue text-white"
        variant="flat"
        onPress={onOpen}
      >
        Manually
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        scrollBehavior={scrollBehavior}
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
                Add Catalog
              </ModalHeader>
              <ModalBody>
                {/* input informasi A */}
                <div className="flex gap-4">
                  {/* cover book */}
                  <div>
                    {selectedImage ? (
                      <img
                        src={selectedImage}
                        alt="Selected"
                        className="mt-4 rounded-md h-32 w-52 object-cover"
                      />
                    ) : (
                      <div className="mt-4 rounded-md h-44 w-32 bg-gray-200 flex items-center justify-center border-2 border-dark-red">
                        <FontAwesomeIcon icon={faCamera} size="2x" />
                      </div>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="mt-4 w-24 px-2 py-1 text-[10px] text-center border rounded cursor-pointer"
                    />
                  </div>

                  {/* content informasi */}
                  <div className="mt-3">
                    {/* title */}
                    <Input
                      type="text"
                      variant="flat"
                      label="Tittle Book"
                      placeholder="Enter title book"
                      className="mb-2 w-[690px]"
                    />

                    {/* pengarang */}
                    <div className="flex gap-2">
                      <div className="grid grid-cols-2 gap-2">
                        <Input
                          type="text"
                          variant="flat"
                          label="Author's Name"
                          placeholder="Enter author's name"
                          className="mt-2 mb-2 w-[340px]"
                        />
                        <Input
                          type="text"
                          variant="flat"
                          label="Select Status"
                          placeholder="Enter status"
                          className="mt-2 mb-2 w-[340px]"
                        />
                        <Input
                          type="text"
                          variant="flat"
                          label="Editor"
                          placeholder="Enter editor"
                          className="mt-2 mb-2 w-[340px]"
                        />
                        <Input
                          type="text"
                          variant="flat"
                          label="Translator"
                          placeholder="Enter translator"
                          className="mt-2 mb-2 w-[340px]"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* input informasi B */}
                <div className="grid grid-cols-3 gap-2">
                  <Input
                    type="text"
                    variant="flat"
                    label="Publisher name"
                    placeholder="Enter publisher name"
                    className="mt-2 mb-2"
                  />
                  <Input
                    type="text"
                    variant="flat"
                    label="City"
                    placeholder="Enter city"
                    className="mt-2 mb-2"
                  />
                  <Input
                    type="number"
                    variant="flat"
                    label="Year of Publication"
                    placeholder="Enter year of publication"
                    className="mt-2 mb-2"
                  />
                </div>

                {/* input informasi C */}
                <div className="grid grid-cols-3 gap-2">
                  <Input
                    type="number"
                    variant="flat"
                    label="Book Code"
                    placeholder="Enter book code"
                    className="mt-2 mb-2"
                  />
                  <Input
                    type="text"
                    variant="flat"
                    label="Subject"
                    placeholder="Enter subject"
                    className="mt-2 mb-2"
                  />
                  <Input
                    type="number"
                    variant="flat"
                    label="Rack number"
                    placeholder="Enter rack number"
                    className="mt-2 mb-2"
                  />
                </div>

                {/* input informasi D */}
                <div className="grid grid-cols-2 gap-2">
                  <Input
                    type="text"
                    variant="flat"
                    label="Classification"
                    placeholder="Enter classification"
                    className="mt-2 mb-2"
                  />
                  <Input
                    type="text"
                    variant="flat"
                    label="Types of books"
                    placeholder="Enter types of books"
                    className="mt-2 mb-2"
                  />
                </div>

                {/* input informasi E */}
                <div className="grid grid-cols-3 gap-2">
                  <Input
                    type="number"
                    variant="flat"
                    label="Rental price"
                    placeholder="IDR 10,000,00"
                    className="mt-2 mb-2"
                  />
                  <Input
                    type="number"
                    variant="flat"
                    label="Daily fines"
                    placeholder="IDR 1.000,00"
                    className="mt-2 mb-2"
                  />
                  <Input
                    type="text"
                    variant="flat"
                    label="Type of circulation"
                    placeholder="Enter type of circulation"
                    className="mt-2 mb-2"
                  />
                </div>

                {/* input informasi F */}
                <div className="grid grid-cols-2 gap-4">
                  <Input
                    type="text"
                    variant="flat"
                    label="Pages"
                    placeholder="Enter pages"
                    className="mt-2 mb-2"
                  />
                  <Input
                    type="text"
                    variant="flat"
                    label="Link"
                    placeholder="Input link"
                    className="mt-2 mb-2"
                  />
                </div>

                {/* Abstraction */}
                <div>
                  <Textarea
                    type="text"
                    variant="flat"
                    label="Abstraction"
                    placeholder="Enter abstraction"
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
