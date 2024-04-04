let email_element = document.getElementById("email");
let password_element = document.getElementById("password");
let email_warning_div = document.getElementById("email_warning_div");
let password_warning_div = document.getElementById("password_warning_div");
let success_warning_div = document.getElementById("success_warning_div");

email_element.addEventListener("input",onChangeEmail);
password_element.addEventListener("input",onChangePassword);

let myForm = document.getElementById("myform");
myForm.addEventListener("submit",onClick);

function onChangeEmail() {
    const email = email_element.value.trim();
    console.log('email:', email)
    if (email.length < 3 || !email.includes('@') || !email.includes('.')) {
        email_warning_div.textContent = 'Make sure email is more than 3 characters and has @ and a .';
        email_warning_div.style.color = "red";
    } else {
        email_warning_div.textContent = '';
    }
    const password = password_element.value.trim();
    if(email.length > 3 && email.includes('@') && email.includes('.') && password.length >= 8){
        success_warning_div.textContent = "All good to go!";
        success_warning_div.style.color = "#219F35";
    }
  }

  function onChangePassword() {
     const password = password_element.value.trim();
    if(password.length < 8){
        password_warning_div.textContent = "Make sure password is more than 8 characters.";
        password_warning_div.style.color = "red";
    }
    else{
        password_warning_div.textContent = "";
    }

    const email = email_element.value.trim();
    if(email.length > 3 && email.includes('@') && email.includes('.') && password.length >= 8){
        success_warning_div.textContent = "All good to go!";
        success_warning_div.style.color = "#219F35";
    }
  }

  function onClick(e){
    e.preventDefault();
    let email = email_element.value ;
    let password= password_element.value ;
    if(email.length < 3 || !email.includes('@') || !email.includes('.') || password.length < 8){
        return;
    }  

    let body = document.querySelector("body")

    body.removeChild(myForm);
    let myDiv = document.createElement("div");
    myDiv.setAttribute("class","success_window")
    let p = document.createElement("p");
    p.textContent = "Are you ready for Signup?"
    let button = document.createElement("button");
    button.textContent = "Okay";

    myDiv.append(p,button);
    body.append(myDiv);
   
    button.addEventListener("click",()=>{
        body.removeChild(myDiv);
        alert("Successful Signup!");
        email_element.value = "";
        password_element.value = "";
        success_warning_div.textContent = "";
        body.appendChild(myForm);
  })
  }

