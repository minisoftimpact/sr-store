import { useState } from "react";
import AddToCart from "../components/AddToCart";
import Ratings from "../components/Ratings";
import Quantity from "../components/cart/Quantity";
import { getProduct } from "../data/products";
import { camelCaseToWords, getImgUrl } from "../utils";

function ProductDetails({ productId }) {
  const [tab, setTab] = useState("Specification");

  const product = getProduct(productId);

  const {
    name,
    author,
    category,
    image,
    rating,
    price,
    discount,
    description,
    specifications,
  } = product;

  const payableAmount = price - discount;

  return (
    <>
      <section className="container relative max-w-4xl px-4 sm:py-12 md:py-8">
        <div className="my-8 grid gap-8">
          <div className="grid gap-8 sm:grid-cols-3">
            <div>
              <img
                src={getImgUrl(image)}
                alt={name}
                className="aspect-square w-full bg-brand-gray object-cover"
              />
            </div>
            <div className="grid gap-4 sm:col-span-2">
              <h3 className="font-teko text-xl font-semibold text-brand-dark md:text-3xl">
                {name}
              </h3>
              <p className="flex items-center justify-start gap-2 text-left font-medium text-brand-dark">
                <span>-</span>
                <span className="capitalize">{author}</span>
              </p>
              <p className="text-left text-brand-dark">
                <span>Category: </span>
                <span className="capitalize">{category}</span>
              </p>
              <div className="flex items-center justify-start">
                <Ratings number={rating} />
              </div>
              <div className="flex items-center justify-start gap-2 text-xl">
                <span className="font-medium text-brand-dark">Price: </span>
                <span className="font-medium">{payableAmount} TK</span>
                {discount > 0 && (
                  <>
                    <del className="text-lg opacity-30">
                      <span>{price} TK</span>
                    </del>
                    <span className="text-sm font-normal">
                      (Discount: {discount} TK)
                    </span>
                  </>
                )}
              </div>
              <div className="flex items-center justify-center gap-8 sm:justify-start">
                <Quantity product={product} />
                <AddToCart product={product} />
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="relative flex items-center justify-start text-center font-semibold">
              <div
                onClick={() => setTab("Specification")}
                className={`${tab === "Specification" ? "z-10 border-brand-primary" : "border-transparent"}  w-32 cursor-pointer rounded-t-xl border-2  border-b-white bg-white py-2`}
              >
                Specification
              </div>
              {description && (
                <div
                  onClick={() => setTab("Summary")}
                  className={`${tab === "Summary" ? "z-10 border-brand-primary" : "border-transparent"}  w-32 cursor-pointer rounded-t-xl border-2  border-b-white bg-white py-2`}
                >
                  Summary
                </div>
              )}

              <div className="absolute bottom-0 left-0 right-0 w-full border-b-2 border-brand-primary"></div>
            </div>

            {tab === "Specification" && (
              <div className="grid divide-y border">
                {Object.keys(specifications).map((key) => (
                  <div key={key} className="flex items-center justify-between">
                    <div className="w-40 shrink-0 grow-0 border-r px-4 py-3">
                      {camelCaseToWords(key)}
                    </div>
                    <div className="shrink grow px-4 py-3">
                      {specifications[key]}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {tab === "Summary" && (
              <div className="text-justify leading-loose">{description}</div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default ProductDetails;
