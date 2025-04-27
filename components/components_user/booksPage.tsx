import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faUser,
  faTags,
  faBullhorn,
  faBookBookmark,
} from "@fortawesome/free-solid-svg-icons";
import { Pagination } from "@heroui/react";

// Sample book data
const books = [
  {
    cover: "/assets/image/cover buku.svg",
    code: "24.01.698",
    title: "ANALISIS DAN MITIGASI RISIKO DALAM PROSES PENGADAAN..",
    author: "DIVAZANNA ILLARITZQI",
    university:
      "Universitas Telkom, S1 Teknik Industri - Kampus Surabaya, 2024",
    classification:
      "658 - General management, General business management, General industrial management",
    category: "Karya Ilmiah - Skripsi (S1) - Reference - Non-Sirkulasi",
    additionalCategory: "Procurement",
  },
  {
    cover: "/assets/image/cover buku2.svg",
    code: "24.01.699",
    title: "ANALISIS DAN MITIGASI RISIKO DALAM PROSES PENGADAAN..",
    author: "DIVAZANNA ILLARITZQI",
    university:
      "Universitas Telkom, S1 Teknik Industri - Kampus Surabaya, 2024",
    classification:
      "658 - General management, General business management, General industrial management",
    category: "Karya Ilmiah - Skripsi (S1) - Reference - Non-Sirkulasi",
    additionalCategory: "Procurement",
  },
  {
    cover: "/assets/image/cover buku.svg",
    code: "24.01.698",
    title: "ANALISIS DAN MITIGASI RISIKO DALAM PROSES PENGADAAN..",
    author: "DIVAZANNA ILLARITZQI",
    university:
      "Universitas Telkom, S1 Teknik Industri - Kampus Surabaya, 2024",
    classification:
      "658 - General management, General business management, General industrial management",
    category: "Karya Ilmiah - Skripsi (S1) - Reference - Non-Sirkulasi",
    additionalCategory: "Procurement",
  },
  {
    cover: "/assets/image/cover buku2.svg",
    code: "24.01.699",
    title: "ANALISIS DAN MITIGASI RISIKO DALAM PROSES PENGADAAN..",
    author: "DIVAZANNA ILLARITZQI",
    university:
      "Universitas Telkom, S1 Teknik Industri - Kampus Surabaya, 2024",
    classification:
      "658 - General management, General business management, General industrial management",
    category: "Karya Ilmiah - Skripsi (S1) - Reference - Non-Sirkulasi",
    additionalCategory: "Procurement",
  },
  {
    cover: "/assets/image/cover buku.svg",
    code: "24.01.698",
    title: "ANALISIS DAN MITIGASI RISIKO DALAM PROSES PENGADAAN..",
    author: "DIVAZANNA ILLARITZQI",
    university:
      "Universitas Telkom, S1 Teknik Industri - Kampus Surabaya, 2024",
    classification:
      "658 - General management, General business management, General industrial management",
    category: "Karya Ilmiah - Skripsi (S1) - Reference - Non-Sirkulasi",
    additionalCategory: "Procurement",
  },
  {
    cover: "/assets/image/cover buku2.svg",
    code: "24.01.699",
    title: "ANALISIS DAN MITIGASI RISIKO DALAM PROSES PENGADAAN..",
    author: "DIVAZANNA ILLARITZQI",
    university:
      "Universitas Telkom, S1 Teknik Industri - Kampus Surabaya, 2024",
    classification:
      "658 - General management, General business management, General industrial management",
    category: "Karya Ilmiah - Skripsi (S1) - Reference - Non-Sirkulasi",
    additionalCategory: "Procurement",
  },
  {
    cover: "/assets/image/cover buku.svg",
    code: "24.01.698",
    title: "ANALISIS DAN MITIGASI RISIKO DALAM PROSES PENGADAAN..",
    author: "DIVAZANNA ILLARITZQI",
    university:
      "Universitas Telkom, S1 Teknik Industri - Kampus Surabaya, 2024",
    classification:
      "658 - General management, General business management, General industrial management",
    category: "Karya Ilmiah - Skripsi (S1) - Reference - Non-Sirkulasi",
    additionalCategory: "Procurement",
  },
  {
    cover: "/assets/image/cover buku2.svg",
    code: "24.01.699",
    title: "ANALISIS DAN MITIGASI RISIKO DALAM PROSES PENGADAAN..",
    author: "DIVAZANNA ILLARITZQI",
    university:
      "Universitas Telkom, S1 Teknik Industri - Kampus Surabaya, 2024",
    classification:
      "658 - General management, General business management, General industrial management",
    category: "Karya Ilmiah - Skripsi (S1) - Reference - Non-Sirkulasi",
    additionalCategory: "Procurement",
  },
  {
    cover: "/assets/image/cover buku.svg",
    code: "24.01.698",
    title: "ANALISIS DAN MITIGASI RISIKO DALAM PROSES PENGADAAN..",
    author: "DIVAZANNA ILLARITZQI",
    university:
      "Universitas Telkom, S1 Teknik Industri - Kampus Surabaya, 2024",
    classification:
      "658 - General management, General business management, General industrial management",
    category: "Karya Ilmiah - Skripsi (S1) - Reference - Non-Sirkulasi",
    additionalCategory: "Procurement",
  },
  {
    cover: "/assets/image/cover buku2.svg",
    code: "24.01.699",
    title: "ANALISIS DAN MITIGASI RISIKO DALAM PROSES PENGADAAN..",
    author: "DIVAZANNA ILLARITZQI",
    university:
      "Universitas Telkom, S1 Teknik Industri - Kampus Surabaya, 2024",
    classification:
      "658 - General management, General business management, General industrial management",
    category: "Karya Ilmiah - Skripsi (S1) - Reference - Non-Sirkulasi",
    additionalCategory: "Procurement",
  },
  {
    cover: "/assets/image/cover buku.svg",
    code: "24.01.698",
    title: "ANALISIS DAN MITIGASI RISIKO DALAM PROSES PENGADAAN..",
    author: "DIVAZANNA ILLARITZQI",
    university:
      "Universitas Telkom, S1 Teknik Industri - Kampus Surabaya, 2024",
    classification:
      "658 - General management, General business management, General industrial management",
    category: "Karya Ilmiah - Skripsi (S1) - Reference - Non-Sirkulasi",
    additionalCategory: "Procurement",
  },
  {
    cover: "/assets/image/cover buku2.svg",
    code: "24.01.699",
    title: "ANALISIS DAN MITIGASI RISIKO DALAM PROSES PENGADAAN..",
    author: "DIVAZANNA ILLARITZQI",
    university:
      "Universitas Telkom, S1 Teknik Industri - Kampus Surabaya, 2024",
    classification:
      "658 - General management, General business management, General industrial management",
    category: "Karya Ilmiah - Skripsi (S1) - Reference - Non-Sirkulasi",
    additionalCategory: "Procurement",
  },
  {
    cover: "/assets/image/cover buku.svg",
    code: "24.01.698",
    title: "ANALISIS DAN MITIGASI RISIKO DALAM PROSES PENGADAAN..",
    author: "DIVAZANNA ILLARITZQI",
    university:
      "Universitas Telkom, S1 Teknik Industri - Kampus Surabaya, 2024",
    classification:
      "658 - General management, General business management, General industrial management",
    category: "Karya Ilmiah - Skripsi (S1) - Reference - Non-Sirkulasi",
    additionalCategory: "Procurement",
  },
  {
    cover: "/assets/image/cover buku2.svg",
    code: "24.01.699",
    title: "ANALISIS DAN MITIGASI RISIKO DALAM PROSES PENGADAAN..",
    author: "DIVAZANNA ILLARITZQI",
    university:
      "Universitas Telkom, S1 Teknik Industri - Kampus Surabaya, 2024",
    classification:
      "658 - General management, General business management, General industrial management",
    category: "Karya Ilmiah - Skripsi (S1) - Reference - Non-Sirkulasi",
    additionalCategory: "Procurement",
  },
  {
    cover: "/assets/image/cover buku.svg",
    code: "24.01.698",
    title: "ANALISIS DAN MITIGASI RISIKO DALAM PROSES PENGADAAN..",
    author: "DIVAZANNA ILLARITZQI",
    university:
      "Universitas Telkom, S1 Teknik Industri - Kampus Surabaya, 2024",
    classification:
      "658 - General management, General business management, General industrial management",
    category: "Karya Ilmiah - Skripsi (S1) - Reference - Non-Sirkulasi",
    additionalCategory: "Procurement",
  },
  {
    cover: "/assets/image/cover buku2.svg",
    code: "24.01.699",
    title: "ANALISIS DAN MITIGASI RISIKO DALAM PROSES PENGADAAN..",
    author: "DIVAZANNA ILLARITZQI",
    university:
      "Universitas Telkom, S1 Teknik Industri - Kampus Surabaya, 2024",
    classification:
      "658 - General management, General business management, General industrial management",
    category: "Karya Ilmiah - Skripsi (S1) - Reference - Non-Sirkulasi",
    additionalCategory: "Procurement",
  },
  {
    cover: "/assets/image/cover buku.svg",
    code: "24.01.698",
    title: "ANALISIS DAN MITIGASI RISIKO DALAM PROSES PENGADAAN..",
    author: "DIVAZANNA ILLARITZQI",
    university:
      "Universitas Telkom, S1 Teknik Industri - Kampus Surabaya, 2024",
    classification:
      "658 - General management, General business management, General industrial management",
    category: "Karya Ilmiah - Skripsi (S1) - Reference - Non-Sirkulasi",
    additionalCategory: "Procurement",
  },
  {
    cover: "/assets/image/cover buku2.svg",
    code: "24.01.699",
    title: "ANALISIS DAN MITIGASI RISIKO DALAM PROSES PENGADAAN..",
    author: "DIVAZANNA ILLARITZQI",
    university:
      "Universitas Telkom, S1 Teknik Industri - Kampus Surabaya, 2024",
    classification:
      "658 - General management, General business management, General industrial management",
    category: "Karya Ilmiah - Skripsi (S1) - Reference - Non-Sirkulasi",
    additionalCategory: "Procurement",
  },
  {
    cover: "/assets/image/cover buku.svg",
    code: "24.01.698",
    title: "ANALISIS DAN MITIGASI RISIKO DALAM PROSES PENGADAAN..",
    author: "DIVAZANNA ILLARITZQI",
    university:
      "Universitas Telkom, S1 Teknik Industri - Kampus Surabaya, 2024",
    classification:
      "658 - General management, General business management, General industrial management",
    category: "Karya Ilmiah - Skripsi (S1) - Reference - Non-Sirkulasi",
    additionalCategory: "Procurement",
  },
  {
    cover: "/assets/image/cover buku2.svg",
    code: "24.01.699",
    title: "ANALISIS DAN MITIGASI RISIKO DALAM PROSES PENGADAAN..",
    author: "DIVAZANNA ILLARITZQI",
    university:
      "Universitas Telkom, S1 Teknik Industri - Kampus Surabaya, 2024",
    classification:
      "658 - General management, General business management, General industrial management",
    category: "Karya Ilmiah - Skripsi (S1) - Reference - Non-Sirkulasi",
    additionalCategory: "Procurement",
  },
  {
    cover: "/assets/image/cover buku.svg",
    code: "24.01.698",
    title: "ANALISIS DAN MITIGASI RISIKO DALAM PROSES PENGADAAN..",
    author: "DIVAZANNA ILLARITZQI",
    university:
      "Universitas Telkom, S1 Teknik Industri - Kampus Surabaya, 2024",
    classification:
      "658 - General management, General business management, General industrial management",
    category: "Karya Ilmiah - Skripsi (S1) - Reference - Non-Sirkulasi",
    additionalCategory: "Procurement",
  },
  {
    cover: "/assets/image/cover buku2.svg",
    code: "24.01.699",
    title: "ANALISIS DAN MITIGASI RISIKO DALAM PROSES PENGADAAN..",
    author: "DIVAZANNA ILLARITZQI",
    university:
      "Universitas Telkom, S1 Teknik Industri - Kampus Surabaya, 2024",
    classification:
      "658 - General management, General business management, General industrial management",
    category: "Karya Ilmiah - Skripsi (S1) - Reference - Non-Sirkulasi",
    additionalCategory: "Procurement",
  },
  {
    cover: "/assets/image/cover buku.svg",
    code: "24.01.698",
    title: "ANALISIS DAN MITIGASI RISIKO DALAM PROSES PENGADAAN..",
    author: "DIVAZANNA ILLARITZQI",
    university:
      "Universitas Telkom, S1 Teknik Industri - Kampus Surabaya, 2024",
    classification:
      "658 - General management, General business management, General industrial management",
    category: "Karya Ilmiah - Skripsi (S1) - Reference - Non-Sirkulasi",
    additionalCategory: "Procurement",
  },
  {
    cover: "/assets/image/cover buku2.svg",
    code: "24.01.699",
    title: "ANALISIS DAN MITIGASI RISIKO DALAM PROSES PENGADAAN..",
    author: "DIVAZANNA ILLARITZQI",
    university:
      "Universitas Telkom, S1 Teknik Industri - Kampus Surabaya, 2024",
    classification:
      "658 - General management, General business management, General industrial management",
    category: "Karya Ilmiah - Skripsi (S1) - Reference - Non-Sirkulasi",
    additionalCategory: "Procurement",
  },
  {
    cover: "/assets/image/cover buku.svg",
    code: "24.01.698",
    title: "ANALISIS DAN MITIGASI RISIKO DALAM PROSES PENGADAAN..",
    author: "DIVAZANNA ILLARITZQI",
    university:
      "Universitas Telkom, S1 Teknik Industri - Kampus Surabaya, 2024",
    classification:
      "658 - General management, General business management, General industrial management",
    category: "Karya Ilmiah - Skripsi (S1) - Reference - Non-Sirkulasi",
    additionalCategory: "Procurement",
  },
  {
    cover: "/assets/image/cover buku2.svg",
    code: "24.01.699",
    title: "ANALISIS DAN MITIGASI RISIKO DALAM PROSES PENGADAAN..",
    author: "DIVAZANNA ILLARITZQI",
    university:
      "Universitas Telkom, S1 Teknik Industri - Kampus Surabaya, 2024",
    classification:
      "658 - General management, General business management, General industrial management",
    category: "Karya Ilmiah - Skripsi (S1) - Reference - Non-Sirkulasi",
    additionalCategory: "Procurement",
  },
  {
    cover: "/assets/image/cover buku.svg",
    code: "24.01.698",
    title: "ANALISIS DAN MITIGASI RISIKO DALAM PROSES PENGADAAN..",
    author: "DIVAZANNA ILLARITZQI",
    university:
      "Universitas Telkom, S1 Teknik Industri - Kampus Surabaya, 2024",
    classification:
      "658 - General management, General business management, General industrial management",
    category: "Karya Ilmiah - Skripsi (S1) - Reference - Non-Sirkulasi",
    additionalCategory: "Procurement",
  },
];

