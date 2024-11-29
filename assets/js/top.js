const scrollToTopButton = document.querySelector('.scroll-to-top');

    // Função para mostrar ou esconder a seta
    function toggleScrollButton() {
        if (window.scrollY > 100) { // 100px de rolagem
            scrollToTopButton.style.display = 'block';
        } else {
            scrollToTopButton.style.display = 'none';
        }
    }

    // Função para rolar até o topo
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // Rolagem suave
        });
    }

    // Evento de rolagem para controlar a visibilidade da seta
    window.addEventListener('scroll', toggleScrollButton);

    // Evento de clique na seta para voltar ao topo
    scrollToTopButton.addEventListener('click', scrollToTop);
