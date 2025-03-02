export const ContentGallery = () => {
  return (
    <section className="flex flex-col min-h-screen">
      {/* Background Image */}
      <div className="relative bg-[url('/assets/image/kampus-jakartaA.png')] bg-cover bg-center bg-no-repeat w-full h-[60vh] flex items-center justify-center rounded-md">
        <h1 className="font-bold text-white text-5xl text-center z-10">
          Gallery
        </h1>
      </div>

      {/* Content with white background */}
      <div className="bg-white flex-grow">
        {/* Content Tel-U Openlibrary Virtual Tour */}
        <div className="mt-7 mb-7">
          <div className="flex justify-between">
            <h2 className="text-dark-red font-bold text-2xl ml-5 underline decoration-dark-red underline-offset-2">
              Tel-U Openlibrary Virtual Tour
            </h2>
          </div>
          <div className="relative bg-white-pucat rounded-md mt-7 md:ml-10 md:mr-10 md:p-3 justify-center items-center">
            {/* Text positioned at the top-left corner of the image */}
            <div className="absolute -top-2 left-2 bg-light-red rounded-3xl z-10 pr-3 pl-3">
              <h5 className="text-white text-sm font-semibold p-2">
                Tel-U Kampus Bandung
              </h5>
            </div>
            <img
              src="/assets/image/vr-oplib-bandung.png"
              alt="vr oplib bandung"
              className="h-[380px] w-auto"
            />
          </div>

          <div className="relative bg-white-pucat rounded-md mt-7 md:ml-10 md:mr-10 md:p-3 justify-center items-center">
            {/* Text positioned at the top-left corner of the image */}
            <div className="absolute -top-2 left-2 bg-light-red rounded-3xl z-10 pr-3 pl-3">
              <h5 className="text-white text-sm font-semibold p-2">
                Tel-U Jakarta - Kampus A
              </h5>
            </div>
            <img
              src="/assets/image/vr-oplilb-jkt-kampus A.png"
              alt="vr oplib bandung"
              className="h-[380px] w-auto"
            />
          </div>

          <div className="relative bg-white-pucat rounded-md mt-7 md:ml-10 md:mr-10 md:p-3 justify-center items-center">
            {/* Text positioned at the top-left corner of the image */}
            <div className="absolute -top-2 left-2 bg-light-red rounded-3xl z-10 pr-3 pl-3">
              <h5 className="text-white text-sm font-semibold p-2">
                Tel-U Jakarta - Kampus B
              </h5>
            </div>
            <img
              src="/assets/image/vr-oplib-jkt-kampus B.png"
              alt="vr oplib bandung"
              className="h-[380px] w-auto"
            />
          </div>

          <div className="relative bg-white-pucat rounded-md mt-7 md:ml-10 md:mr-10 md:p-3 justify-center items-center">
            {/* Text positioned at the top-left corner of the image */}
            <div className="absolute -top-2 left-2 bg-light-red rounded-3xl z-10 pr-3 pl-3">
              <h5 className="text-white text-sm font-semibold p-2">
                Tel-U Kampus Geger Kalong
              </h5>
            </div>
            <img
              src="/assets/image/vr-oplib-gegerkalong.png"
              alt="vr oplib bandung"
              className="h-[380px] w-auto"
            />
          </div>

          <div className="relative bg-white-pucat rounded-md mt-7 md:ml-10 md:mr-10 md:p-3 justify-center items-center">
            {/* Text positioned at the top-left corner of the image */}
            <div className="absolute -top-2 left-2 bg-light-red rounded-3xl z-10 pr-3 pl-3">
              <h5 className="text-white text-sm font-semibold p-2">
                Tel-U Kampus Surabaya
              </h5>
            </div>
            <img
              src="/assets/image/vr-oplib-surabaya.png"
              alt="vr oplib bandung"
              className="h-[380px] w-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
