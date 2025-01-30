document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Enviar o formulário para o EmailJS
    emailjs.sendForm("service_0p75yc8", "template_9krhmn7", this)
        .then(function(response) {
            alert("Mensagem enviada com sucesso!");
            document.getElementById("contact-form").reset(); // Limpa os campos após o envio
        }, function(error) {
            console.error("Erro ao enviar:", error);  // Exibir o erro detalhado no console
            alert("Erro ao enviar: " + JSON.stringify(error, null, 2));
            document.getElementById("contact-form").reset(); // Limpa os campos em caso de erro
        });
});

// Limpar os campos quando o botão "Limpar" for clicado
document.getElementById("clear-btn").addEventListener("click", function() {
    document.getElementById("contact-form").reset();
});

emailjs.init("9fNOk1hXz04fqtCoi");
