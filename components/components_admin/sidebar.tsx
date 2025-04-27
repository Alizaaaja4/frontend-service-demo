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
import ModalLogout from "@/components/components_admin/modalLogout";
import Tooltip from "./Tooltip";

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

        {/* Icons */}
        <div className="flex flex-col items-center mt-6 space-y-5 text-dark-red">
          <Tooltip text="Account Management">
            <NextLink href="/admin/account-management">
              <FontAwesomeIcon icon={faUser} className="w-[20px] h-[20px]" />
            </NextLink>
          </Tooltip>

          <Tooltip text="Operational Schedule">
            <NextLink href="/admin/operational-schedule">
              <FontAwesomeIcon icon={faClock} className="w-[20px] h-[20px]" />
            </NextLink>
          </Tooltip>

          <Tooltip text="Room Reservations">
            <NextLink href="/admin/room-reservations">
              <FontAwesomeIcon icon={faCalendarAlt} className="w-[20px] h-[20px]" />
            </NextLink>
          </Tooltip>

          <Tooltip text="Daily Reports">
            <NextLink href="/admin/daily-reports">
              <FontAwesomeIcon icon={faClipboardList} className="w-[20px] h-[20px]" />
            </NextLink>
          </Tooltip>

          <Tooltip text="User Feedback">
            <NextLink href="/admin/feedback">
              <FontAwesomeIcon icon={faExclamationCircle} className="w-[20px] h-[20px]" />
            </NextLink>
          </Tooltip>

          <Tooltip text="News & Updates">
            <NextLink href="/admin/news-updates">
              <FontAwesomeIcon icon={faBullhorn} className="w-[20px] h-[20px]" />
            </NextLink>
          </Tooltip>

          <Tooltip text="Catalog Management">
            <NextLink href="/admin/catalog-management">
              <FontAwesomeIcon icon={faBook} className="w-[20px] h-[20px]" />
            </NextLink>
          </Tooltip>

          <Tooltip text="Infografis Management">
            <NextLink href="/admin/infografis-management">
              <FontAwesomeIcon icon={faCameraRetro} className="w-[20px] h-[20px]" />
            </NextLink>
          </Tooltip>
        </div>
      </div>

      {/* Bottom section with logout */}
      <div className="flex flex-col items-center mt-[60px] mb-8">
        <Tooltip text="Logout">
          <ModalLogout />
        </Tooltip>
      </div>
    </div>
  );
};
