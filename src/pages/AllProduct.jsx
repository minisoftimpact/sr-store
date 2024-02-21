import ProductCard from "../components/ProductCard";
import ProductContainer from "../components/ProductContainer";
import Section from "../components/Section";
import { getProducts } from "../data/products";

function AllProduct() {
  const products = getProducts();

  return (
    <>
      <Section heading="All Products">
        <ProductContainer>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ProductContainer>
      </Section>
    </>
  );
}

export default AllProduct;
