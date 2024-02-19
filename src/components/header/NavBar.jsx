function NavBar({ onClickNav, activeTab, onCloseDrawer }) {
  function handleClick(option) {
    onClickNav(option);
    onCloseDrawer();
  }

  return (
    <>
      <nav className="flex shrink grow flex-col flex-wrap items-center justify-center gap-8 md:flex-row">
        <a
          className={`font-medium uppercase hover:text-brand-secondary ${activeTab === "home" ? "text-brand-primary" : ""}`}
          href="#"
          onClick={() => handleClick("home")}
        >
          Home
        </a>
        <a
          className={`font-medium uppercase hover:text-brand-secondary ${activeTab === "books" ? "text-brand-primary" : ""}`}
          href="#"
          onClick={() => handleClick("books")}
        >
          Books
        </a>
        <a
          className={`font-medium uppercase hover:text-brand-secondary ${activeTab === "medicines" ? "text-brand-primary" : ""}`}
          href="#"
          onClick={() => handleClick("medicines")}
        >
          Medicines
        </a>
        {/* <a
          className={`font-medium uppercase hover:text-brand-secondary ${activeTab === "about" ? "text-brand-primary" : ""}`}
          href="#"
          onClick={() => handleClick("about")}
        >
          About
        </a> */}
        <a
          className={`font-medium uppercase hover:text-brand-secondary ${activeTab === "contact" ? "text-brand-primary" : ""}`}
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
