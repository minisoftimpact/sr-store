import { getBooks } from "../../data/books";
import ProductCard from "../ProductCard";
import Section from "../Section";

function BookSection() {
  const books = getBooks(4);

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

export default BookSection;
