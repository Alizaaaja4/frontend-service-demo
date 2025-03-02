import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContentBeranda } from "@/components/contentBeranda";

export default function Home() {
  return (
    <section className="text-dark-red">
      <Navbar />
      <div className="container mx-auto max-w-6xl px-6 mt-5">
        <ContentBeranda />
      </div>
      <Footer />
    </section>
  );
}
