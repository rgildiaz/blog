import Layout from "../../components/layout/layout";
import Head from "next/head";

import projectStyles from "./projects.module.css"

export default function Projects() {
  return (
    <Layout>
      <Head>
        <title>Rafi's projects</title>
      </Head>
      <h1>Projects</h1>
			<ProjectSection title="Music for Web Browsers" skills={["js", "react"]} />
			<ProjectSection title="Word Music" skills={["scd"]} />
			<ProjectSection title="genz" skills={["python", "scd"]} />
    </Layout>
  );
}

const ProjectSection = ({title, skills}) => {
	return (
		<section className={projectStyles.projectSection}>
			<header>
				<h2>{title}</h2>
			</header>
		</section>
	)

}
