$(function(){

    /*ドロップダウンメニュー */
    $(".menu1").hover(function(){
        $("#menu1dr").stop().slideToggle(100);
      });

    $(".menu2").hover(function(){
    $("#menu2dr").stop().slideToggle(100);
    });

    $(".menu3").hover(function(){
    $("#menu3dr").stop().slideToggle(100);
    });

     /*ハンバーガー */

     $(".menubutton").click(function(){
        
        if($(this).hasClass('batubutton')){
            $(".menubutton").removeClass("batubutton");
            $(".hanmenu").animate({"top":"-500px"},300);
        }else{
            $(".hanmenu").animate({"top":"0"},300);
            $(".menubutton").addClass("batubutton");
        }

      });



      
/*slide */
    var $slides = $(".rightarea li").find('img'),
    slideNum = $slides.length,
    now = 0; // 何番目か
    console.log($slides);
    function slideTimer(){
        var nextIdx = now + 1;
        if (nextIdx > (slideNum - 1)) {
            nextIdx = 0
          }
        $(".rightarea li").eq(now).fadeOut();
        $(".rightarea li").eq(nextIdx).fadeIn();
        now = nextIdx;
    console.log(now);

    }

    timer = setInterval(slideTimer, 3000);


            
/*slick */
    $('.slick01').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      speed: 800,
      dots: true,
      arrows: true,
      infinite: true,
      pauseOnHover: false,
      slidesToShow: 1,
      centerMode:true,
    });



/*アコーディオンパネル */
$("dd").css("height","0px");
$("dd").css("border","0px");

$("dt a").click(function(){
  if(!$($(this).attr("href")).hasClass("opencontent")){
    $($(this).attr("href")).addClass("opencontent");
    $($(this).attr("href")).animate({"height":"88px"},300);
    $($(this).attr("href")).css("border","1px solid #000");
    $(this).parent().css("background-color","#000");
    $(this).css("color","#FFF");
    $(this).find('.Qbtn').css("color","#000");
    $(this).find('.plus').toggleClass('batuicon');
  }else{
    $($(this).attr("href")).removeClass("opencontent");
    $($(this).attr("href")).animate({"height":"0px"},300);
    $(this).parent().css("background-color","#FFF");
    $(this).css("color","#000");
    $(this).find('.plus').toggleClass('batuicon');
    $($(this).attr("href")).css("border","0px");
  }

  return false;
});

/*タブ */
    $("#content div[id !='tab1']").hide();
    $(".tab a").click(function(){
      
      $("#content div").hide();
      $($(this).attr("href")).show();
      $(".current").removeClass("current");
      $(this).addClass("current");
      return false;
    });




    /*フォーム */
    $("#bg").hide();
  $("#resultbg").hide();

  $("#contactbtn").click(function(){
    $("#bg").fadeIn(300);
  });

  $("#contactbox .plus").click(function(){
    $("#bg").fadeOut(300);
  });

  $("#submit").click(function(){
    $("#bg").hide();
    $("#resultbg").fadeIn(300);
  });

  $("#resultbox .plus").click(function(){
    $("#resultbg").fadeOut(300);
  });

  $("#resultbox button").click(function(){
    $("#resultbg").fadeOut(300);
  });
  
  });

