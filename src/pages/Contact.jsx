import Section from "../components/Section";

function Contact() {
  return (
    <>
      <Section heading="Contact">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.327412515806!2d90.38455327602263!3d23.735701139339145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8c6fddec46d%3A0x56930d03c95d73a0!2sKatabon%2C%20Dhaka%201205!5e0!3m2!1sen!2sbd!4v1708317168620!5m2!1sen!2sbd"
          className="my-8 aspect-video w-full rounded-lg border"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Section>
    </>
  );
}

export default Contact;
