import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import Home from "./pages/Home";
import Book from "./pages/Book";
import Medicine from "./pages/Medicine";
import About from "./pages/About";
import Contact from "./pages/Contact";

function Page() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <>
      <Header activeTab={activeTab} onClickNav={setActiveTab} />
      {activeTab === "home" && <Home />}
      {activeTab === "books" && <Book />}
      {activeTab === "medicines" && <Medicine />}
      {activeTab === "about" && <About />}
      {activeTab === "contact" && <Contact />}
      <Footer />
    </>
  );
}

export default Page;
