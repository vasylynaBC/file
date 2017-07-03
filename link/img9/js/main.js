function sel(a){
    return document.querySelector(a);
}
function id(a){
    return document.getElementById(a);
}

var flag=true;
var alig=document.querySelectorAll('.al');
var allTd=document.getElementsByTagName('td');
var main=sel('.main__text');

//style fot text
function StyleText (){
    
    if (flag){
         sel(".main__text").style.fontWeight=this.value;
         sel(".main__text").style.fontStyle=this.value;
         sel(".main__text").style.textDecoration=this.value;
   flag=false;
    }
    else {
    sel(".main__text").style.fontStyle="normal";
sel(".main__text").style.fontWeight="normal";
sel(".main__text").style.textDecoration="none";
    flag=true;
}
    }
    //виклик функції
id('bold').addEventListener('click', StyleText);
id('italic').addEventListener('click', StyleText);
id('Un').addEventListener('click', StyleText);

//розмір і шрифт тексту
function Sizefont(){
    sel('.main__text').style.fontFamily=this.value;
    sel('.main__text').style.fontSize=this.value;
}
id('size').addEventListener('change', Sizefont);
id('font').addEventListener('change', Sizefont);

for (var i=0; i<alig.length; i++){
    alig[i].addEventListener('click', function(){
        sel('.main__text').style.textAlign=this.value;
    })
}


//таблиці кольорів

id('color').addEventListener("click", function(){
           id('colorTb').style.visibility="visible";
    for(var i=0;  i<allTd.length; i++){
        allTd[i].onclick=function()
        {sel('.main__text').style.color=this.style.background; }  
             }
})

function BackCol(){
    id('tableBox').style.visibility="visible";
    id('tableBox2').style.visibility="hidden";
    for(var i=0;  i<allTd.length; i++){
       allTd[i].onclick=function(){
         sel('.main').style.background=this.style.background;   }  
}}


function BackIm(){
           id('tableBox2').style.visibility="visible";
           id('tableBox').style.visibility="hidden";
    
    for(var i=0;  i<allTd.length; i++){
       allTd[i].onclick=function(){
    sel('.main').style.background=this.style.backgroundImage;
    sel('.main').style.backgroundSize="cover";
       }  
}}

id('bGroun').addEventListener('click', BackCol);
id('bg2').addEventListener('click', BackCol);
id('bg').addEventListener('click', BackIm);



//пховує таблиці

sel('.main').addEventListener('click', function(){
    id('tableBox').style.visibility='hidden';
    id('tableBox2').style.visibility='hidden';
    id('colorTb').style.visibility='hidden';
    
})
//приховує вікна створення табл і стпиків
sel('.main__edit').addEventListener('click', function(){
    sel('.listCr').style.visibility="hidden";
    sel('.tableCr').style.visibility="hidden";
})


//викликає вікно редагування
id('edit').addEventListener('click', function (){
    sel('.userText').value=main.innerHTML;
    sel('.menu').style.visibility="hidden";
    sel('.main__text').style.visibility="hidden";
    sel('.menu__two').style.visibility="visible";
    sel('.main__edit').style.visibility="visible";
})
//показує вікна табл  і списків
id("tab").addEventListener('click', function(){
    sel('.tableCr').style.visibility='visible';
})
id('list').addEventListener('click', function(){
    sel(".listCr").style.visibility="visible";
})




//table


id('creattab').addEventListener('click', function(){
    
      
    var row=id('row').value;
    var colm=id('colm').value;
    var cellWidht=id('width').value;
    var cellHeight=id('height').value;
    var cellspacing=id('widhtBorder').value;
    var typeBorder=sel('.typeB').value;
    var border=id('border').value;
    var colorBorder=sel('.colorT').value;
    
    
   var tableCreate= `<table style="border: ${border}px ${typeBorder} ${colorBorder}; cellspacing:{cellspacing};">`;
     for (var i=0; i<row; i++){
         tableCreate+='<tr>';
         for (var j=0; j<colm; j++){
             tableCreate+= `<td style="border: ${border}px ${typeBorder} ${colorBorder}; width:${cellWidht}px; height:${cellHeight}px;">`;
             
         }
          tableCreate+='</tr>';
     }
    
   
    tableCreate+='</table>';
        sel('.userText').value=main.innerHTML;  
        sel('.userText').value+=tableCreate;
 })

//list

id('creatlist').addEventListener('click', function(){
    var countList=id('kilkist').value;
    var numb=id('number').value;
    
    
    var listCreate= `<ol style="list-style-type:${numb};">`;
     for (var i=0; i<countList; i++){
         listCreate+='<li>';
         listCreate+="Text";
         
        
          listCreate+='</li>';
     }
    
    listCreate+='</ol>';
   
    
    sel('.userText').value=main.innerHTML;  
      
  sel('.userText').value+=listCreate;
    })

//save
id('save').addEventListener('click', function(){
    sel('.main__text').innerHTML=sel('.userText').value;
    sel('.main__edit').style.visibility="hidden";
    sel('.menu__two').style.visibility="hidden";
    sel('.menu__one').style.visibility="visible";
    sel('.main__text').style.visibility="visible";
})

//reset

function ResetFun(){
     document.getElementById("myForm").reset();
}

//load file
 function FileLoad(event){
    var mew=URL.createObjectURL(event.target.files[0]);
    var urlSt='url(' +mew+ ')';
    sel('.main').style.backgroundImage=urlSt;
    sel('.main').style.backgroundSize="cover";
}