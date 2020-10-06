var wrapperEle = document.body;

var number=[-30, 14, 66, 21, 72, -4];

var elements=[];

function placeNumber(number){
  var that = this
  
  this.number = number
  
  this.ele = document.createElement("div");
  this.numberEle = document.createElement("h1");
  this.messageEle = document.createElement("h3");
  
  
  this.numberEle.innerHTML = "Number: "+ this.number;
  
    if(number<0){
    this.messageEle.innerHTML="Number is less than 0";
  }else if(number>50){
    this.messageEle.innerHTML="Number is greater than 50";
  }else if(number===14){
    this.messageEle.innerHTML="Number is 14";
  }else{
    this.messageEle.innerHTML="";
  }
  
  
  document.body.appendChild(this.numberEle);
  document.body.appendChild(this.messageEle);
  

    this.numberEle.addEventListener("click", function(){
    that.numberUp();
  })
  
 document.body.appendChild(this.ele); 
}

placeNumber.prototype.numberUp = function(){
 this.number=this.number+1;
  this.numberEle.innerHTML = "Number: "+ this.number;

  
}

for (var i=0; i<number.length; i++) {
  elements.push(new placeNumber(number[i]));
}