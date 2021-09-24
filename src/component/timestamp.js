import React from "react";
import { format, utcToZonedTime } from "date-fns-tz";
import enGB from "date-fns/locale/en-GB";


function Timestamp(){
  const datetimeFormat = Intl.DateTimeFormat().resolvedOptions();
  const localTime = utcToZonedTime(new Date(),
    datetimeFormat.timeZone
  );

  const localTimeString = format(localTime, "HH:mm zzz", {
    timeZone: datetimeFormat.timeZoneName,
    locale: enGB,
  });


  return (
    <div className="uppercase sticky right-0 px-4 border-r">
      {localTimeString}
    </div>

  )
}

export default Timestamp