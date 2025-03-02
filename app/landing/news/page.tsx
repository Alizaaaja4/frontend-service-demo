import NewsLayout from "./layout";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ContentNews } from "@/components/contentNews";
import { ContentLatestNews } from "@/components/contentLatestNews"

export default function NewsPage() {
  return (
    <NewsLayout>
       <Navbar />
      <section className="mb-8">
        <div className="flex flex-col lg:flex-row gap-4 mt-3 mb-7 md:p-7">
          <ContentNews />
          <ContentLatestNews />
        </div>
      </section>
      <Footer />
    </NewsLayout>
  );
}
