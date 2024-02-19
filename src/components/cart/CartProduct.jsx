import { useContext } from "react";
import { CartContext } from "../../context";

function CartProduct({ product }) {
  const { cartItems, setCartItems } = useContext(CartContext);

  const { name, image, price, discount, quantity } = product;

  const payableAmount = price - discount;

  function handleIncrement() {
    setCartItems(
      cartItems.map((cartItem) => {
        if (cartItem.id === product.id) {
          return { ...cartItem, quantity: quantity + 1 };
        } else {
          return cartItem;
        }
      }),
    );
  }

  function handleDecrement() {
    if (quantity > 1) {
      setCartItems(
        cartItems.map((cartItem) => {
          if (cartItem.id === product.id) {
            return { ...cartItem, quantity: quantity - 1 };
          } else {
            return cartItem;
          }
        }),
      );
    }
  }

  function handleRemoveFromCart() {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== product.id));
  }

  return (
    <>
      <div className="grid border font-semibold sm:grid-cols-12 sm:gap-4 sm:p-4">
        <div className="flex items-center justify-center p-3 sm:col-span-2 sm:p-0">
          <img src={image} className="h-20" />
        </div>
        <div className="flex items-center justify-center border-t p-3 text-center sm:col-span-3 sm:border-0 sm:p-0">
          {name}
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 border-t p-3 sm:col-span-2 sm:justify-center sm:border-0 sm:p-0">
          <div className="sm:hidden">Price:</div>
          <div className="flex flex-wrap items-center justify-center">
            {discount > 0 && <del className="opacity-50">{price} TK</del>}
            <span>{payableAmount} TK</span>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 border-t p-3 sm:col-span-2 sm:justify-center sm:border-0 sm:p-0">
          <div className="sm:hidden">Quantity:</div>
          <div className="flex items-center justify-center sm:col-span-2">
            <div
              onClick={handleDecrement}
              className="flex size-8 cursor-pointer items-center justify-center border"
            >
              -
            </div>
            <div className="flex size-8 items-center justify-center border">
              {quantity}
            </div>
            <div
              onClick={handleIncrement}
              className="flex size-8 cursor-pointer items-center justify-center border"
            >
              +
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 border-t p-3 sm:col-span-2 sm:justify-center sm:border-0 sm:p-0">
          <div className="sm:hidden">Subtotal:</div>
          <div className="flex items-center justify-center sm:col-span-2">
            {payableAmount * quantity} TK
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-2 border-t p-3 sm:justify-center sm:border-0 sm:p-0">
          <div className="sm:hidden">Remove:</div>
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
    </>
  );
}

export default CartProduct;
