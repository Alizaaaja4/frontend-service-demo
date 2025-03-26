"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Link,
  Input,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

export default function ModalAddCatalogExcel() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedRole, setSelectedRole] = useState(""); // State for selected role
  const [file, setFile] = useState(null); // State for selected file

  const handleFileChange = (event:any) => {
    setFile(event.target.files[0]);
  };

  return (
    <>
      <Button
        isExternal
        as={Link}
        className="bg-lime text-white"
        variant="flat"
        onPress={onOpen}
      >
        Import
      </Button>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        size="xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex text-dark-red font-bold text-xl underline underline-dark-red gap-2 items-center">
                <FontAwesomeIcon
                  icon={faFileExcel}
                  style={{ width: "25px", height: "25px" }}
                />
                Import Data with Excel
              </ModalHeader>
              <ModalBody className="">
                {/* Description Section */}
                <div className="mb-4 text-gray-600 text-sm text-justify">
                  <p>
                    Please ensure the Excel file follows the required format.
                    The file should include columns for <span className="font-semibold text-dark-red"> Title Book, Author's Name, Status, Editor, Translator, Publisher name, City, Year of Publication, Book code, Subject, Rack number, Classification, Type of book, Rental price, Daily fine, Type circulation, Pages, Link, Abstraction. </span>
                    Only .xlsx and .xls file formats are accepted. Maximum file
                    size is 200MB.
                  </p>
                </div>

                {/* File Upload Section */}
                <div className="mb-4">
                  <Input
                    type="file"
                    accept=".xls,.xlsx"
                    onChange={handleFileChange}
                    label="Upload Excel File"
                  />
                </div>

              </ModalBody>
              <ModalFooter>
                <Button
                  onPress={onClose}
                  className="bg-dark-red text-white font-bold"
                  disabled={!file} // Disable button if no file is selected
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
