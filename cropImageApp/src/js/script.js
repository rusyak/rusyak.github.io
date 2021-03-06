$(function () {
  var $image = $('#image');
  var $cropButton = $('.crop-button');
  var $result = $('#result');
  var croppable = false;
  var canvasUrl;

  $image.cropper({
    aspectRatio: 1,
    viewMode: 1,
    built: function () {
      croppable = true;
    }
  });

  $cropButton.on('click', function () {
    $('#myModal').modal('show');
    var croppedCanvas;
    if (!croppable) {
      return;
    }

    croppedCanvas = $image.cropper('getCroppedCanvas');
    canvasUrl = croppedCanvas.toDataURL();
    $result.attr('src', canvasUrl);

    $image.cropper('reset');

  });

  $('.save-as-png').on('click', function () {
    var a = document.createElement('a');
    a.href = canvasUrl;
    a.download = 'image.png';
    a.click(); 
  });

  $('.save-as-jpg').on('click', function () {
    var a = document.createElement('a');
    a.href = canvasUrl;
    a.download = 'image.jpg';
    a.click(); 
  });

  $('#upload').on('change', function(event) {
    var file = event.target.files[0];
    var fileReader = new FileReader();

    fileReader.onload = function(event2) {
      $image.attr('src', event2.target.result);
      $('img[crossorigin="anonymous"]').attr('src', event2.target.result);
    };
    $image.cropper('reset');
    fileReader.readAsDataURL(file);
  });

});