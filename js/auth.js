// Tradução do email de autenticação
firebase.auth().languageCode = 'pt-BR'

// Função de submição oded formulario
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
  user.sendEmailVerification(actionCodeSttings).then(function() {
    alert('Email de verificação foi enviado para ' + user.email + "! Acesse sua caixa de entrada")
  }).catch(function () {
    alert("Houve um erro ao enviar o email de verificação")
    console.log(error)
  }).finally(function() {
    hideItem(loading)
  })
}


// Função que permite o usuário redefinir a senha dele
function sendPasswordResetEmail() {
  var email = prompt('Redefinir senha! Informe o seu endereço de e-mail.', authForm.email.value)
  if (email) {
    showItem(loading)
    firebase.auth().sendPasswordResetEmail(email, actionCodeSttings).then(function () {
      alert('E-mail de redefinição de senha foi enviado para ' + email + '.')
    }).catch(function (error) {
      alert('Houve um erro ao enviar e-mail de redefinição de senha!')
      console.log(error)
    }).finally(function () {
      hideItem(loading)
    })
  } else {
    alert('É preciso preencher o campo de e-mail para redefinir a senha!')
  }
}

// Login com o Google
function singInWithGoogle() {
  showItem(loading)
  firebase.auth().singInWithPopup(new firebase.auth.GoogleAuthProvider()).catch(function (error) {
    alert('Houve um erro ao fazer login com sua conta do Google.')
    console.log(error)
    hideItem(loading)
  })
}

function signInWithFacebook() {
  showItem(loading)
  firebase.auth().signInWithPopup(new firebase.auth.FacebookAuthProvider()).catch(function (error) {
    alert('Houve um erro ao autenticar usando o Facebook')
    console.log(error)
    hideItem(loading)
  })
}