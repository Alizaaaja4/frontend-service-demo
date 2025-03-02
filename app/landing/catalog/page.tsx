import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContentCatalog } from '@/components/contentCatalog';
import CatalogLayout from './layout';

export default function CatalogPage() {
  return (
    <CatalogLayout>
      <header className="w-full bg-gray-800">
        <Navbar />
      </header>
      <section className='container mx-auto max-w-6xl px-6 mt-5'>
        <ContentCatalog />
      </section>
      <footer className="w-full bg-gray-800">
        <Footer />
      </footer>
    </CatalogLayout>
  );
}
