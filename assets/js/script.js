// Parte do código já existente para o carrossel

const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const carouselWrapper = document.querySelector('.carousel-wrapper');
let currentIndex = 0;

// Função para atualizar a posição do carrossel
function updateCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    const itemWidth = items[0].offsetWidth; // Largura do item (sem margem)
    const offset = (carouselWrapper.offsetWidth - itemWidth) / 2; // Centraliza o carrossel

    // Atualiza a transformação do contêiner para mover o carrossel
    carouselWrapper.style.transform = `translateX(${offset - currentIndex * itemWidth}px)`;
}

// Clique no botão "Anterior"
prevButton.addEventListener('click', () => {
    const items = document.querySelectorAll('.carousel-item');
    if (currentIndex > 0) {
        currentIndex--; // Move para o item anterior
    } else {
        currentIndex = items.length - 1; // Volta para o último item
    }
    updateCarousel();
});

// Clique no botão "Próximo"
nextButton.addEventListener('click', () => {
    const items = document.querySelectorAll('.carousel-item');
    if (currentIndex < items.length - 1) {
        currentIndex++; // Move para o próximo item
    } else {
        currentIndex = 0; // Volta para o primeiro item
    }
    updateCarousel();
});

// Ajusta os itens do carrossel para telas menores
function adjustForSmallScreens() {
    const items = document.querySelectorAll('.carousel-item');
    const isSmallScreen = window.innerWidth <= 768;
    if (isSmallScreen) {
        items.forEach((item) => {
            item.style.width = '100%'; // Itens ocupam toda a largura
        });
    } else {
        items.forEach((item) => {
            item.style.width = ''; // Remove a largura fixa
        });
    }
}

// Ajuste inicial
adjustForSmallScreens();

// Recalcula o ajuste ao redimensionar a tela
window.addEventListener('resize', adjustForSmallScreens);

// Chame a função que cria os itens do carrossel após a página carregar
document.addEventListener('DOMContentLoaded', () => {
    criarCarrossel(); // Adicione a função de criação de carrossel aqui
    updateCarousel(); // Chama a função de atualização do carrossel
});
