import { Container } from "next/app";

const AboutPage = () => (
  <Container>
    <div
      style={{
        marginLeft: 20,
      }}
    >
      <h1 className="bold-text" style={{ fontSize: 30 }}>
        About
      </h1>
      <h1 className="bold-text" style={{ fontSize: 30 }}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
        repudiandae fugiat consectetur aliquid dolores repellat consequatur
        voluptate iure nam explicabo ducimus, suscipit quisquam laboriosam
        perferendis harum vel facere maxime quia?
      </h1>
    </div>
  </Container>
);

export default AboutPage;
