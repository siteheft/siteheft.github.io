/* COPYRIGHT 2021 SITEHEFT */

$(document).ready(function() {
  var heroVid = document.querySelector("#sh-hero-vid");
  heroVid.innerHTML = "<source src=\"/wp-content/uploads/2021/01/hero.mp4\">";
  var heroVidPlay = heroVid.play();
  heroVid.onplaying = startHeroTextChange()
});

function startHeroTextChange() {
  var heroTextArray = ["your photos", "your dish", "your creativity", "your moves", "your craft", "your adventures"];
  var counter = 0;
  setInterval(() => {
    console.log(`counter: ${counter}`)
    if (counter == 5) {
      counter = 0;
      document.querySelector("#shHeroChangingText").innerText = heroTextArray[counter];
    } else {
      counter += 1
      document.querySelector("#shHeroChangingText").innerText = heroTextArray[counter];
    }
  }, 7000)
}
