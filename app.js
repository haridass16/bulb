function change(){
    var img=document.getElementById("i1");
  
    if(img.src.match("off")){
      img.src="./asserts/lighton.png";
    }else{
      img.src="./asserts/bulboff.png";
    }
   }