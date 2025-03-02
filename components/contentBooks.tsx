import NextLink from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faTags, faBullhorn, faBookBookmark } from '@fortawesome/free-solid-svg-icons';

export const ContentBooks = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
      {/* Column 1 */}
      <div className="flex flex-col md:flex-row bg-dark-red p-3 rounded-lg shadow-md shadow-black">
        <div className="flex flex-col items-center">
          <img 
            src="/assets/image/cover buku.svg" 
            alt="cover buku 1" 
            className="h-[160px] mb-2 object-cover" 
          />
          {/* Kode Buku */}
          <p className="text-white text-xs italic">Code: 24.01.698</p>
        </div>
        <div className="text-white text-start ml-4 flex-1">
          {/* Judul */}
          <NextLink href="/landing/catalog/books/book" className="text-sm font-semibold mb-2 hover:underline hover:underline-white">
            ANALISIS DAN MITIGASI RISIKO DALAM PROSES PENGADAAN..
          </NextLink>

          {/* Penulis */}
          <p className="flex items-center text-xs mt-2 gap-2">
            <FontAwesomeIcon icon={faUser} className='w-[12px]' />
            DIVAZANNA ILLARITZQI
          </p>

          {/* Tempat/Tanggal */}
          <p className="flex items-center text-xs mt-2 gap-2">
            <FontAwesomeIcon icon={faBullhorn} className='w-[14px]' />
            Universitas Telkom, S1 Teknik Industri - Kampus Surabaya, 2024
          </p>

          {/* Klasifikasi/Jenis */}
          <p className="flex items-center text-xs mt-2 gap-2">
            <FontAwesomeIcon icon={faTags} className='w-[22px]' />
            <span className="font-semibold">658 - </span>
            General management, General business management, General industrial Management
          </p>

          {/* Kategori */}
          <p className="flex items-center text-xs mt-2 gap-2">
            <FontAwesomeIcon icon={faBookBookmark} className='w-[12px]' />
            <span className="font-semibold">Karya Ilmiah - Skripsi (S1) - Reference - Non-Sirkulasi</span>
          </p>

          {/* Kategori tambahan */}
          <p className="text-xs italic mt-2">
            Procurement
          </p>
        </div>
      </div>

      {/* Column 2 */}
      <div className="flex flex-col md:flex-row bg-dark-red p-3 rounded-lg shadow-md shadow-black">
        <div className="flex flex-col items-center">
          <img 
            src="/assets/image/cover buku2.svg" 
            alt="cover buku 1" 
            className="h-[160px] mb-2 object-cover" 
          />
          {/* Kode Buku */}
          <p className="text-white text-xs italic">Code: 24.01.698</p>
        </div>
        <div className="text-white text-start ml-4 flex-1">
          {/* Judul */}
          <NextLink href="/landing/catalog/books/book" className="text-sm font-semibold mb-2 hover:underline hover:underline-white">
            ANALISIS DAN MITIGASI RISIKO DALAM PROSES PENGADAAN..
          </NextLink>

          {/* Penulis */}
          <p className="flex items-center text-xs mt-2 gap-2">
            <FontAwesomeIcon icon={faUser} className='w-[12px]' />
            DIVAZANNA ILLARITZQI
          </p>

          {/* Tempat/Tanggal */}
          <p className="flex items-center text-xs mt-2 gap-2">
            <FontAwesomeIcon icon={faBullhorn} className='w-[14px]' />
            Universitas Telkom, S1 Teknik Industri - Kampus Surabaya, 2024
          </p>

          {/* Klasifikasi/Jenis */}
          <p className="flex items-center text-xs mt-2 gap-2">
            <FontAwesomeIcon icon={faTags} className='w-[22px]' />
            <span className="font-semibold">658 - </span>
            General management, General business management, General industrial Management
          </p>

          {/* Kategori */}
          <p className="flex items-center text-xs mt-2 gap-2">
            <FontAwesomeIcon icon={faBookBookmark} className='w-[12px]' />
            <span className="font-semibold">Karya Ilmiah - Skripsi (S1) - Reference - Non-Sirkulasi</span>
          </p>

          {/* Kategori tambahan */}
          <p className="text-xs italic mt-2">
            Procurement
          </p>
        </div>
      </div>

      {/* Column 3 */}
      <div className="flex flex-col md:flex-row bg-dark-red p-3 rounded-lg shadow-md shadow-black">
        <div className="flex flex-col items-center">
          <img 
            src="/assets/image/cover buku.svg" 
            alt="cover buku 1" 
            className="h-[160px] mb-2 object-cover" 
          />
          {/* Kode Buku */}
          <p className="text-white text-xs italic">Code: 24.01.698</p>
        </div>
        <div className="text-white text-start ml-4 flex-1">
          {/* Judul */}
          <NextLink href="/landing/catalog/books/book" className="text-sm font-semibold mb-2 hover:underline hover:underline-white">
            ANALISIS DAN MITIGASI RISIKO DALAM PROSES PENGADAAN..
          </NextLink>

          {/* Penulis */}
          <p className="flex items-center text-xs mt-2 gap-2">
            <FontAwesomeIcon icon={faUser} className='w-[12px]' />
            DIVAZANNA ILLARITZQI
          </p>

          {/* Tempat/Tanggal */}
          <p className="flex items-center text-xs mt-2 gap-2">
            <FontAwesomeIcon icon={faBullhorn} className='w-[14px]' />
            Universitas Telkom, S1 Teknik Industri - Kampus Surabaya, 2024
          </p>

          {/* Klasifikasi/Jenis */}
          <p className="flex items-center text-xs mt-2 gap-2">
            <FontAwesomeIcon icon={faTags} className='w-[22px]' />
            <span className="font-semibold">658 - </span>
            General management, General business management, General industrial Management
          </p>

          {/* Kategori */}
          <p className="flex items-center text-xs mt-2 gap-2">
            <FontAwesomeIcon icon={faBookBookmark} className='w-[12px]' />
            <span className="font-semibold">Karya Ilmiah - Skripsi (S1) - Reference - Non-Sirkulasi</span>
          </p>

          {/* Kategori tambahan */}
          <p className="text-xs italic mt-2">
            Procurement
          </p>
        </div>
      </div>

      {/* Column 4 */}
      <div className="flex flex-col md:flex-row bg-dark-red p-3 rounded-lg shadow-md shadow-black">
        <div className="flex flex-col items-center">
          <img 
            src="/assets/image/cover buku2.svg" 
            alt="cover buku 1" 
            className="h-[160px] mb-2 object-cover" 
          />
          {/* Kode Buku */}
          <p className="text-white text-xs italic">Code: 24.01.698</p>
        </div>
        <div className="text-white text-start ml-4 flex-1">
          {/* Judul */}
          <NextLink href="/landing/catalog/books/book" className="text-sm font-semibold mb-2 hover:underline hover:underline-white">
            ANALISIS DAN MITIGASI RISIKO DALAM PROSES PENGADAAN..
          </NextLink>

          {/* Penulis */}
          <p className="flex items-center text-xs mt-2 gap-2">
            <FontAwesomeIcon icon={faUser} className='w-[12px]' />
            DIVAZANNA ILLARITZQI
          </p>

          {/* Tempat/Tanggal */}
          <p className="flex items-center text-xs mt-2 gap-2">
            <FontAwesomeIcon icon={faBullhorn} className='w-[14px]' />
            Universitas Telkom, S1 Teknik Industri - Kampus Surabaya, 2024
          </p>

          {/* Klasifikasi/Jenis */}
          <p className="flex items-center text-xs mt-2 gap-2">
            <FontAwesomeIcon icon={faTags} className='w-[22px]' />
            <span className="font-semibold">658 - </span>
            General management, General business management, General industrial Management
          </p>

          {/* Kategori */}
          <p className="flex items-center text-xs mt-2 gap-2">
            <FontAwesomeIcon icon={faBookBookmark} className='w-[12px]' />
            <span className="font-semibold">Karya Ilmiah - Skripsi (S1) - Reference - Non-Sirkulasi</span>
          </p>

          {/* Kategori tambahan */}
          <p className="text-xs italic mt-2">
            Procurement
          </p>
        </div>
      </div>

      {/* Column 5 */}
      <div className="flex flex-col md:flex-row bg-dark-red p-3 rounded-lg shadow-md shadow-black">
        <div className="flex flex-col items-center">
          <img 
            src="/assets/image/cover buku.svg" 
            alt="cover buku 1" 
            className="h-[160px] mb-2 object-cover" 
          />
          {/* Kode Buku */}
          <p className="text-white text-xs italic">Code: 24.01.698</p>
        </div>
        <div className="text-white text-start ml-4 flex-1">
          {/* Judul */}
          <NextLink href="/landing/catalog/books/book" className="text-sm font-semibold mb-2 hover:underline hover:underline-white">
            ANALISIS DAN MITIGASI RISIKO DALAM PROSES PENGADAAN..
          </NextLink>

          {/* Penulis */}
          <p className="flex items-center text-xs mt-2 gap-2">
            <FontAwesomeIcon icon={faUser} className='w-[12px]' />
            DIVAZANNA ILLARITZQI
          </p>

          {/* Tempat/Tanggal */}
          <p className="flex items-center text-xs mt-2 gap-2">
            <FontAwesomeIcon icon={faBullhorn} className='w-[14px]' />
            Universitas Telkom, S1 Teknik Industri - Kampus Surabaya, 2024
          </p>

          {/* Klasifikasi/Jenis */}
          <p className="flex items-center text-xs mt-2 gap-2">
            <FontAwesomeIcon icon={faTags} className='w-[22px]' />
            <span className="font-semibold">658 - </span>
            General management, General business management, General industrial Management
          </p>

          {/* Kategori */}
          <p className="flex items-center text-xs mt-2 gap-2">
            <FontAwesomeIcon icon={faBookBookmark} className='w-[12px]' />
            <span className="font-semibold">Karya Ilmiah - Skripsi (S1) - Reference - Non-Sirkulasi</span>
          </p>

          {/* Kategori tambahan */}
          <p className="text-xs italic mt-2">
            Procurement
          </p>
        </div>
      </div>

      {/* Column 6 */}
      <div className="flex flex-col md:flex-row bg-dark-red p-3 rounded-lg shadow-md shadow-black">
        <div className="flex flex-col items-center">
          <img 
            src="/assets/image/cover buku2.svg" 
            alt="cover buku 1" 
            className="h-[160px] mb-2 object-cover" 
          />
          {/* Kode Buku */}
          <p className="text-white text-xs italic">Code: 24.01.698</p>
        </div>
        <div className="text-white text-start ml-4 flex-1">
          {/* Judul */}
          <NextLink href="/landing/catalog/books/book" className="text-sm font-semibold mb-2 hover:underline hover:underline-white">
            ANALISIS DAN MITIGASI RISIKO DALAM PROSES PENGADAAN..
          </NextLink>

          {/* Penulis */}
          <p className="flex items-center text-xs mt-2 gap-2">
            <FontAwesomeIcon icon={faUser} className='w-[12px]' />
            DIVAZANNA ILLARITZQI
          </p>

          {/* Tempat/Tanggal */}
          <p className="flex items-center text-xs mt-2 gap-2">
            <FontAwesomeIcon icon={faBullhorn} className='w-[14px]' />
            Universitas Telkom, S1 Teknik Industri - Kampus Surabaya, 2024
          </p>

          {/* Klasifikasi/Jenis */}
          <p className="flex items-center text-xs mt-2 gap-2">
            <FontAwesomeIcon icon={faTags} className='w-[22px]' />
            <span className="font-semibold">658 - </span>
            General management, General business management, General industrial Management
          </p>

          {/* Kategori */}
          <p className="flex items-center text-xs mt-2 gap-2">
            <FontAwesomeIcon icon={faBookBookmark} className='w-[12px]' />
            <span className="font-semibold">Karya Ilmiah - Skripsi (S1) - Reference - Non-Sirkulasi</span>
          </p>

          {/* Kategori tambahan */}
          <p className="text-xs italic mt-2">
            Procurement
          </p>
        </div>
      </div>

      {/* Column 7 */}
      <div className="flex flex-col md:flex-row bg-dark-red p-3 rounded-lg shadow-md shadow-black">
        <div className="flex flex-col items-center">
          <img 
            src="/assets/image/cover buku.svg" 
            alt="cover buku 1" 
            className="h-[160px] mb-2 object-cover" 
          />
          {/* Kode Buku */}
          <p className="text-white text-xs italic">Code: 24.01.698</p>
        </div>
        <div className="text-white text-start ml-4 flex-1">
          {/* Judul */}
          <NextLink href="/landing/catalog/books/book" className="text-sm font-semibold mb-2 hover:underline hover:underline-white">
            ANALISIS DAN MITIGASI RISIKO DALAM PROSES PENGADAAN..
          </NextLink>

          {/* Penulis */}
          <p className="flex items-center text-xs mt-2 gap-2">
            <FontAwesomeIcon icon={faUser} className='w-[12px]' />
            DIVAZANNA ILLARITZQI
          </p>

          {/* Tempat/Tanggal */}
          <p className="flex items-center text-xs mt-2 gap-2">
            <FontAwesomeIcon icon={faBullhorn} className='w-[14px]' />
            Universitas Telkom, S1 Teknik Industri - Kampus Surabaya, 2024
          </p>

          {/* Klasifikasi/Jenis */}
          <p className="flex items-center text-xs mt-2 gap-2">
            <FontAwesomeIcon icon={faTags} className='w-[22px]' />
            <span className="font-semibold">658 - </span>
            General management, General business management, General industrial Management
          </p>

          {/* Kategori */}
          <p className="flex items-center text-xs mt-2 gap-2">
            <FontAwesomeIcon icon={faBookBookmark} className='w-[12px]' />
            <span className="font-semibold">Karya Ilmiah - Skripsi (S1) - Reference - Non-Sirkulasi</span>
          </p>

          {/* Kategori tambahan */}
          <p className="text-xs italic mt-2">
            Procurement
          </p>
        </div>
      </div>

      {/* Column 8 */}
      <div className="flex flex-col md:flex-row bg-dark-red p-3 rounded-lg shadow-md shadow-black">
        <div className="flex flex-col items-center">
          <img 
            src="/assets/image/cover buku2.svg" 
            alt="cover buku 1" 
            className="h-[160px] mb-2 object-cover" 
          />
          {/* Kode Buku */}
          <p className="text-white text-xs italic">Code: 24.01.698</p>
        </div>
        <div className="text-white text-start ml-4 flex-1">
          {/* Judul */}
          <NextLink href="/landing/catalog/books/book" className="text-sm font-semibold mb-2 hover:underline hover:underline-white">
            ANALISIS DAN MITIGASI RISIKO DALAM PROSES PENGADAAN..
          </NextLink>

          {/* Penulis */}
          <p className="flex items-center text-xs mt-2 gap-2">
            <FontAwesomeIcon icon={faUser} className='w-[12px]' />
            DIVAZANNA ILLARITZQI
          </p>

          {/* Tempat/Tanggal */}
          <p className="flex items-center text-xs mt-2 gap-2">
            <FontAwesomeIcon icon={faBullhorn} className='w-[14px]' />
            Universitas Telkom, S1 Teknik Industri - Kampus Surabaya, 2024
          </p>

          {/* Klasifikasi/Jenis */}
          <p className="flex items-center text-xs mt-2 gap-2">
            <FontAwesomeIcon icon={faTags} className='w-[22px]' />
            <span className="font-semibold">658 - </span>
            General management, General business management, General industrial Management
          </p>

          {/* Kategori */}
          <p className="flex items-center text-xs mt-2 gap-2">
            <FontAwesomeIcon icon={faBookBookmark} className='w-[12px]' />
            <span className="font-semibold">Karya Ilmiah - Skripsi (S1) - Reference - Non-Sirkulasi</span>
          </p>

          {/* Kategori tambahan */}
          <p className="text-xs italic mt-2">
            Procurement
          </p>
        </div>
      </div>
      
    </div>
  );
};
