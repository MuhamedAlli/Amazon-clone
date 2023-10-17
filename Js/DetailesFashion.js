


//see more
var btnSeeMore=document.getElementById("btnSeeMore");
function seeMore(){   
var listelement=document.getElementsByClassName("see_More");
for(let i=0;i<listelement.length;i++)
{
    listelement[i].style.display="table-row";
}
btnSeeMore.innerHTML="See Less"
}
//seeless
function seeLess(){   
 var listelement=document.getElementsByClassName("see_More");
for(let i=0;i<listelement.length;i++)
{
    listelement[i].style.display="none"
}
btnSeeMore.innerHTML="See More"


}
//when hover on image rplace image in show
var changeImages=document.getElementsByClassName("imageReplace");

var mainImage= document.getElementsByClassName("showImage");
for(let i=0;i<changeImages.length;i++){
        changeImages[i].addEventListener("mouseover",function(){
            
            mainImage[0].src=changeImages[i].src;
        });
        
}


// when scrool fixed images
// window.addEventListener('scroll',function(){
    
//     var _ScrollTop=window.scrollY;
//     // console.log(typeof(_ScrollTop))
//     if(_ScrollTop>150){
        
//        document.getElementsByClassName("productImage")[0].style.position="relative";
//        document.getElementsByClassName("changedImges")[0].style.position="absolute";
     
//     }
//     else{
    
//         document.getElementsByClassName("changedImges")[0].style.position="fixed";
//         document.getElementsByClassName("productImage")[0].style.position="fixed";
//     }
// })
//free return link
var hideFreeReturn=document.getElementById("hideFreeReturn");
// console.log(hideFreeReturn);
var hideFreeReturn2=document.getElementById("hideFreeReturn2");
var btnFreeReturn=document.getElementById("freeReturn");
var btnFreeReturn2=document.getElementById("freeReturn2");

var flag=0,flag2=0;
btnFreeReturn.onclick=function(){
    if(flag==0){
        hideFreeReturn.style.display="block";
        flag=1;}
        else{
        hideFreeReturn.style.display="none";
        flag=0;
        }
     }  ;

//button freereturn change event 

btnFreeReturn2.onclick=function (){
   debugger;
   if(flag2==0){
   hideFreeReturn2.style.display="block";
   flag2=1;}
   else{
   hideFreeReturn2.style.display="none";
   flag2=0;
   }
};




//take value from url id to get product  

let params = (new URL(document.location)).searchParams;
        var id = params.get("id").split("?")[0];
        var apiDestination=params.get("id").split("?")[1].split("=")[1];    
        console.log(apiDestination);   
 var showImage=document.getElementsByClassName("showImage");
 var header=document.getElementById("header");
 var price=document.getElementById("price");

var _data;
// window.onload=ajaxrequex;
function ajaxrequex(){
xhr = new XMLHttpRequest();
// xhr.open("get","https://api.rainforestapi.com/request?api_key=demo&amazon_domain=amazon.com&type=product&asin=B073JYC4XM",true);
xhr.open("GET",`${apiDestination}`+"/"+`${id}`,true);

xhr.onreadystatechange=function(){

    if (xhr.readyState == 4 && xhr.status == 200) {
           var data= JSON.parse(xhr.responseText);
         
            console.log(data);
            for (let i = 0; i <=3; i++) {
                showImage[i].src=data.thumbnail;
            }
          
            header.innerHTML=data.description;
            price.innerHTML=data.price;
    }
           

     
      
        
    }
   
xhr.send();
}

onload=ajaxrequex;

// let params = (new URL(document.location)).searchParams;
//         var id = params.get("id");
        
//  var showImage=document.getElementsByClassName("showImage");
//  var header=document.getElementById("header2");
//  var price=document.getElementById("price");

// var _data;
// // window.onload=ajaxrequex;
// function ajaxrequex(){
// xhr = new XMLHttpRequest();
// // xhr.open("get","https://api.rainforestapi.com/request?api_key=demo&amazon_domain=amazon.com&type=product&asin=B073JYC4XM",true);
// xhr.open("GET","https://fakestoreapi.com/products/"+`${id}`,true);

// xhr.onreadystatechange=function(){

//     if (xhr.readyState == 4 && xhr.status == 200) {
//            var data= JSON.parse(xhr.responseText);
         
//             // console.log(data);
//             for (let i = 0; i <=3; i++) {
//                 showImage[i].src=data.image;    
//             }
//             header2.innerHTML=data.description;
//             price.innerHTML=data.price;
//     }
           

     
      
        
//     }
   
// xhr.send();
// }
// onload=ajaxrequex;





//add to cart
var addcart=document.getElementById("addCart");
addcart.addEventListener("click",function(){
    debugger;
var cookies=document.cookie;
// console.log(cookies);
cookies.replace(/; /g,'&');
var userlogin=new URLSearchParams(cookies);
// console.log(userlogin)
if(userlogin.size==0)
       {   let loginPage="./login.html";
       self.location.href = loginPage;
        }
   else{
        cart();
    //  let cartPage="./cart.html";
    //  self.location.href = cartPage;
   
 
   }
});

//list to store  all product will be added by user
var dataINCart=[];
if(!(JSON.parse(localStorage.getItem("cart")==null))){
    dataINCart=JSON.parse(localStorage.getItem("cart"));
}

//list store current product

function cart(){

xhr = new XMLHttpRequest();
xhr.open("get","https://fakestoreapi.com/products/"+`${id}`,true);
// xhr.open("get","https://dummyjson.com/products",true);

xhr.onreadystatechange=function(){
    debugger;
    if (xhr.readyState == 4 && xhr.status == 200) {
         var data= JSON.parse(xhr.responseText);
        
        dataINCart.push(data);
     console.log(dataINCart)
         localStorage.setItem("cart",JSON.stringify(dataINCart)); 
        }
}
xhr.send();
console.log(dataINCart.length)
var list=JSON.parse(localStorage.getItem("cart"));
for (let i = 0; i < list.length; i++) {
    console.log(list[i]);}


}
// debugger;
// console.log(dataINCart.length)
// var list=JSON.parse(localStorage.getItem("cart"));
// for (let i = 0; i < list.length; i++) {
//     console.log(list[i]);}


//show name of user login

var itemInCart=JSON.parse(localStorage.getItem("cart"));
if(!(JSON.parse(localStorage.getItem("cart")==null))){
document.getElementById("numberOfProduct").innerHTML=itemInCart.length;
}
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


//nummer of product in cart
var itemInCart=JSON.parse(localStorage.getItem("cart"));
document.getElementById("numberOfProduct").innerHTML=itemInCart.length;
    
//logout user
var logoutUser=document.getElementById("logOut");
 logoutUser.addEventListener("click",function(){
   
    document.cookie = "userEmail=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";  
    localStorage.removeItem("cart"); 
    let loginPage="./index.html";
    self.location.href = loginPage;
    })
// cart();
// localStorage.setItem("cart", JSON.stringify(dataINCart));
// console.log(dataINCart.length)
// // var datajson = JSON.parse(dataINCart[0]);
// var list=localStorage.getItem("cart");
// for (let i = 0; i < list.length; i++) {
//     console.log(dataINCart[i]);
    
// }

// console.log(localStorage.getItem());

//swap value of local storge





