$(function(){
  $('.jcarousel')
  .jcarousel({
    wrap: 'circular',
    animation: {
      duration: 400,
    }
  });

  $('.jcarousel-control-prev')
  .on('jcarouselcontrol:active', function() {
    $(this).removeClass('inactive');
  })
  .on('jcarouselcontrol:inactive', function() {
    $(this).addClass('inactive');
  })
  .jcarouselControl({
    target: '-=1'
  });

  $('.jcarousel-control-next')
  .on('jcarouselcontrol:active', function() {
    $(this).removeClass('inactive');
  })
  .on('jcarouselcontrol:inactive', function() {
    $(this).addClass('inactive');
  })
  .jcarouselControl({
    target: '+=1'
  });

  

  var search = '';

  function getImgByRequest(search){

  $.ajax({
    type: 'GET',
    dataType: 'json',
    url: 'http://api.pixplorer.co.uk/image?word=' + search + '&amount=7&size=thumbnail',
    success: function(data){
      var html = $('#template').html();
      var content = tmpl(html, {data: data.images});

      $('.grid').remove();
      $('.ideas__title').append(content);
      $('.grid').isotope({
        itemSelector: '.tile--ideas',
        layoutMode: 'masonry',
        masonry: {
                gutter: 5
            }
      });
    }
  });
}
 
    $('.form__input').on('click', function(e) {
        e.preventDefault();
        var query = $('.form__edit');
        getImgByRequest(encodeURIComponent(query.val()));
        query.val('');
    });


    getImgByRequest();

});