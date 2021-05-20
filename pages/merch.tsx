import { Container } from "next/app";
import CategoryLayout from "../components/CategoryLayout";

const MerchPage = () => (
  <CategoryLayout pageNumber={"01"}>
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
