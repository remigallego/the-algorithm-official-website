import CategoryLayout from "../components/CategoryLayout";
import Terminal from "../components/Terminal";

const DiscographyPage = () => {
  const renderAlbum = () => {
    return (
      <div style={{ position: "relative" }}>
        <img src={"./images/releases/cot.jpeg"} className="cover" />
        <div className="terminal-container">
          <Terminal />
        </div>
        <style jsx>{`
          .cover {
            position: relative;
            left: 100px;
            width: 600px;
            height: 600px;
          }
          .terminal-container {
            position: absolute;
            left: -240px;
            top: 150px;
          }
          .release-title {
            color: white;

            font-size: 20px;
          }
        `}</style>
      </div>
    );
  };

  return (
    <CategoryLayout pageNumber={"02"} title={"DISCOGRAPHY"}>
      <div className="container">
        {renderAlbum()}
        {/*   <h1
      className="regular-text"
      style={{
        marginTop: 20,
      }}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis,
      numquam totam, voluptate sint dolore optio veniam tempore pariatur natus
      eius ducimus! Beatae illo sint nihil, ad culpa facilis nesciunt nemo.
      nihil, ad culpa facilis nesciunt nemo. Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Perspiciatis, numquam totam, voluptate sint
      dolore optio veniam tempore pariatur natus eius ducimus! Beatae illo sint
      nihil, ad culpa facilis nesciunt nemo. nihil, ad culpa facilis nesciunt
      nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Perspiciatis, numquam totam, voluptate sint dolore optio veniam tempore
      pariatur natus eius ducimus! Beatae illo sint nihil, ad culpa facilis
      nesciunt nemo. nihil, ad culpa facilis nesciunt nemo. Lorem ipsum dolor
      sit amet consectetur adipisicing elit. Perspiciatis, numquam totam,
      voluptate sint dolore optio veniam tempore pariatur natus eius ducimus!
      Beatae illo sint nihil, ad culpa facilis nesciunt nemo. nihil, ad culpa
      facilis nesciunt nemo.
    </h1> */}
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          margin-top: 40px;
        }
      `}</style>
    </CategoryLayout>
  );
};

export default DiscographyPage;
