
$(document).ready(function(){
	// Activate Carousel
	$("#myCarousel").carousel();

	checkitem()

	// Enable Carousel Controls
	$(".left").click(function(){
		$("#myCarousel").carousel("prev");
	});

	$('#myCarousel').on('slid.bs.carousel', checkitem);

	function checkitem()                        // check function
	{
			var $this = $('#myCarousel');
			if($('.carousel-inner .item:first').hasClass('active')) {
					$this.children('.left.carousel-control').hide();
					$this.children('.right.carousel-control').show();
			} else if($('.carousel-inner .item:last').hasClass('active')) {
					$this.children('.left.carousel-control').show();
					$this.children('.right.carousel-control').hide();
			} else {
					$this.children('.carousel-control').show();
			} 
	}
})

// function grantEntry(){
// 	var ssPassword = 'i'
// 	$('form').on('submit', function(e){
// 		e.preventDefault()
// 		var code = $('input[name="code"]').val()
// 		if(code == ssPassword){
// 			$('#main_background').fadeIn(3000, displayMainPage)
// 		}
// 	})	
// }

// function displayMainPage(){

// 	function showElements(){
// 		$('#message').slideDown(1000)
// 		timeoutID2 = window.setTimeout(showSection, 1000);
		
// 	}
// 	function showSection(){
// 		$('#one').show().addClass('animated slideInLeft')
// 		$('#two').show().addClass('animated slideInRight')
// 		$('#three').show().addClass('animated slideInLeft')
// 		$('#four').show().addClass('animated slideInRight')
// 	}

// 	timeoutID = window.setTimeout(showElements, 2000);
// }