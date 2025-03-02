import BooksLayout from './layout';
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContentBooks } from '@/components/contentBooks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons';


export default function JournalsPage() {

  return (
    <BooksLayout>
      <Navbar />
      <section className='p-10'>
        <h1 className='flex text-maroon text-3xl font-bold text-start underline decoration-maroon underline-offset-2 gap-2'>
        <FontAwesomeIcon icon={faBook} className='w-[27px] mt-1' />Books</h1>
        <div className='mt-6 mb-5'>
            <ContentBooks />
        </div>
      </section>
      <Footer />
    </BooksLayout>
  );
}
