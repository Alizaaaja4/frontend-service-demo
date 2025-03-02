import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContentAbout } from "@/components/contentAbout";

export default function Home() {
  return (
    <section>
      <Navbar />
      <div className="container mx-auto max-w-6xl px-6 mt-5">
        <ContentAbout />
      </div>
      <Footer />
    </section>
  );
}