export default function BooksPage(props: any) {
  return (
    <section
      className={`${props.sidebarOpen ? "hidden md:block" : "block"}bg-white shadow-md shadow-gray-600 rounded-lg p-5`}
    >
      {/* Book Section */}
      <div>
        <h4 className="flex gap-2 text-dark-red text-xl font-bold items-center underline">
          <FontAwesomeIcon icon={faBook} className="w-[17px]" />
          Book Collection
        </h4>

        {/* Collection of Popular Books */}
        <div
          className={`grid ${props.sidebarOpen ? "md:grid-cols-1 lg:grid-cols-2" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"} mt-2 p-2 gap-5 items-center`}
        >
          {books.map((book, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row bg-dark-red rounded-lg p-3 gap-2 items-center"
            >
              {/* Book Cover and Code */}
              <div className="flex flex-col items-center">
                <img
                  src={book.cover}
                  alt={`Book Cover ${index + 1}`}
                  className="h-[160px] mb-2 object-cover mt-2 md:mt-0"
                />
                <p className="text-white text-xs italic">Code: {book.code}</p>
              </div>

              {/* Book Description */}
              <div className="text-white text-start ml-4 flex-1">
                {/* Title */}
                <NextLink
                  href="/admin/catalog-management/books/book"
                  className="text-sm font-semibold mb-2 hover:underline"
                >
                  {book.title}
                </NextLink>

                {/* Author */}
                <p className="flex items-center text-xs mt-2 gap-2">
                  <FontAwesomeIcon icon={faUser} className="w-[12px]" />
                  {book.author}
                </p>

                {/* Place/Date */}
                <p className="flex items-center text-xs mt-2 gap-2">
                  <FontAwesomeIcon icon={faBullhorn} className="w-[14px]" />
                  {book.university}
                </p>

                {/* Classification/Type */}
                <p className="flex items-center text-xs mt-2 gap-2">
                  <FontAwesomeIcon icon={faTags} className="w-[22px]" />
                  <span className="font-semibold">{book.classification}</span>
                </p>

                {/* Category */}
                <p className="flex items-center text-xs mt-2 gap-2">
                  <FontAwesomeIcon icon={faBookBookmark} className="w-[12px]" />
                  <span className="font-semibold">{book.category}</span>
                </p>

                {/* Additional Category */}
                <p className="text-xs italic mt-2">{book.additionalCategory}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex justify-center py-3 mt-5">
          <Pagination
            total={Math.ceil(books.length / 12)}
            classNames={{
              wrapper:
                "gap-0 overflow-visible h-8 rounded border border-divider",
              item: "w-8 h-8 text-small rounded-none bg-transparent",
              cursor:
                "bg-gradient-to-b shadow-lg from-red-700 to-dark-red dark:from-default-300 dark:to-default-100 text-white font-bold",
            }}
          />
        </div>
      </div>
    </section>
  );
}
