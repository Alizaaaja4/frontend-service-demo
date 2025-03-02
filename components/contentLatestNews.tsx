import NextLink from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faNewspaper } from "@fortawesome/free-solid-svg-icons";

export const ContentLatestNews = () => {
  return (
    <section className=" shadow-md shadow-dark-red rounded-lg p-4">
      {/* latest news */}
      <h3 className="flex text-maroon text-xl text-start font-bold underline mb-5 gap-2">
        <FontAwesomeIcon icon={faNewspaper} className="w-[26px] mt-1"/>Latest News
      </h3>

      {/* news 1 */}
      <NextLink href="/landing/news" className="grid grid-cols-2 shadow-sm shadow-dark-red p-3 gap-3 mt-2 rounded-lg">
        <img
          src="/assets/image/kampus-surabaya.png"
          alt="image-news"
          className="w-[165px] h-[180px] rounded-md object-cover"
        />
        <div className="flex flex-col justify-between text-start">
          {/* date */}
          <h6 className="flex items-center text-dodger-blue text-[10px] font-bold gap-1 mt-2 -mb-2">
            <FontAwesomeIcon icon={faCalendarDays} className="w-[10px]" />
            24/03/2024
          </h6>

          {/* title */}
          <h3 className="text-black font-bold text-[14px] mt-1">
            Telkom memiliki cabang baru
          </h3>

          {/* deskripsi */}
          <p className="text-white-abu text-[10px] mt-1">
            Lorem ipsum is a nonsensical Latin text used to demonstrate the
            visual form of a document or a typeface. It is derived from a
            1st-century BC text by Cicero and has been
          </p>
        </div>
      </NextLink>

      {/* news 2 */}
      <NextLink href="/landing/news" className="grid grid-cols-2 shadow-sm shadow-dark-red p-3 gap-3 mt-2 rounded-lg">
        <img
          src="/assets/image/kampus-surabaya.png"
          alt="image-news"
          className="w-[165px] h-[180px] rounded-md object-cover"
        />
        <div className="flex flex-col justify-between text-start">
          {/* date */}
          <h6 className="flex items-center text-dodger-blue text-[10px] font-bold gap-1 mt-2 -mb-2">
            <FontAwesomeIcon icon={faCalendarDays} className="w-[10px]" />
            24/03/2024
          </h6>

          {/* title */}
          <h3 className="text-black font-bold text-[14px] mt-1">
            Telkom memiliki cabang baru
          </h3>

          {/* deskripsi */}
          <p className="text-white-abu text-[10px] mt-1">
            Lorem ipsum is a nonsensical Latin text used to demonstrate the
            visual form of a document or a typeface. It is derived from a
            1st-century BC text by Cicero and has been
          </p>
        </div>
      </NextLink>

      {/* news 3 */}
      <NextLink href="/landing/news" className="grid grid-cols-2 shadow-sm shadow-dark-red p-3 gap-3 mt-2 rounded-lg">
        <img
          src="/assets/image/kampus-surabaya.png"
          alt="image-news"
          className="w-[165px] h-[180px] rounded-md object-cover"
        />
        <div className="flex flex-col justify-between text-start">
          {/* date */}
          <h6 className="flex items-center text-dodger-blue text-[10px] font-bold gap-1 mt-2 -mb-2">
            <FontAwesomeIcon icon={faCalendarDays} className="w-[10px]" />
            24/03/2024
          </h6>

          {/* title */}
          <h3 className="text-black font-bold text-[14px] mt-1">
            Telkom memiliki cabang baru
          </h3>

          {/* deskripsi */}
          <p className="text-white-abu text-[10px] mt-1">
            Lorem ipsum is a nonsensical Latin text used to demonstrate the
            visual form of a document or a typeface. It is derived from a
            1st-century BC text by Cicero and has been
          </p>
        </div>
      </NextLink>

      {/* news 4 */}
      <NextLink href="/landing/news" className="grid grid-cols-2 shadow-sm shadow-dark-red p-3 gap-3 mt-2 rounded-lg">
        <img
          src="/assets/image/kampus-surabaya.png"
          alt="image-news"
          className="w-[165px] h-[180px] rounded-md object-cover"
        />
        <div className="flex flex-col justify-between text-start">
          {/* date */}
          <h6 className="flex items-center text-dodger-blue text-[10px] font-bold gap-1 mt-2 -mb-2">
            <FontAwesomeIcon icon={faCalendarDays} className="w-[10px]" />
            24/03/2024
          </h6>

          {/* title */}
          <h3 className="text-black font-bold text-[14px] mt-1">
            Telkom memiliki cabang baru
          </h3>

          {/* deskripsi */}
          <p className="text-white-abu text-[10px] mt-1">
            Lorem ipsum is a nonsensical Latin text used to demonstrate the
            visual form of a document or a typeface. It is derived from a
            1st-century BC text by Cicero and has been
          </p>
        </div>
      </NextLink>
    </section>
  );
};
