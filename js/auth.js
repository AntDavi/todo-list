// Função de submiçã oded formulario
authForm.onsubmit = function (event) {
  showItem(loading)
  event.preventDefault()
  if (authForm.submitAuthForm.innerHTML == 'Acessar') {
    firebase.auth().signInWithEmailAndPassword(authForm.email.value, authForm.password.value).catch(function (error) {
      console.log('Falha no acesso')
      console.log(error)
      hideItem(loading)
    })
  } else {
    firebase.auth().createUserWithEmailAndPassword(authForm.email.value, authForm.password.value).catch(function (error) {
      console.log('Falha no cadastro')
      console.log(error)
      hideItem(loading)
    })
  }
}

// FUnção de entrada 
firebase.auth().onAuthStateChanged(function(user) {
  hideItem(loading)
  if (user) {
    showUserContent(user)
  } else {
    showAuth()
  }
})

// Função de logout
function signOut() {
  firebase.auth().signOut().catch(function (error) {
    console.log('Falha ao sair da conta')
    console.log(error)
  })
}

// Função que permite o usuario verificar email
function sendEmailVerification() {
  showItem(loading)

  var user = firebase.auth().currentUser
  user.sendEmailVerification().then(function() {
    alert('Email de verificação foi enviado para ' + user.email + "! Acesse sua caixa de entrada")
  }).catch(function () {
    alert("Houve um erro ao enviar o email de verificação")
    console.log(error)
  }).finally(function() {
    hideItem(loading)
  })
}
