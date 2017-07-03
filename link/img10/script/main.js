function id(a) {
            return document.getElementById(a);
        }
function tagN(a) {
            return document.getElementsByTagName(a);
        }
function sel(a){
       return document.querySelector(a);
       
}
var main=sel('.main');
var allTd=document.getElementsByTagName('td');
var fsize=document.querySelectorAll('.size');
var fontSt=document.querySelectorAll('.fontSt');
var fontF=id('font');
var flag=true;
var AllClassTable=document.querySelectorAll('.addText');
var AllClassTvalue=sel('.addText').value;
var passw=sel('.passw');
 //викликає блок - code
sel('.edit').addEventListener('click', function(){
    sel('.userText').value=main.innerHTML;  
       sel('.code__display').style.visibility='visible';
       sel('.code').style.visibility='visible';
        sel('.styleBody').style.visibility='hidden';
        sel('.create__style').style.vasibility='hidden';

    })

//повертає назад 
sel('.backCode').addEventListener('click', function(){
     sel('.userText').value=main.innerHTML;
       sel('.code__display').style.visibility='hidden';
       sel('.code').style.visibility='visible';
        sel('.styleBody').style.visibility='hidden';
        sel('.create__style').style.vasibility='hidden';

    })


//save  block , присвоює значення редактора верхньому блоку(main)
sel('.save').addEventListener('click', function(){
   sel('.text').innerHTML=sel('.userText').value;
})

//ховає усі блоки , викликає блок для створення таблиці і списків
sel('.add').addEventListener('click', function(){
    sel('.body').style.visibility='hidden';
    sel('.create').style.visibility='visible';
    sel('.create').style.className='create';
    sel('.create__table').style.visibility='visible';
    
           sel('.code__display').style.visibility='hidden';
           sel('.code').style.visibility='hidden';

})

//повертає назад з вікна create
sel('.backAdd').addEventListener('click', function(){
    sel('.body').style.visibility='visible';
    sel('.create').style.visibility='hidden';
    sel('.create__table').style.visibility='hidden';
    sel('.create__list-style').style.visibility='hidden';
    sel('.text-countList').style.visibility='hidden';
    sel('.text-mark').style.visibility='hidden';
    sel('.text-number').style.visibility='hidden';
           sel('.code__display').style.visibility='visible';
           sel('.code').style.visibility='visible';

})

//пиховує/показує створення списків/табл
sel('.list').addEventListener('click', function(){
                 
    sel('.create__table').style.visibility='hidden';
    sel('.create__list').style.visibility='visible';

})


sel('.table').addEventListener('click', function(){
    sel('.create__table').style.visibility='visible';
    sel('.create__list').style.visibility='hidden';
    sel('.create__list-style').style.visibility='hidden';
    sel('.text-countList').style.visibility='hidden';
    sel('.text-mark').style.visibility='hidden';
    sel('.text-number').style.visibility='hidden';
});

//клік на кнопку стиль, викликає вікно для редагування тексту
sel('.style').addEventListener('click', function(){
    sel('.code').style.visibility='hidden';
    sel('.code__display').style.visibility="hidden";
    sel('.styleBody').style.visibility='visible';
})
//повертає назад 
sel('.backCreate').addEventListener('click', function(){
    sel('.code').style.visibility='visible';
    sel('.code__display').style.visibility="visible";
    sel('.styleBody').style.visibility='hidden';
})

//виклик таблиці кольорів
document.body.addEventListener("click", function(e){
       if(e.target.id=='colorbg' ){
          
       sel('.colorBg').style.visibility="visible";
       for(var i=0;  i<allTd.length; i++){
        allTd[i].onclick=function(){
           { sel('.main').style.background=this.style.background; }  }
      
       }}
    
    else if(e.target.id=='colortxt' ){
       sel('.colorBg').style.visibility="visible";
       for(var i=0;  i<allTd.length; i++){
       allTd[i].onclick=function(){
           sel('.text').style.color=this.style.background;          }  
           }
       }
              else {
       sel('.colorBg').style.visibility="hidden";}

});

///зміна шрифта
for (var i=0; i<fsize.length; i++){
    fsize[i].addEventListener('click', function(){
        sel('.text').style.fontSize=this.value;
    })
}

fontF.addEventListener('change', function(){
     sel('.text').style.fontFamily=this.value;
})

sel('.italic').addEventListener('click', function(){
    if(this.checked){
       sel('.text').style.fontStyle=this.value;}
    else  { sel('.text').style.fontStyle='normal';}
  
})
sel('.bold').addEventListener('click', function(){
          if(this.checked){
       sel('.text').style.fontWeight=this.value;}
    else  { sel('.text').style.fontWeight='normal';}
  
})




sel('.save').addEventListener('click', function(){
    sel('.text').innerHTML=sel('.userText').value;
})

///створення таблиці

sel('.table').addEventListener('click', function(){
sel('.create-butt').addEventListener('click', function(){
    
    var row=id('row').value;
    var colm=id('colm').value;
    var cellWidht=id('width').value;
    var cellHeight=id('height').value;
    var borderWidht=id('widhtBorder').value;
    var typeBorder=id('type').value;
    var colorBorder=id('color').value;
    
    
    var tableCreate= `<table style="border: ${borderWidht}px ${typeBorder} ${colorBorder};">`;
     for (var i=0; i<row; i++){
         tableCreate+='<tr>';
         for (var j=0; j<colm; j++){
             tableCreate+= `<td style="border: ${borderWidht}px ${typeBorder} ${colorBorder}; width:${cellWidht}px; height:${cellHeight}px;">`;
             
         }
          tableCreate+='</tr>';
     }
    
    tableCreate+='</table>';
        
    sel('.create').style.visibility='hidden';
    sel(".create__list").style.visibility='hidden';
    sel(".create__list-style").style.visibility='hidden';
    sel('.create__table').style.visibility='hidden';
    sel('.body').style.visibility='visible';
    sel('.code__display').style.vasibility="visible";
    sel('.userText').value=main.innerHTML;  
     sel('.code__display').style.visibility='visible';
   sel('.code').style.visibility='visible';
    sel('.userText').value+=tableCreate;
 })
})



