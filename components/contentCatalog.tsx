import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare, faBook, faBookJournalWhills, faCalendarPlus } from "@fortawesome/free-solid-svg-icons";

export const ContentCatalog = () => {

    // Assuming you have the counts for new releases, books, and journals
  const newReleasesCount = 20;
  const booksCount = 1130;
  const journalsCount = 1815;
  const totalCount = newReleasesCount + booksCount + journalsCount;

    return (
      <section>
        {/* total catalogs */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
          <div className="bg-gradient-to-r from-maroon via-dark-red to-red-600 p-4 rounded-lg text-white shadow-md shadow-black">
            <h4 className="text-sm">Total Items</h4>
            <h2 className="text-2xl font-bold">{totalCount}+</h2>
          </div>
          <div className="bg-gradient-to-r from-maroon via-dark-red to-red-600 p-4 rounded-lg text-white shadow-md shadow-black">
            <h4 className="text-sm">New Releases</h4>
            <h2 className="text-2xl font-bold">{newReleasesCount}+</h2>
          </div>
          <div className="bg-gradient-to-r from-maroon via-dark-red to-red-600 p-4 rounded-lg text-white shadow-md shadow-black">
            <h4 className="text-sm">Books</h4>
            <h2 className="text-2xl font-bold">{booksCount}+</h2>
          </div>
          <div className="bg-gradient-to-r from-maroon via-dark-red to-red-600 p-4 rounded-lg text-white shadow-md shadow-black">
            <h4 className="text-sm">Journals</h4>
            <h2 className="text-2xl font-bold">{journalsCount}+</h2>
          </div>
        </div>
        {/* content recent news*/}
        <div className="mt-11 mb-5">
            <div className="flex">
                <h2 className="flex text-maroon font-semibold text-2xl underline decoration-maroon underline-offset-2 gap-2">
                    <FontAwesomeIcon icon={faCalendarPlus} className='w-[25px] mt-[6px]'/>New Releases</h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-9 bg-white-pucat rounded-md mt-4 p-3 gap-5 shadow-lg">
                <img 
                    src="/assets/image/cover buku journal.svg" 
                    alt="cover buku 1" 
                    className="transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku2.svg" 
                    alt="cover buku 2" 
                    className="transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku journal.svg" 
                    alt="cover buku 1" 
                    className="transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku journal.svg" 
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
                    src="/assets/image/cover buku journal.svg" 
                    alt="cover buku 1" 
                    className="transition-transform duration-300 hover:scale-110"
                />
                <img 
                    src="/assets/image/cover buku3.svg" 
                    alt="cover buku 3" 
                    className="transition-transform duration-300 hover:scale-110"
                />
            </div>
        </div>

        {/* content book */}
        <div className="mt-8 mb-5">
            <div className="flex justify-between">
                <h2 className="flex text-maroon font-semibold text-2xl underline decoration-maroon underline-offset-2 gap-2">
                    <FontAwesomeIcon icon={faBook} className='w-[25px] mt-[6px]' />Books</h2>
                <NextLink href="/landing/catalog/books" className="text-dark-red hover:text-maroon hover:underline hover:decoration-maroon hover:underline-offset-2 font-semibold text-md -mb-7">
                    show all
                </NextLink>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-9 bg-white-pucat rounded-md mt-4 p-3 gap-5 shadow-lg">
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
        <div className="mt-8 mb-12">
            <div className="flex justify-between">
                <h2 className="flex text-maroon font-semibold text-2xl underline decoration-maroon underline-offset-2 gap-2">
                    <FontAwesomeIcon icon={faBookJournalWhills} className="w-[25px] mt-[6px]"/>Journals</h2>
                <NextLink href="/landing/catalog/journals" className="text-dark-red hover:text-maroon hover:underline hover:decoration-maroon hover:underline-offset-2 font-semibold text-md -mb-7">
                    show all
                </NextLink>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-9 bg-white-pucat rounded-md mt-4 p-3 gap-5 shadow-lg">
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

      </section>
    );
  };
  