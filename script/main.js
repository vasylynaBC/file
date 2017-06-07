//function sel(a){
//    return document.querySelector(a);
//};
//function id(a){
//    return document.getElementById(a);
//};
//
////sel('.header__menu-block').addEventListener('click', function(){
////    sel('.header__menu-left').style.right='3%';
////    sel('.header__menu-left').style.display='block';
////    
////})
$(function () {
    //menu
    
    var flag=true;
   
    $('.header__menu-block').click(function () {
         if(flag){
        $('.header__menu-left').css({
            display: 'block',
            zIndex:3,
            position:'fixed'
        }).animate({
            right: '5%'
        }, 2000);
             $('.header__menu-block').css({
                 backgroundSize:'30%',
                 position:'fixed',
                 zIndex:3
             })
        flag=false;
         }
             else{
                 $('.header__menu-left').css({
            display: 'none'
        }).animate({
            right: '-15%'
        }, 2000);
                  $('.header__menu-block').css({
                 backgroundSize:'100%'
             })
        flag=true;
                                   
                                   
    }
    });
   
    $("li a").each(function (index, element) { 
        $(element).mouseover(function () { 
            var color = 'blue';
            $("ul li").eq(index).animate({
                'width': '200px'
            }, 400);
            
            $(element).css({
                background: color
                , color: 'white'
            }); 
            $('.header__menu-left').css({
                background:'#6e7e97',
                opacity:'1'
            })
        });
        $(element).mouseout(function () {
            $(element).css({
                background: '#6e7e97'
                , color: 'black'
            });
            $("ul li").eq(index).animate({
                'width': '130px'
            }, 400); 
            $('.header__menu-left').css({
                background:'#efefef',
                 opacity:'0.4'
            })
        });
    });
    
    
    //about
    
    $('.section__text-learn').click(function(){
        if(flag){
            $('.section-readmore').css({
                display:'block'
            })
            $('.section__text-learn').val('HIDE MORE');
            flag=false;
        }
        else{
             $('.section-readmore').css({
                display:'none'
            })
            $('.section__text-learn').val('LEARN MORE');
            flag=true;
        }
    })
});