// 1. Seleciona o formulário de login através da classe que você criou
const loginForm = document.querySelector('.login-form');

// 2. Fica "escutando" quando o usuário clica no botão "Entrar" (submit)
loginForm.addEventListener('submit', function(event) {
    // Evita que a página recarregue e limpe os campos antes da hora
    event.preventDefault();

    // 3. Pega os valores digitados nos inputs usando os IDs que estão no seu HTML
    const usuarioDigitado = document.getElementById('username').value;
    const senhaDigitada = document.getElementById('password').value;

    // 4. TESTE MOCK: Usuário e senha provisórios para teste
    const usuarioCorreto = "vampeta";
    const senhaCorreta = "12345";

    // 5. Validação simples
    if (usuarioDigitado === usuarioCorreto && senhaDigitada === senhaCorreta) {
        alert("Login realizado com sucesso! Seja bem-vindo ao Almoxarifado.");
        
        // Redireciona o usuário para a página interna do sistema
        // (Crie uma página chamada 'painel.html' depois para testar)
        window.location.href = "painel.html"; 
    } else {
        // Alerta caso erre os dados
        alert("Usuário ou senha incorretos! Tente novamente.");
    }
});