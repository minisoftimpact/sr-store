import { useContext } from "react";
import { ModalContext } from "../context";
import Heading from "./Heading";

function Modal() {
  const { modalProperties, setModalProperties } = useContext(ModalContext);

  const { heading, body } = modalProperties;

  function handleClose() {
    setModalProperties({
      isOpen: false,
      heading: "",
      body: "",
    });
  }

  return (
    <>
      <div className="fixed inset-0 z-50 flex h-screen w-screen items-center justify-center bg-black/75">
        <div className="w-full max-w-xs rounded-lg bg-white p-4 shadow md:max-w-2xl">
          <div className="flex items-center justify-between">
            {heading && <Heading>{heading}</Heading>}
            <svg
              className="ml-auto size-8"
              fill="currentColor"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              onClick={handleClose}
            >
              <path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
            </svg>
          </div>
          <hr />
          <div className="max-h-96 min-h-40 p-4">{body}</div>
        </div>
      </div>
    </>
  );
}

export default Modal;
