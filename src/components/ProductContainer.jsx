function ProductContainer({ children }) {
  return (
    <>
      <div className="grid grid-cols-2 gap-4 py-8 md:grid-cols-4 md:gap-6 lg:grid-cols-4">
        {children}
      </div>
    </>
  );
}

export default ProductContainer;
