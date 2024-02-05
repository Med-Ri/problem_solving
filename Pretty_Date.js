// -----------------------------------Description-----------------------------------

// Overview

// Write a helper function that accepts an argument (Ruby: a Time object / Others: number of seconds) and converts it to a more human-readable format. You need only go up to '_ weeks ago'.

// toPretty(0) => "just now"

// toPretty(40000) => "11 hours ago"

// Specifics
// The output will be an amount of time, t, included in one of the following phrases: "just now", "[t] seconds ago", "[t] minutes ago", "[t] hours ago", "[t] days ago", "[t] weeks ago".
// You will have to handle the singular cases. That is, when t = 1, the phrasing will be one of "a second ago", "a minute ago", "an hour ago", "a day ago", "a week ago".
// The amount of time is always rounded down to the nearest integer. For example, if the amount of time is actually 11.73 hours ago, the return value will be "11 hours ago".
// Only times in the past will be given, with the range "just now" to "52 weeks ago"

// ---------------------------------------------------------------------------------

const toPretty = (seconds) => {
  switch (true) {
    case seconds === 0:
      return "just now";
    case seconds === 1:
      return "a second ago";
    case seconds < 60:
      return `${seconds} seconds ago`;
    case seconds < 3600:
      const minutes = Math.floor(seconds / 60);
      return `${minutes === 1 ? "a" : minutes} ${
        minutes === 1 ? "minute" : "minutes"
      } ago`;
    case seconds < 86400:
      const hours = Math.floor(seconds / 3600);
      return `${hours === 1 ? "an" : hours} ${
        hours === 1 ? "hour" : "hours"
      } ago`;
    case seconds < 604800:
      const days = Math.floor(seconds / 86400);
      return `${days === 1 ? "a" : days} ${days === 1 ? "day" : "days"} ago`;
    case seconds >= 604800:
      const weeks = Math.floor(seconds / 604800);
      return `${weeks === 1 ? "a" : weeks} ${
        weeks === 1 ? "week" : "weeks"
      } ago`;
  }
};


console.log('result', toPretty(1)) //result => a second ago
console.log('result', toPretty(0)) //result => just now
console.log('result', toPretty(3600)) //result => an hour ago