const arrows = document.querySelectorAll(".arrow");
const movieLists = document.querySelectorAll(".movie-list");

arrows.forEach((arrow, i) => {
  let clickCounter = 0;
  const imageItem = movieLists[i].querySelectorAll("img").length;
  const maxClicks = imageItem - 4; // 4: Görünen öğe sayısı

  arrow.addEventListener("click", function () {
    clickCounter++;
    if (clickCounter <= maxClicks) {
      const currentTransform = getComputedStyle(movieLists[i]).getPropertyValue('transform');
      const matrixValues = currentTransform.match(/matrix.*\((.+)\)/)[1].split(', ');
      const currentTranslateX = parseFloat(matrixValues[4]);
      movieLists[i].style.transform = `translateX(${currentTranslateX - 300}px)`;
    } else {
      clickCounter = 0;
      movieLists[i].style.transform = "translateX(0)";
    }
  });
});
