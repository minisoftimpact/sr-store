import { useContext } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { NavigationContext } from "./context";
import About from "./pages/About";
import Book from "./pages/Book";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Medicine from "./pages/Medicine";
import CartPage from "./pages/CartPage";
import ProductDetails from "./pages/ProductDetails";
import AllProduct from "./pages/AllProduct";

function Page() {
  const { activeNav } = useContext(NavigationContext);

  let segment1 = "";
  let segment2 = "";

  if (activeNav.includes("/")) {
    segment1 = activeNav.split("/")[0];
    segment2 = activeNav.split("/")[1];
  }

  return (
    <>
      <Header />
      {activeNav === "home" && <Home />}
      {activeNav === "products" && <AllProduct />}
      {activeNav === "books" && <Book />}
      {activeNav === "medicines" && <Medicine />}
      {activeNav === "about" && <About />}
      {activeNav === "contact" && <Contact />}
      {activeNav === "cart" && <CartPage />}
      {segment1 === "product-details" && (
        <ProductDetails productId={segment2} />
      )}
      <Footer />
    </>
  );
}

export default Page;
