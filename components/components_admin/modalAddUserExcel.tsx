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
  Select,
  SelectItem,
  Input,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileExcel } from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

export default function ModalAddUserExcel() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedRole, setSelectedRole] = useState(""); // State for selected role
  const [file, setFile] = useState(null); // State for selected file

  const libraries = [
    { key: "bdg", label: "Open Library TelU - Bandung" },
    { key: "jktA", label: "Open Library TelU - Jakarta A" },
    { key: "jktB", label: "Open Library TelU - Jakarta B" },
    { key: "srby", label: "Open Library TelU - Surabaya" },
  ];

  const roles = [
    { key: "admin", label: "Administrator" },
    { key: "coadmin", label: "Co-Administrator" },
    { key: "staff", label: "Library Staff" },
    { key: "lecture", label: "Lecture" },
    { key: "student", label: "Student" },
  ];

  const handleRoleChange = (roleKey: any) => {
    setSelectedRole(roleKey);
  };

  const handleFileChange = (event: any) => {
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
                    The file should include columns for{" "}
                    <span className="font-semibold text-dark-red">
                      Name, ID Number, Email, Username, Password, dstb.{" "}
                    </span>
                    Only .xlsx and .xls file formats are accepted. Maximum file
                    size is 20MB.
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

                {/* User Info Section */}
                <div className="grid grid-cols-2 gap-4">
                  <Select
                    label="Library"
                    placeholder="Select a library"
                    className="flex-grow max-w-[290px]"
                  >
                    {libraries.map((library) => (
                      <SelectItem key={library.key}>{library.label}</SelectItem>
                    ))}
                  </Select>
                  <Select
                    label="Role"
                    placeholder="Select a role"
                    className="flex-grow max-w-[290px]"
                    onChange={(e) => handleRoleChange(e.target.value)}
                  >
                    {roles.map((role) => (
                      <SelectItem key={role.key} value={role.key}>
                        {role.label}
                      </SelectItem>
                    ))}
                  </Select>
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
