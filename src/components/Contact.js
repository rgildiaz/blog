import Section from "./subcomponents/Section";

export default function Contact() {
  return (
    <Section name="contact me">
      <div className="contacts-container">
        <div>
          <a
            href="https://www.linkedin.com/in/rafael-gil-diaz/"
            rel="noreferrer"
            target="_blank"
          >
            linkedin
          </a>
        </div>
        <div>
          <a href="https://github.com/rgildiaz" rel="noreferrer" target="_blank">
            github
          </a>
        </div>
        <div>
          <a href="mailto:rfgildiaz@gmail.com" rel="noreferrer" target="_blank">
            email
          </a>
        </div>
        <div>
          <a
            href="https://soundcloud.com/rafigildiaz"
            rel="noreferrer"
            target="_blank"
          >
            soundcloud
          </a>
        </div>
      </div>
    </Section>
  );
}
