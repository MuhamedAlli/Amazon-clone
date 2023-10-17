
var element=document.getElementById("element")
window.onload=ajaxrequex;

function ajaxrequex(){
xhr = new XMLHttpRequest();
xhr.open("get","https://fakestoreapi.com/products",true);
// xhr.open("get","https://dummyjson.com/products",true);
var apiDes = "https://fakestoreapi.com/products";
xhr.onreadystatechange=function(){

    if (xhr.readyState == 4 && xhr.status == 200) {
         var data= JSON.parse(xhr.responseText);
       console.log(data);
       for (let i = 0; i < data.length; i++) {
        
        element.innerHTML+= 
        `<div class="clothesDetails">
        <a  href="DetailsFashion.html?id=${data[i].id}?myApi=${apiDes}">
        <div class="imageDetails">
        <img src="${data[i].image}" class="image"  alt="" srcset="">
         </div>
        </a>
      
        <div class="descriptionImage">
            <span style="font-weight: bold;">${data[i].title.slice(0,20)}</span>
            <span> ${data[i].description.slice(0,30)}</span>
            <span class=" topdeal"> <b class="deal">Deal</b> top deal</span>
            <span>EGP <b>${data[i].price}</b> </span>
            <span>& FREE Shipping. <a href="###">Details</a></span>
        </div>
    
    </div>   
        `
    }
         
        }

      
}
xhr.send();
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
else{
  document.getElementById("usernameLogin").innerHTML=username;
  document.getElementById("usernameLogin2").innerHTML=username;
 
}
//  console.log(cookies);
cookies.replace(/; /g,'&');
var userlogin=new URLSearchParams(cookies);
 console.log(userlogin)
// console.log(document.cookie);
// console.log("loacal"+localStorage.getItem("key"));
// alert("loacal"+localStorage.getItem("key"));

