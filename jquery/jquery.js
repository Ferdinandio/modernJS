$(document).ready(function() {
	$('.btn:first').hover(function() {
		$(this).toggleClass('activeBtn');
	});

	$('.btn:eq(2)').on('click', function() {
		$('.img:even').fadeToggle('slow');
	});

	$('.btn:eq(4)').on('click', function() {
		$('.img:odd').animate({
			opacity: 'toggle',
			height: 'toggle',
			width: 'toggle'
			}, 500);
	});
});