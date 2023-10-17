
window.onload=buildCart;
 function buildCart(){
    var cartId=document.getElementById("carId");

var itemInCart=JSON.parse(localStorage.getItem("cart"));
document.getElementById("numberOfProduct").innerHTML=itemInCart.length;
let sumofProduct=0;
 
var subtotal=document.getElementById("sumofProduct");
for (let i = 0; i < itemInCart.length; i++) {
  
  sumofProduct +=itemInCart[i].price;
subtotal.innerHTML= sumofProduct;


    cartId.innerHTML+=
    `<tr>
    <td>
      <img src="${itemInCart[i].image}" width="200px" height="600px" alt="Product Image">

    </td>
    <td> <b>${itemInCart[i].description.slice(0,30)} </b><br><br>
      <b>EGP${itemInCart[i].price} </b><br>
      <p>In Stock <br>
        Eligible for FREE delivery <br>
        Colour: Onyx Gray <br></p><br>

      <input type="number" id="quantity" name="quantity" min="1" max="10" value="1"  style="background-color:blue;">
      <button =class="delete" style="background-color:red; color:white">Delete</button>
      <button>Save for later</button>
      <button>Share</button>

    </td>

    <td>${itemInCart[i].price}</td>
    <td>
      <button class="remove-item">Remove Item</button>
    </td>
  </tr>
    `
}


 }
 ///delete product from cart
 const array = [2, 5, 9];

 console.log(array);
 
 const index = array.indexOf(5);
 if (index > -1) { // only splice array when item is found
   array.splice(index, 1); // 2nd parameter means remove one item only
 }
 
 // array = [2, 9]
 console.log(array)


var deleteProduct=document.getElementById("delete");
deleteProduct.addEventListener('click', function(){
  debugger;
  for (let i = 0; i < itemInCart.length; i++) {
    console.log(itemInCart[i]);
  }


});

 debugger


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



//logout
 var logoutUser=document.getElementById("logOut");
 logoutUser.addEventListener("click",function(){
   
 document.cookie = "userEmail=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";  
 localStorage.removeItem("cart"); 
 let loginPage="./index.html";
 self.location.href = loginPage;
 })




// function ajaxrequex(){
// xhr = new XMLHttpRequest();
// xhr.open("get","https://fakestoreapi.com/products",true);
// // xhr.open("get","https://dummyjson.com/products",true);

// xhr.onreadystatechange=function(){

//     if (xhr.readyState == 4 && xhr.status == 200) {
//          var data= JSON.parse(xhr.responseText);
//        console.log(data);
//        for (let i = 0; i < data.length; i++) {
        
//         element.innerHTML+= 
//         `<div class="clothesDetails">
//         <a  href="./DetailsFashion.html?id=${data[i].id}">
//         <div class="imageDetails">
//         <img src="${data[i].image}" class="image"  alt="" srcset="">
//          </div>
//         </a>
      
//         <div class="descriptionImage">
//             <span style="font-weight: bold;">${data[i].title.slice(0,20)}</span>
//             <span> ${data[i].description.slice(0,30)}</span>
//             <span class=" topdeal"> <b class="deal">Deal</b> top deal</span>
//             <span>EGP <b>${data[i].price}</b> </span>
//             <span>& FREE Shipping. <a href="###">Details</a></span>
//         </div>
    
//     </div>   
//         `
//     }
         
//         }

      
// }
// xhr.send();
// }
debugger;
var cookies=document.cookie;
var username=cookies.split("=")[1];
console.log(username);
document.getElementById("usernameLogin").innerHTML=username;
//  console.log(cookies);
cookies.replace(/; /g,'&');
var userlogin=new URLSearchParams(cookies);
 console.log(userlogin)