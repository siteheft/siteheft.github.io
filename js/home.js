/* COPYRIGHT 2021 SITEHEFT */


var heroVid = document.querySelector("#sh-hero-vid");
$(document).ready(() => {
    var heroVidPlay = heroVid.play();
    heroVid.onplaying = startHeroTextChange();
});

function startHeroTextChange() {
  var heroTextArray = ["your photos", "your dish", "your creativity", "your moves", "your craft", "your adventures"];
  var locked = false;
  heroVid.addEventListener("timeupdate", () => {
    if (heroVid.currentTime >= 6.5 && heroVid.currentTime < 8) {
      if (!locked) {
        locked = true;
        document.querySelector("#shHeroChangingText").innerText = heroTextArray[1];
        document.querySelector("#shHeroChangingText").classList.add("fade-out");
        setTimeout(() => {
          document.querySelector("#shHeroChangingText").classList.remove("fade-out");
        }, 800)
        setTimeout(() => {
          locked = false;
        }, 5000)
      }
    } else if (heroVid.currentTime >= 13.5 && heroVid.currentTime < 15) {
      if (!locked) {
        locked = true;
        document.querySelector("#shHeroChangingText").innerText = heroTextArray[2];
        document.querySelector("#shHeroChangingText").classList.add("fade-out");
        setTimeout(() => {
          document.querySelector("#shHeroChangingText").classList.remove("fade-out");
        }, 800)
        setTimeout(() => {
          locked = false;
        }, 5000)
      }
    } else if (heroVid.currentTime >= 20.5 && heroVid.currentTime < 22) {
      if (!locked) {
        locked = true;
        document.querySelector("#shHeroChangingText").innerText = heroTextArray[3];
        document.querySelector("#shHeroChangingText").classList.add("fade-out");
        setTimeout(() => {
          document.querySelector("#shHeroChangingText").classList.remove("fade-out");
        }, 800)
        setTimeout(() => {
          locked = false;
        }, 5000)
      }
    } else if (heroVid.currentTime >= 27.5 && heroVid.currentTime < 29) {
      if (!locked) {
        locked = true;
        document.querySelector("#shHeroChangingText").innerText = heroTextArray[4];
        document.querySelector("#shHeroChangingText").classList.add("fade-out");
        setTimeout(() => {
          document.querySelector("#shHeroChangingText").classList.remove("fade-out");
        }, 800)
        setTimeout(() => {
          locked = false;
        }, 5000)
      }
    } else if (heroVid.currentTime >= 34.5 && heroVid.currentTime < 36) {
      if (!locked) {
        locked = true;
        document.querySelector("#shHeroChangingText").innerText = heroTextArray[5];
        document.querySelector("#shHeroChangingText").classList.add("fade-out");
        setTimeout(() => {
          document.querySelector("#shHeroChangingText").classList.remove("fade-out");
        }, 800)
        setTimeout(() => {
          locked = false;
        }, 5000)
      }
    } else if (heroVid.currentTime >= 41.5 && heroVid.currentTime < 43) {
      if (!locked) {
        locked = true;
        document.querySelector("#shHeroChangingText").innerText = heroTextArray[0];
        document.querySelector("#shHeroChangingText").classList.add("fade-out");
        setTimeout(() => {
          document.querySelector("#shHeroChangingText").classList.remove("fade-out");
        }, 800)
        setTimeout(() => {
          locked = false;
        }, 5000)
      }
    } 
  }, false)
}
