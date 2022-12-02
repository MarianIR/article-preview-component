const footer = document.querySelector(".footer");
const shareIcon = document.querySelector(".share-icon");
const socialMedia = document.querySelector(".social-media");
const shareIconActive = document.querySelector(".share-icon-active");
const iconTwo = document.querySelector(".icon-two");
shareIcon.addEventListener("click", (e) => {
  e.preventDefault();
  footer.style.display = "none";
  socialMedia.style.display = "flex";
});

shareIconActive.addEventListener("click", (e) => {
  e.preventDefault();
  socialMedia.style.display = "none";
  footer.style.display = "flex";
});

// iconTwo.addEventListener("click", (e) => {
//   e.preventDefault();
//   footer.style.display = "flex";
// });
