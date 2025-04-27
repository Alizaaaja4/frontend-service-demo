"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCamera, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

export default function ModalEditInfografis() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
      <div
        role="button"
        className="bg-orange-red text-white rounded-md p-1 text-xs cursor-pointer"
        onClick={onOpen}
      >
        <FontAwesomeIcon icon={faPenToSquare} className="w-[13px]" />
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
                  icon={faPenToSquare}
                  style={{ width: "25px", height: "25px" }}
                />
                Edit Infografis
              </ModalHeader>
              <ModalBody>
                {/* Image Upload Section - Full Width with Specific Height */}
                <div className="flex flex-col items-center text-center w-full">
                  {selectedImage ? (
                    <img
                      src={selectedImage}
                      alt="Selected"
                      className="mt-4 rounded-md w-full h-auto object-cover"
                    />
                  ) : (
                    <div className="mt-2 rounded-md h-[250px] w-full bg-gray-200 flex items-center justify-center border-2 border-dark-red">
                      <FontAwesomeIcon icon={faCamera} size="2x" />
                    </div>
                  )}
                  <input
                    type="file"
                    onChange={handleImageChange}
                    className="mt-4 w-1/2 px-2 py-1 text-sm text-center border rounded cursor-pointer"
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
