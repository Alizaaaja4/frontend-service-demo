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
  Textarea,
  DatePicker,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCamera,
  faTimes,
  faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";

export default function ModalEditNews() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [tags, setTags] = useState<string[]>([]);

  const [status, setStatus] = useState("");

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

  const handleTagKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
      const newTag = event.currentTarget.value.trim();
      if (newTag && !tags.includes(newTag)) {
        setTags([...tags, newTag]);
        event.currentTarget.value = ""; // Reset input setelah menambah tag
      }
    }
  };

  const handleRemoveTag = (index: number) => {
    const newTags = tags.filter((_, i) => i !== index);
    setTags(newTags);
  };

  const statuses = [
    { key: "pending", label: "Pending" },
    { key: "published", label: "Published" },
  ];

  return (
    <>
      <div
        role="button"
        onClick={onOpen}
        className="absolute top-2 right-2 flex bg-medium-violet text-white text-[10px] gap-1 p-1 text-center items-center rounded-md cursor-pointer"
      >
        <FontAwesomeIcon icon={faPenToSquare} className="text-[10px]" />
        Edit News
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
              <ModalHeader>
                <div className="flex items-center gap-2 text-dark-red">
                  <FontAwesomeIcon
                    icon={faPenToSquare}
                    className="text-[20px] font-bold"
                  />
                  <span className="font-bold">Edit News</span>
                </div>
              </ModalHeader>
              <ModalBody>
                <div className="grid grid-cols-3 gap-4">
                  {/* Image Upload Section */}
                  <div className="flex flex-col items-center text-center col-span-1">
                    {selectedImage ? (
                      <img
                        src={selectedImage}
                        alt="Selected"
                        className="mt-4 rounded-md h-32 w-52 object-cover"
                      />
                    ) : (
                      <div className="mt-4 rounded-md h-32 w-52 bg-gray-200 flex items-center justify-center border-2 border-dark-red">
                        <FontAwesomeIcon icon={faCamera} size="2x" />
                      </div>
                    )}
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="mt-4 w-1/2 px-2 py-1 text-sm text-center border rounded cursor-pointer"
                    />
                  </div>

                  {/* Input News Headlines and Writer */}
                  <div className="col-span-2 grid grid-cols-2 gap-4">
                    <Input
                      type="text"
                      variant="flat"
                      label="News Headlines"
                      placeholder="Add news headlines"
                      className="mb-2"
                    />
                    <Input
                      type="text"
                      variant="flat"
                      label="Writer"
                      placeholder="Enter writer's name"
                      className="mb-2"
                    />

                    <DatePicker label="Date" className="max-w-[284px]" />
                    <Select
                      label="Status"
                      placeholder="Select a status"
                      className="flex-grow max-w-[290px]"
                      onChange={(event) => setStatus(event.target.value)} // Tambahkan handler yang sesuai
                    >
                      {statuses.map((status) => (
                        <SelectItem key={status.key} value={status.key}>
                          {status.label}
                        </SelectItem>
                      ))}
                    </Select>
                  </div>

                  {/* Input Tag */}
                  <div className="col-span-3">
                    <Input
                      type="text"
                      variant="flat"
                      label="Tags"
                      placeholder="Enter tags, press Enter to add"
                      className="mb-2"
                      onKeyDown={handleTagKeyDown}
                    />
                    {/* Display Tags */}
                    <div className="flex flex-wrap gap-2 mt-2">
                      {tags.map((tag, index) => (
                        <div
                          key={index}
                          className="bg-dark-red text-white text-[12px] px-2 py-1 rounded-md flex items-center gap-2"
                        >
                          {tag}
                          <button onClick={() => handleRemoveTag(index)}>
                            <FontAwesomeIcon
                              icon={faTimes}
                              className="text-white"
                            />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <div className="col-span-3">
                    <Textarea
                      type="text"
                      variant="flat"
                      label="Description"
                      placeholder="Enter description.."
                      className="mb-2"
                    />
                  </div>
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
