/* COPYRIGHT 2021 SITEHEFT */

$(document).ready(function() {
  var heroVid = document.querySelector("#sh-hero-vid");
  heroVid.innerHTML = "<source src=\"/wp-content/uploads/2021/02/hero.mp4\">";
  var heroVidPlay = heroVid.play();
  heroVid.onplaying = startHeroTextChange()
});

function startHeroTextChange() {
  var heroTextArray = ["your photos", "your dish", "your creativity", "your moves", "your craft", "your adventures"];
  var counter = 0;
  setInterval(() => {
    document.querySelector("#shHeroChangingText").classList.remove("fadeChangingText");
    if (counter == 5) {
      counter = 0;
      document.querySelector("#shHeroChangingText").innerText = heroTextArray[counter];
      document.querySelector("#shHeroChangingText").classList.add("fade-out");
      setTimeout(() => {
        document.querySelector("#shHeroChangingText").classList.remove("fade-out");
      }, 1300)
    } else {
      counter += 1
      document.querySelector("#shHeroChangingText").innerText = heroTextArray[counter];
      document.querySelector("#shHeroChangingText").classList.add("fade-out");
      setTimeout(() => {
        document.querySelector("#shHeroChangingText").classList.remove("fade-out");
      }, 1300)
    }
  }, 7000)
}
