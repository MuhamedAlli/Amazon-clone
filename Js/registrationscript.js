var nameFlag=1,phoneOrEmailFlag=1,passwordFlag=1 ,emailexist=1;
//prevent event from sumbit if text value is null
var formRegistration=document.forms[0].elements;
var sumbitbutton=document.getElementById("sumbitButton");
var messageRequired=document.getElementsByClassName("MessageReuired");
// console.log(messageRequired[0].textContent);

//prevent event from sumbit if text value is nul
sumbitbutton.addEventListener("click",function(e){
    // e.preventDefault();

    for (let i = 0; i < messageRequired.length; i++) {
        if (formRegistration[i].value == "") {

            messageRequired[i].style.visibility = "visible";
            var passwordmessage = document.getElementById("passwordMessage");
            if (formRegistration[2].value == "") {
                messageRequired[2].innerHTML = "Minimum 6 characters required.";
                passwordmessage.style.visibility = "hidden";
            }
        }

    }

    //check name
    // console.log(formRegistration[0]!="")
    if (formRegistration[0].value != "") {

        chechName();
        if (nameFlag == 1) {
            e.preventDefault();
        }
    }
    if (formRegistration[1].value != "") {
        // debugger;

        chechPhoneOrEmail();
        if (phoneOrEmailFlag == 1 || emailexist == 1) {
            e.preventDefault();
        }
    }
    if (formRegistration[2].value != "") {
        validatePassword();
        if (passwordFlag == 1) {
            e.preventDefault();
        }
    }
    if (formRegistration[3].value != "") {

        validatePassword();
        if (passwordFlag == 1) {
            e.preventDefault();
        }
    }


if(nameFlag==0&&phoneOrEmailFlag==0&&passwordFlag==0&&emailexist==0){
    createUser();
}
else{
    e.preventDefault();
    // location.reload();
}

});


//event to remove message waring 
 var userName="";//golable variable to store value of username and sent to user table in firebase


formRegistration[0].addEventListener('blur',chechName);

    function chechName(){
        
    var regexFullName =/^[a-zA-Z]{3,}\s[a-zA-Z]{3,}/gm;
    var fullName=formRegistration[0].value;
    // alert(` check ${regexFullName.test(fullName)==true}`)
    if(regexFullName.test(fullName)==false){
        // console.log(messageRequired[0]);
        messageRequired[0].innerHTML="Name is not vaild";
        messageRequired[0].style.visibility="visible";
        nameFlag=1;
    }
    else {
        messageRequired[0].style.visibility="hidden";
        userName=fullName;
        console.log(userName);
        nameFlag=0;
    }
}


//check phone or Email

var EmailOrPhone="";//golable variable to store value of EmailOrPhone and sent to user table in firebase
formRegistration[1].addEventListener('blur',chechPhoneOrEmail);
function chechPhoneOrEmail(){
var regexEmail=/^[\w]+@[\w-]+\.(com|net|edu|org)$/i;
var regexPhone=/^(00201|\+201|01)[0-2,5]{1}[0-9]{8}$/gm;
//var regexPhonewithout002=/^01[0-2]\d{8}$/gm;

    var phoneOrEmail=formRegistration[1].value;
    if(phoneOrEmail.startsWith("0")==true){
        if(regexPhone.test(phoneOrEmail) == false)
        {
            // console.log(messageRequired[1]);
            messageRequired[1].innerHTML ="Phone number Not Vaild";
            messageRequired[1].style.visibility="visible";
            phoneOrEmailFlag=1;
        }
        else{
            messageRequired[1].style.visibility="hidden";

            EmailOrPhone=phoneOrEmail;
            phoneOrEmailFlag=0;
            checkUserFoundOrNot();           
        }
    }
    else{
        if(regexEmail.test(phoneOrEmail)==false){
            messageRequired[1].innerHTML="Email Not Vaild";
            messageRequired[1].style.visibility="visible";
            phoneOrEmailFlag=1;
        }
        else{
            messageRequired[1].style.visibility="hidden";

            EmailOrPhone=phoneOrEmail;
            phoneOrEmailFlag=0;
            checkUserFoundOrNot();           

        }
    
    }
}

//check password validation
var passwordComplex="";//golable variable to store value of passwordComplex and sent to user table in firebase
var confirmPaswordComplex=""; //golable variable to store value of passwordComplex and sent to user table in firebase

formRegistration[3].addEventListener("blur",function(){
validatePassword();
// checkUserFoundOrNot();
});

function validatePassword(){


var regexPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;


    var password=formRegistration[2].value;
    var confirmPassword=formRegistration[3].value;
    console.log(regexPassword.test(password));
    console.log(regexPassword.test(confirmPassword));
    if(!regexPassword.test(password)||!regexPassword.test(confirmPassword)){
        messageRequired[2].innerHTML="password At least 6 digit";
        messageRequired[2].style.visibility="visible";
        formRegistration[2].style.color="red";
        formRegistration[3].style.color="red";
        passwordFlag=1;
    }
    else{
    if(password==confirmPassword){
        messageRequired[2].style.visibility="hidden";
        formRegistration[2].style.color="green";
        formRegistration[3].style.color="green";
        passwordComplex=password;
        confirmPaswordComplex=confirmPassword;
        passwordFlag=0;
    }
    else{
        messageRequired[2].style.visibility="visible";
        formRegistration[2].style.color="red";
        formRegistration[3].style.color="red";
        passwordFlag=1;

    }}
}


//__________________________________________________________________________________________

//firebase 
//check user found or not

var numberOfUser=0
function checkUserFoundOrNot() {
    var data = []; // list to store all Email or phone in table Users
    xhr = new XMLHttpRequest();
    xhr.open("get", "https://clone-ba346-default-rtdb.firebaseio.com/users.json", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // debugger;
            var object = JSON.parse(xhr.responseText);
            //    console.log(object);
            for (let key in object) {
                if (object.hasOwnProperty(key)) {
                    data.push(object[key].UserEmailOrPhone);

                }
            }
            numberOfUser=data.length;
            for (let i = 0; i < data.length; i++) {
                console.log("test" + data[i]);
                if (EmailOrPhone == data[i])
                {
                    messageRequired[1].innerHTML = "email is exist";
                     messageRequired[1].style.visibility="visible";
                     phoneOrEmailFlag=1;
                     emailexist=1;
                     break;


                }
                else{
                    messageRequired[1].style.visibility="hidden";
                    phoneOrEmailFlag=0;
                    emailexist=0;
                }
                // if(emailexist==0){
                //     userTable();
                // }


            }

    }
    }
    xhr.send();
    }


function createUser(){
   
    ajaxrequex();
}
//function  for create user on firebase
function ajaxrequex(){      
    // debugger;
   xhr = new XMLHttpRequest();
   xhr.open("post","https://clone-ba346-default-rtdb.firebaseio.com/users.json",true);
   
   xhr.onreadystatechange=function(){
       if (xhr.readyState == 4 && xhr.status == 200) {
        console.log("mooooooooooooooooooooooo "+xhr.responseText);
        window.location.href = "./Login.html";              
       }
   }
  var data={id:numberOfUser,UserName:userName,UserEmailOrPhone:EmailOrPhone,UserPassword:passwordComplex,ConfirmPassword:confirmPaswordComplex}
   xhr.send(JSON.stringify(data));
}

   

   


