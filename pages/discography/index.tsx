import Image from "next/image";
import { Parallax } from "react-scroll-parallax";
import Terminal from "../../components/Terminal";

const DiscographyPage = () => {
  return (
    <>
      <div className="container">
        <Parallax speed={-150}>
          <div style={{}}>
            <Image
              src={"/images/releases/datarenaissance.jpg"}
              width={700}
              height={700}
            />
          </div>
        </Parallax>
        {/*     <h1
          className="bold-text"
          style={{
            position: "absolute",
            top: "90%",
            right: "4%",
            fontWeight: "bold",
            fontSize: 190,
            color: "#11f24a",
          }}
        >
          <Parallax speed={-20}>2022</Parallax>
        </h1> */}
        <div
          className="regular-text"
          style={{
            position: "absolute",
            top: "40%",
            width: "50%",
            zIndex: 22,
          }}
        >
          <Terminal lines={["Data Renaissance"]} />
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
          flex-wrap: wrap;
          margin-top: 90px;
          width: 100%;
          height: 200vh;
        }
      `}</style>
    </>
  );
};

export default DiscographyPage;
