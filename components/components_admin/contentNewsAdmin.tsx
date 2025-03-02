import ModalEditNews from "./modalEditNews";
import ModalViewNews from "./modalViewNews";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

export default function ContentNewsAdmin() {
  return (
    <section className="bg-white shadow-md shadow-gray-600 rounded-lg p-4">
      {/* latest news */}
      <h3 className="flex text-dark-red text-xl text-start font-bold underline mb-3 gap-2">
        Drafts
      </h3>

      {/* news 1 */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-dark-red p-3 gap-4 mt-2 rounded-lg relative">
        {/* Image with adjusted sizing */}
        <img
          src="/assets/image/kampus-surabaya.png"
          alt="image-news"
          className="w-full h-full rounded-md object-cover"
        />

        <div className="flex flex-col justify-between text-start">
          <div className="flex justify-between items-start mb-2">
            {/* date */}
            <h6 className="flex items-center text-dodger-blue text-xs font-bold gap-1">
              <FontAwesomeIcon icon={faCalendarDays} className="w-[12px]" />
              24/03/2024
            </h6>

            {/* editing */}
            <ModalEditNews />
          </div>

          {/* title */}
          <h3 className="text-black font-bold text-lg mt-1">
            Telkom memiliki cabang baru
          </h3>

          {/* description */}
          <p className="text-gray-600 text-sm mt-2">
            Lorem ipsum is a nonsensical Latin text used to demonstrate the
            visual form of a document or a typeface. It is derived from a
            1st-century BC text by Cicero and has been popularized...
          </p>

          {/* button and status */}
          <div className="flex gap-4 mt-3">
            <ModalViewNews />

            <div className="bg-orange-red text-white text-sm px-4 py-1 rounded-md">
              Pending
            </div>
          </div>
        </div>
      </div>

      {/* news 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 border-2 border-dark-red p-3 gap-4 mt-2 rounded-lg relative">
        {/* Image with adjusted sizing */}
        <img
          src="/assets/image/kampus-surabaya.png"
          alt="image-news"
          className="w-full h-full rounded-md object-cover"
        />

        <div className="flex flex-col justify-between text-start">
          <div className="flex justify-between items-start mb-2">
            {/* date */}
            <h6 className="flex items-center text-dodger-blue text-xs font-bold gap-1">
              <FontAwesomeIcon icon={faCalendarDays} className="w-[12px]" />
              24/03/2024
            </h6>

            {/* editing */}
            <ModalEditNews />
          </div>

          {/* title */}
          <h3 className="text-black font-bold text-lg mt-1">
            Telkom memiliki cabang baru
          </h3>

          {/* description */}
          <p className="text-gray-600 text-sm mt-2">
            Lorem ipsum is a nonsensical Latin text used to demonstrate the
            visual form of a document or a typeface. It is derived from a
            1st-century BC text by Cicero and has been popularized...
          </p>

          {/* button and status */}
          <div className="flex gap-4 mt-3">
            <ModalViewNews />

            <div className="bg-orange-red text-white text-sm px-4 py-1 rounded-md">
              Pending
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
