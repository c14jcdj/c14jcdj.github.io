
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
		$('#message').slideDown(1000)
		timeoutID2 = window.setTimeout(showSection, 1000);
		
	}
	function showSection(){
		$('#one').show().addClass('animated slideInLeft')
		$('#two').show().addClass('animated slideInRight')
		$('#three').show().addClass('animated slideInLeft')
		$('#four').show().addClass('animated slideInRight')
	}

	timeoutID = window.setTimeout(showElements, 2000);
}