//function Valid(){

       
            

var allTab=document.querySelectorAll('.addText');
var allD=document.querySelector('.error');
var count=0;
var flag=true;
for(var i=0; i<allTab.length; i++){


allTab[i].addEventListener('input', function(){
    
    if(this.value==""){
       this.style.border="3px solid red";
       this.nextElementSibling.innerHTML="enter numb"; sel('.create-butt').disabled=true;
       
    }
   else  if(this.value*1!=this.value){
       this.style.border="3px solid red";
       this.nextElementSibling.innerHTML="Error, enter number";
        sel('.create-butt').disabled=true;
      
               
    }
    else if(this.value>99 || this.value<=0){
    this.style.border="3px solid red";
    this.nextElementSibling.innerHTML="Error, enter number <99 && >0";
       
 sel('.create-butt').disabled=true;}    
    else if(this.value*1==this.value) {
        this.style.border="3px solid green";
            this.nextElementSibling.innerHTML="";
            sel('.create-butt').disabled=false;
        count++;
    }
    if(flag){
  if(count==5 || count==1){sel('.create-butt').disabled=false;
       flag=false ;
    }
    else if(count<5){
        sel('.create-butt').disabled=true;
        flag=true;
    } }  
 })   }

//// create list


sel('.list').addEventListener('click', function(){
sel('.create__list-style').style.visibility="visible";


  sel('.markList').onclick=function(){
  sel('.text-countList').style.visibility="hidden";
  sel('.text-number').style.visibility="hidden";
  sel('.text-mark').style.visibility="visible";
      
     var marKer=id('mark');
     
     marKer.onclick=function(){
        
    sel('.text-countList').style.visibility="visible";
     }
    
      
      
     sel('.create-butt').addEventListener('click', function(){
    var countList=id('countList').value;
    var mark=id('mark').value;
    
    
    var listCreate= `<ul style="list-style-type:${mark};">`;
     for (var i=0; i<countList; i++){
         listCreate+='<li>';
         listCreate+="Text";
         
        
          listCreate+='</li>';
     }
    
    listCreate+='</ul>';
   
    sel('.create').style.visibility='hidden';
    sel('.create__list').style.visibility='hidden';
    sel('.body').style.visibility='visible';
    sel('.code__display').style.vasibility="visible";
    sel('.userText').value=main.innerHTML;  
    sel('.text-number').style.visibility="hidden";
    sel('.create__list-style').style.visibility="hidden";
    sel('.text-mark').style.visibility="hidden";
    sel('.text-countList').style.visibility="hidden";
    sel('.code__display').style.visibility='visible';
    sel('.code').style.visibility='visible';
    sel('.userText').value+=listCreate;
    })
}
 
 sel('.numbList').onclick=function(){
 sel('.text-countList').style.visibility="hidden";
 sel('.text-number').style.visibility="visible";
 sel('.text-mark').style.visibility="hidden";
    
     var num=id('number');
     
     num.onclick=function(){
        
    sel('.text-countList').style.visibility="visible";
     }
    
 sel('.create-butt').addEventListener('click', function(){
    var countList=id('countList').value;
    var number=id('number').value;
    
    
    var listCreate= `<ol style="list-style-type:${number};">`;
     for (var i=0; i<countList; i++){
         listCreate+='<li>';
         listCreate+="Text";
         
        
    
         listCreate+='</li>';
     }
    
    listCreate+='</ol>';
   
    sel('.create').style.visibility='hidden';
    sel('.create__list').style.visibility='hidden';
    sel('.body').style.visibility='visible';
    sel('.text-number').style.visibility="hidden";
    sel('.text-mark').style.visibility="hidden";
    sel('.code__display').style.vasibility="visible";
    sel('.userText').value=main.innerHTML;  
    sel('.create__list-style').style.visibility="hidden";
    sel('.text-countList').style.visibility="hidden";
    sel('.code__display').style.visibility='visible';
    sel('.code').style.visibility='visible';
    sel('.userText').value+=listCreate;
    })
}})
  // виклик книпки блокування
sel('.block').addEventListener('click', function(){
    document.getElementById('window').style.visibility="visible";
    document.getElementById('wrap').style.opacity="0.8"; 	
    document.getElementById('wrap').style.background="black"; 
    sel('.edit').disabled=true;
    sel('.style').disabled=true;
    
    
    
    
})
id('butPass').addEventListener('click', function(){
if(passw.value=="12345"){
     document.getElementById('window').style.visibility="hidden";
    document.getElementById('wrap').style.opacity="1"; 	
    document.getElementById('wrap').style.background="none"; 	
    sel(".errorSt").innerHTML="";
        sel('.edit').disabled=false;
    sel('.style').disabled=false;
}
else {
    sel(".errorSt").innerHTML="**Паронь не правильно, ввведіть щерез";
}
})
 
// клік на кнопку редагувати правою клавішею миші викликає вікно створити табл
sel('.edit').addEventListener('contextmenu', function(){
     sel('.body').style.visibility='hidden';
    sel('.create').style.visibility='visible';
    sel('.create').style.className='create';
    sel('.create__table').style.visibility='visible';
    
           sel('.code__display').style.visibility='hidden';
           sel('.code').style.visibility='hidden';
})