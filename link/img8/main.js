var Ball=(function(){

    
    var bb1=$('.bl1').offset().top;
    
    var bb2=$('.bl1').offset().left;
    
    var ff1=$('.bl2').offset().top;
    var ff2=$('.bl2').offset().left;

    var gg1=$('.bl3').offset().top;
    var gg2=$('.bl3').offset().left; 
    
    var hh1=$('.bl4').offset().top;
    var hh2=$('.bl4').offset().left;
        
      
    var mas1=[bb1, ff1, gg1, hh1];
    var mas2=[bb2, ff2, gg2, hh2];
    
    var GpTop=Math.floor(Math.random() * mas1.length); 
     var BallTop=Math.floor(Math.random() * mas1.length); 
    
    var GpLeft=Math.floor(Math.random() * mas2.length);
    
   
    
    var BallLeft=Math.floor(Math.random() * mas2.length);
    
   
    

    
    function load(){
    $('.foot').on('click', Click1.bind(this));
    $('.foot').on('click', GP.bind(this));
    $('.foot').on('click', Check.bind(this));
    
         
     };
    
   function Click1(){
     
        $('.ball').animate({
            top:mas1[BallTop],
            left:mas2[BallLeft]
            
        },2000)
       
       
        load();
    
    }
    
   
   
      
    
     function GP(){
         
       if(mas1[GpTop]==mas1[0] && mas2[GpLeft]==mas2[0]){
           $('.man').css({
               visibility:"hidden"
           });
               $('.gp1').css({
                visibility:"visible"
           }).animate({
            top:mas1[GpTop],
            left:mas2[GpLeft]
        },2000 );
              
    };
        if(mas1[GpTop]==mas1[1] && mas2[GpLeft]==mas2[1]){
           $('.man').css({
               visibility:"hidden"
           });
               $('.gp1').css({
                visibility:"visible",
                   transform:"rotate(-90deg)"
           }).animate({
            top:mas1[GpTop],
            left:mas2[GpLeft]
        },2000 );
              
    } ;
        if(mas1[GpTop]==mas1[2] && mas2[GpLeft]==mas2[2]){
           $('.man').css({
               visibility:"hidden"
           });
               $('.gp1').css({
                visibility:"visible",
               transform:"scale(-1,1)"
           }).animate({
            top:mas1[GpTop],
            left:mas2[GpLeft]
        },2000 );
              
    }; if(mas1[GpTop]==mas1[3] && mas2[GpLeft]==mas2[3]){
           $('.man').css({
               visibility:"hidden"
           });
               $('.gp1').css({
                visibility:"visible",
                transform:"scale(1,-1)",
                    transform:"rotate(180deg)"
           }).animate({
            top:mas1[GpTop],
            left:mas2[GpLeft]
        },2000 );
              
    };
         
     load();   
    };
   
   
function Check(){
    if(mas1[BallTop]==mas1[GpTop] && mas2[BallLeft]==mas2[GpLeft]){

        $('span:even').text(1);
     setInterval(  function(){ $('.gol').animate({
         left:"200px"
     },1000).animate({
         left:'150px'
     },{
         duration:1000,
         complete: function(){
         $('.gol').css({
             background:"red",
             color:"gray",
             visibility:'visible'
                     }) }
     }).css({
        background:"white",
        color:"red"
       }).text("GOLL!!!");
                              
                              
         $('.gol2').animate({
         left:"550px"
     },{
         duration:1000,
         complete: function(){
         $(".gol2").css({
         background:"white",
         color:"black",
             visibility:'visible'
          })
         }
        }).animate({
           left:'500px'
          },1000).css({
           background:"red",
           color:"gray"
    
       }).text("VAV!!!");
        
                              
        $('.gol3').animate({
           right:"250px"
     },{    duration:1000,
            complete: function(){
            $('.gol3').css({
            background:"black",
            color:"red"
                          });
         }}).animate({
            right:'300px'
            },1000).css({
            background:"black",
            color:"red",
            visibility:'visible'
           
       }).text("GOLL!!!");; },2000);
        
    }
    else{
        
        $('span:odd').text(1);
        
       setInterval( function(){
        $('.gol').animate({
         left:"200px"
       },1000).animate({
         left:'150px'
       },1000 ).text("FU-U-U!!!((((").css({
            visibility:'visible'
        });
                              
                              
         $('.gol2').animate({
         left:"550px"
     },1000 ).animate({
           left:'500px'
          },1000).text("FU-U-U!!!((((").css({
            visibility:'visible'
        });
        
                              
        $('.gol3').animate({
           right:"250px"
     },1000).animate({
            right:'200px'
            },1000).text("FU-U-U!!!((((").css({
            visibility:'visible'
        });
           
        },2000);
         
    }
    
    load();
   
};
    
    
    
    return{
      load:load
    }
        

})();
Ball.load();
