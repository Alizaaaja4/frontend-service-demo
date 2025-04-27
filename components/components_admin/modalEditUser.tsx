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
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

export default function ModalEditUser() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedFaculty, setSelectedFaculty] = useState(""); // State for selected faculty
  const [availableDepartments, setAvailableDepartments] = useState<
    { key: string; label: string }[]
  >([]); // State for available departments
  const [selectedRole, setSelectedRole] = useState(""); // State for selected role

  const toggleVisibility = () => setIsVisible(!isVisible);

  const handleImageChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setSelectedImage(reader.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

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

  const departmentsByFaculty: Record<string, { key: string; label: string }[]> =
    {
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
    };

  const handleFacultyChange = (
    facultyKey: keyof typeof departmentsByFaculty,
  ) => {
    setSelectedFaculty(facultyKey);
    setAvailableDepartments(departmentsByFaculty[facultyKey] || []);
  };

  const handleRoleChange = (roleKey: any) => {
    setSelectedRole(roleKey);
  };

  return (
    <>
      <div
        role="button"
        className="bg-orange-red text-white rounded-md p-1 text-xs cursor-pointer"
        onClick={onOpen}
      >
        <FontAwesomeIcon icon={faPenToSquare} className="w-[13px]" />
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
              <ModalHeader className="flex text-dark-red font-bold text-xl underline underline-dark-red gap-2 items-center">
                <FontAwesomeIcon
                  icon={faPenToSquare}
                  style={{ width: "25px", height: "25px" }}
                />
                Edit User Data
              </ModalHeader>
              <ModalBody className="">
                <div className="grid grid-cols-3 gap-4">
                  {/* Image Upload Section */}
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
                    <input
                      type="file"
                      onChange={handleImageChange}
                      className="mt-4 w-1/2 px-2 py-1 text-sm text-center border rounded cursor-pointer"
                    />
                  </div>

                  {/* User Info Section */}
                  <div className="col-span-2 grid grid-cols-2 gap-4">
                    <Input
                      type="text"
                      variant="flat"
                      label="Nama Lengkap"
                      placeholder="Enter your full name.."
                      className="mb-2"
                    />
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
                    <Input
                      type="text"
                      variant="flat"
                      label="Nomor Induk Pegawai"
                      placeholder="Enter your ID number.."
                      className="mb-2"
                    />
                    <Select
                      label="Library"
                      placeholder="Select a library"
                      className="flex-grow max-w-[290px]"
                    >
                      {libraries.map((library) => (
                        <SelectItem key={library.key}>
                          {library.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                </div>

                {/* Additional Information Section */}
                {selectedRole === "lecture" || selectedRole === "student" ? (
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <Select
                      label="Faculty"
                      placeholder="Select a faculty"
                      className="flex-grow"
                      onChange={(e) => handleFacultyChange(e.target.value)}
                    >
                      {facultyes.map((faculty) => (
                        <SelectItem key={faculty.key} value={faculty.key}>
                          {faculty.label}
                        </SelectItem>
                      ))}
                    </Select>

                    <Select
                      label="Department"
                      placeholder="Select a department"
                      className="flex-grow"
                      disabled={!selectedFaculty} // Disable select if no faculty is selected
                    >
                      {availableDepartments.map((dept) => (
                        <SelectItem key={dept.key} value={dept.key}>
                          {dept.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>
                ) : null}

                <div className="grid grid-cols-2 gap-4">
                  <Input
                    type="text"
                    variant="flat"
                    label="Username"
                    placeholder="Enter your username.."
                  />
                  <Input
                    label="Password"
                    variant="flat"
                    placeholder="Enter your password.."
                    endContent={
                      <button
                        type="button"
                        onClick={toggleVisibility}
                        aria-label="toggle password visibility"
                      >
                        <FontAwesomeIcon
                          icon={isVisible ? faEye : faEyeSlash}
                          className="text-lg text-default-400"
                        />
                      </button>
                    }
                    type={isVisible ? "text" : "password"}
                  />
                  <Input
                    type="email"
                    variant="flat"
                    label="Email"
                    placeholder="Enter your email.."
                  />
                  <Input
                    type="tel"
                    variant="flat"
                    label="Nomor Telepon"
                    placeholder="Enter your phone number.."
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  onPress={onClose}
                  className="bg-dark-red text-white font-bold"
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
