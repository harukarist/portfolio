$(function () {
  $(window).on('scroll', function () {
    // 現在のスクロール量
    var $scrollValue = $(window).scrollTop();
    // ウィンドウの高さ
    var $windowHeight = $(window).height();
    // メニューの高さ
    var $menuHeight = $('.js-float-menu').outerHeight();
    // ターゲット（ヒーローバナー）の高さ
    var $targetHeight = $('.js-float-menu-target').height();

    // 要素が近づいたらスライドイン
    $('.js-slidein, .js-slidein-footer').each(function () {
      var $elementHeight = $(this).offset().top;
      var $delay = 80;
      if ($(this).hasClass('js-slidein-footer')) {
        $delay = -50;
      }
      if ($scrollValue > $elementHeight - $windowHeight + $delay) {
        $(this).not('animated').addClass('is-slidein');
        if ($(this).hasClass('js-fluffy')) {
          // スライドイン時にぷるぷるアニメーション
          $(this).addClass('c-fluffy');
        }
      } else {
        $(this).removeClass('is-slidein');
        if ($(this).hasClass('js-fluffy')) {
          $(this).removeClass('c-fluffy');
        }
      }
    });

    // ターゲットが見えなくなったらメニューを固定
    if ($scrollValue > $targetHeight) {
      $('.js-float-menu').addClass('is-fixed');
      $('.js-sp-menu-target').addClass('is-fixed');
      $('.js-under-menu').css('margin-top', $menuHeight);
    } else {
      $('.js-float-menu').removeClass('is-fixed');
      $('.js-sp-menu-target').removeClass('is-fixed');
      $('.js-under-menu').css('margin-top', '0');
    }
  });

  // js-flullyの要素にホバーしたらアニメーション
  $('.js-fluffy').hover(function () {
    $(this).not('animated').addClass('c-fluffy');
  }, function () {
    $(this).removeClass('c-fluffy');
  });

  // ページトップへ戻るボタンを押すとスクロールで移動
  $('.js-pagetop').on('click', function () {
    $('body, html').animate({ scrollTop: 0 }, 500);
    return false;
  });

  // $('a[href^=#]').on('click', function () {
  //   var href = $(this).attr("href");
  //   var target = $(href == "#" || href == "" ? 'html' : href);
  //   var position = target.offset().top;
  //   $("html, body").animate({ scrollTop: position }, 500, "swing");
  //   return false;
  // });

  // スマホ用メニュー
  // ハンバーガーアイコンがクリックされた時
  $('.js-sp-menu-trigger').on('click', function () {
    $(this).toggleClass('is-active');
    // メニューリンクにis-activeクラスを付ける
    $('.js-sp-menu-target').toggleClass('is-active');
    // アニメーションはCSSで定義
  });
  // リンクがクリックされたらis-activeクラスを外す
  $('.js-sp-menu-link').on('click', function () {
    $('.js-sp-menu-trigger').removeClass('is-active');
    $('.js-sp-menu-target').removeClass('is-active');
  });

});
