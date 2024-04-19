$(document).ready(function () {
	$('#latitude').mask('S00.000000', {
		translation: {
			'S': {
				pattern: /[-]/,
				optional: true
			}
		}
	});
	$('#longitude').mask('S00.000000', {
		translation: {
			'S': {
				pattern: /[-]/,
				optional: true
			}
		}
	});
	$('#celular').mask('(00) 00000-0000')
});