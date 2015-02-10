$(document).ready(function(){
	var ssPassword = 'ilovewalt'
	$('form').on('submit', function(e){
		e.preventDefault()
		var code = $('input[name="code"]').val()
		if(code == ssPassword){
			$('#main').css('display', 'block')
		}
	})	
})