// projects.js

import { projetos } from './dados.js';

function criarCarrossel() {
    const carouselWrapper = document.querySelector('.carousel-wrapper');

    // Limpar o conteúdo existente do carrossel
    carouselWrapper.innerHTML = '';

    // Loop através dos projetos e gerar HTML dinâmico
    projetos.forEach(projeto => {
        // Criar o elemento do projeto
        const projetoDiv = document.createElement('div');
        projetoDiv.classList.add('carousel-item');

        // Criar a estrutura do item
        projetoDiv.innerHTML = `
            <div class="monitor-frame">
                <a href="${projeto.link}" target="_blank" aria-label="Visualização do projeto">
                    <img src="${projeto.imagem}" loading="lazy" alt="Imagem do Projeto">
                </a>
            </div>
            <h3>${projeto.titulo}</h3>
            <p>${projeto.descricao}</p>
            <a href="${projeto.repositorio}" target="_blank" aria-label="Repositório no GitHub">
                <button>Repositorio</button>
            </a>
        `;

        // Adicionar o item ao carrossel
        carouselWrapper.appendChild(projetoDiv);
    });
}

// Chamar a função para criar o carrossel ao carregar a página
document.addEventListener('DOMContentLoaded', criarCarrossel);
