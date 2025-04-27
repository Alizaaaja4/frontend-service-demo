"use client";
import React from "react";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faUserGear,
  faUserPen,
  faUserGroup,
  faUserGraduate,
  faSwatchbook,
} from "@fortawesome/free-solid-svg-icons";

export default function DropdownTotals() {
  const [selectedKeys, setSelectedKeys] = React.useState<"all" | Set<string>>(
    new Set(["Select Telkom University Library"]) as Set<string>,
  );

  const selectedValue = React.useMemo(
    () => Array.from(selectedKeys).join(", ").replaceAll("_", " "),
    [selectedKeys],
  );

  return (
    <div>
      {/* Dropdown untuk pemilihan library */}
      <div className="text-end mb-4 mr-[80px] -mt-7">
        <Dropdown>
          <DropdownTrigger>
            <Button
              variant="bordered"
              className="capitalize bg-white shadow-md shadow-black text-[12px] font-semibold pl-6 pr-6"
            >
              {selectedValue}{" "}
              <FontAwesomeIcon icon={faCaretDown} className="w-[12px]" />
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            aria-label="Single selection example"
            variant="flat"
            disallowEmptySelection
            selectionMode="single"
            selectedKeys={selectedKeys}
            onSelectionChange={(keys) => setSelectedKeys(keys as Set<string>)}
          >
            <DropdownItem key="Open Library - Bandung">
              Open Library - Bandung
            </DropdownItem>
            <DropdownItem key="Open Library - Jakarta A">
              Open Library - Jakarta A
            </DropdownItem>
            <DropdownItem key="Open Library - Jakarta B">
              Open Library - Jakarta B
            </DropdownItem>
            <DropdownItem key="Open Library - Surabaya">
              Open Library - Surabaya
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>

      {/* Total catalog dan lainnya */}
      <div className="flex gap-4 -ml-4">
        {/* Container co-admins */}
        <div className="bg-white p-2 rounded-lg shadow-md w-[120px] h-[13vh]">
          <h6 className="text-start text-dark-red text-[13px] font-bold gap-2">
            <FontAwesomeIcon icon={faUserGear} className="w-[25px]" />
            Co-Admin
          </h6>
          <h4 className="text-maroon text-center font-bold text-3xl mt-1">
            12
          </h4>
        </div>

        {/* Container Staff */}
        <div className="bg-white p-2 rounded-lg shadow-md w-[120px] h-[13vh]">
          <h6 className="text-start text-dark-red text-[13px] font-bold gap-2">
            <FontAwesomeIcon icon={faUserPen} className="w-[25px]" />
            Staff
          </h6>
          <h4 className="text-maroon text-center font-bold text-3xl mt-1">
            12
          </h4>
        </div>

        {/* Container Lecture */}
        <div className="bg-white p-2 rounded-lg shadow-md w-[120px] h-[13vh]">
          <h6 className="text-start text-dark-red text-[13px] font-bold gap-2">
            <FontAwesomeIcon icon={faUserGroup} className="w-[25px]" />
            Lecture
          </h6>
          <h4 className="text-maroon text-center font-bold text-3xl mt-1">
            12
          </h4>
        </div>

        {/* Container Student */}
        <div className="bg-white p-2 rounded-lg shadow-md w-[120px] h-[13vh]">
          <h6 className="text-start text-dark-red text-[13px] font-bold gap-2">
            <FontAwesomeIcon icon={faUserGraduate} className="w-[25px]" />
            Student
          </h6>
          <h4 className="text-maroon text-center font-bold text-3xl mt-1">
            12
          </h4>
        </div>

        {/* Container Catalog */}
        <div className="bg-white p-2 rounded-lg shadow-md w-[120px] h-[13vh]">
          <h6 className="text-start text-dark-red text-[13px] font-bold gap-2">
            <FontAwesomeIcon icon={faSwatchbook} className="w-[25px]" />
            Catalog
          </h6>
          <h4 className="text-maroon text-center font-bold text-2xl mt-1">
            12,890
          </h4>
        </div>
      </div>
    </div>
  );
}
