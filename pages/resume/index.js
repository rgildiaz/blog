import Head from "next/head";
import Layout from "../../components/layout/layout";
import resumeSectionStyles from "./resumeSection.module.css";
import Link from "next/link";

var Section = (props) => {
  return (
    <section className={resumeSectionStyles.section}>
      <h2>{props.title}</h2>
      {props.children}
    </section>
  );
}

export default function Resume() {
  return (
    <Layout>
      <Head>
        <title>Rafi's resume</title>
      </Head>
      <section className={resumeSectionStyles.title_block}>
        <h1>Rafael Gil Diaz</h1>
        <div>
          <Link href="mailto:rfgildiaz@gmail.com">rfgildiaz@gmail.com</Link> |{" "}
          <Link href="https://linkedin.com/in/rafael-gil-diaz">linkedin.com/in/rafael-gil-diaz</Link> |{" "}
          <Link href="https://github.com/rgildiaz">github.com/rgildiaz</Link>
        </div>
      </section>
      <Section title="Education">
        <div className={resumeSectionStyles.subsection}>
          <div className={resumeSectionStyles.subsection_title}>
            <h3>University of Illinois, Urbana-Champaign</h3>
            <div>
              <p>Urbana, IL</p>
              <p className={resumeSectionStyles.date}>August 2019 - May 2023</p>
            </div>
          </div>
          <div className={resumeSectionStyles.subsection}>
            <p>B.S. in Information Science, B.A. in Music Technology</p>
            <p>GPA: 3.68/4.0</p>
          </div>
        </div>
      </Section>

      <Section title="Experience">
        <div className={resumeSectionStyles.subsection}>
          <div className={resumeSectionStyles.subsection_title}>
            <h3>Software Engineer II</h3>
            <p>PMG Worldwide</p>
            <div>
              <p>Dallas, TX</p>
              <p className={resumeSectionStyles.date}>August 2024 - Present</p>
            </div>
          </div>
          <ul>
            <li>Modernized team development standards, refactoring several client-facing tools written in <strong>Python</strong> to
              integrate industry-standard developer tooling such as <strong>uv</strong>, <strong>ruff</strong>, <strong>GitHub Actions</strong>,
              and <strong>DataDog</strong> in order to prepare for successful future maintenance and observability.</li>
            <li>Acted as a subject matter expert on <strong>Python</strong> and <strong>Git</strong>, mentoring other team members, consulting peers on
              technical questions, and leading several internal technical training sessions.</li>
            <li>Designed and managed <strong>AWS</strong> and <strong>Google Cloud</strong> infrastructure for multiple team projects, developing
              several reusable <strong>Terraform</strong> modules in the process for future use.</li>
          </ul>
        </div>
        <div className={resumeSectionStyles.subsection}>
          <div className={resumeSectionStyles.subsection_title}>
            <h3>Software Engineer I</h3>
            <p>PMG Worldwide</p>
            <div>
              <p>Dallas, TX</p>
              <p className={resumeSectionStyles.date}>June 2023 - August 2024</p>
            </div>
          </div>
          <ul>
            <li>Owned the research, growth, and development of a client-facing tool written in <strong>Python</strong>, currently installed
              across 50+ client marketing teams and used over 200 times per month.</li>
            <li>Contributed both front-end and back-end development expertise to a full-stack application built on <strong>React</strong>
              and <strong>Django</strong>, creating over 30% greater return on ad spend for client teams who utilize it.</li>
            <li>Prototyped and developed a net-new context-aware generative ad copy tool built on <strong>Vertex AI</strong> and
              <strong>Python</strong>, allowing client teams to quickly respond to market and trend changes.</li>
          </ul>
        </div>
        <div className={resumeSectionStyles.subsection}>
          <div className={resumeSectionStyles.subsection_title}>
            <h3>Program Management and Operations Support Intern</h3>
            <p>Information Trust Institute, UIUC</p>
            <div>
              <p>Urbana, IL</p>
              <p className={resumeSectionStyles.date}>June 2022 - May 2023</p>
            </div>
          </div>
          <ul>
            <li>
              Led the development of a net-new internal <strong>Python</strong> utility designed to sync Active Directory data across
              multiple platforms, deployed on-premises with <strong>Docker</strong>.
            </li>
            <li>
              Configured and maintained a network of 15+ <strong>Ubuntu</strong> systems used for the <Link href="https://www.energy.gov/ceser/liberty-eclipse">Liberty Eclipse</Link> project, a
              federal-level cybersecurity training program. Once deployed, remotely managed and monitored this network using <strong>Ansible</strong>, <strong>Grafana</strong>, and <strong>Loki</strong>.
            </li>
            <li>
              Authored <Link href="https://github.com/rgildiaz/ITI">comprehensive technical documentation</Link> for previously opaque processes, ensuring easier
              onboarding and reference for future projects.
            </li>
          </ul>
        </div>
      </Section>

      <Section title="Research">
        <div className={resumeSectionStyles.subsection}>
          <div className={resumeSectionStyles.subsection_title}>
            <h3>
              <Link href="https://ischool.illinois.edu/research/projects/data-storytelling-toolkit-libraries-dstl">
                Data Storytelling Toolkit for Libraries
              </Link>
            </h3>
            <p>University of Illinois Urbana-Champaign</p>
            <div>
              <p>Urbana, IL</p>
              <p className={resumeSectionStyles.date}>August 2022 - December 2022</p>
            </div>
          </div>
          <ul>
            <li>
              Performed initial discovery and cleaning of thousands of rows of data from messy public datasets
              using <strong>Python</strong> and <strong>Pandas</strong>.
            </li>
            <li>
              Built and managed 2 custom dashboards built using <strong>Grafana</strong>, <strong>React</strong>, and <strong>Vega-lite</strong>.
            </li>
          </ul>
        </div>
      </Section>

      <Section title="Skills">
        <p><strong>Languages:</strong> Python, SQL, JavaScript, TypeScript, HTML/CSS, Java, Rust, C++</p>
        <p><strong>Frameworks:</strong> Django, Flask, FastAPI, React, Node.js, Next.js</p>
        <p><strong>Developer Tools:</strong> Git, CI/CD (Github Actions), Linux, Docker, Ansible</p>
        <p><strong>Cloud Technology:</strong> Terraform, AWS, Redshift, Google Cloud, Vertex AI, BigQuery</p>
        <p><strong>Observability:</strong> Grafana, OpenTelemetry, DataDog</p>
        <p><strong>Other:</strong> System Design, Software Architecture, Technical Communication, Agile Scrum</p>
      </Section>

    </Layout>
  );
}
