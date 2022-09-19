"use strict";
const btn = document.querySelector("#button");
const feedbackContainer = document.querySelector(".rating__feedback");
const reviewBtn = document.querySelectorAll(".btn");
const selectedFeedBack = document.querySelector("#select-feedback");
btn.addEventListener("click", function () {
  console.log(feedbackContainer);
  if (feedbackContainer.classList.contains("submitted")) {
    feedbackContainer.classList.remove("submitted");
  }
  reviewSelector;
});

const reviewSelector = reviewBtn.forEach(function (btn, index) {
  const i = index + 1;
  btn.addEventListener("click", function () {
    selectedFeedBack.innerHTML = i;
    btn.style.backgroundColor = "hsl(217, 12%, 63%)";
  });
});
