import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";

export default function ContentNewsPublish() {
  return (
    <section className="bg-white shadow-md shadow-gray-600 rounded-lg p-4">
      {/* Latest News */}
      <h3 className="flex text-dark-red text-xl font-bold mb-5 underline gap-2">
        Latest News
      </h3>

      {/* News Card */}
      <div className="grid grid-cols-1 items-start border-2 border-dark-red p-3 gap-3 mt-2 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200">
        {/* Text Section */}
        <div className="">
          {/* Date */}
          <h6 className="flex items-center text-dodger-blue text-[10px] font-bold gap-1">
            <FontAwesomeIcon icon={faCalendarDays} className="w-[10px]" />
            24/03/2024
          </h6>

          {/* Title */}
          <h3 className="text-black font-bold text-[14px] mt-1">
            Telkom memiliki cabang baru
          </h3>

          {/* Description */}
          <p className="text-gray-500 text-[10px] mt-1">
            Lorem ipsum is a nonsensical Latin text used to demonstrate the
            visual form of a document or a typeface. It is derived from a
            1st-century BC text by Cicero and has been...
          </p>

          {/* Buttons */}
          <div className="flex gap-2 mt-2">
            {/* <button className="bg-dark-red text-white text-[10px] px-2 py-1 rounded-lg">
              See More
            </button> */}
            <button className="bg-forest-green text-white text-[10px] px-2 py-1 rounded-lg">
              Published
            </button>
          </div>
        </div>
      </div>

      {/* News Card */}
      <div className="grid grid-cols-1 items-start border-2 border-dark-red p-3 gap-3 mt-2 rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-200">
        {/* Text Section */}
        <div className="">
          {/* Date */}
          <h6 className="flex items-center text-dodger-blue text-[10px] font-bold gap-1">
            <FontAwesomeIcon icon={faCalendarDays} className="w-[10px]" />
            24/03/2024
          </h6>

          {/* Title */}
          <h3 className="text-black font-bold text-[14px] mt-1">
            Telkom memiliki cabang baru
          </h3>

          {/* Description */}
          <p className="text-gray-500 text-[10px] mt-1">
            Lorem ipsum is a nonsensical Latin text used to demonstrate the
            visual form of a document or a typeface. It is derived from a
            1st-century BC text by Cicero and has been...
          </p>

          {/* Buttons */}
          <div className="flex gap-2 mt-2">
            {/* <button className="bg-dark-red text-white text-[10px] px-2 py-1 rounded-lg">
              See More
            </button> */}
            <button className="bg-forest-green text-white text-[10px] px-2 py-1 rounded-lg">
              Published
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
