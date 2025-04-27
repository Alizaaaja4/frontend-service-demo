"use client";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input,
  useDisclosure,
  Link,
  Select,
  SelectItem,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faCamera,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

export default function ModalReviewUserA() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFaculty, setSelectedFaculty] = useState(""); // State for selected faculty
  const [availableDepartments, setAvailableDepartments] = useState([]); // State for available departments
  const [selectedRole, setSelectedRole] = useState(""); // State for selected role

  const toggleVisibility = () => setIsVisible(!isVisible);

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

  const facultyes = [
    { key: "fte", label: "Fakultas Teknik Elektro (FTE)" },
    { key: "fri", label: "Fakultas Rekayasa Industri (FRI)" },
    { key: "fif", label: "Fakultas Informatika (FIF)" },
    { key: "feb", label: "Fakultas Ekonomi dan Bisnis (FEB)" },
    { key: "fks", label: "Fakultas Komunikasi dan Ilmu Sosial (FKS)" },
    { key: "fik", label: "Fakultas Industri Kreatif (FIK)" },
  ];

  const departmentsByFaculty = {
    fte: [
      { key: "elka", label: "Teknik Elektronika" },
      { key: "elins", label: "Teknik Elektro" },
    ],
    fri: [
      { key: "industri", label: "Teknik Industri" },
      { key: "logistik", label: "Teknik Logistik" },
    ],
    fif: [
      { key: "if", label: "Informatika" },
      { key: "si", label: "Sistem Informasi" },
    ],
    // Tambahkan fakultas dan jurusan lainnya di sini
  };

  return (
    <>
      <div
        role="button"
        className="bg-forest-green text-white rounded-md p-1 text-xs cursor-pointer"
        onClick={onOpen} // Ganti onPress dengan onClick
      >
        <FontAwesomeIcon icon={faEye} className="w-[13px]" />
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="top-center"
        size="4xl"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex text-dark-red font-bold text-xl gap-2 items-center">
                <FontAwesomeIcon
                  icon={faEye}
                  style={{ width: "25px", height: "25px" }}
                />
                Review User Information
              </ModalHeader>
              <ModalBody className="">
                <div className="grid grid-cols-3 gap-4">
                  {/* Image Display Section */}
                  <div className="flex flex-col items-center text-center">
                    {selectedImage ? (
                      <img
                        src={selectedImage}
                        alt="Selected"
                        className="mt-4 rounded-full h-32 w-32 object-cover"
                      />
                    ) : (
                      <div className="mt-4 rounded-full h-32 w-32 bg-gray-200 flex items-center justify-center border-2 border-dark-red">
                        <FontAwesomeIcon icon={faCamera} size="2x" />
                      </div>
                    )}
                  </div>

                  {/* User Info Section */}
                  <div className="col-span-2 grid grid-cols-2 gap-4">
                    <Input
                      type="text"
                      variant="flat"
                      label="Nama Lengkap"
                      value="John Doe"
                      isReadOnly
                      className="mb-2"
                    />
                    <Select
                      label="Role"
                      selectedKeys={new Set([roles[2].key])} // Preselect the role
                      className="flex-grow max-w-[290px]"
                      isDisabled
                    >
                      {roles.map((role) => (
                        <SelectItem key={role.key} value={role.key}>
                          {role.label}
                        </SelectItem>
                      ))}
                    </Select>
                    <Input
                      type="text"
                      variant="flat"
                      label="Nomor Induk Pegawai"
                      value="123456789"
                      isReadOnly
                      className="mb-2"
                    />
                    <Select
                      label="Library"
                      selectedKeys={new Set([libraries[0].key])} // Preselect the library
                      className="flex-grow max-w-[290px]"
                      isDisabled
                    >
                      {libraries.map((library) => (
                        <SelectItem key={library.key} value={library.key}>
                          {library.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                </div>

                {/* Additional Information Section */}
                {(selectedRole === "lecture" || selectedRole === "student") && (
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <Select
                      label="Faculty"
                      selectedKeys={new Set([facultyes[0].key])} // Preselect the faculty
                      className="flex-grow"
                      isDisabled
                    >
                      {facultyes.map((faculty) => (
                        <SelectItem key={faculty.key} value={faculty.key}>
                          {faculty.label}
                        </SelectItem>
                      ))}
                    </Select>

                    <Select
                      label="Department"
                      selectedKeys={
                        new Set([departmentsByFaculty["fte"][0].key])
                      } // Preselect the department
                      className="flex-grow"
                      isDisabled
                    >
                      {departmentsByFaculty["fte"].map((dept) => (
                        <SelectItem key={dept.key} value={dept.key}>
                          {dept.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4 mt-4">
                  <Input
                    type="text"
                    variant="flat"
                    label="Username"
                    value="johndoe"
                    isReadOnly
                  />
                  <Input
                    label="Password"
                    variant="flat"
                    value="********"
                    isReadOnly
                    endContent={
                      <FontAwesomeIcon
                        icon={faEyeSlash}
                        className="text-lg text-default-400"
                      />
                    }
                    type="password"
                  />
                  <Input
                    type="email"
                    variant="flat"
                    label="Email"
                    value="johndoe@example.com"
                    isReadOnly
                  />
                  <Input
                    type="tel"
                    variant="flat"
                    label="Nomor Telepon"
                    value="+62123456789"
                    isReadOnly
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  onPress={onClose}
                  className="bg-dark-red text-white font-bold"
                >
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
