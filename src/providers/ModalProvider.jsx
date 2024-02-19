import { useState } from "react";
import Modal from "../components/Modal";
import { ModalContext } from "../context";

function ModalProvider({ children }) {
  const [modalProperties, setModalProperties] = useState({
    isOpen: false,
    heading: "",
    body: "",
  });

  return (
    <>
      <ModalContext.Provider value={{ modalProperties, setModalProperties }}>
        {children}
        {modalProperties.isOpen && <Modal />}
      </ModalContext.Provider>
    </>
  );
}

export default ModalProvider;
