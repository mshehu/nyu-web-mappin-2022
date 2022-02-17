// hides main page, shows clicked pages
$('.country-container').on('click', function() {
  $('#main').hide();
  var sectionId = $(this).attr('section-id');
  $('#' + sectionId).show();
  $('#mapContainer').show();
})

// hides clicked pages, shows main page
$('.btn-go-back').on('click', function() {
  $(this).closest('.full-width').hide();
  $('#mapContainer').hide();
  $('#main').show();
})
