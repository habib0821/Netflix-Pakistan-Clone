question = false;
let iconClose1 = document.querySelector(".iconClose1");
let iconClose2 = document.querySelector(".iconClose2");
let iconClose3 = document.querySelector(".iconClose3");
let iconClose4 = document.querySelector(".iconClose4");
let iconClose5 = document.querySelector(".iconClose5");
let iconClose6 = document.querySelector(".iconClose6");

let qs1 = document.querySelector(".qs1");
let qs2 = document.querySelector(".qs2");
let qs3 = document.querySelector(".qs3");
let qs4 = document.querySelector(".qs4");
let qs5 = document.querySelector(".qs5");
let qs6 = document.querySelector(".qs6");

let query1 = document.querySelector(".query1").addEventListener("click", function(){

if(question == false){
    qs1.style.transition = ".3s ease-in";
    qs1.style.display = "block";
    qs1.style.height = "auto";
    question = true;
    iconClose1.style.rotate = "45deg"
}
else{
    qs1.style.transition = ".3s ease-in";
    qs1.style.display = "none";
    qs1.style.height = "0";
    iconClose1.style.rotate = "0deg"
    question = false;

}
});
let query2 = document.querySelector(".query2").addEventListener("click", function(){

if(question == false){
    qs2.style.transition = ".3s ease-in";
    qs2.style.display = "block";
    qs2.style.height = "auto";
    question = true;
    iconClose2.style.rotate = "45deg"
}
else{
    qs2.style.transition = ".3s ease-in";
    qs2.style.display = "none";
    qs2.style.height = "0";
    iconClose2.style.rotate = "0deg"
    question = false;

}
});
let query3 = document.querySelector(".query3").addEventListener("click", function(){

if(question == false){
    qs3.style.transition = ".3s ease-in";
    qs3.style.display = "block";
    qs3.style.height = "auto";
    question = true;
    iconClose3.style.rotate = "45deg"
}
else{
    qs3.style.transition = ".3s ease-in";
    qs3.style.display = "none";
    qs3.style.height = "0";
    iconClose3.style.rotate = "0deg"
    question = false;

}
});
let query4 = document.querySelector(".query4").addEventListener("click", function(){

if(question == false){
    qs4.style.transition = ".3s ease-in";
    qs4.style.display = "block";
    qs4.style.height = "auto";
    question = true;
    iconClose4.style.rotate = "45deg"
}
else{
    qs4.style.transition = ".3s ease-in";
    qs4.style.display = "none";
    qs4.style.height = "0";
    iconClose4.style.rotate = "0deg"
    question = false;

}
});
let query5 = document.querySelector(".query5").addEventListener("click", function(){

if(question == false){
    qs5.style.transition = ".3s ease-in";
    qs5.style.display = "block";
    qs5.style.height = "auto";
    question = true;
    iconClose5.style.rotate = "45deg"
}
else{
    qs5.style.transition = ".3s ease-in";
    qs5.style.display = "none";
    qs5.style.height = "0";
    iconClose5.style.rotate = "0deg"
    question = false;

}
});
let query6 = document.querySelector(".query6").addEventListener("click", function(){

if(question == false){
    qs6.style.transition = ".3s ease-in";
    qs6.style.display = "block";
    qs6.style.height = "auto";
    question = true;
    iconClose6.style.rotate = "45deg"
}
else{
    qs6.style.transition = ".3s ease-in";
    qs6.style.display = "none";
    qs6.style.height = "0";
    iconClose6.style.rotate = "0deg"
    question = false;

}
});
