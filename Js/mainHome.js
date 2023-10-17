//get Data From FireBase 

onload = function getCategories(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET" , "https://clone-ba346-default-rtdb.firebaseio.com/categories.json");
    xhr.onreadystatechange = function(){
        if(this.readyState ==4 && this.status ==200){
            var response =JSON.parse(this.responseText);
            console.log(response);
            var category = [];
            for(key in response){
                category.push(response[key]);
            }
            console.log(category);
            
            for(let i =0 ; i<category.length;i++){
                createCategoryItems(category[i]);
            }
        }
    }
    xhr.send();
  }
function createCategoryItems(cat){

    var DivContainer = document.getElementById("mainHomeContent");


    var cartDiv = document.createElement("div");
    cartDiv.setAttribute("class" ,"newCart");

    var cartHead = document.createElement("h3");
    cartHead.innerHTML=cat.title;
    var carImg = document.createElement("img");
    carImg.setAttribute("src" , cat.imgage);
    var carAnch =  document.createElement("a");
    carAnch.innerHTML="See more";
    carAnch.setAttribute("href","#");

    cartDiv.appendChild(cartHead);
    cartDiv.appendChild(carImg);
    cartDiv.appendChild(carAnch);

    DivContainer.appendChild(cartDiv);

}



let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += "active";
}



//nummer of product in cart

var itemInCart=JSON.parse(localStorage.getItem("cart"));
if(!(JSON.parse(localStorage.getItem("cart")==null))){
document.getElementById("numberOfProduct").innerHTML=itemInCart.length;
}
//show name of user login
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

 ////////////////////////////////////////logout 
 var logoutUser=document.getElementById("logOut");
 logoutUser.addEventListener("click",function(){
   
 document.cookie = "userEmail=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";  
 localStorage.removeItem("cart"); 
 let loginPage="./index.html";
 self.location.href = loginPage;
 })




