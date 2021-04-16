import Link from "next/link";
import Layout from "../components/Layout";

const IndexPage = () => (
  <Layout title="Home | The Algorithm Official Website">
    <h1>Hello 👋</h1>
    <p>
      <Link href="/merch">
        <a>Merch</a>
      </Link>
      <Link href="/discography">
        <a>Discography</a>
      </Link>
      <Link href="/contact">
        <a>Contact</a>
      </Link>
    </p>
  </Layout>
);

export default IndexPage;
