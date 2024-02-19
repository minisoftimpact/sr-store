import { getMedicines } from "../../data/medicines";
import ProductCard from "../ProductCard";
import Section from "../Section";

function MedicineSection() {
  const medicines = getMedicines(4);

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

export default MedicineSection;
