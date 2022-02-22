alert(document.lastModified);
// returns: Tuesday, December 16, 2017 11:09:42
let oLastModif = new Date(document.lastModified);
let nLastModif = Date.parse(document.lastModified);
if (Date.parse(document.lastModified) > parseFloat(document.cookie.replace(/(?:(?:^|.*;)\s*last_modif\s*\=\s*([^;]*).*$)|^.*$/, "$1") || "0")) {
    document.cookie = "last_modif=" + Date.now() + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=" + location.pathname;
    alert("This page has changed!");
  }
var
  nLastVisit = parseFloat(document.cookie.replace(/(?:(?:^|.*;)\s*last_modif\s*\=\s*([^;]*).*$)|^.*$/, "$1")),
  nLastModif = Date.parse(document.lastModified);

if (isNaN(nLastVisit) || nLastModif > nLastVisit) {
  document.cookie = "last_modif=" + Date.now() + "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=" + location.pathname;

  if (isFinite(nLastVisit)) {
    alert("This page has been changed!");
  }
}