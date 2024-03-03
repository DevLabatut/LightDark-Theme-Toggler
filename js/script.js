var dark = document.getElementById("dark");
var light = document.getElementById("light");
var body = document.body;
dark.addEventListener("click", function () {
  body.style.backgroundColor = "#27272a";
  dark.style.display = "none";
  light.style.display = "block";
});
light.addEventListener("click", function () {
  body.style.backgroundColor = "#e0e0e0";
  dark.style.display = "block";
  light.style.display = "none";
});
light.style.display = "none";
