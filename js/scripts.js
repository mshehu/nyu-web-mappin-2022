// there are buttons clicked

$('#albania').on('click', function() {
  $("#main").hide();
  $('#rank1').show();
})

$('#italy').on('click', function() {
  $("#main").hide();
  $('#rank2').show();
})

$('#greece').on('click', function() {
  $("#main").hide();
  $('#rank3').show();
})

$('#rank1_goback').on('click', function() {
  $('#rank1').hide();
  $("#main").show();
})

$('#rank2_goback').on('click', function() {
  $('#rank2').hide();
  $("#main").show();
})

$('#rank3_goback').on('click', function() {
  $('#rank3').hide();
  $("#main").show();
})
