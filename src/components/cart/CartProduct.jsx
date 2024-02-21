import { useContext } from "react";
import { CartContext } from "../../context";
import { getImgUrl } from "../../utils";
import Quantity from "./Quantity";

function CartProduct({ product }) {
  const { cartItems, setCartItems } = useContext(CartContext);

  const { name, image, price, discount, quantity } = product;

  const payableAmount = price - discount;

  function handleRemoveFromCart() {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== product.id));
  }

  return (
    <>
      <div className="grid grid-cols-12 border font-semibold md:p-4">
        <div className="col-span-full flex gap-4 p-2 md:col-span-6">
          <div className="flex shrink-0 grow-0 items-center justify-center md:col-span-2">
            <img
              src={getImgUrl(image)}
              alt={name}
              className="size-20 bg-brand-gray object-cover text-xs"
            />
          </div>
          <div className="flex shrink grow flex-col flex-wrap items-start justify-center gap-2 md:flex-row md:items-center md:justify-start">
            <div className="flex items-center justify-center text-left">
              {name}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {discount > 0 && <del className="opacity-50">{price} TK</del>}
              <span>{payableAmount} TK</span>
            </div>
          </div>
        </div>
        <div className="col-span-full grid grid-cols-6 gap-2 border-t p-2 md:col-span-6 md:border-0">
          <div className="col-span-3 flex flex-col items-center justify-center gap-2">
            <div className="md:hidden">Quantity</div>
            <Quantity product={product} />
          </div>
          <div className="col-span-2 flex flex-col items-center justify-center gap-2">
            <div className="md:hidden">Subtotal</div>
            <div className="col-span-2 flex items-center justify-center">
              {payableAmount * quantity} TK
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <div className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6 cursor-pointer text-red-500"
                onClick={handleRemoveFromCart}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CartProduct;
