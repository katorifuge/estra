'use strict';

// ハンバーガーメニュー
$(function() {
   const hum = $('#hamburger, .close')
   const nav = $('.sp-nav')
   hum.on('click', function(){
      nav.toggleClass('toggle');
   });
});

// スクロール　フェードイン
$(window).on('load scroll', function() {
 $(".show").each(function() {
    var winScroll = $(window).scrollTop();
    var winHeight = $(window).height();
    var scrollPos = winScroll + (winHeight * 0.8);
    if($(this).offset().top < scrollPos) {
       $(this).css({opacity: 1, transform: 'translate(0, 0)'});
    }
 });
});

// スクロール　メニューバー色チェンジ
jQuery(window).on('scroll', function() {
   if(jQuery('.header').height() < jQuery(this).scrollTop()) {
      jQuery('.header').addClass('change-color'); 
   } else {
      jQuery('.header').removeClass('change-color');
   }
});

// 
