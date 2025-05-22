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


diffSpan.innerText = timeDiff;
