import Section from './subcomponents/Section'

export default function About() {
  return (
    <Section name="who i am">
      <ul>
        <li>
          a <strong>software engineer</strong> at <a href='https://pmg.com' target="_blank" rel='noreferrer'>PMG</a> focused on developing internal advertising automation tools.
        </li>
        <li>a graduate from <strong>UIUC</strong> with a B.S. in{" "}
          <a
            href="https://ischool.illinois.edu/"
            target="_blank"
            rel="noreferrer"
          >
            information science
          </a>{" "}
          and a B.A. in{" "}
          <a
            href="https://music.illinois.edu/area/music-technology"
            target="_blank"
            rel="noreferrer"
          >
            music technology
          </a>
          ,
        </li>
        <li>
          a <strong>musician</strong> interested in algorithmic composition,
          computer music, and other electronic music.
        </li>
      </ul>
    </Section>
  );
}
