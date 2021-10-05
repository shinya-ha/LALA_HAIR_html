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

// 「予約」ページ・メニュー選択画面
const list = document.getElementById('form').menu;
// console.log(list);
let message = [];
for (let item of list) {
  item.addEventListener('click', function () {
    if (message.length === 0) {
      message.push(item.value);
    } else {
      if (message.includes(item.value)) {
        const index = message.indexOf(item.value)
        message.splice(index, 1)
      } else {
        message.push(item.value)
      }
    }

    document.getElementById('displayMenu').textContent = message;
  })
}