import React, { useState } from "react";
import Header from "../../header/Header";
import ExploreMenu from "../../exploreMenu/ExploreMenu";
import FoodDisplay from "../../foodDisplay/FoodDisplay";
import AppDownload from "../../appDownload/AppDownload";

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload />
    </div>
  );
};

export default Home;
