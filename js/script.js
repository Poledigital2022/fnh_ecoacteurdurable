$(document).ready(function () {


    if ($(window).width() > 767){
      /* nice scroll */
      $("html").niceScroll({
        cursorcolor:"#47647b",
        cursorwidth:"10px",
        background:"#768897",
        cursorborder:"none",
      }); 
      $(".modal").niceScroll({
        cursorcolor:"#47647b",
        cursorwidth:"10px",
        background:"#768897",
        cursorborder:"none",
      }); 

      // $(".modal-body").niceScroll({
      //   cursorcolor:"#47647b",
      //   cursorwidth:"10px",
      //   background:"#768897",
      //   cursorborder:"none",
      // });  
    }

      // RS hover
      if ($(window).width() > 767){
        $(".icon_fb").hover(function(){
          $(this).attr("src","img/icon_fb_hover.png");
          }, function(){
          $(this).attr("src","img/icon_fb.png");
        });
        $(".icon_tw").hover(function(){
          $(this).attr("src","img/icon_tw_hover.png");
          }, function(){
          $(this).attr("src","img/icon_tw.png");
        });
        $(".icon_wts").hover(function(){
          $(this).attr("src","img/icon_wts_hover.png");
          }, function(){
          $(this).attr("src","img/icon_wts.png");
        });
        $(".icon_insta").hover(function(){
          $(this).attr("src","img/insta_hover.png");
          }, function(){
          $(this).attr("src","img/insta.png");
        });
      } 

    
    //slider zone2
    if ($(window).width() > 767){
      $('.slider_zone2').slick({
          dots: true,
          vertical: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          verticalSwiping: true,
          focusOnSelect: true,
          infinite: true,
          prevArrow: $('.arrow_up'),
          nextArrow: $('.arrow_down'), 
      });
    }

    // slider zone3
    $('.slider_zone3').slick({
        dots: true,
        prevArrow: $('.arrow_prev'),
        nextArrow: $('.arrow_next'),
    });
    



    // read more mob cta
    if ($(window).width() > 767){
      $(".zone2 .box .content .read_more").hide();
      $(".zone2 .box .content .close").hide();
    }
    else if ($(window).width() <= 767){
      $(".zone2 .box .content .close").hide();
      $(".zone2 .box .content .read_more").show();
      $(".zone2 .box .content .body .to_hide").hide();


      $(".zone2 .box1 .content .read_more").click(function(){
        $(".zone2 .box1 .content .close").show();
        $(".zone2 .box1 .content .read_more").hide();
        $(".zone2 .box1 .content .body .to_hide").show();
      });
      $(".zone2 .box1 .content .close").click(function(){
        $(".zone2 .box1 .content .close").hide();
        $(".zone2 .box1 .content .read_more").show();
        $(".zone2 .box1 .content .body .to_hide").hide();
      });


      $(".zone2 .box2 .content .read_more").click(function(){
        $(".zone2 .box2 .content .close").show();
        $(".zone2 .box2 .content .read_more").hide();
        $(".zone2 .box2 .content .body .to_hide").show();
      });
      $(".zone2 .box2 .content .close").click(function(){
        $(".zone2 .box2 .content .close").hide();
        $(".zone2 .box2 .content .read_more").show();
        $(".zone2 .box2 .content .body .to_hide").hide();
      });


      $(".zone2 .box3 .content .read_more").click(function(){
        $(".zone2 .box3 .content .close").show();
        $(".zone2 .box3 .content .read_more").hide();
        $(".zone2 .box3 .content .body .to_hide").show();
      });
      $(".zone2 .box3 .content .close").click(function(){
        $(".zone2 .box3 .content .close").hide();
        $(".zone2 .box3 .content .read_more").show();
        $(".zone2 .box3 .content .body .to_hide").hide();
      });


    }

    // scroll_down
    $("#scroll_down_zone1").click(function(){
      $('html, body').animate({
        scrollTop: $(".zone2").offset().top - 80
      }, 1000);
    });
    $("#scroll_down_zone2").click(function(){
      $('html, body').animate({
        scrollTop: $(".zone3").offset().top - 80
      }, 1000);
    });
    $("#scroll_down_zone3").click(function(){
      $('html, body').animate({
        scrollTop: $(".parent_of_zone4").offset().top - 80
      }, 1000);
    });


    $("#scroll_down_zone3 img").attr("src","img/scroll_down_dark.png");

});



