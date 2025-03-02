"use client ";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
  Image,
  ModalHeader,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export default function ModalInfographic(props) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const imageList = props.imgURL.split(",");
  console.log(imageList);
  return (
    <>
      <div
        className="rounded-lg hover:bg-white pl-2 duration-200 cursor-pointer"
        onClick={onOpen}
      >
        <p className="hover:text-dark-red">{props.name}</p>
      </div>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
        backdrop="blur"
        size="5xl"
        scrollBehavior="outside"
      >
        <ModalContent>
          <ModalBody className="overflow-y-auto">
            <div className="flex flex-col items-center justify-center px-3 py-5">
              {imageList.map((item, index) => {
                return (
                  <Image
                    key={index}
                    alt="NextUI hero Image"
                    src={item.trim()}
                    className="rounded-none"
                  />
                );
              })}
            </div>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
