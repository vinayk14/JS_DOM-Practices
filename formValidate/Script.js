// let name_Box = document.querySelector("#name1").value
// let email_Box= document.querySelector("#email1").value
// let password_Box = document.querySelector("#password1").value
// let confirm_PasswordBox = document.querySelector("#cpassword").value
let form = document.querySelector("form")
let outputDiv = document.querySelector("div")

form.addEventListener("submit", display)
function display(e){
    e.preventDefault()
    let name_Box = document.querySelector("#name1").value
    let email_Box= document.querySelector("#email1").value
    let password_Box = document.querySelector("#password1").value
    let confirm_PasswordBox = document.querySelector("#cpassword").value
    console.log(name_Box)
    if(name_Box.length <= 3){
     alert("Name is to Short")
     return

    }

    if(!email_Box.includes("@") || !email_Box.includes(".") || email_Box.lastIndexOf("@") < email_Box.indexOf("@")){
     alert("Use Valid Email")
      return
    }

    if(password_Box.length < 8){
     alert("Password is to Short")
      return
    }

    if(password_Box != confirm_PasswordBox){
        alert("Password Mismatch")
         return
    }

    let outputArr = [name_Box, email_Box, password_Box]
    let resultDiv = document.createElement("div")
   // console.log(outputArr, resultDiv)
   for(let t of outputArr){
    let para = document.createElement("p")
    para.innerText = t
    resultDiv.append(para)
   }

   outputDiv.append(resultDiv)
   form.reset()

}