"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  DateRangePicker,
  Select,
  SelectItem,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import React from "react";

export default function ModalSearch() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [type, setType] = React.useState("");
  const [location, setLocation] = React.useState("");

  const locations = [
    { key: "bandung", label: "Bandung" },
    { key: "purwekerto", label: "Purwekerto" },
    { key: "surabaya", label: "Surabaya" },
    { key: "jakarta", label: "Jakarta" },
  ];

  const types = [
    { key: "bandung", label: "Bandung" },
    { key: "purwekerto", label: "Purwekerto" },
    { key: "surabaya", label: "Surabaya" },
    { key: "jakarta", label: "Jakarta" },
  ];

  return (
    <>
      <Button
        isIconOnly
        className="text-alice-blue bg-dodger-blue"
        variant="flat"
        aria-label="Search in advance"
        onPress={onOpen}
      >
        <FontAwesomeIcon icon={faSearchengin}></FontAwesomeIcon>
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        backdrop="blur"
        size="4xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-dark-red font-bold text-xl mt-2">
                Advanced Search
              </ModalHeader>
              <ModalBody className="grid grid-cols-2 gap-4">
                <Select
                  label="Select type"
                  placeholder="select type"
                  selectedKeys={[type]}
                  onChange={(e) => {
                    setType(e.target.value);
                  }}
                >
                  {types.map((type) => (
                    <SelectItem key={type.key}>{type.label}</SelectItem>
                  ))}
                </Select>

                <Select
                  label="Select Location"
                  placeholder="select library"
                  selectedKeys={[location]}
                  onChange={(e) => {
                    setLocation(e.target.value);
                  }}
                >
                  {locations.map((location) => (
                    <SelectItem key={location.key}>{location.label}</SelectItem>
                  ))}
                </Select>
                <Input
                  type="text"
                  variant="flat"
                  label="Catalog Number"
                  placeholder="Enter catalog number.."
                />
                <Input
                  type="text"
                  variant="flat"
                  label="Title"
                  placeholder="Enter title.."
                />
                <Input
                  type="text"
                  variant="flat"
                  label="Author"
                  placeholder="Enter author.."
                />
                <Input
                  type="text"
                  variant="flat"
                  label="Publisher"
                  placeholder="Enter publisher.."
                />
                <Input
                  type="text"
                  variant="flat"
                  label="Editor/Mentor"
                  placeholder="Enter editor/mentor.."
                />
                <Input
                  type="text"
                  variant="flat"
                  label="Subject"
                  placeholder="Enter subject.."
                />
                <Input
                  type="text"
                  variant="flat"
                  label="Classification Code"
                  placeholder="Enter classification code.."
                />

                <DateRangePicker label="Entry Date" visibleMonths={2} />
              </ModalBody>
              <ModalFooter className="flex justify-end gap-2">
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary">Search</Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
