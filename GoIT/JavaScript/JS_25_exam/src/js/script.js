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


  $.ajax({
    url: 'http://api.pixplorer.co.uk/image?word=natural&amount=7&size=m',
    success: function(data){
      var model = new Model(data);
      var view = new View(model);
      var controller = new Controller(model, view);
    }
  });

  function Model(obj){
    var self = this;
    self.init = function(data){
      var array = [];
      var obj = {
        url: 'none',
        word: 'none'
      };
      for(var index in data.images)
      {
        obj.url = data.images[index].imageurl;
        obj.word = data.images[index].word;
        array.push(data.images[index]);
      }
      self.data = array;
    };
    self.init(obj);
  }
//v
function View(model){
  var self = this;
  self.renderList = function () {


    var wrapper = tmpl($('#template').html(), model);
    $('.ideas').append(wrapper);

    $('#gallery').imagesLoaded(function (){
     $('.grid').masonry({
      itemSelector: '.grid--item',
      columnWidth: '.grid--item',
      gutter: 10
    });
   });
  };
  self.renderList();
}
//c
function Controller(model, view){
  var self = this;
  $('#search').on('click', function(event){
    event.preventDefault();
    var text = $('#edit').val();
    $('.grid').remove();
    $.ajax({
      url: 'http://api.pixplorer.co.uk/image?word='+text+'&amount=7&size=m',
      success: function(data){
        model.init(data);
        view.renderList();
      }
    });
  });
}
});