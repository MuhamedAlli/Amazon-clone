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


// when scrol fixed images
window.addEventListener('scroll',function(){
    
    var _ScrollTop=window.scrollY;
    // console.log(typeof(_ScrollTop))
    if(_ScrollTop>150){
        
       document.getElementsByClassName("productImage")[0].style.position="relative";
       document.getElementsByClassName("changedImges")[0].style.position="absolute";
     
    }
    else{
    
        document.getElementsByClassName("changedImges")[0].style.position="fixed";
        document.getElementsByClassName("productImage")[0].style.position="fixed";
    }
})
//free return link
var hideFreeReturn=document.getElementById("hideFreeReturn");
var hideFreeReturn2=document.getElementById("hideFreeReturn2");
var btnFreeReturn=document.getElementById("freeReturn");
var btnFreeReturn2=document.getElementById("freeReturn2");

var flag=0,flag2=0;
btnFreeReturn.addEventListener("click",function(){
    if(flag==0){
        hideFreeReturn.style.display="block";
        flag=1;}
        else{
        hideFreeReturn.style.display="none";
        flag=0;
        }
     }  
);
//button freereturn change event 

btnFreeReturn2.addEventListener("click",function (){
   debugger;
   if(flag2==0){
   hideFreeReturn2.style.display="block";
   flag2=1;}
   else{
   hideFreeReturn2.style.display="none";
   flag2=0;
   }
});

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



//logout user

var logoutUser=document.getElementById("logOut");
 logoutUser.addEventListener("click",function(){
   
 document.cookie = "userEmail=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";  
 localStorage.removeItem("cart"); 
 let loginPage="./index.html";
 self.location.href = loginPage;
 })