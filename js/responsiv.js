$(function (){
   $('.drop_down').append('<img src="img/drop_down_icon.png" class="drop_down_img"/>');
   $('.drop_down_nav_item').append('<img src="img/drop_down__nav_item_icon.png" class="drop_down_img"/>');
   $('.nav_click').mouseenter(function (){
        if($(window).width() >= 800){
            subMenuHeight = $(this).find('+ .sub_menu').css('height');
            $(this).find('+ .sub_menu').css('height','0px');
            
            megaMenuHeight = $(this).find('+ .mega_menu_gabarie').height();
            $(this).find('+ .mega_menu_gabarie').css('height','0px');
        }
        $(this).find('+ .sub_menu').show();
        $(this).find('+ .mega_menu_gabarie').show();
        if($(window).width() >= 800){
            $(this).find('+ .sub_menu').animate({
                height: subMenuHeight
            }, 500);
            
            $(this).find('+ .mega_menu_gabarie').animate({
                height: megaMenuHeight
            }, 500);
        }
   });
   
   $('.sub_menu').mouseleave(function (){
      $(this).hide(); 
   });
   
   $('.nav_item').mouseleave(function (){
      $('.sub_menu:visible').hide();
      $('.mega_menu_gabarie').hide();
   });
   
   $('.sub_menu_item').mouseleave(function (){
        $(this).find('.sub_menu').hide();
   });
   
   isNavBarHidden = true;
   $('#menu_icon').click(function (){
      if(isNavBarHidden){
        $('#menu_icon').attr('src','img/Close-Windows-2.png');  
        $('.nav_item').show();
        isNavBarHidden = false;
      }
      else{
            $('#menu_icon').attr('src','img/menu_icon.png');  
            $('.nav_item').hide();
            isNavBarHidden = true;
      }
   });
   
});