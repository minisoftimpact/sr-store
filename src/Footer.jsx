import Copyright from "./components/footer/Copyright";
import FooterLinks from "./components/footer/FooterLinks";
import SocialLinks from "./components/footer/SocialLinks";

function Footer() {
  return (
    <>
      <footer>
        <div className="bg-brand-dark py-8">
          <div className="container flex max-w-6xl flex-col items-center justify-between gap-16 px-4 py-8 font-medium md:flex-row">
            <FooterLinks />
            <SocialLinks />
          </div>
        </div>
        <Copyright />
      </footer>
    </>
  );
}

export default Footer;
