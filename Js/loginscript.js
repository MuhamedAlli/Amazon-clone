document.getElementById("needHelp").onmouseover = function(){
    document.getElementById("needHelp").setAttribute("width","200px");
    document.getElementById("needHelp").style.height= "100px";
    document.getElementById("dropBtnContent").style.display = "block";
    document.getElementById("dropBtnContent").style.height = "100px";
    document.getElementById("dropBtnContent").setAttribute("width","200px");
    document.getElementById("dropBtnContent").setAttribute("height","200px");
}
document.getElementById("needHelp").onmouseout = function(){
    document.getElementById("needHelp").setAttribute("width","200px");
    document.getElementById("needHelp").style.height= "50px";
    document.getElementById("dropBtnContent").style.display = "none";
    document.getElementById("dropBtnContent").style.height = "50px";
    document.getElementById("dropBtnContent").setAttribute("width","200px");
}


// var EmailOrPhone="";//golable variable to store value of EmailOrPhone and sent to user table in firebase
let phoneOrEmailFlag=1,EmailOrPhone="" ,emailCorrect=1;
var checkEmailOrPhone=document.getElementById("checkEmailOrPhone");
var btnAmazom=document.getElementById("amazon");
console.log(checkEmailOrPhone);
var showMessage=document.getElementsByClassName("MessageReuired");
btnAmazom.addEventListener("click",function(e){
    
    if(checkEmailOrPhone.value==""){
        showMessage[0].innerHTML ="Enter Your Name or Phone";
        showMessage[0].style.color="red";
        showMessage[0].style.display="block";
        e.preventDefault();
    }
    if(checkEmailOrPhone.value!=""){
        chechPhoneOrEmail();  
        // console.log(phoneOrEmailFlag);
        checkUserFoundOrNot();
        // console.log(emailCorrect);
        if(phoneOrEmailFlag==1 ||emailCorrect==1){
            e.preventDefault();
     }
     
    }
});

// checkEmailOrPhone.addEventListener('blur',chechPhoneOrEmail);
function chechPhoneOrEmail(){
    
var regexEmail=/^[\w]+@[\w-]+\.(com|net|edu|org)$/i;
var regexPhone=/^(00201|\+201|01)[0-2,5]{1}[0-9]{8}$/gm;
//var regexPhonewithout002=/^01[0-2]\d{8}$/gm;

    var phoneOrEmail=checkEmailOrPhone.value;
    if(phoneOrEmail.startsWith("0")==true){
        if(regexPhone.test(phoneOrEmail) == false)  
        {
            // console.log(messageRequired[1]);
            showMessage[0].innerHTML ="Phone number Not Vaild";
            showMessage[0].style.color="red";
            showMessage[0].style.display="block";
            phoneOrEmailFlag=1;
        }
        else{
            showMessage[0].style.display="none";
            phoneOrEmailFlag=0;
             EmailOrPhone=phoneOrEmail;
            //  checkUserFoundOrNot();           
        }
    }
    else{
        if(regexEmail.test(phoneOrEmail)==false){
            showMessage[0].innerHTML="Email Not Vaild";
            showMessage[0].style.color="red";
            showMessage[0].style.display="block";
            phoneOrEmailFlag=1;
        }
        else{
            showMessage[0].style.display="none";
            phoneOrEmailFlag=0;

            EmailOrPhone=phoneOrEmail;
            // checkUserFoundOrNot();           

        }
    
    }
}

function checkUserFoundOrNot() {
    var arr = [];
    xhr = new XMLHttpRequest();
    xhr.open("get", "https://clone-ba346-default-rtdb.firebaseio.com/users.json", true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
           
            var object = JSON.parse(xhr.responseText);
            //    console.log(object);
            for (let key in object) {
                if (object.hasOwnProperty(key)) {
                    arr.push(object[key].UserEmailOrPhone);

                }
            }
            // console.log(arr[0]);
            for (let i = 0; i < arr.length; i++) {
                // console.log("test" + arr[i]);
                if (EmailOrPhone == arr[i])
                {
                    emailCorrect=0;
                    showMessage[0].style.display="none";
                    //  break;
                }
            }
            console.log(emailCorrect);
            if(emailCorrect==1){
                    showMessage[0].innerHTML="Email Not Exist please Register or Enter Email Vaild";
                    showMessage[0].style.display="block";
                    showMessage[0].style.color="red";
            }
    }
    }
    xhr.send();
    }