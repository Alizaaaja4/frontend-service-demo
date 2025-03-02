import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFire,
  faBook,
  faBookJournalWhills,
} from "@fortawesome/free-solid-svg-icons";

export const LectureHome = () => {
  return (
    <div className="space-y-5">
      {/* welcome image */}
      <div className="relative bg-[url('/assets/image/kampus-surabaya.png')] bg-cover bg-center bg-no-repeat w-full h-[60vh] flex items-center justify-center rounded-md shadow-lg overflow-hidden group shadow-gray-400">
        <div className="absolute inset-0 bg-black backdrop-blur-sm transition-all duration-500 ease-in-out bg-opacity-30"></div>
        <div className="relative z-10 p-6 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 animate-fadeInUp">
            Hi, Made Satya Yudha Prawira
          </h1>
          <p className="text-white text-sm animate-fadeInUp delay-200">
            The library serves as a welcoming home for knowledge seekers and
            avid readers alike
          </p>
        </div>
      </div>

      <div className="rounded-lg bg-dark-red p-5 shadow-lg shadow-gray-400">
        {/* content popular */}
        <div className="mt-7 mb-5">
          <div className="flex justify-between">
            <h2 className="flex text-white font-semibold text-2xl underline decoration-white underline-offset-2 gap-2">
              <FontAwesomeIcon icon={faFire} className="w-[25px] mt-[6px]" />
              Popular
            </h2>
            <NextLink
              href="/user/books"
              className="text-white hover:text-white hover:underline hover:decoration-white hover:underline-offset-2 font-semibold text-md -mb-7"
            >
              Show all
            </NextLink>
          </div>
          <div className="grid grid-cols-2 place-items-center md:grid-cols-9 bg-white-pucat rounded-md mt-4 p-3 gap-5 shadow-lg">
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
        {/* content book */}
        <div className="mt-7 mb-5">
          <div className="flex justify-between">
            <h2 className="flex text-white font-semibold text-2xl underline decoration-white underline-offset-2 gap-2">
              <FontAwesomeIcon icon={faBook} className="w-[25px] mt-[6px]" />
              Books
            </h2>
            <NextLink
              href="/user/books"
              className="text-white hover:text-white hover:underline hover:decoration-white hover:underline-offset-2 font-semibold text-md -mb-7"
            >
              Show all
            </NextLink>
          </div>
          <div className="grid grid-cols-2 place-items-center md:grid-cols-9 bg-white-pucat rounded-md mt-4 p-3 gap-5 shadow-lg">
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

        {/* content karya ilmiah */}
        <div className="mt-8 mb-5">
          <div className="flex justify-between">
            <h2 className="flex text-white font-semibold text-2xl underline decoration-white underline-offset-2 gap-2">
              <FontAwesomeIcon
                icon={faBookJournalWhills}
                className="w-[25px] mt-[6px]"
              />
              Journals
            </h2>
            <NextLink
              href="/user/journals"
              className="text-white hover:text-white hover:underline hover:decoration-white hover:underline-offset-2 font-semibold text-md -mb-7"
            >
              Show all
            </NextLink>
          </div>
          <div className="grid grid-cols-2 place-items-center md:grid-cols-9 bg-white-pucat rounded-md mt-4 p-3 gap-5 shadow-lg">
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
      </div>
    </div>
  );
};
