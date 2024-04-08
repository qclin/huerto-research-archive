import { format, utcToZonedTime } from "date-fns-tz";
import enGB from "date-fns/locale/en-GB";
import { Seasons } from "astronomy-engine";
import differenceInDays from "date-fns/differenceInDays";
import isSameDay from "date-fns/isSameDay";

export function findEquinoxesSolstices(year) {
  const { mar_equinox, jun_solstice, sep_equinox, dec_solstice } =
    Seasons(year);

  return [
    { name: "Spring Equinox", date: mar_equinox.date },
    { name: "Summer Solstice", date: jun_solstice.date },
    { name: "Autumn Equinox", date: sep_equinox.date },
    { name: "Winter Solstice", date: dec_solstice.date },
  ];
}

export function getNextEventCountdown() {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Normalize today to start of the day for comparison
  const events = findEquinoxesSolstices(today.getFullYear());

  // Convert event dates to Date objects and sort them
  const eventDates = events.sort((a, b) => a.date - b.date);

  // Find the next event or check if today is an event
  for (let i = 0; i < eventDates.length; i++) {
    const event = eventDates[i];
    if (isSameDay(today, event.date)) {
      return `Today is ${event.name}.`;
    } else if (today < event.date) {
      const diffDays = differenceInDays(event.date, today);
      return `${diffDays} days until ${event.name}.`;
    }
  }

  const nextYear = today.getFullYear() + 1;
  const firstEventNextYear = findEquinoxesSolstices(nextYear)[0];
  const diffDays = differenceInDays(firstEventNextYear.date, today);

  return `${diffDays} days until ${events[0].name}.`;
}

export function getLocalTime() {
  const today = new Date();

  const datetimeFormat = Intl.DateTimeFormat().resolvedOptions();
  const localTime = utcToZonedTime(new Date(), datetimeFormat.timeZone);

  return format(localTime, "HH:mm zzz", {
    timeZone: datetimeFormat.timeZoneName,
    locale: enGB,
  });
}
