//Typed out by Olivia Raimonde
$(document).ready(function () { //checks if html is fully loaded
	$('#btn-img-1').prop('disabled', true); //on the first page view, the button for hte visible img has to be disabled
	$('.my-button').on("click", function (e) { //when a button with class .my-button is clicked
		e.preventDefault(); //have to ad this so we don't get weird behavior in olderer browers (or IE)
		$('.my-button').prop('disabled', false); //enable ALL buttons so NONE are disabled
		$(this).prop('disabled', true); //disable ONLY the button that was clicked -"this" button that was clicked
		var myInfo = $(this), //gather the infor related to "this" button that was clicked and store in a variable called my info
			myUrl = myInfo.data('image'); //from myInfo, grab the URL stored in data-image attribute and store in myUrl
		$('#aids-img').attr('src', myUrl); //Replease URL attribute for the #aids-img by replacing what is in the src field
	}); //end of function
}); //closes all functions