import React from "react";

// COMPONENTS
import Banner from "./Banner/Banner";
import BannerContent from "./Banner/BannerContent";
import Catalog from "./Catalog/Catalog";
import Ad from "./Ad/Ad";
import Questions from "./Questions/Questions";

const Home = () => {
  return (
    <div>
      <Banner>
        <BannerContent />
      </Banner>
      <Catalog />
      <Ad />
      <Questions />
    </div>
  );
};

export default Home;
