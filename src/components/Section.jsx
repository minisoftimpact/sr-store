import Heading from "./Heading";

function Section({ children, heading }) {
  return (
    <>
      <section className="container relative max-w-6xl px-4 py-12 md:py-8">
        {heading && <Heading>{heading}</Heading>}
        <div className="w-full">{children}</div>
      </section>
    </>
  );
}

export default Section;
