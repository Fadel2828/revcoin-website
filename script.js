
function switchLang() {
  const ar = document.getElementById("arabic");
  const en = document.getElementById("english");
  if (ar.style.display !== "none") {
    ar.style.display = "none";
    en.style.display = "block";
    document.body.dir = "ltr";
  } else {
    ar.style.display = "block";
    en.style.display = "none";
    document.body.dir = "rtl";
  }
}
