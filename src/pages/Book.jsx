import ProductCard from "../components/ProductCard";
import ProductContainer from "../components/ProductContainer";
import Section from "../components/Section";
import { getBooks } from "../data/books";

function Book() {
  const books = getBooks();

  return (
    <>
      <Section heading="BOOKS">
        <ProductContainer>
          {books.map((book) => (
            <ProductCard key={book.id} product={book} />
          ))}
        </ProductContainer>
      </Section>
    </>
  );
}

export default Book;
