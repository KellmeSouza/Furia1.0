// script.js

// Seleção de Elementos do DOM
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const loginModal = document.getElementById('loginModal');
const cadastroModal = document.getElementById('cadastroModal');
const resetPasswordModal = document.getElementById('resetPasswordModal');
const closeButtons = document.querySelectorAll('.close-modal');
const botaoLogin = document.querySelector('.btn'); // Exemplo: Seleciona o botão com a classe 'btn'

// Exibe o modal de Login
if(loginLink) {
    loginLink.addEventListener('click', function(e) {
        e.preventDefault();
        loginModal.style.display = 'block';
    });
}
// Exibe o modal de Cadastro
if(registerLink){
    registerLink.addEventListener('click', function(e) {
        e.preventDefault();
        cadastroModal.style.display = 'block';
    });
}


// Exibe o modal de Esqueci Minha Senha
    const forgotPasswordLink = document.querySelector('a[href="/esqueci-senha"]'); // Seleciona o link "Esqueci minha senha"
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', function(event) {
        event.preventDefault();
        resetPasswordModal.style.display = 'block'; // Mostra o modal de recuperação de senha
       });
    }
 // Fecha qualquer modal
    closeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        loginModal.style.display = 'none';
        cadastroModal.style.display = 'none';
        resetPasswordModal.style.display = 'none';
    });
});

// Evento para fechar o modal ao clicar fora dele
window.addEventListener('click', function(event) {
    if (event.target == loginModal) {
        loginModal.style.display = 'none';
    }
    if (event.target == cadastroModal) {
        cadastroModal.style.display = 'none';
    }
    if (event.target == resetPasswordModal) {
        resetPasswordModal.style.display = 'none';
    }
});
// Manipulador de Eventos (Event Listeners)
// Exemplo: Lida com o click no botão de Login (para exibir um formulário modal)
if (botaoLogin) {
    botaoLogin.addEventListener('click', function(event) {
      event.preventDefault(); // Previne o comportamento padrão do link
      loginModal.style.display = 'block';
    });
}