$(function() {

  // hide the story from view
  $("#story").hide();

  // ---- event handler ---- //
  $("#btn-click").click(function(e) {

    // grab the values from the input boxes, then append them to the DOM
    $(".person").empty().append($("input.person").val());
    $(".adjective").empty().append($("input.adjective").val());
    $(".noun").empty().append($("input.noun").val());
    $(".insect").empty().append($("input.insect").val());
    $(".noun2").empty().append($("input.plural-noun").val());
    $(".verb").empty().append($("input.verb").val());

    // show the story
    $("#story").show();

    // empty the form's values
    $(':input').val('');

    // hide the questions
    $("#questions").hide();

  });

  // ---- event handler ---- //
  $("#play-btn").click(function(e) {
    $("#questions").show();   
    $(".form-group.first").addClass("current").show();    
    $(".form-group.last").removeClass("current").hide();    
    $("#story").hide();
    $("#btn-click").hide();
    $('#next').attr('disabled', false);
    $('#prev').attr('disabled', true);
  });

});








$('#next').click(function() {
    $('.current').removeClass('current').hide()
        .next().show().addClass('current');
    if ($('.current').hasClass('last')) {
        $('#next').attr('disabled', true);
        $("#btn-click").show();
    }
    $('#prev').attr('disabled', null);
});

$('#prev').click(function() {
    $('.current').removeClass('current').hide()
        .prev().show().addClass('current');
    if ($('.current').hasClass('first')) {
        $('#prev').attr('disabled', true);
    }
    $('#next').attr('disabled', null);
});

$(document).ready(function(){
  $(".form-group.first.current").delay( 100 ).show();
  $("#btn-click").hide();
});

$(function(){
  $("#prev").on('click', function(){
     $("#btn-click").hide(); 
  });
});

$(function(){
  $("#btn-click").on("click", function(){
    $('#next').attr('disabled', true);
    $('#prev').attr('disabled', true);
  });
});
