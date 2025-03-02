import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import BookLayout from './layout';
import { ContentBook } from '@/components/contentBook';


export default function BooksPage() {

  return (
    <BookLayout>
      <Navbar />
      <section className='mb-5 p-10'>
        <ContentBook />
      </section>
      <Footer />
    </BookLayout>
  );
}
