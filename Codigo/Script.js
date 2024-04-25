// Simulação de dados de posts
const posts = [
    { id: 1, title: "Funny post 1", imageUrl: "https://via.placeholder.com/150", likes: 10 },
    { id: 2, title: "Funny post 2", imageUrl: "https://via.placeholder.com/150", likes: 20 },
    { id: 3, title: "Funny post 3", imageUrl: "https://via.placeholder.com/150", likes: 15 },
    // Adicione mais posts aqui
];

// Função para exibir os posts na página
function displayPosts() {
    const contentSection = document.getElementById("content");
    contentSection.innerHTML = ''; // Limpa o conteúdo atual

    posts.forEach(post => {
        const postElement = document.createElement("div");
        postElement.classList.add("post");

        const titleElement = document.createElement("h2");
        titleElement.textContent = post.title;

        const imageElement = document.createElement("img");
        imageElement.src = post.imageUrl;
        imageElement.alt = post.title;

        const likesElement = document.createElement("p");
        likesElement.textContent = `Likes: ${post.likes}`;

        postElement.appendChild(titleElement);
        postElement.appendChild(imageElement);
        postElement.appendChild(likesElement);

        contentSection.appendChild(postElement);
    });
}

// Event listener para carregar os posts quando a página carrega
document.addEventListener("DOMContentLoaded", displayPosts);
