import ProductCard from "../components/ProductCard";
import ProductContainer from "../components/ProductContainer";
import Section from "../components/Section";
import { getMedicines } from "../data/medicines";

function Medicine() {
  const medicines = getMedicines();

  return (
    <>
      <Section heading="MEDICINES">
        <ProductContainer>
          {medicines.map((medicine) => (
            <ProductCard key={medicine.id} product={medicine} />
          ))}
        </ProductContainer>
      </Section>
    </>
  );
}

export default Medicine;
