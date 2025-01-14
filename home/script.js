document.addEventListener('DOMContentLoaded', () => {
    // Seleção de Elementos do DOM
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const loginModal = document.getElementById('loginModal');
    const cadastroModal = document.getElementById('cadastroModal');
    const resetPasswordModal = document.getElementById('resetPasswordModal');
    const closeButtons = document.querySelectorAll('.close-modal');
    const botaoLogin = document.querySelector('.btn');
    const forms = document.querySelectorAll('form');
      const errorModal = document.getElementById('errorModal');
    const successModal = document.getElementById('successModal');
    const errorModalMessage = document.getElementById('errorModalMessage');
    const successModalMessage = document.getElementById('successModalMessage');


    // Funções auxiliares
  function showModal(modal) {
    modal.style.display = 'block';
        setTimeout(() => {
        modal.classList.add('show');
        const firstInput = modal.querySelector('input');
        if (firstInput) {
        firstInput.focus();
        }
        }, 10);
  }


   function hideModal(modal) {
     modal.classList.remove('show');
       setTimeout(() => {
        modal.style.display = 'none';
        }, 300);
  }

    function validateEmail(email) {
       const re = /\S+@\S+\.\S+/;
       return re.test(email);
    }

  function showFeedbackModal(modal, message, isError) {
    if (isError) {
         errorModalMessage.textContent = message;
        showModal(errorModal);
     } else{
          successModalMessage.textContent = message;
           showModal(successModal);
        }

    }

    function handleFormSubmit(form) {
    form.addEventListener('submit', function(event) {
    event.preventDefault();
    const submitButton = form.querySelector('button[type="submit"]');
        const emailInput = form.querySelector('input[type="email"]');
        const passwordInput = form.querySelector('input[type="password"]');
          const passwordConfirmInput = form.querySelector('input[type="password"][name="password2"]');
         let isError = false;

        if (emailInput && !validateEmail(emailInput.value)) {
           showFeedbackModal(errorModal, 'Email inválido.', true);
               isError = true;
        }

          if (passwordInput && passwordInput.value.length < 6) {
           showFeedbackModal(errorModal,'A senha deve ter pelo menos 6 caracteres.', true)
                isError = true;
        }

         if (passwordConfirmInput && passwordConfirmInput.value !== passwordInput.value) {
            showFeedbackModal(errorModal,'As senhas não coincidem.', true)
                isError = true;
           }

        if(!isError){
         submitButton.disabled = true;
         submitButton.textContent = 'Enviando...';

         setTimeout(() => { //Simula tempo de envio
             submitButton.disabled = false;
             submitButton.textContent =  (form.id == "loginForm") ? 'Entrar' : 'Cadastrar';
            const isResetForm = (form.id == 'resetPasswordForm')
            showFeedbackModal(successModal, isResetForm ? "Email de recuperação enviado." : 'Enviado com sucesso!', false)
           hideModal(form.closest('.modal'));
           form.reset();
           }, 1500);
           }
        });
     }

    // Modals
        if(loginLink) {
         loginLink.addEventListener('click', function(e) {
            e.preventDefault();
             showModal(loginModal);
        });
     }
    if(registerLink){
        registerLink.addEventListener('click', function(e) {
        e.preventDefault();
           showModal(cadastroModal);
       });
    }

    const forgotPasswordLink = document.querySelector('a[href="/esqueci-senha"]');
    if (forgotPasswordLink) {
        forgotPasswordLink.addEventListener('click', function(event) {
        event.preventDefault();
           showModal(resetPasswordModal);
       });
    }

    closeButtons.forEach(function(button) {
        button.addEventListener('click', function() {
        hideModal(button.closest('.modal'));
    });
    });


 window.addEventListener('click', function(event) {
    if (event.target == loginModal) {
       hideModal(loginModal);
    }
        if (event.target == cadastroModal) {
       hideModal(cadastroModal);
    }
    if (event.target == resetPasswordModal) {
       hideModal(resetPasswordModal);
      }
      if (event.target == errorModal) {
       hideModal(errorModal);
    }
    if (event.target == successModal) {
        hideModal(successModal);
    }
  });

    if (botaoLogin) {
        botaoLogin.addEventListener('click', function(event) {
          event.preventDefault();
           showModal(loginModal);
      });
    }

     forms.forEach(form => handleFormSubmit(form));
});