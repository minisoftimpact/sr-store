import { useContext } from "react";
import { CartContext } from "../../context";

function Quantity({ product }) {
  const { cartItems, setCartItems } = useContext(CartContext);

  const productInCart =
    cartItems.find((cartItem) => cartItem.id === product.id) ?? {};

  const { quantity = 0 } = productInCart;

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

  return (
    <>
      {quantity > 0 && (
        <div className="flex items-center justify-center sm:col-span-2">
          <div
            onClick={handleDecrement}
            className="flex size-10 cursor-pointer items-center justify-center border"
          >
            -
          </div>
          <div disabled className="flex size-10 items-center justify-center border">
            {quantity}
          </div>
          <div
            onClick={handleIncrement}
            className="flex size-10 cursor-pointer items-center justify-center border"
          >
            +
          </div>
        </div>
      )}
    </>
  );
}

export default Quantity;
