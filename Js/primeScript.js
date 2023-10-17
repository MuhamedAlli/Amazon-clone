// function dis() {
//     if (isDisplayedQ1 == 0) {
//         document.querySelectorAll("a").forEach(element => element.style.display = "block");
//         isDisplayedQ1 = 1;
//     } else {
//         document.querySelectorAll("a").forEach(element => element.style.display = "none");
//         isDisplayedQ1 = 0;
//     }
// }
var isDisplayedQues1 = 0;
document.getElementById("ques1").onclick = function(){
    if (isDisplayedQues1 == 0) {
        document.getElementById("specialPara1").style.display ="block";
        isDisplayedQues1 = 1;
    } else {
        document.getElementById("specialPara1").style.display ="none";
        isDisplayedQues1 = 0;
    }
}

var isDisplayedQues2 = 0;
document.getElementById("ques2").onclick = function(){
    if (isDisplayedQues2 == 0) {
        document.getElementById("specialPara2").style.display ="block";
        isDisplayedQues2 = 1;
    } else {
        document.getElementById("specialPara2").style.display ="none";
        isDisplayedQues2 = 0;
    }
}
var isDisplayedQues3 = 0;
document.getElementById("ques3").onclick = function(){
    if (isDisplayedQues3 == 0) {
        document.getElementById("specialPara3").style.display ="block";
        isDisplayedQues3 = 1;
    } else {
        document.getElementById("specialPara3").style.display ="none";
        isDisplayedQues3 = 0;
    }
}
var isDisplayedQues4 = 0;
document.getElementById("ques4").onclick = function(){
    if (isDisplayedQues4 == 0) {
        document.getElementById("specialPara4").style.display ="block";
        isDisplayedQues4 = 1;
    } else {
        document.getElementById("specialPara4").style.display ="none";
        isDisplayedQues4 = 0;
    }
}
var isDisplayedQues5 = 0;
document.getElementById("ques5").onclick = function(){
    if (isDisplayedQues5 == 0) {
        document.getElementById("specialPara5").style.display ="block";
        isDisplayedQues5 = 1;
    } else {
        document.getElementById("specialPara5").style.display ="none";
        isDisplayedQues5 = 0;
    }
}
var isDisplayedQues6 = 0;
document.getElementById("ques6").onclick = function(){
    if (isDisplayedQues6 == 0) {
        document.getElementById("specialPara6").style.display ="block";
        isDisplayedQues6 = 1;
    } else {
        document.getElementById("specialPara6").style.display ="none";
        isDisplayedQues6 = 0;
    }
}

//nummer of product in cart

var itemInCart=JSON.parse(localStorage.getItem("cart"));
if(!(JSON.parse(localStorage.getItem("cart")==null))){
document.getElementById("numberOfProduct").innerHTML=itemInCart.length;
}
//show name of user login
debugger;
var cookies=document.cookie;
var username=cookies.split("=")[1];
console.log(username);
if(username===undefined){
document.getElementById("usernameLogin").innerHTML="sign in";
document.getElementById("usernameLogin2").innerHTML="sign in";
}
else
{
  document.getElementById("usernameLogin").innerHTML=username;
  document.getElementById("usernameLogin2").innerHTML=username;
}
//  console.log(cookies);
cookies.replace(/; /g,'&');
var userlogin=new URLSearchParams(cookies);
 console.log(userlogin)

 //logout of user an destroy cookie

 var logoutUser=document.getElementById("logOut");
 logoutUser.addEventListener("click",function(){
    debugger;
    var myDate=new Date();
    var days=myDate.getDate()+10;
    myDate.setDate(days);
 //    document.cookie=`"userEmail${userId}="`+EmailUrl+";expires="+myDate.toUTCString();
    document.cookie="userEmail=";";expires="+myDate.toUTCString();
 //  
 })