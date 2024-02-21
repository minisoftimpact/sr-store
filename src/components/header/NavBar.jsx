import { useContext } from "react";
import { NavigationContext } from "../../context";

function NavBar({ onCloseDrawer }) {
  const { activeNav, setActiveNav } = useContext(NavigationContext);

  function handleClick(option) {
    setActiveNav(option);
    if (onCloseDrawer) {
      onCloseDrawer();
    }
  }

  return (
    <>
      <nav className="flex shrink grow flex-col flex-wrap items-center justify-center gap-8 md:flex-row">
        <a
          className={`font-medium uppercase hover:text-brand-secondary ${activeNav === "home" ? "text-brand-primary" : ""}`}
          href="#"
          onClick={() => handleClick("home")}
        >
          Home
        </a>
        <a
          className={`font-medium uppercase hover:text-brand-secondary ${activeNav === "products" ? "text-brand-primary" : ""}`}
          href="#"
          onClick={() => handleClick("products")}
        >
          All Products
        </a>
        <a
          className={`font-medium uppercase hover:text-brand-secondary ${activeNav === "books" ? "text-brand-primary" : ""}`}
          href="#"
          onClick={() => handleClick("books")}
        >
          Books
        </a>
        <a
          className={`font-medium uppercase hover:text-brand-secondary ${activeNav === "medicines" ? "text-brand-primary" : ""}`}
          href="#"
          onClick={() => handleClick("medicines")}
        >
          Medicines
        </a>
        {/* <a
          className={`font-medium uppercase hover:text-brand-secondary ${activeNav === "about" ? "text-brand-primary" : ""}`}
          href="#"
          onClick={() => handleClick("about")}
        >
          About
        </a> */}
        <a
          className={`font-medium uppercase hover:text-brand-secondary ${activeNav === "contact" ? "text-brand-primary" : ""}`}
          href="#"
          onClick={() => handleClick("contact")}
        >
          Contact
        </a>
      </nav>
    </>
  );
}

export default NavBar;
