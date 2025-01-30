const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const carouselWrapper = document.querySelector('.carousel-wrapper');
let currentIndex = 0;

// Atualiza a posição do carrossel
function updateCarousel() {
    const items = document.querySelectorAll('.carousel-item');
    const itemWidth = items[0].offsetWidth; // Largura de um item
    carouselWrapper.style.transform = `translateX(${-currentIndex * itemWidth}px)`;
}

// Clique no botão "Anterior"
prevButton?.addEventListener('click', () => {
    const items = document.querySelectorAll('.carousel-item');
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1; // Volta ao último item se estiver no início
    updateCarousel();
});

// Clique no botão "Próximo"
nextButton?.addEventListener('click', () => {
    const items = document.querySelectorAll('.carousel-item');
    currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0; // Vai para o primeiro item se estiver no final
    updateCarousel();
});

// Ajusta os itens para telas menores
function adjustForSmallScreens() {
    const items = document.querySelectorAll('.carousel-item');
    const isSmallScreen = window.innerWidth <= 768;
    const itemWidth = isSmallScreen ? '100%' : '300px'; // Define largura padrão
    items.forEach((item) => (item.style.width = itemWidth));
    updateCarousel(); // Recalcula a posição
}

// Configurações iniciais
window.addEventListener('resize', adjustForSmallScreens);
document.addEventListener('DOMContentLoaded', () => {
   
    adjustForSmallScreens();
});
