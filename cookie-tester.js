let timeDiff = 0;
let initDate;
let diffSpan = document.getElementById("time-diff");

//parse out cookie to see if it has initial access
let cookieArr = document.cookie.split(";");
let hasInitAccess = false;
for (const el of cookieArr) {
  if (el.split("=")[0] == "init-access") {
    hasInitAccess = true;
    initDate = new Date(el.split("=")[1]);
  }
}

if (!hasInitAccess) {
  document.cookie = "init-access=" + new Date() + "; max-age=31536000";
} else {
  let now = new Date();
  timeDiff = now.getTime() - initDate.getTime();
  document.cookie = "new-access=" + now + "; max-age=31536000";
}

console.log(document.cookie);

let diffString = "";

//if it's a day or more, include the day part of it
if (timeDiff >= 86400000) {
  let _numDays = Math.floor(timeDiff / 86400000);
  diffString+= _numDays + " Days, "
}

let numHours = Math.floor((timeDiff % 86400000) / 3600000);
let numMins = Math.floor((timDiff % 3600000) / 60000);
diffString+= numHours + ":" + numMins;

  
diffSpan.innerText = diffString;
