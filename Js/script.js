
// var nameFlag=0,phoneFlag=0,cityFlage=0,buildingFlage=0,AriaFlage=0,Flag=0;

var PhoneId=document.getElementById("phoneNumber");
var orederId=document.getElementById("orderId");
var text=document.getElementById("yourName");
var address=document.getElementById("address");
var city=document.getElementById("city");

// //prevent event from sumbit if text value is null
// var formOrder=document.forms[0].elements;
// var sumbitbutton=document.getElementById("orderId");
// var messageRequired=document.getElementsByClassName("MessageReuired");
// console.log(messageRequired[0].textContent);



// console.log(text);
//check if user entered a name
var message=document.getElementsByClassName('MessageReuired');
console.log(message);
orederId.addEventListener("click",function(){
    if(text.value==""){
        message[0].style.display="block";
        
        }
})

//check if user entered a phone number

var message=document.getElementsByClassName('MessageReuired');
console.log(message);
orederId.addEventListener("click",function(){
    if(PhoneId.value==""){
        message[1].style.display="block";
        
        }

})

//check if user entered an address

var message=document.getElementsByClassName('MessageReuired');
console.log(message);
orederId.addEventListener("click",function(){
    if(address.value==""){
        message[2].style.display="block";
        
        }

})

//check if user entered an address

var message=document.getElementsByClassName('MessageReuired');
console.log(message);
orederId.addEventListener("click",function(){
    if(address.value==""){
        message[3].style.display="block";
        
        }

})

//check if user entered a city name

var message=document.getElementsByClassName('MessageReuired');
console.log(message);
orederId.addEventListener("click",function(){
    if(city.value==""){
        message[4].style.display="block";
        
        }

})


var btnSubmit = document.getElementById("orderId").onclick=function(event){
if(formOrder[0]==""&& city.value==""&&address.value==""&&PhoneId.value==""){
    event.preventDefault();
    }else{

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




// //check name
// // console.log(formRegistration[0]!="")
// if(formOrder[0].value!=""){
//     // debugger;
//     chechName();
//     if(nameFlag==1){
//     e.preventDefault();
// }
// }
// if(formOrder[1].value!=""){
//     chechPhone();
//     if(phoneFlag==1){
//     e.preventDefault();
// }
// }

// if(formOrder[2].value!=""){
//     // chechPhone();
//     if(cityFlage==1){
//     e.preventDefault();
// }
// }

// if(formOrder[3].value!=""){
//     // chechPhone();
//     if(buildingFlage==1){
//     e.preventDefault();
// }
// }
// if(formOrder[4].value!=""){
//     // chechPhone();
//     if(AriaFlage==1){
//     e.preventDefault();
// }
// }










// formOrder[0].addEventListener('blur',function(){
//     // debugger;
//     chechName();
// });

//     function chechName(){
//         // debugger;
//     var regexFullName =/^[a-zA-Z]{3,}\s[a-zA-Z]{3,}/gm;
//     var fullName=formOrder[0].value;
//     // alert(` check ${regexFullName.test(fullName)==true}`)
//     if(regexFullName.test(fullName)==false){
//         // console.log(messageRequired[0]);
//         messageRequired[0].innerHTML="Name is not vaild";
//         messageRequired[0].style.visibility="visible";
//         nameFlag=1;
//     }
//     else {
//         messageRequired[0].style.visibility="hidden";
//         userName=fullName;
//         console.log(userName);
//         nameFlag=0;
//     }
// }


// //check phone or Email

// formOrder[1].addEventListener('blur',function(){
//     chechPhone();
// });
// function chechPhone(){
// var regexPhone=/^(00201|\+201|01)[0-2,5]{1}[0-9]{8}$/gm;

//     var phone=formOrder[1].value;
//     // debugger;
//     if(phone.startsWith("0")==true){
//         if(regexPhone.test(phone) == false)
//         {
//             console.log(messageRequired[1]);
//             messageRequired[1].innerHTML ="Please provide a valid phone number";
//             messageRequired[1].style.visibility="visible";
//             phoneFlag=1;
//         }
//         else{
//             messageRequired[1].style.visibility="hidden";

//             // EmailOrPhone=phone;
//             phoneFlag=0;
            
//         }
//     }
  
// }


/////////////////////






///////////////////////////////////////////////////////////////////////////////////////////





