import Layout from "../components/Layout";
import TextBold from "../components/TextBold";
import TextLight from "../components/TextLight";
import TextRegular from "../components/TextRegular";
import VideoBackground from "../components/VideoBackground";

const IndexPage = () => (
  <Layout title="Home | The Algorithm Official Website">
    <TextRegular style={{ marginBottom: 10 }}>
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est voluptatum
      esse perferendis animi rerum. Veritatis reprehenderit iure explicabo
      ipsum, repudiandae, saepe numquam perferendis quod ipsa ullam iste cum,
      voluptas amet!
    </TextRegular>
    <TextLight style={{ marginBottom: 10 }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi veniam
      reiciendis esse, dolorem quam natus. In magni a optio assumenda error,
      possimus reprehenderit dignissimos consequuntur expedita, iure esse totam
      officia?
    </TextLight>
    <TextBold style={{ marginBottom: 10 }}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
      distinctio qui necessitatibus reiciendis tempora, exercitationem
      accusantium vitae id praesentium corrupti molestiae voluptatum aliquam
      sed. Blanditiis voluptatum nulla ducimus temporibus sint!
    </TextBold>
    <VideoBackground src={"./videos/glitch.mp4"} playing />
    <style global jsx>{`
      body {
        background: #011212;
        overflow-x: hidden;
      }
    `}</style>
  </Layout>
);

export default IndexPage;
