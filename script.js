const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const usuarioDigitado = document.getElementById('username').value;
    const senhaDigitada = document.getElementById('password').value;

    // Dados de teste acadêmico
    const usuarioCorreto = "vampeta";
    const senhaCorreta = "12345";

    if (usuarioDigitado === usuarioCorreto && senhaDigitada === senhaCorreta) {
        // Alerta bonito de Sucesso
        Swal.fire({
            icon: 'success',
            title: 'Acesso Autorizado!',
            text: 'Seja bem-vindo ao Vampeta Almoxarifados.',
            timer: 2000,
            showConfirmButton: false
        }).then(() => {
            // Após 2 segundos, joga o usuário para a página de Estoque (Página 2)
            window.location.href = "estoque.html"; 
        });
    } else {
        // Alerta bonito de Erro
        Swal.fire({
            icon: 'error',
            title: 'Ops...',
            text: 'Usuário ou senha incorretos!',
            confirmButtonColor: '#ff9500' // O laranja do seu botão
        });
    }
});