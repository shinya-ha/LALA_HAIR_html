'use strict';

// トップ画面スライダー(CSS/266行目～)
$('.slider').slick({
  autoplay: true,
  autoplaySpeed: 5000,
  dots: false,
  centerMode: true,
  arrows: false,
  fade: true
});

// ハンバーガーメニュー(CSS/66行目～)
$('.menu-btn').on('click', function () {
  $('.hamburger-menu').toggleClass('is-active');
});

// 「MENU」ページ・モーダルウィンドウ(クリックしたら拡大表示)/(CSS/517行目～)
const modalWrapper = document.querySelector('.modal-wrapper');
const images = document.querySelectorAll('.image');
const modalImage = document.querySelector('.modal-image');

images.forEach(function (image) {
  image.addEventListener('click', function () {
    modalWrapper.classList.add('show');
    modalImage.classList.add('show');

    let imageSrc = image.getAttribute('data-src');
    modalImage.src = imageSrc;
  });
});

modalWrapper.addEventListener('click', function () {
  if (this.classList.contains('show')) {
    this.classList.remove('show');
    modalImage.classList.remove('show');
  }
});

// 画像をスクロールしたらふわっと表示する(CSS/154行目～)
// 下から上version
$(function () {
  $(window).scroll(function () {
    $('.fadein').each(function () {
      let position = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > position - windowHeight + 100) {
        $(this).addClass('active');
      }
    });
  });
});
// 右から左version(CSS/165行目～)
$(function () {
  $(window).scroll(function () {
    $('.fadein2').each(function () {
      let position = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > position - windowHeight + 100) {
        $(this).addClass('active');
      }
    });
  });
});
