(function() {
    'use strict';
    
    var pageTopLink;
    pageTopLink = document.getElementById('pagetop_link');
    function pageTop() {
        var scroll;
        // スクロール量を取得
        scroll = document.body.scrollTop || document.documentElement.scrollTop;
        if(scroll) {
            // y座標へスクロール
            // scrollTo(x, y);
            scrollTo(0, scroll/=1.05);
            /* console.log(scroll); */
            setTimeout(pageTop, 5);
        }
    }
    // ページのトップに戻るをクリックした時pageTop関数を実行
    pageTopLink.addEventListener('click', function(e) {
        e.preventDefault();
        pageTop();
    });
}());


// start

$(function() {
	setTimeout(function(){
		$('.start p').fadeIn(1600);
	},500); //0.5秒後にロゴをフェードイン!
	setTimeout(function(){
		$('.start').fadeOut(500);
	},2500); //2.5秒後にロゴ含め真っ白背景をフェードアウト！
});
