const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");

form.addEventListener("submit", (event) => {
  console.log("acionando botao")
  event.preventDefault()

  checkInputEmail();
  checkInputpassword();
  checkpasswordConfirmation();
  
})

function checkInputEmail() {
  const usernameValue = username.Value;

  //caso o usuário não digite nada, aparecer mensagem de erro
  if(username.Value === ""){
    errorinput(username, "Preencha um username!")
  }else{
    const formItem = username.parentElement;
    formItem.classList = "form-cont"
  }
}

function checkInputEmail() {
  const emailValue = email.Value;

  if(emailValue ==="") {
    errorinput(email, "O email é obrigatório.")
  }else{
    const formItem = email.parentElement;
    formItem.className = "form=cont"
  }
}

function checkInputPassword() {
  const passwordValue = password.value;
  if(passwordValue ===""){
    errorinput(password, "A senha é obrigatoria")
  }else if(passwordValue.legth <8){
    errorinput(password, "A senha precisa ter no mínino 8 caracteres.")
  }else{
    const formItem = password.parentElement;
    formItem.className = "form-cont"
  }
}

function checkInputPasswordConfirmation(){
  const passwordValue = password.value;
  const confirmationPasswordvalue = passwordConfirmation.value;

  if(confirmationPasswordValue ==="" ) {
    errorinput(passwordConfirmation, "A cofirmação de senha é obrigatória.")
  }else if(confirmationPasswordValue !== passwordValue) {
    errorinput(passwordConfirmation, "As senhas não são iguais.")
  }else{
    const formItem = passwordConfirmation.parentElement;
    formItem.className = "form-cont"
  }
}



function errorinput(input, message) {
const formItem = input.parentElement;
const textMessage = formItem.querySelector("a")

textMessage.innerText = message;

formItem.className = "form-cont error"
 }



/*localStorage.setItem('nome', 'Maria');
let user = {
    name: 'Maria',
    age: 25,
    email: 'maria@example.com'
  };
  
  localStorage.setItem('user', JSON.stringify(user));*/