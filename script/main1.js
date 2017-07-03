



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
                'width': '200px',
                color: 'white'
            }, 400);
            
            $(element).css({
               color: 'white'
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
    });
    
    //click menu
    $('#css').click(function(){
       
               $('#main__works-js').css({
            visibility:'hidden'
        }); 
        $('#main__works-html').css({
            visibility:'visible'
        }); $('#main__works-jq').css({
            visibility:'hidden'
        }); $('#main__works-table').css({
            visibility:'hidden'
        });
               
    }) 
    $('#all').click(function(){
       
         $('#main__works-js').css({
            visibility:'hidden'
        }); 
        $('#main__works-html').css({
            visibility:'hidden'
        }); $('#main__works-jq').css({
            visibility:'hidden'
        }); $('#main__works-table').css({
            visibility:'visible'
        });
               
    }) ; 
    $('#js').click(function(){
       
               $('#main__works-js').css({
            visibility:'visible'
        }); 
        $('#main__works-html').css({
            visibility:'hidden'
        }); $('#main__works-jq').css({
            visibility:'hidden'
        }); $('#main__works-table').css({
            visibility:'hidden'
        });
               
    }) 
    $('#jq').click(function(){
       
               $('#main__works-js').css({
            visibility:'hidden'
        }); 
        $('#main__works-html').css({
            visibility:'hidden'
        }); $('#main__works-jq').css({
            visibility:'visible'
        }); $('#main__works-table').css({
            visibility:'hidden'
        });
               
    })
    
    //skill
    var first1 = $('.percent1').text(),
        first2 = $('.percent2').text(),
        first3 = $('.percent3').text();
    if(window.innerWidth <= 690){
     setInterval(function(){ 
         $(".peranimate1").animate({'width': first1 * 3.5},8000,'easeOutBounce').animate({'width': first1 * 3},8000,'easeOutBounce')}, 3000);
    setInterval(function(){
         $(".peranimate2").animate({'width': first2 * 3.5},8000,'easeOutBounce').animate({'width': first2 * 2.5},8000,'easeOutBounce')}, 2000);
    setInterval(function(){
         $(".peranimate3").animate({'width': first3 * 3.5},8000,'easeOutBounce').animate({'width': first3 * 2.5},8000,'easeOutBounce'), 2500});
					
    }
 else if(window.innerWidth >=1025){   
    setInterval(function(){ 
         $(".peranimate1").animate({'width': first1 * 10},8000,'easeOutBounce').animate({'width': first1 * 8},8000,'easeOutBounce')}, 3000);
    setInterval(function(){
         $(".peranimate2").animate({'width': first2 * 10},8000,'easeOutBounce').animate({'width': first2 * 7.5},8000,'easeOutBounce')}, 2000);
    setInterval(function(){
         $(".peranimate3").animate({'width': first3 * 10},8000,'easeOutBounce').animate({'width': first3 * 8.5},8000,'easeOutBounce'), 2500});
 }
else if(670 <= window.innerWidth <=1025){   
    setInterval(function(){ 
         $(".peranimate1").animate({'width': first1 * 6},8000,'easeOutBounce').animate({'width': first1 * 5},8000,'easeOutBounce')}, 3000);
    setInterval(function(){
         $(".peranimate2").animate({'width': first2 * 6},8000,'easeOutBounce').animate({'width': first2 * 5.5},8000,'easeOutBounce')}, 2000);
    setInterval(function(){
         $(".peranimate3").animate({'width': first3 * 6},8000,'easeOutBounce').animate({'width': first3 * 4.5},8000,'easeOutBounce'), 2500});
 }
    
    
    $('.datepicker').datepicker();
    //slider
    
  console.log(window.innerWidth);
    var i = 0;
var imgsB = ['img/it.png','img/diplom.jpg','img/websert.png']; 
    function goRight(){
  ++i;
   if(i >= imgsB.length) i = 0;
    document.querySelector('.main__slide').style.backgroundImage = 'url('+imgsB[i]+')';;
    
    document.forms[0].elements[i].checked = true;

};

function playSlide(){
    setInterval(goRight, 3000);
};
   goRight();
    playSlide();
    
    
    ////
//    develop
var arr2 =['.design', '.communication', '.coordination', '.safety', '.night-work', '.develop'];
    for( var i=0; i<=arr2.length; i++){
         $(arr2[i]).click(function(){
        $(this).slideUp(2000).slideDown(1000);
             $(this).next('.caption').css({
color:'#820822'})
      })
  }  
     
     ////valid
    
    var $name = $('#ex1'),
        $surname = $('#ex2'),
        $email = $('#ex3');
    var reg1=/^[A-Z]{1}[a-z]/;
    
    
    function Valid1(){
        var valUser=reg1.test($name.val());
        
       
       if(valUser){
      
        $('#valid-name').text("Текст введенно правильно");
        $('#valid-name').css({
            color: 'green'})
    }else{
         $('#valid-name').text("Текст введенно не правильно");
        $('#valid-name').css({
            color: 'red'})
    }; 
    Load();
    };
    
    
    function Valid2(){   
    var valSurname=reg1.test($surname.val());
        if(valSurname){
      
        $('#valid-surname').text("Текст введенно правильно");
        $('#valid-surname').css({
            color: 'green'})
    }else{
         $('#valid-surname').text("Текст введенно не правильно");
        $('#valid-surname').css({
            color: 'red'})
    };
    Load()}
    
    function Valid3(){
         var reg3=/^[a-z]+[0-9]{2}@((gmail)|(ukr)|(mail)){1}\.((net)|(ua)|(ru)|(com)){1}$/;
        var valEmail=reg3.test($email.val());
        if(valEmail){
         
    
        $('#valid-email').text("Текст введенно правильно");
        $('#valid-email').css({
            color: 'green'})
    }else{
         $('#valid-email').text("Текст введенно не правильно");
        $('#valid-email').css({
            color: 'red'})
    };
        
   Load(); 
    
};
    function Load(){
    $surname.on('input', Valid2.bind(this));
    $name.on('input', Valid1.bind(this));
    $email.on('input', Valid3.bind(this));}
    Load();

    
   
    
    
    
    
    
});