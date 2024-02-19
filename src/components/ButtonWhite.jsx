function ButtonWhite({ children }) {
  return (
    <>
      <button
        type="button"
        className="flex items-center justify-center gap-4 border-2 border-white text-white px-6 py-2"
      >
        {children}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </>
  );
}

export default ButtonWhite;
