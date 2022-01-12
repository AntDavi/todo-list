// Defindo referências para elementos da página
var authForm = document.getElementById('authForm')
var authFormTitle = document.getElementById('authFormTitle')
var register = document.getElementById('register')
var access = document.getElementById('access')
var loading = document.getElementById('loading')
var auth = document.getElementById('auth')
var userContent = document.getElementById('userContent')
var userEmail = document.getElementById('userEmail')
var sendEmailVerificationDiv = document.getElementById('sendEmailVerificationDiv')
var emailVerified = document.getElementById('emailVerified')
var passwordReset = document.getElementById('passwordReset')
var userName = document.getElementById('userName')
var userImg = document.getElementById('userImg')


// Alterar o formulário de autenticação para o cadastro de novas contas
function toggleToRegister() {
  authForm.submitAuthForm.innerHTML = 'Cadastrar conta'
  authFormTitle.innerHTML = 'Insira seus dados para se cadastrar'
  hideItem(register)
  hideItem(passwordReset)
  showItem(access)
}

// Alterar o formulário de autenticação para o acesso de contas já existentes
function toggleToAccess() {
  authForm.submitAuthForm.innerHTML = 'Acessar'
  authFormTitle.innerHTML = 'Acesse a sua conta para continuar'
  hideItem(access)
  showItem(passwordReset)
  showItem(register)
}

// Simpplifica a exibição de elementos da página
function showItem(element) {
  element.style.display = 'block'
}

// Simpplifica a remoção de elementos da página
function hideItem(element) {
  element.style.display = 'none'
}

// Função para monstrar conteudo ao usuario autenticado
function showUserContent(user) {
  console.log(user)
  if (user.emailVerified) {
    emailVerified.innerHTML = 'E-mail verificado'
    hideItem(sendEmailVerificationDiv)
  } else {
    showItem(sendEmailVerificationDiv)
    emailVerified.innerHTML = "E-mail não verificado"
  }
  userImg.src = user.photoURL ? user.photoURL : 'imgs/unknownUser.png'
  userName.innerHTML = user.displayName

  hideItem(auth)
  showItem(userContent)
}

// Função para monstrar conteudo ao usuario não autenticado
function showAuth() {
  authForm.email.value = ''
  authForm.password.value = ''
  hideItem(userContent)
  showItem(auth)
}

// Atributos extra de configurações de email
var actionCodeSttings = {
  url: 'http://127.0.0.1:5500/'
}