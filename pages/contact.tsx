import { Container } from "next/app";

const ContactPage = () => (
  <Container>
    <div
      style={{
        marginLeft: 20,
      }}
    >
      <h1 className="bold-text" style={{ fontSize: 30 }}>
        Contact
      </h1>
      <h1 className="bold-text" style={{ fontSize: 30 }}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam ducimus
        praesentium tempore maxime animi aspernatur ratione inventore aut quos
        laborum voluptas a eos, quas consequatur autem error accusamus sint
        culpa!
      </h1>
    </div>
  </Container>
);

export default ContactPage;
