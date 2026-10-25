import Layout from "../../components/layout/layout";
import WorkList from "../../components/workList";
import { getSortedWorkData } from "../../lib/work";
import utilStyles from "../../styles/utils.module.css";
import Link from "next/link";

export async function getStaticProps() {
  return {
    props: {
      allWorkData: getSortedWorkData(),
    },
  };
}

export default function Work({ allWorkData }) {
  return (
    <Layout
      title="Work"
      description="Things Rafi Gil Diaz has built: backend systems, platform infrastructure, and full stack products."
    >
      <div className={`${utilStyles.pageTitle} ${utilStyles.borderBottom}`}>
        <h1>Work</h1>
        <p>
          A few things I've built, with a bit more detail than fits on a{" "}
          <Link href="/resume">resume</Link>.
        </p>
      </div>
      <WorkList entries={allWorkData} />
    </Layout>
  );
}
