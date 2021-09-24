import React from "react";
import { format, utcToZonedTime } from "date-fns-tz";
import enGB from "date-fns/locale/en-GB";
import formatDistanceToNow from 'date-fns/formatDistanceToNow'


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
    <span className="uppercase fixed right-6 px-4 py-2 m-3 border-r text-base bg-white rounded-full">
      {localTimeString},  {timeToFallEquinox} sinced fall equinox
    </span>

  )
}

export default Timestamp