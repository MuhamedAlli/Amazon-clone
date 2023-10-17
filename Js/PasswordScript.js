// var EmailOrPhone="";//golable variable to store value of EmailOrPhone and sent to user table in firebase
passwordFlag=1,passwordComplex="",passwordCorrect=1;;
var checkPassword=document.getElementById("checkPassword");
var btnAmazom=document.getElementById("amazon");
console.log(checkPassword);
var showMessage=document.getElementsByClassName("MessageReuired");
btnAmazom.addEventListener("click",function(e){
   
    if(checkPassword.value==""){
        showMessage[0].innerHTML ="Enter Your Password";
        showMessage[0].style.color="red";
        showMessage[0].style.display="block";
        e.preventDefault();
    }
    if(checkPassword.value!=""){
        validatePassword(); 
        checkPasswordFoundOrNot();
        // console.log("password flag="+passwordFlag);

        if(passwordFlag==1 ||passwordCorrect==1){
            e.preventDefault();
            
     }
    }
});

// checkPassword.addEventListener("blur",validatePassword);

function validatePassword(){
// debugger;
var regexPassword=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/;
    var password=checkPassword.value;
    if(regexPassword.test(password)==false){
        showMessage[0].innerHTML="invalid Password";
        showMessage[0].style.display="block";
        showMessage[0].style.color="red";
        passwordFlag=1;
    }
    else{
    passwordFlag=0;
    showMessage[0].style.display="none";
    showMessage[0].style.color="green";
    passwordComplex=password;
     checkPasswordFoundOrNot();


    }
  
}
let params = (new URL(document.location)).searchParams;
        var EmailUrl = params.get("email");
        console.log( "Email : "+EmailUrl);



        // checkPasswordFoundOrNot();

let userId;
function checkPasswordFoundOrNot() {
    // debugger;
    var data = [{}];
    xhr = new XMLHttpRequest();
    xhr.open("get", "https://clone-ba346-default-rtdb.firebaseio.com/users.json", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            
            var object = JSON.parse(xhr.responseText);
            //    console.log(object);
            for (let key in object) {
                if (object.hasOwnProperty(key)) {
                    data.push( {id:object[key].id,userpassword:object[key].UserPassword,userEmail:object[key].UserEmailOrPhone});

                }
            }
            
            // for(let key in data)
            for (let i = 0; i < data.length; i++) {
                 console.log("test" + data);
                if (passwordComplex == data[i].userpassword&&EmailUrl==data[i].userEmail)
                {
                    userId=data[i].id;
                    console.log(userId);
                    passwordCorrect=0;
                 //creatw Cooke for user this  user
                 
                        CreateCookiefunc();
                     break;
                }
               }
            if(passwordCorrect==1){
                showMessage[0].innerHTML="invalid Email Or Password";
                showMessage[0].style.display="block";
                showMessage[0].style.color="red";
                    

            }
    }
    }
    xhr.send();
    } 
    
    
    function CreateCookiefunc(){
      
       var myDate=new Date();
       var days=myDate.getDate()+10;
       myDate.setDate(days);
    //    document.cookie=`"userEmail${userId}="`+EmailUrl+";expires="+myDate.toUTCString();
       document.cookie="userEmail="+EmailUrl+";expires="+myDate.toUTCString();
    //    localStorage.setItem("userEmail", EmailUrl);
    
     }
     console.log(document.cookie);

     