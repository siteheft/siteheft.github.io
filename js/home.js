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
  var text = document.querySelector("#shHeroChangingText").innerText
  setInterval(() => {
    console.log(`counter: ${counter}`)
    if (counter == 5) {
      counter = 0;
      text = heroTextArray[counter];
    } else {
      counter += 1
      text = heroTextArray[counter];
    }
  }, 7000)
}
