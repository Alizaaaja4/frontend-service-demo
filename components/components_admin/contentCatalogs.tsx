import NextLink from "next/link";
import ModalAddCatalogs from "./modalAddCatalog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faJournalWhills,
  faSwatchbook,
} from "@fortawesome/free-solid-svg-icons";

export default function ContentCatalogs() {
  return (
    <section className="bg-white shadow-md shadow-gray-600 rounded-lg p-5">
      {/* Popular Section */}
      <div>
        <div className="flex justify-between">
          <h4 className="flex gap-2 text-dark-red text-xl font-bold items-center underline">
            <FontAwesomeIcon icon={faSwatchbook} className="w-[17px]" />
            Populer
          </h4>
          <span className="-mr-2">
            <ModalAddCatalogs />
          </span>
        </div>

        {/* Collection of Popular Books */}
        <div className="grid grid-cols-2 md:grid-cols-9 bg-white-pucat rounded-md mt-4 p-2 gap-5 shadow-lg items-center">
          <img
            src="/assets/image/cover buku.svg"
            alt="cover buku 1"
            className="h-[160px] transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/assets/image/cover buku journal.svg"
            alt="cover buku 2"
            className="h-[160px] transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/assets/image/cover buku journal.svg"
            alt="cover buku 3"
            className="h-[160px] transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/assets/image/cover buku.svg"
            alt="cover buku 4"
            className="h-[160px] transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/assets/image/cover buku2.svg"
            alt="cover buku 5"
            className="h-[160px] transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/assets/image/cover buku3.svg"
            alt="cover buku 6"
            className="h-[160px] transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/assets/image/cover buku journal.svg"
            alt="cover buku 7"
            className="h-[160px] transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/assets/image/cover buku journal.svg"
            alt="cover buku 8"
            className="h-[160px] transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/assets/image/cover buku2.svg"
            alt="cover buku 5"
            className="h-[160px] transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>

      {/* book section */}
      <div className="mt-8">
        <div className="flex justify-between">
          <h4 className="flex gap-2 text-dark-red text-xl font-bold items-center underline">
            <FontAwesomeIcon icon={faBook} className="w-[17px]" />
            Books
          </h4>
          <NextLink href="/admin/catalog-management/books">
            <h5 className="text-dark-red font-semibold items-center justify-center hover:text-maroon hover:underline hover:underline-maroon">
              Show all
            </h5>
          </NextLink>
        </div>

        {/* Collection of Popular Books */}
        <div className="grid grid-cols-2 md:grid-cols-9 bg-white-pucat rounded-md mt-4 p-2 gap-5 shadow-lg items-center">
          <img
            src="/assets/image/cover buku.svg"
            alt="cover buku 1"
            className="h-[160px] transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/assets/image/cover buku2.svg"
            alt="cover buku 2"
            className="h-[160px] transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/assets/image/cover buku3.svg"
            alt="cover buku 3"
            className="h-[160px] transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/assets/image/cover buku.svg"
            alt="cover buku 1"
            className="h-[160px] transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/assets/image/cover buku2.svg"
            alt="cover buku 2"
            className="h-[160px] transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/assets/image/cover buku3.svg"
            alt="cover buku 3"
            className="h-[160px] transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/assets/image/cover buku.svg"
            alt="cover buku 1"
            className="h-[160px] transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/assets/image/cover buku2.svg"
            alt="cover buku 2"
            className="h-[160px] transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/assets/image/cover buku3.svg"
            alt="cover buku 3"
            className="h-[160px] transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>

      {/* journal section */}
      <div className="mt-8">
        <div className="flex justify-between">
          <h4 className="flex gap-2 text-dark-red text-xl font-bold items-center underline">
            <FontAwesomeIcon icon={faJournalWhills} className="w-[17px]" />{" "}
            Journals
          </h4>
          <NextLink href="/admin/catalog-management/journals">
            <h5 className="text-dark-red font-semibold items-center justify-center hover:text-maroon hover:underline hover:underline-maroon">
              Show all
            </h5>
          </NextLink>
        </div>

        {/* Collection of Popular Books */}
        <div className="grid grid-cols-2 md:grid-cols-9 bg-white-pucat rounded-md mt-4 p-2 gap-5 shadow-lg items-center">
          <img
            src="/assets/image/cover buku journal.svg"
            alt="cover buku 1"
            className="h-[160px] transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/assets/image/cover buku journal.svg"
            alt="cover buku 2"
            className="h-[160px] transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/assets/image/cover buku journal.svg"
            alt="cover buku 3"
            className="h-[160px] transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/assets/image/cover buku journal.svg"
            alt="cover buku 1"
            className="h-[160px] transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/assets/image/cover buku journal.svg"
            alt="cover buku 2"
            className="h-[160px] transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/assets/image/cover buku journal.svg"
            alt="cover buku 3"
            className="h-[160px] transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/assets/image/cover buku journal.svg"
            alt="cover buku 1"
            className="h-[160px] transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/assets/image/cover buku journal.svg"
            alt="cover buku 2"
            className="h-[160px] transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/assets/image/cover buku journal.svg"
            alt="cover buku 3"
            className="h-[160px] transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
    </section>
  );
}
