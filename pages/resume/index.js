import Layout from "../../components/layout/layout";
import resumeSectionStyles from "./resumeSection.module.css";
import Link from "next/link";

/*
 * Each bullet can link to a write-up in /work by setting `work` to its id.
 */
const EXPERIENCE = [
  {
    title: "Founding Engineer",
    org: "AchillesHR",
    location: "New York, NY",
    dates: "November 2025 – Present",
    bullets: [
      {
        text: <>Designed, shipped, and scaled our internal advertising platform, responsible for handling thousands of dollars of ad spend each month for our customers. Includes one-click ad creative using <strong>Google Gemini 3 Pro Image</strong> and the <strong>Anthropic API</strong>, and budget management across several platforms via their APIs (e.g. <strong>Meta Ads</strong>).</>,
        work: "ad-platform",
      },
      {
        text: <>Owned discovery and development of several net-new product features, including a full job board hosting service and an integrated analytics dashboard (among many others), directly contributing to the company's $1M+ in ARR growth over the past year.</>,
      },
      {
        text: <>Designed and implemented our generalized event-based architecture, responsible for routing tens of thousands of events daily and used by every critical service on the platform.</>,
        work: "event-architecture",
      },
      {
        text: <>Diagnosed persistent memory issues on our API server, including a memory leak. Built out monitoring infrastructure while migrating observability from New Relic-specific tooling to <strong>OpenTelemetry</strong>.</>,
        work: "memory-leak",
      },
      {
        text: <>Improved our <strong>Python</strong>-based AI voice screening agent by implementing silence detection, upgrading to Cartesia Sonic-3 TTS, and fixing incoming call flows.</>,
      },
    ],
  },
  {
    title: "Software Engineer",
    org: "PMG Worldwide",
    location: "Dallas, TX",
    dates: "June 2023 – October 2025",
    bullets: [
      {
        text: <>Led an engineering team in the complete redesign of our team's legacy sitelink ad management app, reducing asset upload times by over 70% and unlocking platform-agnostic updates through the <strong>Google Ads</strong> and <strong>Microsoft Ads</strong> APIs.</>,
        work: "sitelink-manager",
      },
      {
        text: <>Architected the <strong>AWS</strong> infrastructure for a Slack-integrated, <strong>RAG</strong>-powered chatbot, delivering context-aware answers to 10+ channel advertising teams and supporting dozens of concurrent users.</>,
        work: "rag-chatbot",
      },
      {
        text: <>Built a search query reporting tool in <strong>Python</strong> and <strong>AWS</strong> that started as a side project for one team before growing into management-required tooling across 80+ client teams in the search channel.</>,
        work: "search-query-reports",
      },
      {
        text: <>Diagnosed performance bottlenecks in a legacy <strong>Go</strong> API. Constructed comprehensive documentation via <strong>OpenAPI</strong> and <strong>Redocly</strong>, enabling a faster onboarding process for new engineering hires.</>,
      },
      {
        text: <>Implemented ad templating features across the <strong>Django</strong> backend and <strong>React</strong> frontend of a dynamic social ad tool generating over $1M in revenue and 30%+ ROAS improvement for clients.</>,
      },
    ],
  },
  {
    title: "Systems and Operations Intern",
    org: "Information Trust Institute, University of Illinois",
    location: "Urbana, IL",
    dates: "June 2022 – May 2023",
    bullets: [
      {
        text: <>Developed an internal <strong>Python</strong> utility to sync Active Directory data to a self-hosted GitLab instance, ensuring proper repository access for 50+ users, deployed on-premises with <strong>Docker</strong>.</>,
      },
      {
        text: <>Configured and maintained a network of 15+ <strong>Ubuntu</strong> systems for the <Link href="https://www.energy.gov/ceser/liberty-eclipse">Liberty Eclipse</Link> project (Dept. of Energy), and managed it remotely with <strong>Ansible</strong>, <strong>Grafana</strong>, and <strong>Loki</strong>.</>,
      },
    ],
  },
];

const SKILLS = [
  ["Languages", "Python, TypeScript, Go, SQL, SuperCollider"],
  ["Frameworks", "React, Node.js, NestJS, Django"],
  ["Infrastructure", "AWS, Terraform, Docker, CI/CD, Linux, OpenTelemetry, Ansible"],
  ["AI", "Claude Code, RAG, Prompt Engineering"],
];

var Section = (props) => {
  return (
    <section className={resumeSectionStyles.section}>
      <h2>{props.title}</h2>
      {props.children}
    </section>
  );
}

var Entry = ({ title, org, location, dates, children }) => {
  return (
    <div className={resumeSectionStyles.subsection}>
      <div className={resumeSectionStyles.subsection_title}>
        <div>
          <h3>{title}</h3>
          <p>{location}</p>
        </div>
        <div>
          <p className={resumeSectionStyles.org}>{org}</p>
          <p className={resumeSectionStyles.date}>{dates}</p>
        </div>
      </div>
      {children}
    </div>
  );
}

export default function Resume() {
  return (
    <Layout
      title="Resume"
      description="Resume of Rafi Gil Diaz, a backend-leaning full stack engineer working in Python and TypeScript."
    >
      <section className={resumeSectionStyles.title_block}>
        <h1>Rafael Gil Diaz</h1>
        <div className={resumeSectionStyles.contact}>
          <Link href="mailto:rfgildiaz@gmail.com">rfgildiaz@gmail.com</Link>
          <Link href="https://linkedin.com/in/rgildiaz">linkedin.com/in/rgildiaz</Link>
          <Link href="https://github.com/rgildiaz">github.com/rgildiaz</Link>
          <Link href="/resume.pdf" className="no-print">download PDF</Link>
        </div>
        <p className={resumeSectionStyles.summary}>
          Backend-leaning full stack engineer with 3 years of experience shipping
          customer-facing products and developer tooling in Python and
          TypeScript. Skilled in AI and comfortable leading teams from discovery
          to delivery.
        </p>
      </section>

      <Section title="Experience">
        {EXPERIENCE.map(({ bullets, ...job }) => (
          <Entry key={`${job.org} ${job.title}`} {...job}>
            <ul>
              {bullets.map(({ text, work }, i) => (
                <li key={i}>
                  {text}
                  {work ? (
                    <>
                      {" "}
                      <Link href={`/work/${work}`} className={`${resumeSectionStyles.more} no-print`}>
                        (more)
                      </Link>
                    </>
                  ) : null}
                </li>
              ))}
            </ul>
          </Entry>
        ))}
      </Section>

      <Section title="Skills">
        {SKILLS.map(([category, items]) => (
          <p key={category}>
            <strong>{category}:</strong> {items}
          </p>
        ))}
      </Section>

      <Section title="Education">
        <Entry
          title="University of Illinois Urbana-Champaign"
          location="Urbana, IL"
          org="B.S. in Information Science, B.A. in Music Technology"
          dates="May 2023"
        >
          <p>3.68 GPA · Dean's List · Graduated with Honors</p>
        </Entry>
      </Section>
    </Layout>
  );
}
