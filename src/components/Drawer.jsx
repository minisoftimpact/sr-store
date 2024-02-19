import Logo from "./header/Logo";

function Drawer({ children, onClose }) {
  return (
    <>
      <div className="fixed inset-0 z-50 flex h-screen w-screen justify-start bg-black/40">
        <div className="h-screen w-full max-w-xs bg-white shadow-lg">
          <div
            className="flex items-center justify-between px-4"
            onClick={onClose}
          >
            <Logo />
            <svg
              className="size-8"
              fill="currentColor"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"></path>
            </svg>
          </div>
          <hr />
          <div className="py-4">{children}</div>
        </div>
      </div>
    </>
  );
}

export default Drawer;
