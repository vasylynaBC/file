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



///створення таблиці
sel('.save').addEventListener('click', function(){
    sel('.text').innerHTML=sel('.userText').value;
})

sel('.table').addEventListener('click', function(){
sel('.create-butt').addEventListener('click', function(){
    
    var row=sel('.row').value;
    var colm=sel('.colm').value;
    var cellWidht=sel('.width').value;
    var cellHeight=sel('.height').value;
    var borderWidht=sel('.widhtBorder').value;
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
    sel('.create__table').style.visibility='hidden';
    sel('.body').style.visibility='visible';
    sel('.code__display').style.vasibility="visible";
    sel('.userText').value=main.innerHTML;  
     sel('.code__display').style.visibility='visible';
   sel('.code').style.visibility='visible';
    sel('.userText').value+=tableCreate;

 })
})
//// create list

sel('.list').addEventListener('click', function(){
sel('.create-butt').addEventListener('click', function(){
    var countList=sel('.countList').value;
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
       sel('.code__display').style.visibility='visible';
       sel('.code').style.visibility='visible';
  sel('.userText').value+=listCreate;
    })
})

