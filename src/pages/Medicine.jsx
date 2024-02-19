import ProductCard from "../components/ProductCard";
import Section from "../components/Section";
import { getMedicines } from "../data/medicines";

function Medicine() {
  const medicines = getMedicines();

  return (
    <>
      <Section heading="MEDICINES">
        <div className="grid gap-6 py-8 md:grid-cols-3 lg:grid-cols-4">
          {medicines.map((medicine) => (
            <ProductCard key={medicine.id} product={medicine} />
          ))}
        </div>
      </Section>
    </>
  );
}

export default Medicine;
