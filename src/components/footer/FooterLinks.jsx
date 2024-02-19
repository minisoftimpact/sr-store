function FooterLinks() {
  return (
    <>
      <div className="grid grid-cols-2 gap-8 font-medium uppercase text-white">
        <div className="flex flex-col gap-4 text-right md:text-left">
          <a href="#" className="hover:text-brand-primary">
            Books
          </a>
          <a href="#" className="hover:text-brand-primary">
            Medicines
          </a>
          <a href="#" className="hover:text-brand-primary">
            Contact
          </a>
        </div>
        <div className="flex flex-col gap-4">
          <a href="#" className="hover:text-brand-primary">
            Privacy policy
          </a>
          <a href="#" className="hover:text-brand-primary">
            Refund policy
          </a>
          <a href="#" className="hover:text-brand-primary">
            Terms & Conditions
          </a>
        </div>
      </div>
    </>
  );
}

export default FooterLinks;
