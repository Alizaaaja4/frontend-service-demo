"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faCamera } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

export default function ModalReviewInfografis() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedImage] = useState("/assets/image/perpus.png"); // Example selected image

  return (
    <>
      <div
        role="button"
        className="flex bg-forest-green text-white rounded-md p-1 text-xs cursor-pointer"
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
                View Infografis
              </ModalHeader>
              <ModalBody>
                {/* Image Display Section - Full Width */}
                <div className="flex justify-center items-center">
                  {selectedImage ? (
                    <img
                      src={selectedImage}
                      alt="Selected"
                      className="w-full h-auto rounded-md object-cover"
                    />
                  ) : (
                    <div className="mt-4 rounded-md h-32 w-full bg-gray-200 flex items-center justify-center border-2 border-dark-red">
                      <FontAwesomeIcon icon={faCamera} size="2x" />
                    </div>
                  )}
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
