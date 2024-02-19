function Copyright() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="container flex h-20 max-w-6xl items-center justify-between gap-4 px-4 py-8 font-medium md:h-28">
        <div>Copyright © {currentYear} SR Store</div>
        <div>Powered by MiniSoftImpact</div>
      </div>
    </>
  );
}

export default Copyright;
