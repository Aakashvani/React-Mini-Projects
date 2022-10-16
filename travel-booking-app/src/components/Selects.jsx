import React from "react";

import BoraBora from "../assets/borabora.jpeg";
import BoraBora2 from "../assets/borabora2.jpeg";
import Maldives from "../assets/maldives.jpeg";
import Maldives2 from "../assets/maldives2.jpeg";
import Maldives3 from "../assets/maldives3.jpeg";
import KeyWest from "../assets/keywest.jpeg";
import SelectsCard from "./SelectsCard";

const Selects = () => {
  return (
    <div className="max-width-[1240px] py-16 px-4 mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <SelectsCard bg={KeyWest} text="Key West" />
      <SelectsCard bg={Maldives3} text="Cocoa Island" />
      <SelectsCard bg={Maldives2} text="Coral Beach " />
      <SelectsCard bg={Maldives} text="Reethi Rah" />
      <SelectsCard bg={BoraBora2} text="Dhigurah Island" />
      <SelectsCard bg={BoraBora} text="Hadahaa" />
    </div>
  );
};

export default Selects;
