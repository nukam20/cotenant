function validation(){

  var email = document.getElementById('InputEmail').value
  var password = document.getElementById('InputPassword').value
  // var InputFirstName = document.getElementById('InputFirstName').value
  // var InputLastName = document.getElementById('InputLastName').value
 
  if(email == ""){
    document.getElementById("emailValId").innerHTML= "*Please fill in your email address*"
    return false
  }
  if(email.indexOf("@")<= 0){
    document.getElementById("emailValId").innerHTML= "*Please fill in your email address in proper format @*"
    return false
  }
  if((email.charAt(email.length - 4) != ".") && (email.charAt(email.length - 3) != ".")){
    document.getElementById("emailValId").innerHTML= "*Please fill in your email address in proper format @*"
    return false
  }
  if (password==""){
    document.getElementById("passwordValId").innerHTML="*Please put your password*"
    return false
  }
  if (password==""){
    document.getElementById("passwordValId").innerHTML="*Please put your password*"
    return false
  }

  // if ((password.length < 5)|| (password.length>20)){
  //   document.getElementById("passwordValId").innerHTML="*Please fill in  password between 5 and 20*"
  //   return false
  // }
// if(InputFirstName==''){
//   document.getElementById('InputFirstNameValId').innerHTML = "*Please fill in your first Name"
//   return false
// }
// if(InputLastName==''){
//   document.getElementById('InputLastNameValId').innerHTML = "*Please fill in your Last Name"
//   return false
// }
// if ((InputFirstName=="")&& (InputLastName=="")){
//   return validation()
// }else{
//   return next(5)
    
// }
}
