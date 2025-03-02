import JournalsLayout from "./layout";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContentJournals } from "@/components/contentJournals";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookJournalWhills } from "@fortawesome/free-solid-svg-icons";

export default function JournalsPage() {
  return (
    <JournalsLayout>
      <Navbar />
      <section className="p-10">
        <h1 className="flex text-maroon text-3xl font-bold text-start underline decoration-maroon underline-offset-2 gap-2">
          <FontAwesomeIcon icon={faBookJournalWhills} className="w-[29px] mt-1"/> Journals
        </h1>
        <div className="mt-6 mb-5">
          <ContentJournals />
        </div>
      </section>
      <Footer />
    </JournalsLayout>
  );
}
