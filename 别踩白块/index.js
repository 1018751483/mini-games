//产生随机数
function randomDistance () {
  var distance =Math.floor(Math.random()*4);
  return distance
  }



  var box=document.getElementById("box");
  var boxt=document.getElementById("boxt");
  //创建一个小div函数
  function cdiv(){
    var div=document.createElement("div");
    return div;
  }


//创建一行boxs函数(含有4个小div)
  function cboxs(){
    var boxs=document.createElement("div");
    var m=randomDistance();
    boxs.className="boxs";
   
    for(let a=0;a<4;a++)
    {
      var row= cdiv();
      boxs.appendChild(row);
     
     if(a==m)
     {
       row.className="black";
     }
     else{
       row.className="box1";
     }
      boxt.insertBefore(boxs,boxt.firstChild);
     //boxs.appendChild(row);
    }
    return boxs;
  }

  // 创建4行boxs函数
  function cboxs5(){
    for(let a=0;a<4;a++)
    {
      var b=cboxs();
      boxt.appendChild(b);
    }
  }

  cboxs5();
  var boxs=document.getElementsByClassName("boxs");
  
  function move(){
    var top=parseInt(getComputedStyle(boxt).top);
      //alert(top);
    top=top+x;
   
    boxt.style.top = top+'px';
    

    if(top>0)
    {
      cboxs();
      boxt.style.top = '-125px';
 

    if(boxt.children.length>5){  //当大于5行时
        //删除最后一行 
        boxt.removeChild(boxt.lastChild);
    }
    for(let b=0;b<4;b++)
    {
      if(boxt.children[boxt.children.length-1].children[b].className == 'black'){
       //var star=false;
      alert("game over");
      grade.innerHTML="得分:"+0;
      clearInterval(c);
  }
    }
    }
  }
  var c;
  //开始游戏
document.getElementById("button1").onclick=function(){
  if(this.innerHTML=="开始游戏")
  {
 c=setInterval(move,40);
 this.innerHTML="重新游戏";
  }
  else{
    location.reload();
  }
}
//暂停游戏
document.getElementById("button2").onclick=function(){
  if(this.innerHTML=="暂停游戏")
  {
  clearInterval(c);
  this.innerHTML="继续游戏";
  }
  else{
    c=setInterval(move,40);
    this.innerHTML="暂停游戏";
  }

}

  var m=0;
  var x=3;
  var grade=document.getElementById("grade");
  boxt.onclick=function(event)
  {

      if(event.target.className　=="black")
      {
        event.target.className　="box1";
        m=m+1;
        grade.innerHTML="得分:"+m;
        if(m%5==0)
        {
         x=x+1;
        }
      }
      else
      {
        alert("game over")
        
      }

  }



