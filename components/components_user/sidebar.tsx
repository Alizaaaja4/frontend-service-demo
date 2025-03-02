import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeadset,
  faClockRotateLeft,
  faCircleInfo,
  faBook,
  faSignOutAlt,
  faCaretDown,
  faCaretUp,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import ModalLogout from "./modalLogout";
import React from "react";
import {
  Accordion,
  AccordionItem,
  Avatar,
  Button,
  ScrollShadow,
} from "@heroui/react";
import ModalFeedback from "./modalFeedback";
import ModalInfographic from "./modalInfographic";

export default function Sidebar(props: any) {
  return (
    <ScrollShadow hideScrollBar size={0} className="min-h-full fixed z-50">
      <div className="min-h-full h-screen pb-14">
        {/* Sidebar */}
        <div
          className={`ml-2 md:ml-5 ${props.sidebarOpen ? "w-80" : "w-12"} ease-out duration-300 h-full`}
          onClick={() => props.setSidebarOpen(true)}
        >
          {/* medium or larger mode */}
          <div className="flex-col justify-between bg-dark-red shadow-lg shadow-gray-400 rounded-lg mt-8 min-h-full pb-5 flex">
            {/* Top section with logo and icons */}
            <div className=" flex-col">
              {/* Logo */}
              <div className={`${props.sidebarOpen ? "px-3" : ""} p-1`}>
                <div className="bg-white rounded-xl mt-3">
                  {props.sidebarOpen ? (
                    <div className="flex justify-between items-center">
                      <img
                        src="/assets/logo/logo_oplib-teks.svg"
                        alt="Logo"
                        className="h-[40px] p-1 pl-1.5"
                      />
                      <Button onPress={() => props.setSidebarOpen(false)} variant="light" isIconOnly>
                        <FontAwesomeIcon className="text-dark-red" icon={faXmark} />
                      </Button>
                    </div>
                  ) : (
                    <img
                      src="/assets/logo/logo_oplib.svg"
                      alt="Logo"
                      className="w-[40px] p-1 mt-6"
                    />
                  )}
                </div>
              </div>
              {props.sidebarOpen ? (
                <div className="mt-4 mx-2 ">
                  <Accordion
                    showDivider={false}
                    selectionMode="multiple"
                    className="space-y-1 text-white"
                  >
                    <AccordionItem
                      key="1"
                      aria-label="Catalog"
                      indicator={({ isOpen }) => (
                        <FontAwesomeIcon
                          icon={isOpen ? faCaretUp : faCaretDown}
                          className="text-white"
                        />
                      )}
                      startContent={
                        <FontAwesomeIcon
                          icon={faBook}
                          className="w-[20px] h-[20px] "
                        />
                      }
                      isCompact
                      title={
                        <p className="text-white font-semibold">Catalog</p>
                      }
                    >
                      <div className="text-sm pl-6 text-white flex flex-col space-y-2">
                        <NextLink
                          href="/user/books"
                          className="rounded-lg hover:bg-white pl-2 duration-200"
                        >
                          <p className="hover:text-dark-red">Books</p>
                        </NextLink>
                        <NextLink
                          href="/user/journals"
                          className="rounded-lg hover:bg-white pl-2 duration-200"
                        >
                          <p className="hover:text-dark-red">Journals</p>
                        </NextLink>
                      </div>
                    </AccordionItem>
                    <AccordionItem
                      key="2"
                      aria-label="Services"
                      indicator={({ isOpen }) => (
                        <FontAwesomeIcon
                          icon={isOpen ? faCaretUp : faCaretDown}
                          className="text-white"
                        />
                      )}
                      startContent={
                        <FontAwesomeIcon
                          icon={faHeadset}
                          className="w-[20px] h-[20px] "
                        />
                      }
                      isCompact
                      title={
                        <p className="text-white font-semibold">Services</p>
                      }
                    >
                      <div className="text-sm pl-6 text-white flex flex-col space-y-2">
                        <NextLink
                          href="/user/books"
                          className="rounded-lg hover:bg-white pl-2 duration-200"
                        >
                          <p className="hover:text-dark-red">OLAFA</p>
                        </NextLink>
                        <NextLink
                          href="/user/room-reservation"
                          className="rounded-lg hover:bg-white pl-2 duration-200"
                        >
                          <p className="hover:text-dark-red">
                            Room Reservation
                          </p>
                        </NextLink>

                        <NextLink
                          href="/user/journal-upload"
                          className="rounded-lg hover:bg-white pl-2 duration-200"
                        >
                          <p className="hover:text-dark-red">Upload Journal</p>
                        </NextLink>
                        <NextLink
                          href="/user/lecture-book-upload"
                          className="rounded-lg hover:bg-white pl-2 duration-200"
                        >
                          <p className="hover:text-dark-red">
                            Upload Lecture's Book
                          </p>
                        </NextLink>
                        <NextLink
                          href="/user/journals"
                          className="rounded-lg hover:bg-white pl-2 duration-200"
                        >
                          <p className="hover:text-dark-red">
                            Assistive Technology Service
                          </p>
                        </NextLink>
                      </div>
                    </AccordionItem>
                    <AccordionItem
                      key="3"
                      aria-label="Infographics"
                      indicator={({ isOpen }) => (
                        <FontAwesomeIcon
                          icon={isOpen ? faCaretUp : faCaretDown}
                          className="text-white"
                        />
                      )}
                      startContent={
                        <FontAwesomeIcon
                          icon={faCircleInfo}
                          className="w-[20px] h-[20px] "
                        />
                      }
                      isCompact
                      title={
                        <p className="text-white font-semibold">Infographics</p>
                      }
                    >
                      <div className="text-sm pl-6 text-white flex flex-col space-y-2">
                        {/* test */}
                        <ModalInfographic
                          name={"Books Borrowing"}
                          imgURL={
                            "/assets/image/kampus-jakartaA.png,/assets/image/kampus-surabaya.png"
                          }
                        />
                        <NextLink
                          href="/user/journals"
                          className="rounded-lg hover:bg-white pl-2 duration-200"
                        >
                          <p className="hover:text-dark-red">Book Returning</p>
                        </NextLink>
                        <NextLink
                          href="/user/journals"
                          className="rounded-lg hover:bg-white pl-2 duration-200"
                        >
                          <p className="hover:text-dark-red">
                            Online Book Renewal
                          </p>
                        </NextLink>
                        <NextLink
                          href="/user/journals"
                          className="rounded-lg hover:bg-white pl-2 duration-200"
                        >
                          <p className="hover:text-dark-red">
                            Room Reservation
                          </p>
                        </NextLink>
                        <NextLink
                          href="/user/journals"
                          className="rounded-lg hover:bg-white pl-2 duration-200"
                        >
                          <p className="hover:text-dark-red">
                            Online Journal Access
                          </p>
                        </NextLink>
                        <NextLink
                          href="/user/journals"
                          className="rounded-lg hover:bg-white pl-2 duration-200"
                        >
                          <p className="hover:text-dark-red">E-Book Access</p>
                        </NextLink>
                        <NextLink
                          href="/user/books"
                          className="rounded-lg hover:bg-white pl-2 duration-200"
                        >
                          <p className="hover:text-dark-red">
                            Library Clearance Certificate Procedure (SKBP)
                          </p>
                        </NextLink>
                        <NextLink
                          href="/user/journals"
                          className="rounded-lg hover:bg-white pl-2 duration-200"
                        >
                          <p className="hover:text-dark-red">Upload Journal</p>
                        </NextLink>
                        <NextLink
                          href="/user/journals"
                          className="rounded-lg hover:bg-white pl-2 duration-200"
                        >
                          <p className="hover:text-dark-red">
                            Upload Journal Requirements
                          </p>
                        </NextLink>
                        <NextLink
                          href="/user/journals"
                          className="rounded-lg hover:bg-white pl-2 duration-200"
                        >
                          <p className="hover:text-dark-red">
                            Upload Lecture's Book
                          </p>
                        </NextLink>
                        <NextLink
                          href="/user/journals"
                          className="rounded-lg hover:bg-white pl-2 duration-200"
                        >
                          <p className="hover:text-dark-red">
                            Assistive Technology Service
                          </p>
                        </NextLink>
                      </div>
                    </AccordionItem>
                    <AccordionItem
                      key="4"
                      aria-label="History"
                      indicator={({ isOpen }) => (
                        <FontAwesomeIcon
                          icon={isOpen ? faCaretUp : faCaretDown}
                          className="text-white"
                        />
                      )}
                      startContent={
                        <FontAwesomeIcon
                          icon={faClockRotateLeft}
                          className="w-[20px] h-[20px] "
                        />
                      }
                      isCompact
                      title={
                        <p className="text-white font-semibold">History</p>
                      }
                    >
                      <div className="text-sm pl-6 text-white flex flex-col space-y-2">
                        <NextLink
                          href="/user/history"
                          className="rounded-lg hover:bg-white pl-2 duration-200"
                        >
                          <p className="hover:text-dark-red">
                            Activity History
                          </p>
                        </NextLink>
                      </div>
                    </AccordionItem>
                  </Accordion>
                </div>
              ) : (
                <div className="flex flex-col mt-6 space-y-5 text-white items-center">
                  <div className="relative group">
                    <FontAwesomeIcon
                      icon={faBook}
                      className="w-[20px] h-[20px] "
                    />
                    <span className="absolute left-10 top-1/2 transform -translate-y-1/2 hidden group-hover:block bg-white text-dark-red text-xs font-semibold px-2 py-1 rounded-lg whitespace-nowrap">
                      Catalog
                    </span>
                  </div>

                  <div className="relative group">
                    <FontAwesomeIcon
                      icon={faHeadset}
                      className="w-[20px] h-[20px] "
                    />
                    <span className="absolute left-10 top-1/2 transform -translate-y-1/2 hidden group-hover:block bg-white text-dark-red text-xs font-semibold px-2 py-1 rounded-lg whitespace-nowrap">
                      Services
                    </span>
                  </div>

                  <div className="relative group">
                    <FontAwesomeIcon
                      icon={faCircleInfo}
                      className="w-[20px] h-[20px] "
                    />
                    <span className="absolute left-10 top-1/2 transform -translate-y-1/2 hidden group-hover:block bg-white text-dark-red text-xs font-semibold px-2 py-1 rounded-lg whitespace-nowrap">
                      Infographics
                    </span>
                  </div>

                  <div className="relative group">
                    <FontAwesomeIcon
                      icon={faClockRotateLeft}
                      className="w-[20px] h-[20px] "
                    />
                    <span className="absolute left-10 top-1/2 transform -translate-y-1/2 hidden group-hover:block bg-white text-dark-red text-xs font-semibold px-2 py-1 rounded-lg whitespace-nowrap">
                      History
                    </span>
                  </div>
                </div>
              )}
              {/* Icons with text on hover */}
            </div>
            <div className="">
              {/* Bottom section with logout icon */}
              {props.sidebarOpen ? (
                <div className="flex justify-between items-end mt-[60px] mr-2">
                  <div>
                    <ModalFeedback />
                  </div>
                  <div className="relative group">
                    <ModalLogout openstat={props.sidebarOpen} />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center mt-[60px]">
                  <div className="relative group">
                    <ModalLogout openstat={props.sidebarOpen} />
                    <span className="absolute left-12 top-1/2 transform -translate-y-1/2 hidden group-hover:block bg-white text-dark-red text-xs font-semibold px-2 py-1 rounded-lg whitespace-nowrap">
                      Logout
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
          {/*  up to medium mode */}

          <div className="h-20"></div>
        </div>
      </div>
    </ScrollShadow>
  );
}
