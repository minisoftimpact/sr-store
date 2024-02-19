import ButtonWhite from "../ButtonWhite";
import Section from "../Section";

function OfferSection() {
  return (
    <>
      <div className="bg-brand-primary md:py-8">
        <Section>
          <div className="flex flex-col justify-center gap-6 md:flex-row md:justify-between md:gap-20">
            <div className="flex flex-1 justify-center md:justify-end">
              <h3 className="text-center font-teko text-3xl font-semibold uppercase text-white md:text-4xl xl:text-5xl">
                Grab this limited time offer
              </h3>
            </div>
            <div className="flex flex-1 items-center justify-center">
              <ButtonWhite>Order Now</ButtonWhite>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
}

export default OfferSection;
