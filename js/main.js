$(document).ready(function(){
	// Add smooth scrolling to all links
	$("a").on('click', function(event) {

		// Make sure this.hash has a value before overriding default behavior
		if (this.hash !== "") {
			// Prevent default anchor click behavior
			event.preventDefault();

			// Store hash
			var hash = this.hash;

			// Using jQuery's animate() method to add smooth page scroll
			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
	 
				// Add hash (#) to URL when done scrolling (default click behavior)
				window.location.hash = hash;
			});
		} 
	});

	$('.slide').on('click', function(){
		$('#skills').toggleClass('show');
	});



//-------Interactivity to determine when an animated element in in view. In view elements trigger our animation---------//

  //window and animation items
  var animation_elements = $.find('.animation-element');
  var web_window = $(window);

  //check to see if any animation containers are currently in view
  function check_if_in_view() {
    //get current window information
    var window_height = web_window.height();
    var window_top_position = web_window.scrollTop();
    var window_bottom_position = (window_top_position + window_height);

    //iterate through elements to see if its in view
    $.each(animation_elements, function() {

      //get the element sinformation
      var element = $(this);
      var element_height = $(element).outerHeight();
      var element_top_position = $(element).offset().top;
      var element_bottom_position = (element_top_position + element_height);

      //check to see if this current container is visible (its viewable if it exists between the viewable space of the viewport)
      if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
        element.addClass('in-view');
      } else {
        element.removeClass('in-view');
      }
    });

  }

  //on or scroll, detect elements in view
  $(window).on('scroll resize', function() {
      check_if_in_view()
    })
    //trigger our scroll event on initial load
  $(window).trigger('scroll');


	// var sliderObjects = [];
	// createSliderObjects();

	// function plusDivs(obj, n) {
	//   var parentDiv = $(obj).parent();
	//   var matchedDiv;
	//   $.each(sliderObjects, function(i, item) {
	//     if ($(parentDiv[0]).attr('id') == $(item).attr('id')) {
	//       matchedDiv = item;
	//       return false;
	//     }
	//   });
	//   matchedDiv.slideIndex=matchedDiv.slideIndex+n;
	//   showDivs(matchedDiv, matchedDiv.slideIndex);
	// }

	// function createSliderObjects() {
	//   var sliderDivs = $('.slider');
	//   $.each(sliderDivs, function(i, item) {
	//     var obj = {};
	//     obj.id = $(item).attr('id');
	//     obj.divContent = item;
	//     obj.slideIndex = 1;
	//     obj.slideContents = $(item).find('.mySlides');
	//     showDivs(obj, 1);
	//     sliderObjects.push(obj);
	//   });
	// }

	// function showDivs(divObject, n) {
	//   debugger;
	//   var i;
	//   if (n > divObject.slideContents.length) {
	//     divObject.slideIndex = 1
	//   }
	//   if (n < 1) {
	//     divObject.slideIndex = divObject.slideContents.length
	//   }
	//   for (i = 0; i < divObject.slideContents.length; i++) {
	//     divObject.slideContents[i].style.display = "none";
	//   }
	//   divObject.slideContents[divObject.slideIndex - 1].style.display = "block";
	// }


});





