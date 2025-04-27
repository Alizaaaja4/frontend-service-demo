import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Link,
} from "@heroui/react";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function ModalDelateTime() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div
        role="button"
        className="bg-fire-brick text-white rounded-md p-1 pl-3 pr-3 font-semibold text-xs cursor-pointer"
        onClick={onOpen} // Ganti onPress dengan onClick
      >
        <FontAwesomeIcon icon={faTrash} className="w-[13px]" /> Delate Data
      </div>

      <Modal size="sm" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex gap-2 text-dark-red font-bold text-xl items-center">
                <FontAwesomeIcon icon={faTrash} className="w-[16px]" /> Delate
              </ModalHeader>
              <ModalBody>
                <p className="text-center font-semibold">
                  Are you sure you want to delete this data?
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Link color="primary" onPress={onClose}>
                  Sure
                </Link>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
