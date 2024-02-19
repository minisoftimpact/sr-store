import ProductCard from "../components/ProductCard";
import Section from "../components/Section";
import { getBooks } from "../data/books";

function Book() {
  const books = getBooks();

  return (
    <>
      <Section heading="BOOKS">
        <div className="grid gap-6 py-8 md:grid-cols-3 lg:grid-cols-4">
          {books.map((book) => (
            <ProductCard key={book.id} product={book} />
          ))}
        </div>
      </Section>
    </>
  );
}

export default Book;
