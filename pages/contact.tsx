import Link from "next/link";
import Layout from "../components/Layout";

const ContactPage = () => (
  <Layout title="Contact | The Algorithm Official Website">
    <h1>Contact</h1>
    <p>This is the Contact page</p>
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

export default ContactPage;
