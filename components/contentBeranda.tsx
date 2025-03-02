import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare, faBook, faBookJournalWhills, faNewspaper } from "@fortawesome/free-solid-svg-icons";

export const ContentBeranda = () => {
  return (
    <div>
      {/* welcome image */}
      <div className="relative bg-[url('/assets/image/tultbandung.svg')] bg-cover bg-center bg-no-repeat w-full h-[60vh] flex items-center justify-center rounded-md shadow-lg overflow-hidden group">
        <div className="absolute inset-0 bg-black backdrop-blur-sm transition-all duration-500 ease-in-out bg-opacity-30"></div>
        <div className="relative z-10 p-6 text-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 animate-fadeInUp">
            Welcome to the Open Library
          </h1>
          <h2 className="text-white text-2xl md:text-3xl font-semibold animate-fadeInUp delay-200">
            Telkom University
          </h2>
        </div>
      </div>

      {/* content book */}
      <div className="mt-7 mb-5">
        <div className="flex justify-between">
          <h2 className="flex text-maroon font-semibold text-2xl underline decoration-maroon underline-offset-2 gap-2">
            <FontAwesomeIcon icon={faBook} className='w-[25px] mt-[6px]' />Books
          </h2>
          <NextLink
            href="/landing/catalog/books"
            className="text-dark-red hover:text-maroon hover:underline hover:decoration-maroon hover:underline-offset-2 font-semibold text-md -mb-7"
          >
            Show all
          </NextLink>
        </div>
        <div className="grid grid-cols-2 place-items-center md:grid-cols-9 bg-white-pucat rounded-md mt-4 p-3 gap-5 shadow-lg">
          <img
            src="/assets/image/cover buku.svg"
            alt="cover buku 1"
            className="transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/assets/image/cover buku2.svg"
            alt="cover buku 2"
            className="transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/assets/image/cover buku3.svg"
            alt="cover buku 3"
            className="transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/assets/image/cover buku.svg"
            alt="cover buku 1"
            className="transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/assets/image/cover buku2.svg"
            alt="cover buku 2"
            className="transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/assets/image/cover buku3.svg"
            alt="cover buku 3"
            className="transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/assets/image/cover buku.svg"
            alt="cover buku 1"
            className="transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/assets/image/cover buku2.svg"
            alt="cover buku 2"
            className="transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/assets/image/cover buku3.svg"
            alt="cover buku 3"
            className="transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>

      {/* content karya ilmiah */}
      <div className="mt-8 mb-5">
        <div className="flex justify-between">
          <h2 className="flex text-maroon font-semibold text-2xl underline decoration-maroon underline-offset-2 gap-2">
            <FontAwesomeIcon icon={faBookJournalWhills} className="w-[25px] mt-[6px]"/>Journals
          </h2>
          <NextLink
            href="/landing/catalog/journals"
            className="text-dark-red hover:text-maroon hover:underline hover:decoration-maroon hover:underline-offset-2 font-semibold text-md -mb-7"
          >
            Show all
          </NextLink>
        </div>
        <div className="grid grid-cols-2 place-items-center md:grid-cols-9 bg-white-pucat rounded-md mt-4 p-3 gap-5 shadow-lg">
          <img
            src="/assets/image/cover buku journal.svg"
            alt="cover buku 1"
            className="transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/assets/image/cover buku journal.svg"
            alt="cover buku 2"
            className="transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/assets/image/cover buku journal.svg"
            alt="cover buku 3"
            className="transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/assets/image/cover buku journal.svg"
            alt="cover buku 1"
            className="transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/assets/image/cover buku journal.svg"
            alt="cover buku 2"
            className="transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/assets/image/cover buku journal.svg"
            alt="cover buku 3"
            className="transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/assets/image/cover buku journal.svg"
            alt="cover buku 1"
            className="transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/assets/image/cover buku journal.svg"
            alt="cover buku 2"
            className="transition-transform duration-300 hover:scale-110"
          />
          <img
            src="/assets/image/cover buku journal.svg"
            alt="cover buku 3"
            className="transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>

      {/* content recent news */}
      <div className="mt-8 mb-10">
        <h2 className="flex text-maroon font-semibold text-2xl underline decoration-maroon underline-offset-2 gap-2">
          <FontAwesomeIcon icon={faNewspaper} className="w-[25px] mt-[6px]"/> Recent News
        </h2>
        <div>
          {/* layer 1 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 rounded-md mt-4 p-3">
            {/* news 1 */}
            <div className="relative group">
              <img
                src="/assets/image/news1.png"
                alt="cover news 1"
                className="h-[250px] w-full"
              />
              <div className="absolute inset-0 p-3 bg-black flex flex-col justify-end bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-white text-lg font-semibold">
                  Telkom memiliki cabang baru
                </h4>
                <p className="text-white text-sm mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  labore dicta, explicabo adipisci placeat nostrum odit. Optio
                  repudiandae laborum ab molestiae incidunt deserunt eos eveniet
                  quae excepturi! Rem, eos laborum.
                </p>
                <div className="flex justify-end">
                  <NextLink
                    href="/landing/news"
                    className="flex text-white text-[16px] text-end pb-2 pr-2 mt-4 gap-1 hover:underline hover:underline-dodger-blue"
                  >
                    <FontAwesomeIcon
                      icon={faUpRightFromSquare}
                      className="w-[15px]"
                    />
                    Visit
                  </NextLink>
                </div>
              </div>
            </div>

            {/* news 2 */}
            <div className="relative group">
              <img
                src="/assets/image/news2.png"
                alt="cover news 2"
                className="h-[250px] w-full"
              />
              <div className="absolute inset-0 p-3 bg-black flex flex-col justify-end bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-white text-lg font-semibold">
                  Telkom memiliki cabang baru
                </h4>
                <p className="text-white text-sm mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  labore dicta, explicabo adipisci placeat nostrum odit. Optio
                  repudiandae laborum ab molestiae incidunt deserunt eos eveniet
                  quae excepturi! Rem, eos laborum.
                </p>
                <div className="flex justify-end">
                  <NextLink
                    href="/landing/news"
                    className="flex text-white text-[16px] text-end pb-2 pr-2 mt-4 gap-1 hover:underline hover:underline-dodger-blue"
                  >
                    <FontAwesomeIcon
                      icon={faUpRightFromSquare}
                      className="w-[15px]"
                    />
                    Visit
                  </NextLink>
                </div>
              </div>
            </div>
          </div>

          {/* layer 2 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-2 rounded-md mt-1 p-2">
            {/* news 3 */}
            <div className="relative group">
              <img
                src="/assets/image/news3.png"
                alt="cover news 3"
                className="h-[180px] w-full"
              />
              <div className="absolute inset-0 p-3 bg-black flex flex-col justify-end bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-white text-md font-semibold">
                  Telkom memiliki cabang baru
                </h4>
                <p className="text-white text-[10px] mt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  labore dicta, explicabo adipisci placeat nostrum odit. Optio
                  repudiandae laborum ab molestiae incidunt deserunt eos eveniet
                  quae excepturi! Rem, eos laborum.
                </p>
                <div className="flex justify-end">
                  <NextLink
                    href="/landing/news"
                    className="flex text-white text-[16px] text-end pb-2 pr-2 mt-4 gap-1 hover:underline hover:underline-dodger-blue"
                  >
                    <FontAwesomeIcon
                      icon={faUpRightFromSquare}
                      className="w-[15px]"
                    />
                    Visit
                  </NextLink>
                </div>
              </div>
            </div>

            {/* news 4 */}
            <div className="relative group">
              <img
                src="/assets/image/news4.png"
                alt="cover news 4"
                className="h-[180px] w-full"
              />
              <div className="absolute inset-0 p-3 bg-black flex flex-col justify-end bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-white text-md font-semibold">
                  Telkom memiliki cabang baru
                </h4>
                <p className="text-white text-[10px] mt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  labore dicta, explicabo adipisci placeat nostrum odit. Optio
                  repudiandae laborum ab molestiae incidunt deserunt eos eveniet
                  quae excepturi! Rem, eos laborum.
                </p>
                <div className="flex justify-end">
                  <NextLink
                    href="/landing/news"
                    className="flex text-white text-[16px] text-end pb-2 pr-2 mt-4 gap-1 hover:underline hover:underline-dodger-blue"
                  >
                    <FontAwesomeIcon
                      icon={faUpRightFromSquare}
                      className="w-[15px]"
                    />
                    Visit
                  </NextLink>
                </div>
              </div>
            </div>

            {/* news 5*/}
            <div className="relative group">
              <img
                src="/assets/image/news5.png"
                alt="cover news 5"
                className="h-[180px] w-full"
              />
              <div className="absolute inset-0 p-3 bg-black flex flex-col justify-end bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <h4 className="text-white text-md font-semibold">
                  Telkom memiliki cabang baru
                </h4>
                <p className="text-white text-[10px] mt-1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  labore dicta, explicabo adipisci placeat nostrum odit. Optio
                  repudiandae laborum ab molestiae incidunt deserunt eos eveniet
                  quae excepturi! Rem, eos laborum.
                </p>
                <div className="flex justify-end">
                  <NextLink
                    href="/landing/news"
                    className="flex text-white text-[16px] text-end pb-2 pr-2 mt-4 gap-1 hover:underline hover:underline-dodger-blue"
                  >
                    <FontAwesomeIcon
                      icon={faUpRightFromSquare}
                      className="w-[15px]"
                    />
                    Visit
                  </NextLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
