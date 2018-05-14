$(document).ready(function(){

	$(".dropdown-content").hide()

	$(".miniBar").hide()

	$(".drop-content").hide()


	// toggling function for dropbtn
	$(".dropbtn").click(function(){
		$(".dropdown-content").slideToggle()
	})

	// toggling function for icon
	$(".icon").click(function(){
		$(".miniBar").slideToggle()
	})

	// toggling function for dropb
	$(".dropb").click(function(){
		$(".drop-content").slideToggle()
	})

})