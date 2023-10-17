var sliderMenu = document.getElementById("myMenu");
document.getElementById("showMenu").addEventListener("click" , function(){
    console.log("Moooooo");
    sliderMenu.style.transform = "translateX(0px)";
});
document.getElementById("closeMenu").addEventListener("click" , function(){
    sliderMenu.style.transform = "translateX(-350px)";
});



var xhr = new XMLHttpRequest();
xhr.open("GET" , "https://dummyjson.com/products");
xhr.onreadystatechange = function(){
    if(this.readyState ==4 && this.status ==200){
        var response =JSON.parse(this.responseText);
        var products = response["products"];
        console.log(response);
        
        for(let i =0 ; i<products.length;i++){
            createProductItems(products[i]);
        }
    }
}
xhr.send();


function createProductItems(productItem){

// var contentDiv = document.getElementById("contentDiv");
// var productDiv = document.createElement("div");
// productDiv.setAttribute("class","productDiv");

// var pruductImg = document.createElement("img");
// pruductImg.setAttribute("id",pruductImg);
// // product image//
// pruductImg.setAttribute("src",productItem.thumbnail);

// productDiv.appendChild(pruductImg);
// var productTexts = document.createElement("div");
// productTexts.setAttribute("class","productTexts");

// var prodDiscription = document.createElement("p");
// prodDiscription.setAttribute("id" , "prodDiscription")
// // product Discription
// prodDiscription.innerHTML = productItem.description;
// productTexts.appendChild(prodDiscription);
// var productH5 = document.createElement("h5");
// productH5.innerHTML ="<sup>EGP</sup>"+ productItem.price + "<sup>00</sup>";
// productTexts.appendChild(productH5);
// var lastPar = document.createElement("p");
// productTexts.appendChild(lastPar);
// lastPar.innerHTML ="Fulfilled by Amazon - FREE Shipping";
// productDiv.appendChild(productTexts);

// contentDiv.appendChild(productDiv);
var contentDiv = document.getElementById("contentDiv");
var productDiv = document.createElement("div");
productDiv.setAttribute("class","productDiv");

var pruductImg = document.createElement("img");
pruductImg.setAttribute("id",pruductImg);
// product image//
var anchorGoToDetailsPage = document.createElement("a");
pruductImg.setAttribute("src",productItem.thumbnail);
anchorGoToDetailsPage.setAttribute("href" , "DetailsFashion.html?id="+productItem.id+"?myApi=https://dummyjson.com/products");
anchorGoToDetailsPage.appendChild(pruductImg);
productDiv.appendChild(anchorGoToDetailsPage);
var productTexts = document.createElement("div");
productTexts.setAttribute("class","productTexts");

var prodDiscription = document.createElement("p");
prodDiscription.setAttribute("id" , "prodDiscription")
// product Discription
prodDiscription.innerHTML = productItem.description;
productTexts.appendChild(prodDiscription);
var productH5 = document.createElement("h5");
productH5.innerHTML ="<sup>EGP</sup>"+ productItem.price + "<sup>00</sup>";
productTexts.appendChild(productH5);
var lastPar = document.createElement("p");
productTexts.appendChild(lastPar);
lastPar.innerHTML ="Fulfilled by Amazon - FREE Shipping";
productDiv.appendChild(productTexts);

contentDiv.appendChild(productDiv);
}



// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("mybtnlogin");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
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

//  console.log(document.cookie);
document.getElementById("searchProduct").onchange = function (){
  document.getElementById("contentDiv").innerHTML="";
  var xhr = new XMLHttpRequest();
  xhr.open("GET" , "https://dummyjson.com/products/search?q="+this.value);
  xhr.onreadystatechange = function(){
      if(this.readyState ==4 && this.status ==200){
          var response =JSON.parse(this.responseText);
          var products = response["products"];
          console.log(response["products"]);
          
          for(let i =0 ; i<products.length;i++){
              createProductItems(products[i]);
          }
      }
  }
  xhr.send();
}