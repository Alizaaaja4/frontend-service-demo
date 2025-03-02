import ModalEditJournal from "./modalEditJournal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faReceipt,
  faSwatchbook,
  faBullhorn,
  faBookBookmark,
  faBookOpen,
} from "@fortawesome/free-solid-svg-icons";

export default function ContentCatalogJournal() {
  return (
    <section className="bg-white shadow-md shadow-gray-600 rounded-lg p-5">
      {/* Book Section */}
      <div className="p-3">
        {/* button edit */}
        <div className="flex justify-end mb-2">
          <ModalEditJournal />
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          {/* cover book */}
          <img
            src="/assets/image/cover buku journal.svg"
            alt="cover buku 1"
            className="h-[290px] mb-2 object-cover"
          />
          {/* content informasi */}
          <div className="mt-1">
            {/* judul book */}
            <h2 className="text-black text-start text-3xl font-bold">
              Data Mining: Algoritma dan Contoh Perhitungan Matematis
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mt-1">
              {/* pengarang */}
              <div className="gap-2 mt-3">
                <span className="inline-block">
                  <h5 className="flex items-center text-white text-sm font-semibold p-1 pl-3 pr-3 gap-2 bg-lime rounded-lg flex-shrink-0">
                    <FontAwesomeIcon icon={faUser} className="h-[17px]" />
                    Pengarang
                  </h5>
                </span>
                <div className="text-black text-sm font-medium mt-2">
                  <div className="flex flex-col">
                    {/* Nama Pengarang */}
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">Nama:</span>
                      <span>G.W.F. Hegel</span>
                    </div>

                    {/* Jenis Pengarang */}
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">Jenis:</span>
                      <span>Perorangan</span>
                    </div>

                    {/* Penyunting */}
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">Penyunting:</span>
                      <span>-</span>
                    </div>

                    {/* Penerjemah */}
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">Penerjemah:</span>
                      <span>-</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* penerbit */}
              <div className="gap-2 mt-4">
                <span className="inline-block">
                  <h5 className="flex items-center text-white text-sm font-semibold p-1 pl-[19px] pr-[19px] gap-2 bg-goldenrod rounded-lg flex-shrink-0">
                    <FontAwesomeIcon icon={faBullhorn} className="h-[17px]" />
                    Penerbit
                  </h5>
                </span>
                <div className="text-black text-sm font-medium mt-2">
                  <div className="flex flex-col">
                    {/* Nama Penerbit */}
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">Nama:</span>
                      <span>Anak Hebat Indonesia</span>
                    </div>

                    {/* Kota Penerbit */}
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">Kota:</span>
                      <span>Yogyakarta</span>
                    </div>

                    {/* Tahun Penerbit */}
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">Tahun:</span>
                      <span>2024</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* informasi */}
              <div className="gap-2 mt-4">
                <span className="inline-block">
                  <h5 className="flex items-center text-white text-sm font-semibold p-1 pl-[17px] pr-[17px] gap-2 bg-dodger-blue rounded-lg flex-shrink-0">
                    <FontAwesomeIcon icon={faReceipt} className="h-[17px]" />
                    Informasi
                  </h5>
                </span>

                <div className="text-black text-sm font-medium mt-2">
                  <div className="flex flex-col">
                    {/* Kode */}
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">Kode:</span>
                      <span>24.01.704</span>
                    </div>

                    {/* Klasifikasi */}
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">Klasifikasi:</span>
                      <span>150.1 - Philosophy and Theory of Psychology</span>
                    </div>

                    {/* Jenis */}
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">Jenis:</span>
                      <span>Buku - Circulation (Dapat Dipinjam)</span>
                    </div>

                    {/* Subjek */}
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">Subjek:</span>
                      <span>Phenomenology</span>
                    </div>

                    {/* No. Rak */}
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">No. Rak:</span>
                      <span>5</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* sirkulasi */}
              <div className="gap-2 mt-4">
                <span className="inline-block">
                  <h5 className="flex items-center text-white text-sm font-semibold p-1 pl-[17px] pr-[17px] gap-2 bg-light-red rounded-lg flex-shrink-0">
                    <FontAwesomeIcon
                      icon={faBookBookmark}
                      className="h-[17px]"
                    />
                    Sirkulasi
                  </h5>
                </span>
                <div className="text-black text-sm font-medium mt-2">
                  <div className="flex flex-col">
                    {/* Harga Sewa */}
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">Harga Sewa:</span>
                      <span>IDR 0,00</span>
                    </div>

                    {/* Denda Harian */}
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">Denda Harian:</span>
                      <span>IDR 1.000,00</span>
                    </div>

                    {/* Jenis */}
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">Jenis:</span>
                      <span>Sirkulasi</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* abstraksi */}
        <div className="mt-4">
          <span className="inline-block">
            <h5 className="flex items-center text-white text-sm font-semibold p-1 pl-4 pr-4 gap-2 bg-orange-red rounded-lg flex-shrink-0">
              <FontAwesomeIcon icon={faSwatchbook} className="h-[17px]" />
              Abstraksi
            </h5>
          </span>
          <p className="text-black text-sm font-medium pt-1">
            As a master teacher, John Santrock connects students to current
            research and real-world application, helping students see how
            developmental psychology plays a role in their own lives and future
            careers. In this new 10th edition, Santrock has continued his
            commitment to having the most up-to-date and relevant research,
            utilizing an expert board of reviewers to ensure students have the
            most accurate information.
            <br /> <br />
            As a master teacher, John Santrock connects students to current
            research and real-world application, helping students see how
            developmental psychology plays a role in their own lives and future
            careers. In this new 10th edition, Santrock has continued his
            commitment to having the most up-to-date and relevant research,
            utilizing an expert board of reviewers to ensure students have the
            most accurate information.
            <br /> <br />
            As a master teacher, John Santrock connects students to current
            research and real-world application, helping students see how
            developmental psychology plays a role in their own lives and future
            careers. In this new 10th edition, Santrock has continued his
            commitment to having the most up-to-date and relevant research,
            utilizing an expert board of reviewers to ensure students have the
            most accurate information.
          </p>
        </div>

        {/* flipping book */}
        <div className="mt-4">
          <span className="inline-block">
            <h5 className="flex items-center text-white bg-medium-violet text-sm font-semibold p-1 pl-[15px] pr-[15px] gap-2 bg-french-pink rounded-lg flex-shrink-0">
              <FontAwesomeIcon icon={faBookOpen} className="h-[17px]" />
              Flipping Book
            </h5>
          </span>
          <div className="text-black text-sm font-medium mt-2">
            {/* Isi Flipping Book */}
            <div className="flex items-center gap-2">
              <span className="font-semibold">Halaman:</span>
              <span>120 halaman</span>
            </div>

            {/* Link */}
            <div className="flex items-center gap-2">
              <span className="font-semibold">Link:</span>
              <span>-</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
