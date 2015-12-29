$(function() {

  $('.item1 a').click(
    function(e) {
      $('.text_item1 p').show('slow');
      $('.text_item2 p').hide();
      $('.text_item3 p').hide();
      
      $('.text_item1 p').css({
        color: 'white',
        background: 'green'
      });
      
      e.preventDefault();
    });

  $('.item2 a').click(
    function(e) {
      $('.text_item2 p').show('slow');
      $('.text_item3 p').hide();
      $('.text_item1 p').hide();
      
      $('.text_item2 p').css({
        color: 'white',
        background: 'red'
      });
      
      e.preventDefault();
    });
  $('.item3 a').click(
    function(e) {
      $('.text_item3 p').show('slow');
      $('.text_item1 p').hide();
      $('.text_item2 p').hide();
      
      $('.text_item3 p').css({
        color: 'white',
        background: 'blue'
      });
      
      e.preventDefault();
    });

});