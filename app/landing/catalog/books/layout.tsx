export default function BooksLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className="flex items-center justify-center gap-4 ">
        <div className="flex-grow">
          {children}
        </div>
      </section>
    );
  }
  