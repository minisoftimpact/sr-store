import { getMedicines } from "../../data/products";
import ProductCard from "../ProductCard";
import ProductContainer from "../ProductContainer";
import Section from "../Section";

function MedicineSection() {
  const medicines = getMedicines(4);

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

export default MedicineSection;
