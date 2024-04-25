// Event listener para o formulário de upload
document.getElementById("upload-post-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário padrão

    // Obtenha os dados do formulário
    const title = document.getElementById("title").value;
    const imageFile = document.getElementById("image").files[0];

    // Verifique se os campos não estão vazios
    if (title.trim() === '' || !imageFile) {
        alert("Por favor, preencha todos os campos.");
        return;
    }

    // Aqui você pode enviar os dados do formulário para o servidor
    // Por exemplo, usando AJAX para enviar uma solicitação POST ao backend

    // Simulando o envio para o servidor
    setTimeout(function() {
        alert("Post enviado com sucesso!");
        // Redirecionar para a página inicial após o envio bem-sucedido
        window.location.href = "index.html";
    }, 1000); // Simulando um atraso de 1 segundo para fins de demonstração
});
