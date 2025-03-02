import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faClock,
  faCalendarAlt,
  faClipboardList,
  faExclamationCircle,
  faBullhorn,
  faBook,
  faCameraRetro,
} from "@fortawesome/free-solid-svg-icons";
import ModalLogout  from "@/components/components_admin/modalLogout"

export const Sidebar = () => {
  return (
    <div className="flex flex-col justify-between bg-white shadow-lg shadow-gray-400 rounded-lg mt-8 h-full z-50">
      {/* Top section with logo and icons */}
      <div className="flex flex-col items-center">
        {/* Logo */}
        <NextLink href="/admin" className="p-1 items-center">
          <img
            src="/assets/logo/logo_oplib.svg"
            alt="Logo"
            className="w-[40px] p-1 mt-6"
          />
        </NextLink>

        {/* Icons with text on hover */}
        <div className="flex flex-col items-center mt-6 space-y-5 text-dark-red">
          <div className="relative group">
            <NextLink href="/admin/account-management">
              <FontAwesomeIcon icon={faUser} className="w-[20px] h-[20px] " />
            </NextLink>
            <span className="absolute left-10 top-1/2 transform -translate-y-1/2 hidden group-hover:block bg-dark-red text-white text-xs font-semibold px-2 py-1 rounded-lg whitespace-nowrap">
              Account Management
            </span>
          </div>

          <div className="relative group">
            <NextLink href="/admin/operational-schedule">
              <FontAwesomeIcon icon={faClock} className="w-[20px] h-[20px] " />
            </NextLink>
            <span className="absolute left-10 top-1/2 transform -translate-y-1/2 hidden group-hover:block bg-dark-red text-white text-xs font-semibold px-2 py-1 rounded-lg whitespace-nowrap">
              Operational Schedule
            </span>
          </div>

          <div className="relative group">
          <NextLink href="/admin/room-reservations">
            <FontAwesomeIcon icon={faCalendarAlt} className="w-[20px] h-[20px] "/>
          </NextLink>
            <span className="absolute left-10 top-1/2 transform -translate-y-1/2 hidden group-hover:block bg-dark-red text-white text-xs font-semibold px-2 py-1 rounded-lg whitespace-nowrap">
              Room Reservations
            </span>
          </div>

          <div className="relative group">
          <NextLink href="/admin/daily-reports">
            <FontAwesomeIcon icon={faClipboardList} className="w-[20px] h-[20px] "/>
          </NextLink>
            <span className="absolute left-10 top-1/2 transform -translate-y-1/2 hidden group-hover:block bg-dark-red text-white text-xs font-semibold px-2 py-1 rounded-lg whitespace-nowrap">
              Daily Reports
            </span>
          </div>

          <div className="relative group">
            <NextLink href="/admin/feedback">
              <FontAwesomeIcon icon={faExclamationCircle} className="w-[20px] h-[20px] "/>
            </NextLink>
            <span className="absolute left-10 top-1/2 transform -translate-y-1/2 hidden group-hover:block bg-dark-red text-white text-xs font-semibold px-2 py-1 rounded-lg whitespace-nowrap">
              User Feedback
            </span>
          </div>

          <div className="relative group">
            <NextLink href="/admin/news-updates" >
              <FontAwesomeIcon icon={faBullhorn} className="w-[20px] h-[20px] " />
            </NextLink>
            <span className="absolute left-10 top-1/2 transform -translate-y-1/2 hidden group-hover:block bg-dark-red text-white text-xs font-semibold px-2 py-1 rounded-lg whitespace-nowrap">
              News & Updates
            </span>
          </div>

          <div className="relative group">
            <NextLink href="/admin/catalog-management">
              <FontAwesomeIcon icon={faBook} className="w-[20px] h-[20px] " />
            </NextLink>
            <span className="absolute left-10 top-1/2 transform -translate-y-1/2 hidden group-hover:block bg-dark-red text-white text-xs font-semibold px-2 py-1 rounded-lg whitespace-nowrap">
              Catalog Management
            </span>
          </div>

          <div className="relative group">
            <NextLink href="/admin/infografis-management">
              <FontAwesomeIcon icon={faCameraRetro} className="w-[20px] h-[20px] " />
            </NextLink>
            <span className="absolute left-10 top-1/2 transform -translate-y-1/2 hidden group-hover:block bg-dark-red text-white text-xs font-semibold px-2 py-1 rounded-lg whitespace-nowrap">
              Infografis Management
            </span>
          </div>
        </div>
      </div>

      {/* Bottom section with logout icon */}
      <div className="flex flex-col items-center mt-[60px] mb-8">
        <div className="relative group">
          <ModalLogout />
          <span className="absolute left-12 top-1/2 transform -translate-y-1/2 hidden group-hover:block bg-dark-red text-white text-xs font-semibold px-2 py-1 rounded-lg whitespace-nowrap">
            Logout
          </span>
        </div>
      </div>
    </div>
  );
};
