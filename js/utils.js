// Definindo referencias para elementos da página
var authForm = document.getElementById('authForm')
var authFormTitle = document.getElementById('authFormTitle')

var register = document.getElementById('register')
var access = document.getElementById('access')

// Alterar o formulario de autenticação apra o cadastro de novas cotnas
function toggleToRegister() {
    authForm.submitAuthForm.innerHTML = 'Cadastrar conta'
    authFormTitle.innerHTML = 'Insira seus dados para se cadastrar'

    hideItem(register)
    showItem(access)
  }

// Alterar o formulario de autenticação para acesso de contas já existentes
function toggleToAccess() {
  authForm.submitAuthForm.innerHTML = 'Acessar'
  authFormTitle.innerHTML = 'Acesse a sua conta para continuar'

  hideItem(access)
  showItem(register)
}

// Simplifica a exibição de elementos da página
function showItem(element) {
  element.style.display = 'block'
}

// Simplifica a ocultação de elementos da página
function hideItem(element) {
    element.style.display = 'none'
}