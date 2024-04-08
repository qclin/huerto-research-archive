import React from "react";

import Pill from "./pill";
import { getLocalTime, getNextEventCountdown } from "../utils/astronomy";

function Timestamp() {

  const localTime = getLocalTime(); 
  const eventToCountdown = getNextEventCountdown()

  return (
    <Pill className="bottom-6 md:bottom-none z-20 fixed right-6 mt-16 m-3 border-r">
      {localTime}, {eventToCountdown}
    </Pill>
  );
}

export default Timestamp;
