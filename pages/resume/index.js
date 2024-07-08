import Head from "next/head";
import Layout from "../../components/layout/layout";

export default function Resume() {
  return (
    <Layout>
      <Head>
        <title>Rafi's resume</title>
      </Head>
      <h1>Resume</h1>
      {/* probably not the best idea to mix inline styles and css modules like I am, but eventually I want to migrate over to Tailwind. It'll be easier to do that with inline styles than modules.*/}
      <p
        style={{
          height: "50vh",
          padding: "17vh 2ch",
          color: "rgb(0, 0, 0, 0.2)",
          fontStyle: "italic",
        }}
      >
        i'm not actually sure how much i want to add this to the site, so this
        might stay empty for a long time
      </p>
    </Layout>
  );
}
