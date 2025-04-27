import React from "react";
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

export default function ModalForgot() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div className="flex flex-wrap gap-3">
        <Link color="primary" href="#" size="sm" onPress={onOpen}>
          Forgot password?
        </Link>
      </div>
      <Modal size="lg" isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-dark-red font-bold text-xl">
                Forgot your Password?
              </ModalHeader>
              <ModalBody>
                <p className="text-center">
                  please contact: albaghdadi@staff.telkomuniversity.ac.id
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Link
                  color="primary"
                  onPress={onClose}
                  href="mailto:fayyadh.asady04@gmail.com"
                >
                  Email
                </Link>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
