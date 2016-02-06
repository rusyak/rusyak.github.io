(function ($) {

	$.fn.carousel = function(options) {

		var defaults = {
			widthHider: 900,
			heightHider: 200,
			showElem: 3
		};

		var settings = $.extend(defaults, options);
		
		var $setWidthHider = defaults.widthHider + 'px';
		var $setHeightHider = defaults.heightHider + 'px';
		var $setShowElem = defaults.showElem;

		$('.carousel-hider').innerWidth($setWidthHider).innerHeight($setHeightHider);
		$('.carousel-element img').innerHeight($setHeightHider);
		
		var $left = $('.carousel-arrow-left');
		var $right = $('.carousel-arrow-right');
		var $elementsList = $('.carousel-list');
		var $widthImg = $('.carousel-list img').width();
		var $currentLeftValue = 0;
		var $elementsCount = $elementsList.find('li').length;
		var $minimumOffset = - (($elementsCount - $setShowElem) * $widthImg);
		var $maximumOffset = 0;

		function leftMove() {
			if ($currentLeftValue != $maximumOffset) {
				$currentLeftValue += $widthImg;
				$elementsList.animate({ left : $currentLeftValue + "px"}, 500);
			}
		}

		function rightMove() {
			if ($currentLeftValue != $minimumOffset) {
				$currentLeftValue -= $widthImg;
				$elementsList.animate({ left : $currentLeftValue + "px"}, 500);
			}   
		}

		$left.on('click', leftMove);
		$right.on('click', rightMove);

};

})(jQuery);
