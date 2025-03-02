export const ContentAbout = () => {
  return (
    <section className="flex flex-col min-h-screen">
      {/* Background Image */}
      <div className="relative bg-[url('/assets/image/kampus-surabaya.png')] bg-cover bg-center bg-no-repeat w-full h-[60vh] flex items-center justify-center rounded-md">
        <h1 className="font-bold text-white text-5xl text-center z-10">
          About Us
        </h1>
      </div>

      {/* Content with white background */}
      <div className="bg-white flex-grow">
        {/* Content Struktur Organisasi */}
        <div className="mt-7 mb-5">
          <div className="flex justify-between">
            <h2 className="text-dark-red font-bold text-2xl underline decoration-dark-red underline-offset-2">
              Struktur Organisasi
            </h2>
          </div>
          <div className="bg-white-pucat rounded-md mt-4 p-3">
            <img
              src="/assets/image/struktur_jabatan.svg"
              alt="struktur jabatan"
              className="h-[590px] w-full"
            />
          </div>
        </div>

        {/* Content Intro Oplib */}
        <div className="mt-7 mb-3">
          <div className="flex justify-between">
            <h2 className="text-dark-red font-bold text-2xl underline decoration-dark-red underline-offset-2">
              Telkom University Open Library
            </h2>
          </div>
          <div className="mt-1 p-6">
            <p className="text-black text-sm">
              Telkom University Open Library adalah salah satu unit yang berada
              di bawah Wakil Rektor I Bidang Akademik. Telkom University Open
              Library memiliki visi "Pada Tahun 2038 Menjadi leader dari pusat
              ilmu dan pengetahuan berbasis teknologi informasi dalam mendukung
              Universitas Entrepreneur Global"
              <br /> <br />
              Untuk mencapai visi tersebut, Telkom University Open Library
              mengusung misi sebagai berikut: <br />
              1. Berperan aktif dalam melakukan akuisisi pengetahuan, mengelola
              pengetahuan, dan berbagi pengetahuan sebagai upaya menyediakan
              sumber informasi untuk kebutuhan pembelajaran dan penelitian.{" "}
              <br />
              2. Berperan aktif dalam meningkatkan minat baca dan tulis di
              masyarakat <br />
              3. Bekerja sama dengan semua instansi dalam pengembangan ilmu dan
              pengetahuan. <br />
              <br />
              Telkom University Open Library memiliki lebih dari 141.504 judul
              koleksi dengan jumlah eksemplar 209.319 eksemplar, dan telah
              mendapatkan akreditasi "A" dari Perpustakaan Nasional RI pada
              tahun 2015. Sejak 2014 Telkom University Open Library telah
              mengembangkan konsep "Open" yang terdiri dari 3 (tiga) pokok
              pemikiran, yaitu:
            </p>
            <div className="mt-5 flex flex-col md:flex-row space-y-3 justify-between">
              <div>
                <div className="bg-gainsboro rounded-3xl p-2 pr-4 pl-4">
                  <h4 className="text-dark-red text-sm font-bold">
                    Open untuk siapa pun yang ingin belajar
                  </h4>
                </div>
                <div className="bg-gainsboro rounded-3xl ml-5 mt-3 p-2 pr-4 pl-4">
                  <h4 className="text-dark-red text-sm font-bold">
                    Open untuk menerima semua jenis knowledge
                  </h4>
                </div>
                <div className="bg-gainsboro rounded-3xl ml-12 mt-3 p-2 pr-4 pl-4">
                  <h4 className="text-dark-red text-sm font-bold">
                    Open untuk berbagi knowledge dengan knowledge management
                    lain
                  </h4>
                </div>
              </div>

              <div className="flex gap-8">
                <img
                  src="/assets/image/logo_akreditasi.svg"
                  alt="cover buku 1"
                  className="h-[170px] transition-transform duration-300 hover:scale-110"
                />
                <img
                  src="/assets/image/logo_akreditasi2.svg"
                  alt="cover buku 2"
                  className="h-[140px] transition-transform duration-300 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
