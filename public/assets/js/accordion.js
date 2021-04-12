/*******************************
 * ACCORDION WITH TOGGLE ICONS
 *******************************/
function toggleIcon(e) {
	$(e.target)
		.prev('.panel-heading')
		.find('.more-less')
		.toggleClass('bx bxs-chevron-up bx bxs-chevron-down');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);
