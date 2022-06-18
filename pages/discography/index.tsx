import Album from "../../components/Album";
import CategoryLayout from "../../components/CategoryLayout";
import RELEASES, { ReleaseType } from "../../releases";

const DiscographyPage = () => {
  return (
    <CategoryLayout pageNumber={"02"} title={""}>
      <div className="container">
        {RELEASES.filter((el) => el.type === ReleaseType.Album).map(
          (release) => (
            <Album release={release} />
          )
        )}
      </div>
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: row;
          flex-wrap: wrap;
          margin-top: 160px;
        }
      `}</style>
    </CategoryLayout>
  );
};

export default DiscographyPage;
