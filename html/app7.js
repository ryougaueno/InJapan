
$(function() {
	var $allMsg = $('.title');
	
    var $wordList = $('.title').html().split("");
    $('.title').html("");
    $.each($wordList, function(idx, elem) {

		var newEL = $("<span/>").text(elem).css({ opacity: 0 });
		
        newEL.appendTo($allMsg);
        newEL.delay(idx * 70);
        newEL.animate({ opacity: 1 }, 1100);
    });
});

// $(function() {
//     var $allMsg = $('.title2');
//     var $wordList = $('.title2').html().split("");
//     $('.title2').html("");
//     $.each($wordList, function(idx, elem) {
//         var newEL = $("<span/>").text(elem).css({ opacity: 0 });
//         newEL.appendTo($allMsg);
//         newEL.delay(idx * 70);
//         newEL.animate({ opacity: 1 }, 1100);
//     });
// });