const hambutton = document.querySelector(".ham");
const mainnav = document.querySelector(".navigation");
window.onresize = () => {
  if (window.innerWidth > 760) mainnav.classList.remove("responsive");
};

/*/////////////////////////////////////////////////////*/
// Hamburger
function toggleMenu() {
  document.getElementById("primaryNav").classList.toggle("open");
  document.getElementById("hamburgerBtn").classList.toggle("open");
}
const x = document.getElementById('hamburgerBtn');
x.onclick = toggleMenu;