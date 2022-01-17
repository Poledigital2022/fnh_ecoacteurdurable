$(document).ready(function () {
  
    $('#play-video').on('click', function(e){
        e.preventDefault();
        $('#video-overlay').addClass('open');
        $("#video-overlay").append('<iframe width="100%" height="100%" src="https://www.youtube.com/embed/1Ah1Z465-HA" frameborder="0" allowfullscreen></iframe>');
      });
      
      $('.video-overlay, .video-overlay-close').on('click', function(e){
        e.preventDefault();
        close_video();
      });
      
      $(document).keyup(function(e){
        if(e.keyCode === 27) { close_video().click; }
      });
      
      function close_video() {
        $('.video-overlay.open').removeClass('open').find('iframe').remove();
      };

});

