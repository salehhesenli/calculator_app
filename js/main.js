const screen=document.getElementById("screen");
const one=document.getElementById("one");
const two=document.getElementById("two");
const three=document.getElementById("three");
const four=document.getElementById("four");
const five=document.getElementById("five");
const six=document.getElementById("six");
const seven=document.getElementById("seven");
const eight=document.getElementById("eight");
const nine=document.getElementById("nine");
const minus=document.getElementById("minus");
const plus=document.getElementById("plus");
const multiply=document.getElementById("multiply");
const devide=document.getElementById("devide");
const clear=document.getElementById("clear");
const dot=document.getElementById("dot");
const zero=document.getElementById("zero");
const ac=document.getElementById("ac");
const percent=document.getElementById("percent");
const menfi=document.getElementById("menfi");
const equal=document.getElementById("equal");

one.addEventListener("click",function(e){
    e.preventDefault();
    screen.value+=1
})
two.addEventListener("click",function(e){
    e.preventDefault();
    screen.value+=2
})
three.addEventListener("click",function(e){
    e.preventDefault();
    screen.value+=3
})
four.addEventListener("click",function(e){
    e.preventDefault();
    screen.value+=4
})
five.addEventListener("click",function(e){
    e.preventDefault();
    screen.value+=5
})
six.addEventListener("click",function(e){
    e.preventDefault();
    screen.value+=6
})
seven.addEventListener("click",function(e){
    e.preventDefault();
    screen.value+=7
})
eight.addEventListener("click",function(e){
    e.preventDefault();
    screen.value+=8
})
nine.addEventListener("click",function(e){
    e.preventDefault();
    screen.value+=9;
});
zero.addEventListener("click",function(e){
    e.preventDefault();
    screen.value+=0
})
dot.addEventListener("click",function(e){
    e.preventDefault();
    screen.value+='.'
})
clear.addEventListener("click",function(e){
    e.preventDefault();
    screen.value+=''
})
percent.addEventListener("click",function(e){
    e.preventDefault();
    screen.value+='%'
})
menfi.addEventListener("click",function(e){
    e.preventDefault();
    screen.value+='-'
})
minus.addEventListener("click",function(e){
    e.preventDefault();
    screen.value+='-'
})
plus.addEventListener("click",function(e){
    e.preventDefault();
    screen.value+='+'
})
devide.addEventListener("click",function(e){
    e.preventDefault();
    screen.value+='/'
})
multiply.addEventListener("click",function(e){
    e.preventDefault();
    screen.value+='*'
})
equal.addEventListener("click",function(e){
    e.preventDefault();
   if(screen.value==""){
    alert("No no no no")
   }
   else{
    screen.value=eval(screen.value)
   }
})