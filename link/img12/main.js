var XO=(function(){
	var arr=[[0, 1, 2], [0, 4, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [2, 4, 6], [3, 4, 5], [6, 7, 8]];
    var arr1=[];
    var arr2=[];
    
	function SEl(){
		var table;
		var flag=true;
		var winner;
		var im2;
		var im1;
		var i;
		var two;
        
		
	};
	
	
	function Load(){
		$('td').on('click', Game.bind(this));
	}
	
	function Game(e){
   
			if(this.flag){
			$(e.target).css({
              backgroundColor: 'blue'
			                });
			
            $('body').css({
              background:"blue"
			                });
                this.flag=false;	
				
				i=$('td').index(e.target);
               
				arr1.push(i);
                console.log(arr1);
                Win(arr1);
              
			              }
        
			else if(!this.flag) {
				
				$(e.target).css({
				
					backgroundColor: 'green'
			                    
                               });
				$('body').css(
			       {background:"green"
			                    });
				
				
				   this.flag=true;

				   two=$('td').index(e.target);
				
				    arr2.push(two);
                console.log(arr2);
				    Win2(arr2);

			  }

        
    };
            
    
        
		
	
	    function Win(mas){
            winner=$('.winner');
            table=$('#my')
            im1=$('.im1');
		   for( var k=0; k<arr.length; k++)	{

            if(Ind(arr[k][0], mas) && Ind(arr[k][1], mas) && 
               Ind(arr[k][2], mas))	
            {
               im1.css({
                visibility:'visible'
                    }).animate({
                   left:'80%'
               },5000);	
                
                table.css({
                   display:"none"
               });
                
               winner.css({
                    visibility:"visible"
            })
            
            }
		
            }
          };
	
    
    function Win2(mas2){
        winner=$('.winner');
        table=$('#my')
        im2=$('.im2');
		for( var k=0; k<arr.length; k++)	{

            if(Ind2(arr[k][0], mas2) && Ind2(arr[k][1], mas2) && Ind2(arr[k][2], mas2))	
           {
				
		   im2.css({
                visibility:'visible'
           }).animate({
                left:'10px'
            },5000);		
           
            winner.css({
                    visibility:"visible"
            }).text("WINNER 2#");
            
               
            table.css({
                   display:"none"
               })
           }
		}
          
        };
	
	function Ind (p, mas){
		for ( var m=0; m < mas.length; m++){
            
			if(p==mas[m]){
               
				return true;
		
			
			return  false;}
	
    
    }};
    function Ind2 (p, mas2){
		for ( var m=0; m < mas2.length; m++){
            
			if(p==mas2[m]){
               
				return true;
		
			
			return  false;}
	
    
    }};
	
	
	
	
	return{
		SEl: SEl,
		Load:Load
        
		  }
	
}
)();

XO.SEl();
XO.Load();





