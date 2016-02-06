$(function() {

  $('.item1 a').click(
    function(e) {
      $('p').hide();
      $('.text_item1 p').show('slow').addClass('active');
      $(this).addClass('active');
      $('.item2 a, .item3 a').removeClass('active');
      e.preventDefault();
    });

  $('.item2 a').click(
    function(e) {
      $('p').hide();
      $('.text_item2 p').show('slow').addClass('active');
      $(this).addClass('active');
      $('.item1 a, .item3 a').removeClass('active');      
      e.preventDefault();
    });
  
  $('.item3 a').click(
    function(e) {
      $('p').hide();
      $('.text_item3 p').show('slow').addClass('active');
      $(this).addClass('active');
      $('.item1 a, .item2 a').removeClass('active');     
      e.preventDefault();
    });

});