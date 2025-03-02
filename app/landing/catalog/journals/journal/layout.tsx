export default function JournalLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className="flex  gap-4 ">
        <div className="flex-grow">
          {children}
        </div>
      </section>
    );
  }
  