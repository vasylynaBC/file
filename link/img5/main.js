$(function(){
	
    $(window).bind("scroll",function(event){
			parallaxScroll();
		Stop();
		TunelOne();
		TunelOneHelp();
		TunelTwo();
		Tunelthree();
			
		})
	//Paralax
    function parallaxScroll(){ 
	var scrolled=$(window).scrollTop();
     console.log(scrolled);
	$("#car").css("top",(0+(scrolled*1.1))+"px");
	$(".main").css("top",(0-(scrolled*0.55))+"px");
	$('.butter1').css('left', (0+(scrolled*0.35))+"px");	
	}
    
	///зупинка перед поїздом
	function Stop(){
		var car=$('#car').position().top;
		
    if(car>330 && car<352 ){
		
		document.body.style.overflow="hidden";
		
		$(".audioDemo").trigger('play');
	
		$('#red').css({
		
		background:'red'
	});
		
	$('#green').css({
		 background:'green'
	});

		//анімація для руху поїзда і зміни кольорів №1
		 $('#train').css({
         display:'block'
		 }).animate({
			 left:'-1150px'
		 },{
			 duration: 18000, 
			 
			 complete: function(){
		     
			$('#yellow').css({
				background:'yellow'
			})       	 
		      }
		  })		
		//анімація для руху поїзда і зміни кольорів №2
		 $('#train').css({
         display:'block'
		 }).animate({
			 left:'-1800px'
		 },{
			 duration: 3000, 
			 
			 complete: function(){
		     $('#train').css({
                display:'none',
		                     });
			$('#yellow').css({
				background:'darkgoldenrod'
			})
			$('#green').css({
				background:'greenyellow'
			})
				$('#red').css({
		
		    background:'firebrick'
	});
        	document.body.style.overflowY="visible";
				 
			function stopAudio(){
            $(".audioDemo").trigger('pause');
            $(".audioDemo").prop("currentTime",0);
};
		      }
		  })
		   }};
	
	   
	//ф-ція для переходу тунеля
	function TunelOne(){
		var car=$('#car').position().top;
    if(car>=990 && car<=1010){
	   document.body.style.overflow="hidden";
				$(".audioPryr").trigger("play");

		$('.tunel1').animate({
			
		},{duration:10000,
		  
		   complete: function(){
			   $(".tunel1").css({
			backgroundColor:"#790712",
			color:"#faced2",
			boxShadow:" inset -2px 3px 50px 0px rgba(235,223,235,1)"

		});	  document.body.style.overflowY="visible";

		   }
		  });
	   
	   }
	
	};
	
	
	// ф-ці збирання квітів
	function TunelOneHelp(){
				var car=$('#car').position().top;
		
		if(car>=1210 && car<=1240){
			 
			setTimeout(function(){
				 $('#help').css({
		   visibility:'visible' });
			$('.fl3').draggable();
	        $('.fl1').draggable();
	        $('.fl2').draggable();
	        $('.fl4').draggable();
	        $('.fl5').draggable();
	        $('.fl6').draggable();
           $('.korz').droppable({
			  activate: function(){
           $('#help').text("+1");
        },
			   deactivate: function(){
		   $('#help').text("Дуже вдячна за допомогу!!");
				   
			   }, 
		   });	
				 document.body.style.overflow="hidden";
		
			},1000);
			setTimeout(function(){
			
				 document.body.style.overflowY="visible";
		
			},15000);
					
	}};
	
	//ф-ці переходу тунелю №2
	function TunelTwo(){
		var car=$('#car').position().top;
    if(car>=2260 && car<=2280){
			
		$('.tunel2').animate({
		},{duration:5000,
		  
		   complete: function(){
			 
            $(".audioPryr").trigger('pause');
            
					   
			   $(".tunel2").css({
			backgroundColor:"#092712",
			color:"#f199d9",
			boxShadow:" inset -2px 3px 50px 0px #f199d9"

		});	  

		   }
		  });
	   
	   }};
	
var Stars = setInterval(	function (){
		$(".st1").animate({
			left:"15%",
			top:"400px"
		},1000).animate({
			left:"20%",
			top:"300px"
		},800);
	
	$(".st2").animate({
			width:"400px",
			height:"400px"
		},1000).animate({
			width:"200px",
			height:"200px"
		},1000);
	
	$(".st3").animate({
		top:"300px",
		width:'100px',
		height:'100px'
	},2000).animate({
		top:"1100px",
		width:'300px',
		height:'300px'
		
	}, 2000); 
}, 2000);

	//three tunel
function Tunelthree(){
		var car=$('#car').position().top;
    if(car>=3430 && car<=3480){	
	$('.audioFinish').trigger('play');
		$('#h3').animate({
			color:'white',
			fontSize:'80px'
		}, {
			duration:5000,
			complete: function(){
				$('#h3').css({
					transform:'rotate(360deg)'
					
				}),
			$('.audioFinish').trigger('pause');	
			}
		})
	
	}
}
		
	
	
	
})