//Seu JavaScript de validação aqui

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector(".formcontato__form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Impede o envio do formulário padrão

        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const assunto = document.getElementById("assunto").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        if (!nome || !email || !assunto || !mensagem) {
            alert("Por favor, preencha todos os campos.");
            return;
        }

        if (!validateEmail(email)) {
            alert("Por favor, insira um endereço de email válido.");
            return;
        }

        // Se os dados forem válidos, você pode enviar o formulário, ou processar os dados aqui
        console.log("Formulário enviado com sucesso!");
        console.log("Nome:", nome);
        console.log("Email:", email);
        console.log("Assunto:", assunto);
        console.log("Mensagem:", mensagem);

        // Se você quiser, pode resetar o formulário
        form.reset();
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    document.addEventListener('DOMContentLoaded', function() {
        var input = document.querySelector('.formcontato__input');
        
        input.addEventListener('input', function() {
            if (input.value) {
                input.classList.add('has-text');
            } else {
                input.classList.remove('has-text');
            }
        });
    });
});
