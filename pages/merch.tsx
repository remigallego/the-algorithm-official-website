import Link from "next/link";
import Layout from "../components/Layout";

const MerchPage = () => (
  <Layout title="Merch | The Algorithm Official Website">
    <h1>Merch</h1>
    <p>This is the Merch page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default MerchPage;
