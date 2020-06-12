function scaleHeader() {
     const header = document.querySelector(".header");
     header.style.transform = "scale(1)";
}
scaleHeader();
const navItems = document.querySelector(".nav-items");
const navBtn = document.querySelector(".nav-btn");
const closeBtn = document.querySelector(".close-btn");

navBtn.addEventListener("click", (e) => {
     navItems.style.height = "100%";
});
closeBtn.addEventListener("click", () => {
     navItems.style.height = "0";
});
