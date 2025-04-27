"use client";

import {
  Button,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

export default function ModalAddCatalogExcel() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <>
      <Button
        as={Link}
        className="bg-lime text-white"
        isExternal
        onPress={onOpen}
        variant="flat"
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
              <ModalHeader className="flex items-center gap-2 text-xl font-bold text-dark-red underline underline-dark-red">
                <FontAwesomeIcon
                  icon={faFileExcel}
                  style={{ width: "25px", height: "25px" }}
                />
                Import Data with Excel
              </ModalHeader>
              <ModalBody>
                {/* Description Section */}
                <div className="mb-4 text-justify text-sm text-gray-600">
                  <p>
                    Please ensure the Excel file follows the required format.
                    The file should include columns for{" "}
                    <span className="font-semibold text-dark-red">
                      Title Book, Author&apos;s Name, Status, Editor,
                      Translator, Publisher name, City, Year of Publication,
                      Book code, Subject, Rack number, Classification, Type of
                      book, Rental price, Daily fine, Type circulation, Pages,
                      Link, Abstraction.
                    </span>{" "}
                    Only .xlsx and .xls file formats are accepted. Maximum file
                    size is 200MB.
                  </p>
                </div>

                {/* File Upload Section */}
                <div className="mb-4">
                  <Input
                    accept=".xls,.xlsx"
                    label="Upload Excel File"
                    onChange={handleFileChange}
                    type="file"
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  className="bg-dark-red font-bold text-white"
                  disabled={!file}
                  onPress={onClose}
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
