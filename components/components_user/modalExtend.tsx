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
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPaperPlane,
  faCalendarPlus,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function ModalExtend() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const feedbackType = [
    { key: "suggestion", label: "Suggestion" },
    { key: "appreciation", label: "Appreciation" },
    { key: "complaints", label: "Complaints" },
  ];

  return (
    <>
      <Button
        isExternal
        as={Link}
        onPress={onOpen}
        className="bg-forest-green text-white"
        startContent={<FontAwesomeIcon icon={faCalendarPlus} />}
      >
        Extend
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-forest-green font-bold text-xl">
                Extend Duration
              </ModalHeader>
              <ModalBody>
                <p className="text-lg">"Book Title"</p>
                <DatePicker label="New Date"/>
              </ModalBody>
              <ModalFooter>
                <div className="flex justify-center w-full">
                  <Button
                    className="bg-forest-green text-white"
                    variant="flat"
                    onPress={onClose}
                  >
                    Extend
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
