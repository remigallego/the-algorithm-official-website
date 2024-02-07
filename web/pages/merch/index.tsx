import { NextPage } from "next";
import CategoryLayout from "../../components/CategoryLayout";

const MerchPage: NextPage = () => (
  <CategoryLayout pageNumber={"01"} title={""}>
    <div
      style={{
        justifyContent: "center",
        display: "flex",
      }}
    >
      <h1 className="bold-text headline">MERCH</h1>
    </div>
    <style jsx>{``}</style>
  </CategoryLayout>
);
export default MerchPage;
