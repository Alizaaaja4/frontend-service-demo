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
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function ModalFeedback() {
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
        className="text-white font-bold bg-dark-red pr-5 pl-5"
        variant="flat"
        onPress={onOpen}
      >
        Give Feedback
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
              <ModalHeader className="flex flex-col gap-1 text-dark-red font-bold text-xl">
                Feedback
              </ModalHeader>
              <ModalBody>
                <Select
                  label="Feedback Type"
                  placeholder="Select your feedback type"
                  className="flex-grow text-dark-red font-bold"
                >
                  {feedbackType.map((library) => (
                    <SelectItem key={library.key}>{library.label}</SelectItem>
                  ))}
                </Select>
                <Textarea label="Message" placeholder="Enter your message" />
              </ModalBody>
              <ModalFooter>
                <div className="flex justify-center w-full">
                  <Button
                    className="bg-dark-red text-white"
                    variant="flat"
                    onPress={onClose}
                    endContent={<FontAwesomeIcon icon={faPaperPlane} />}
                  >
                    Submit
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
