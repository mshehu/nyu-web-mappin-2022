// there are buttons clicked
$('.country-container').on('click', function() {
  $('#main').hide();
  var sectionId = $(this).attr('section-id');
  $('#' + sectionId).show();
})

$('.btn-go-back').on('click', function() {
  $(this).closest('.full-width').hide();
  $('#main').show();
})
