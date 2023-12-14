
/*
 Main javascript for phil.ewels.co.uk
*/

if ('addEventListener' in window) {
  window.addEventListener('load', function() { document.body.className = document.body.className.replace(/\bis-loading\b/, ''); });
  document.body.className += (navigator.userAgent.match(/(MSIE|rv:11\.0)/) ? ' is-ie' : '');
}

$(function(){
  
  // Hover text for social buttons
  $('.icons a').hover(
    function() { $('#linkHoverText').text( $(this).clone().children().remove().end().text() ); },
    function() { $('#linkHoverText').text(''); }
  );
  
  // Flip the card!
  $('.flipper').click(function(e){
    e.preventDefault();
    if($(this).attr('href') != '#'){
      $('.back section').hide();
      $($(this).attr('href')).show();
    }
    $("#main").toggleClass('flipped');
  });
  
  // Send E-mail
  $('#contactform').submit(function(e){
    e.preventDefault();
    var loading = '<i class="fa fa-spinner fa-pulse"></i>';
    var sent = '<i class="fa fa-check" aria-hidden="true"></i> Sent';
    $('#contact_submit').html(loading).prop('disabled', true);
    $.post( "mail.php", $("#contactform").serialize()).done(function( data ) {
      $('#contact_submit').html(sent).prop('disabled', false);
    }).fail(function(xhr, status, error) {
      alert(xhr.responseText);
      $('#contact_submit').html('Send').prop('disabled', false);
    });
  });

})

// Wrap every letter in a span
var textWrapper = document.querySelector('.ml1 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml1 .letter',
    scale: [0.3,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 600,
    delay: (el, i) => 70 * (i+1)
  }).add({
    targets: '.ml1 .line',
    scaleX: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700,
    offset: '-=875',
    delay: (el, i, l) => 80 * (l - i)
  }).add({
    targets: '.ml1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  
  
