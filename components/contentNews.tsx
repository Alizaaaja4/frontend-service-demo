import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTags } from "@fortawesome/free-solid-svg-icons";

export const ContentNews = () => {
  return (
    <section className="shadow-md shadow-dark-red rounded-lg">
      {/* content news */}
      <div className="p-6">
        {/* title */}
        <h3 className="text-black text-3xl font-extrabold text-center">
          Telkom Memiliki Cabang Baru
        </h3>

        {/* penulis */}
        <div className="flex gap-2 justify-center text-black font-bold text-sm mt-2">
          <span>Penulis:</span>
          <span>Aliza Nurfitrian Meizahra</span>
        </div>

        {/* date */}
        <h6 className="text-dodger-blue text-sm text-center mt-1">
          Rabu, 21 Agustus 2024 17:33 WIB
        </h6>

        {/* image */}
        <div className="flex justify-center mt-5">
          <img
            src="/assets/image/kampus-surabaya.png"
            alt="image-news"
            className="w-auto h-[240px] rounded-lg"
          />
        </div>

        {/* deskripsi informasi */}
        <p className="text-maroon text-sm text-start mt-7">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          dolores aliquid nobis vel praesentium, enim, eveniet labore dicta
          deserunt error dolorum sunt dignissimos delectus reprehenderit beatae
          magni ipsa aspernatur numquam. Lorem ipsum dolor sit amet consectetur,
          adipisicing elit. Quaerat unde ex rerum obcaecati quos, doloremque sit
          deserunt. Et molestiae doloribus ad quaerat, aspernatur dolor sint,
          autem reprehenderit nulla totam corporis!
          <br /> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          dolores aliquid nobis vel praesentium, enim, eveniet labore dicta
          deserunt error dolorum sunt dignissimos delectus reprehenderit beatae
          magni ipsa aspernatur numquam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Recusandae voluptates ducimus distinctio possimus,
          dolores fuga consequatur perspiciatis suscipit ut. Libero fugit earum
          sint officiis accusantium reprehenderit quod magni magnam vitae?
          <br /> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          dolores aliquid nobis vel praesentium, enim, eveniet labore dicta
          deserunt error dolorum sunt dignissimos delectus reprehenderit beatae
          magni ipsa aspernatur numquam. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Recusandae voluptates ducimus distinctio possimus,
          dolores fuga consequatur perspiciatis suscipit ut. Libero fugit earum
          sint officiis accusantium reprehenderit quod magni magnam vitae?
          <br /> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
          dolores aliquid nobis vel praesentium, enim, eveniet labore dicta
          deserunt error dolorum sunt dignissimos delectus reprehenderit beatae
          magni ipsa aspernatur numquam
        </p>

        {/* tags */}
        <div className="flex items-center gap-2 mt-5 mb-3">
          <h6 className="flex items-center text-maroon gap-2 font-semibold">
            <FontAwesomeIcon icon={faTags} className="w-[19px]" />
            TAG:
          </h6>
          <div className="grid grid-cols-3 lg:grid-cols-6 gap-2">
            <span className="border-2 border-maroon text-[11px] font-semibold text-maroon pl-2 pr-2 pt-1 pb-1 rounded-lg">
                Teknologi
            </span>
            <span className="border-2 border-maroon text-[11px] font-semibold text-maroon pl-2 pr-2 pt-1 pb-1 rounded-lg">
                Sumber Daya Alam
            </span>
            <span className="border-2 border-maroon text-[11px] font-semibold text-maroon pl-2 pr-2 pt-1 pb-1 rounded-lg">
                Indonesia Maju
            </span>
            <span className="border-2 border-maroon text-[11px] font-semibold text-maroon pl-2 pr-2 pt-1 pb-1 rounded-lg">
                Pembangunan
            </span>
            <span className="border-2 border-maroon text-[11px] font-semibold text-maroon pl-2 pr-2 pt-1 pb-1 rounded-lg">
                Sumber Daya Alam
            </span>
          </div>
          
        </div>
      </div>
    </section>
  );
};
