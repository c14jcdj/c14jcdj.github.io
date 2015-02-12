$(document).ready(function(){
	grantEntry()
})

function grantEntry(){
	var ssPassword = 'i'
	$('form').on('submit', function(e){
		e.preventDefault()
		var code = $('input[name="code"]').val()
		if(code == ssPassword){
			$('#main_background').fadeIn(3000, displayMainPage)
		}
	})	
}

function displayMainPage(){

	function showElements(){
		$('#main').css('display', 'block')
	}

	timeoutID = window.setTimeout(showElements, 2000);
}