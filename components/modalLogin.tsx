"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
  Link,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ModalForgot from "./modalforgot";
import { useRouter } from "next/navigation";

export default function ModalLogin() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isErrorOpen,
    onOpen: onErrorOpen,
    onOpenChange: onErrorOpenChange,
  } = useDisclosure(); // untuk error modal

  const [isVisible, setIsVisible] = React.useState(false);
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const router = useRouter();

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleLogin = (onClose: () => void) => {
    if (username === "admin@telkomuniversity.ac.id" && password === "adminNDN123") {
      router.push("/admin");
      onClose();
    } else if (username === "ndn@student.telkomuniversity.ac.id" && password === "ndn000") {
      router.push("/user");
      onClose();
    } else {
      onErrorOpen(); // buka modal error
    }
  };

  return (
    <>
      <Button
        isExternal
        as={Link}
        className="text-white font-bold bg-dark-red pr-5 pl-5"
        variant="flat"
        onPress={onOpen}
      >
        Sign In
      </Button>

      {/* Modal untuk login */}
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
                Sign In
              </ModalHeader>
              <ModalBody>
                <Input
                  type="text"
                  variant="flat"
                  label="SSO"
                  placeholder="Enter your username.."
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                  label="Password"
                  variant="flat"
                  placeholder="Enter your password.."
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  endContent={
                    <button
                      type="button"
                      onClick={toggleVisibility}
                      aria-label="toggle password visibility"
                    >
                      {isVisible ? (
                        <FontAwesomeIcon
                          icon={faEye}
                          className="text-lg text-default-400"
                        />
                      ) : (
                        <FontAwesomeIcon
                          icon={faEyeSlash}
                          className="text-lg text-default-400"
                        />
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                />
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox className="text-black">Remember me</Checkbox>
                  <ModalForgot />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={() => handleLogin(onClose)}>
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      {/* Modal untuk error login */}
      <Modal
        isOpen={isErrorOpen}
        onOpenChange={onErrorOpenChange}
        placement="top-center"
        backdrop="blur"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-red-600 font-bold text-xl">
                Login Failed
              </ModalHeader>
              <ModalBody>
                <p className="text-center text-sm">
                  Username atau Password yang kamu masukkan salah.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
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
