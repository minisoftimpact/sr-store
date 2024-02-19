import AddToCart from "./AddToCart";
import Ratings from "./Ratings";

function ProductCard({ product }) {
  const { name, image, rating, price, discount } = product;

  const payableAmount = price - discount;

  function handleClick(e) {
    console.dir(e.target);
  }

  return (
    <>
      <div
        onClick={handleClick}
        className="grid cursor-pointer gap-2 pb-6 transition-all delay-100 ease-in hover:shadow-lg"
      >
        <div className="group relative">
          <img src={image} />
          <div className="absolute bottom-0 left-0 right-0 hidden w-full items-center justify-center bg-brand-dark py-1.5 text-sm text-white group-hover:flex">
            Quick View
          </div>
        </div>
        <h3 className="text-center font-teko text-lg font-semibold text-brand-dark">
          {name}
        </h3>
        <Ratings number={rating} />
        <div className="flex items-center justify-center gap-2 font-bold">
          {discount > 0 && (
            <del className="opacity-50">
              <span>{price}TK</span>
            </del>
          )}
          <span>{payableAmount}TK</span>
        </div>
        <div className="flex items-center justify-center">
          <AddToCart product={product} />
        </div>
      </div>
    </>
  );
}

export default ProductCard;
