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
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

export default function ModalLogout(props: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {props.openstat ? (
        <Button
          onClick={onOpen}
          className="bg-white text-dark-red font-semibold mr-1"
          endContent={
            <FontAwesomeIcon
              icon={faSignOutAlt}
              className="w-[20px] h-[20px] text-dark-red rounded-lg"
            />
          }
        >
          Logout
        </Button>
      ) : (
        <Button isIconOnly onPress={onOpen} className="bg-white">
          <FontAwesomeIcon
            icon={faSignOutAlt}
            className="w-[20px] h-[20px] text-dark-red p-2 rounded-lg"
          />
        </Button>
      )}

      <Modal size="sm" isOpen={isOpen} onClose={onClose} backdrop="blur">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-dark-red font-bold text-xl">
                Logout
              </ModalHeader>
              <ModalBody>
                <p className="text-center font-semibold">
                  Are you sure you want to sign out?
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Link color="primary" onPress={onClose} href="/">
                  Logout
                </Link>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
