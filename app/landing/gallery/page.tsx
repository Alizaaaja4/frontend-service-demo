import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContentGallery } from "@/components/contentGallery";

export default function GallerytPage() {
  return (
    <section>
      <Navbar />
      <div className="container mx-auto max-w-6xl px-6 mt-5">
        <ContentGallery />
      </div>
      <Footer />
    </section>
  );
}
