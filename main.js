$(function () {
    ///制作実績　スライダー
    $(".achievements-slider").slick({
        arrows: false, // 前・次のボタンを表示しない
        dots: false, // ドットナビゲーションを表示しない
        autoplay: true,
        slidesToShow: 3.5, // 表示させるスライド数
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow:  1.65, // 表示スライド数 2つ
                slidesToScroll: 1,
            }
        }]
    });



    //Q&A アコーディオン
    $(".question-list dt").on("click", function () {
        $(this).next().slideToggle("fast");
    });

    //ハンバーガーメニュー
    $("#drawer-toggle").click(function(){
        $(this).toggleClass("active");
        $("#header-nav").toggleClass("sp_open");
    });
});