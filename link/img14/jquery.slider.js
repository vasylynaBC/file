(function($){
    $.fn.slider = function (options){
        
        var defaults = {
            background:['img/1.jpg','img/2.jpg', 'img/3.jpg']
        };
        
        var settings = $.extend(defaults, options);
        
        var $link = this;
        
        var $body = $('body');
        var $left, $right, $ch, $divClass;
          var i;
         
        
       function showModal(e){
            $ch=$link.children();
            $divClass=$ch.addClass('slider-div');       
            $left=$('<div class="left-one"></div>');
            $right=$('<div class="right-one"></div>');
            
           for(i=0; i<settings.background.length; i++){
             
              $divClass.css({
               background:'url('+settings.background[i]+')',
                  backgroundRepeat:'no-repeat',
                  backgroundSize:'contain'
               })}
//         console.log(settings.backgroundImage[i]);
              
             e.preventDefault();
            
            $link.append($left);
            $link.prepend($right);
    
    
        $right.on('click', Right);
        $left.on('click', Left);

               
        
        };
        
        function Right(){
               ++i;
              if(i >=settings.background.length) i = 0;
    
              $divClass.css({
               background:'url('+settings.background[i]+')',
                   backgroundRepeat:'no-repeat',
                  backgroundSize:'contain'
               });
        };
     
        function Left(){
           i--;
              if(i < 0) i = settings.background.length-1;
    
               $divClass.css({
               background:'url('+settings.background[i]+')',
                    backgroundRepeat:'no-repeat',
                  backgroundSize:'contain'
               });
        };
            

        
$(window).load(showModal);
        
        
        return this;
    }
})(jQuery);