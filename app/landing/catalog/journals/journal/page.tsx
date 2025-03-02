import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import JournalLayout from './layout';
import { ContentJournal } from '@/components/contentJournal';


export default function JournalsPage() {

  return (
    <JournalLayout>
      <Navbar />
      <section className='mb-5 p-10'>
        <ContentJournal />
      </section>
      <Footer />
    </JournalLayout>
  );
}
