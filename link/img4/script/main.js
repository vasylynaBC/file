var myPage=(function(){
    
 var i = 0;
var imgsB = ['img/1.jpg','img/2.jpg','img/3.jpg','img/4.jpg']; 
var $Username=$(".fr1");
var $phone=$('.fr2');
var $email=$(".fr3");
var $date=$(".fr4");
 var $man=$('.main__poslygu');  
var $but=$('#click');
 
    
     function Load(){
 $man.on('mouseover', AnimateBox.bind(this));

$man.on('click', StopBox.bind(this));
 
$Username.on('input', Valid1.bind(this));

$phone.on('input', Valid2.bind(this));
         
$email.on('input', Valid3.bind(this));
        
$date.on('input', Valid4.bind(this));
        
$but.on('click', function(){
     $Username.val('');
        $phone.val('');
        $email.val('');
        $date.val('');
        $('textarea').val('');
});
         
         
         
    };

    
        
    
function Valid1(){
    var reg1=/^[A-Z]{1}[a-z]+\s[A-Z]{1}[a-z]+$/;
    var valUser=reg1.test($Username.val());
   
    if(valUser){
      
        document.getElementsByTagName('span')[0].innerHTML="Текст введенно правильно";
        
        document.getElementsByTagName('span')[0].style.color='green';
    }else{
        document.getElementsByTagName('span')[0].innerHTML="Текст введенно не правильно";
        
        document.getElementsByTagName('span')[0].style.color='red';
    }
   Load(); 
    
};
  function Valid2(){  
    var reg2=/^\+38\s\(0((97)|(93)|(96)|(98)|(99)|(63)|(67)|(68)|(73)|(50))\)\s[0-9]{3}\-[0-9]{2}\-[0-9]{2}$/;
    var valPhone=reg2.test($phone.val());
    
    if(valPhone){
      
        document.getElementsByTagName('span')[1].innerHTML="Текст введенно правильно";
        
        document.getElementsByTagName('span')[1].style.color='green';
    }else{
        document.getElementsByTagName('span')[1].innerHTML="Текст введенно не правильно";
        
        document.getElementsByTagName('span')[1].style.color='red';
    }
      Load();
  };
    
   
    
     
    function Valid3(){
    var reg3=/^[a-z]+[0-9]{2}@((gmail)|(ukr)|(mail)){1}\.((net)|(ua)|(ru)|(com)){1}$/;
    var valEmail=reg3.test($email.val());
    
    if(valEmail){
      
        document.getElementsByTagName('span')[2].innerHTML="Текст введенно правильно";
        
        document.getElementsByTagName('span')[2].style.color='green';
    }else{
        document.getElementsByTagName('span')[2].innerHTML="Текст введенно не правильно";
        
        document.getElementsByTagName('span')[2].style.color='red';
    }
        Load();
    };
    
    
    function Valid4(){
    
    var reg4=/(([0-2]{1}[0-9]{1})|(30)|(31))\-((0[1-9])|(10)|(11)|(12))\-201[7-9]{1}$/;
    var valDate=reg4.test($date.val());
     if(valDate){
      
        document.getElementsByTagName('span')[3].innerHTML="Текст введенно правильно";
        
        document.getElementsByTagName('span')[3].style.color='green';
    }else{
        document.getElementsByTagName('span')[3].innerHTML="Текст введенно не правильно";
        
        document.getElementsByTagName('span')[3].style.color='red';
    }
        Load();
    };
    
        
       
    
function goRight(){
  ++i;
   if(i >= imgsB.length) i = 0;
    document.querySelector('.main__slide').style.backgroundImage = 'url('+imgsB[i]+')';;
    
    document.forms[0].elements[i].checked = true;

};

function playSlide(){
    setInterval(goRight, 3000);
};
    
    function AnimateBox(){
        $('.manikyr').fadeToggle(2000);
        $('.vizag').fadeToggle(4000);
        $('.keratin').fadeToggle(2400);
        $('.masaz').fadeToggle(3000);
            
        Load();
        
    }
    function StopBox(){
        $('.manikyr').stop();
        $('.vizag').stop();
        $('.keratin').stop();
        $('.masaz').stop();
            
        Load();
        
    }
    

return{
        goRight:goRight,
        playSlide:playSlide,
        Load:Load
   
        
    }
    
    
    
    
})();
myPage.goRight();
myPage.playSlide();
myPage.Load();





 
