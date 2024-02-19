import GroupBookImage from "../../assets/group-books.png";
import Button from "../Button";
import Section from "../Section";

function HeroSection() {
  return (
    <>
      <Section>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex items-center justify-center md:justify-start">
            <div className="grid max-w-sm gap-2">
              <h2 className="text-center font-teko text-4xl font-semibold text-brand-dark md:text-left md:text-6xl">
                EXPLORE <br /> MEDICAL BOOKS
              </h2>
              <p className="text-center md:text-left">
                Order online easily from the website and get home delivery to
                all areas of Bangladesh.
              </p>
              <div className="flex items-center justify-center pt-6 md:justify-start md:pt-10">
                <Button>EXPLORE BOOKS</Button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center md:justify-end">
            <img
              src={GroupBookImage}
              alt="Hero Image"
              className="w-full max-w-lg"
            />
          </div>
        </div>
      </Section>
    </>
  );
}

export default HeroSection;
