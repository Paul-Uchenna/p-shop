import React from "react";
import Hero from "../component/Hero.jsx/Hero";
import Popular from "../component/Popular/Popular";
import Offers from "../component/Offers/Offers";
import NewCollections from "../component/NewCollections/NewCollections";
import NewsLetter from "../component/NewsLetter/NewsLetter";

function Shops() {
  return (
    <div>
      <Hero />
      <Popular />
      <Offers />
      <NewCollections />
      <NewsLetter />
    </div>
  );
}

export default Shops;
