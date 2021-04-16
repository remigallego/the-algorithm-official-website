import Link from "next/link";
import Layout from "../components/Layout";

const DiscographyPage = () => (
  <Layout title="Discography | The Algorithm Official Website">
    <h1>Discography</h1>
    <p>This is the Discography page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default DiscographyPage;
