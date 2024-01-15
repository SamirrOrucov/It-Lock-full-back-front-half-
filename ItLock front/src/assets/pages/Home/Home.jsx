import React from "react";
import { Helmet } from "react-helmet-async";
import HeaderSection from "../../components/HeaderSection/HeaderSection";
import GlobalBrands from "../../components/GlobalBrands/GlobalBrands";

function Home() {
  return (
    <>
      <div>
        <Helmet>
          <title>Home</title>
        </Helmet>
      </div>
      <HeaderSection />
      <GlobalBrands/>
    </>
  );
}

export default Home;
