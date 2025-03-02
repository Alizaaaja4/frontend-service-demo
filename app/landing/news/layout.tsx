export default function NewsLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <section className="relative flex flex-col min-h-screen">
        <div className="flex-grow">
          {children}
        </div>
      </section>
    );
  }
  