'use strict';
const btn = document.querySelector('#button');
const rateAgainBtn = document.querySelector('#rateAgainBtn');
const feedbackContainer = document.querySelector('.rating__feedback');
const ratingCardContainer = document.querySelector('#ratingCardContainer');
const reviewBtn = document.querySelectorAll('.btn');
const selectedFeedBack = document.querySelector('#select-feedback');
btn.addEventListener('click', function () {
  if (feedbackContainer.classList.contains('active')) {
    feedbackContainer.classList.toggle('active');
    ratingCardContainer.classList.add('active');
  }
  reviewSelector;
});

rateAgainBtn.addEventListener('click', () => {
  ratingCardContainer.classList.remove('active');
  feedbackContainer.classList.add('active');
  reviewBtn.forEach((el) => {
    el.classList.remove('activeColor');
  });
});

const reviewSelector = reviewBtn.forEach(function (btn, index) {
  const i = index + 1;
  btn.addEventListener('click', function () {
    selectedFeedBack.innerHTML = i;
    btn.classList.toggle('activeColor');
  });
});
