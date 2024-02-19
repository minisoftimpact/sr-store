import { useContext } from "react";
import { CartContext, NavigationContext } from "../context";

function AddToCart({ product }) {
  const { cartItems, setCartItems } = useContext(CartContext);

  const { setActiveNav } = useContext(NavigationContext)

  const findIndexInCart = cartItems.findIndex(
    (cartItem) => cartItem.id === product.id,
  );

  function handleAddToCart(e) {
    e.stopPropagation();

    const newCartItems = [...cartItems, { ...product, quantity: 1 }];

    setCartItems(newCartItems);
  }

  function handleGoToCartPage(e) {
    e.stopPropagation();

    setActiveNav("cart")
  }

  return (
    <>
      {findIndexInCart > -1 ? (
        <button
          type="button"
          className="w-36 border-2 border-brand-primary bg-brand-primary py-1.5 text-center font-bold text-white"
          onClick={handleGoToCartPage}
        >
          Open Cart
        </button>
      ) : (
        <button
          type="button"
          className="w-36 border-2 border-brand-primary py-1.5 text-center font-bold text-brand-primary md:hover:bg-brand-primary md:hover:text-white"
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>
      )}
    </>
  );
}

export default AddToCart;
