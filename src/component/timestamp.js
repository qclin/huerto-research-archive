import React from "react";
import { format, utcToZonedTime } from "date-fns-tz";
import enGB from "date-fns/locale/en-GB";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import Pill from "./pill";

function Timestamp(){
  const datetimeFormat = Intl.DateTimeFormat().resolvedOptions();
  const localTime = utcToZonedTime(new Date(),
    datetimeFormat.timeZone
  );

  const localTimeString = format(localTime, "HH:mm zzz", {
    timeZone: datetimeFormat.timeZoneName,
    locale: enGB,
  });

  const timeToFallEquinox = formatDistanceToNow(new Date("2021-09-22"))

  return (
    <Pill className="z-20 uppercase fixed right-6 mt-16 m-3 border-r">
      {localTimeString},  {timeToFallEquinox} sinced fall equinox
    </Pill>

  )
}

export default Timestamp