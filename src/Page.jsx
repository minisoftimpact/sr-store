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

function Page() {
  const { activeNav } = useContext(NavigationContext);

  return (
    <>
      <Header />
      {activeNav === "home" && <Home />}
      {activeNav === "books" && <Book />}
      {activeNav === "medicines" && <Medicine />}
      {activeNav === "about" && <About />}
      {activeNav === "contact" && <Contact />}
      {activeNav === "cart" && <CartPage />}
      <Footer />
    </>
  );
}

export default Page;
