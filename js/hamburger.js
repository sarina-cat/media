$(".btnopen").click(function () {
  $(this).toggleClass('active');
  $("#nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#nav a").click(function () {//ナビゲーションのリンクがクリックされたら
    $(".btnopen").removeClass('active');//ボタンの activeクラスを除去し
    $("#nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});