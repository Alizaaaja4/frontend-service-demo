import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Input } from "@heroui/input";
import { SearchIcon } from "@/components/icons";
import {
  Avatar,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
} from "@heroui/react";
import ModalSearch from "../modalSearch";
import { faCreditCard } from "@fortawesome/free-regular-svg-icons";

export default function LectureHeader() {
  return (
    <div className="justify-between flex">
      <div className="flex space-x-2">
        <Input
          isClearable
          radius="lg"
          classNames={{
            input: [
              "bg-transparent",
              "text-black/90 dark:text-white/90",
              "placeholder:text-default-700/50 dark:placeholder:text-white/60",
            ],
            innerWrapper: "bg-transparent",
            inputWrapper: [
              "bg-default-200/50",
              "dark:bg-default/60",
              "backdrop-blur-xl",
              "backdrop-saturate-200",
              "hover:bg-default-200/70",
              "dark:hover:bg-default/70",
              "group-data-[focus=true]:bg-default-200/50",
              "dark:group-data-[focus=true]:bg-default/60",
              "!cursor-text",
            ],
          }}
          placeholder="Type to search books"
          startContent={
            <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
          }
        />
        <ModalSearch />
        <Popover placement="right">
          <PopoverTrigger>
            <Button isIconOnly className="bg-red-600 text-white">
              <FontAwesomeIcon icon={faCreditCard} />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div className="px-1 py-2">
              <div className="text-small font-bold">Total Charge:</div>
              <div className="text-tiny">Rp.200.000</div>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <div className="flex space-x-2 items-center">
        <div className="text-right hidden md:block">
          <p className="font-semibold">Nama Orang</p>
          <p className="text-sm">1234567890</p>
        </div>
        <Avatar
          src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          size="md"
        />
      </div>
    </div>
  );
}
