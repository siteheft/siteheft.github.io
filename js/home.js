/* COPYRIGHT 2021 SITEHEFT */


var heroVid = document.querySelector("#sh-hero-vid");
var checkHeroVidLoadedInterval = setInterval(() => {
  if (heroVid.readyState == 4) {
    var heroVidPlay = heroVid.play();
    heroVid.onplaying = startHeroTextChange();
    clearInterval(checkHeroVidLoadedInterval);
  }
}, 0);

function startHeroTextChange() {
  var heroTextArray = ["your photos", "your dish", "your creativity", "your moves", "your craft", "your adventures"];
  heroVid.addEventListener("timeupdate", () => {
    if (heroVid.currentTime >= 0 && heroVid.currentTime < 1) {
      document.querySelector("#shHeroChangingText").innerText = heroTextArray[0];
    } else if (heroVid.currentTime >= 7 && heroVid.currentTime < 8) {
      document.querySelector("#shHeroChangingText").innerText = heroTextArray[1];
    } else if (heroVid.currentTime >= 14 && heroVid.currentTime < 15) {
      document.querySelector("#shHeroChangingText").innerText = heroTextArray[2];
    } else if (heroVid.currentTime >= 21 && heroVid.currentTime < 22) {
      document.querySelector("#shHeroChangingText").innerText = heroTextArray[3];
    } else if (heroVid.currentTime >= 28 && heroVid.currentTime < 29) {
      document.querySelector("#shHeroChangingText").innerText = heroTextArray[4];
    } else if (heroVid.currentTime >= 35 && heroVid.currentTime < 36) {
      document.querySelector("#shHeroChangingText").innerText = heroTextArray[5];
    } 
  }, false)
}
