
//parse out cookie to see if it has initial access
let cookieArr = document.cookie.split(";");
let hasInitAccess = false;

for (const el of cookieArr) {
  if (el.split("=")[0] == "init-access") hasInitAccess = true;
}

if (!hasInitAccess) document.cookie = "init-access=" + new Date() + "; max-age=31536000";
else document.cookie = "new-access=" + new Date() + "; max-age=31536000";

console.log(document.cookie);
