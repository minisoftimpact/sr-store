import { getBooks } from "../../data/books";
import ProductCard from "../ProductCard";
import ProductContainer from "../ProductContainer";
import Section from "../Section";

function BookSection() {
  const books = getBooks(4);

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

export default BookSection;
