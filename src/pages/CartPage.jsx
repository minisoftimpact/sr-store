import { useContext } from "react";
import Button from "../components/Button";
import Section from "../components/Section";
import CartProduct from "../components/cart/CartProduct";
import { CartContext } from "../context";

function CartPage() {
  const { cartItems } = useContext(CartContext);

  const subtotal = cartItems.reduce((accumulator, currentValue) => {
    const payableAmount = currentValue.price - currentValue.discount;

    return (accumulator += currentValue.quantity * payableAmount);
  }, 0);

  const shippingCharge = Math.ceil(subtotal / 1000) * 50;

  const finalPayable = subtotal + shippingCharge;

  return (
    <>
      <Section heading="Cart Page">
        <div className="grid gap-8 py-8 md:grid-cols-4">
          <div className="col-span-3">
            <div className="hidden border py-2 font-bold opacity-50 sm:grid sm:grid-cols-12">
              <div className="col-span-2"></div>
              <div className="col-span-3 text-center">Product</div>
              <div className="col-span-2 text-center">Price</div>
              <div className="col-span-2 text-center">Quantity</div>
              <div className="col-span-2 text-center">Subtotal</div>
              <div></div>
            </div>
            {cartItems.length ? (
              <div className="grid gap-8 sm:gap-0">
                {cartItems.map((product) => (
                  <CartProduct key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex h-20 items-center justify-center border p-4 text-xl text-red-500">
                Cart is empty
              </div>
            )}
          </div>
          <div className="">
            <div className="border">
              <div className="border-b pb-1.5 pt-2.5 text-center font-teko font-semibold text-brand-dark">
                CART TOTALS
              </div>
              <div className="flex items-center justify-between p-2 font-semibold">
                <div className="opacity-50">Subtotal:</div>
                <div>{subtotal} TK</div>
              </div>
              <div className="flex items-center justify-between p-2 font-semibold">
                <div className="opacity-50">Shipping Change:</div>
                <div>{shippingCharge} TK</div>
              </div>
              {/* <div className="grid grid-cols-2">
                <hr className="col-start-2" />
              </div> */}
              <hr />
              <div className="flex items-center justify-between p-2 font-semibold">
                <div className="opacity-50">Payable:</div>
                <div>{finalPayable} TK</div>
              </div>
            </div>
            {cartItems.length > 0 && (
              <div className="flex items-center justify-center py-8">
                <Button>Check Out</Button>
              </div>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}

export default CartPage;
