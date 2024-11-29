// dados.js
export const projetos = [
    
    {
        titulo: "Farmácia Viva Vida",
        descricao: "Este é um projeto desenvolvido como parte do curso de Gestão em Tecnologia da Informação da Universidade Cruzeiro do Sul. O objetivo do projeto é criar um site institucional para uma farmácia, proporcionando aos clientes uma experiência fácil e eficiente ao navegar por medicamentos, promoções e serviços oferecidos pela farmácia.",
        imagem: "/assets/images/img-projects/farmacia.png",  
        link: "https://farmacia-viva-vida.vercel.app/",
        repositorio: "https://github.com/karinacmartins/Farmacia-Viva-Vida"
    },
    {
        titulo: "FitEssence",
        descricao: "FitEssence é uma aplicação web desenvolvida durante a imersão da Alura e do Gemini, projetada para ajudar os usuários a encontrar e visualizar vídeos de exercícios físicos. O projeto exibe vídeos a partir de um conjunto de dados pré-definidos, sem utilizar APIs externas, e é totalmente gerenciado com uma única página.",
        imagem: "/assets/images/img-projects/fitessence.png",
        link: "https://fitessence.vercel.app/",
        repositorio: "https://github.com/karinacmartins/desafio-alura-gemini"
    },
    {
        titulo: "Pokedex",
        descricao: "O projeto 'Pokedex' é uma aplicação web interativa que exibe informações sobre diferentes Pokémon. Utilizando HTML, CSS e JavaScript, a aplicação apresenta uma interface simples e intuitiva, permitindo que os usuários explorem características dos Pokémon. É ideal para treinar habilidades em manipulação de DOM e estruturação de projetos front-end.",
        imagem: "/assets/images/img-projects/pokedex.png",
        link: "https://pokedex-1geration.vercel.app/",
        repositorio: "https://github.com/karinacmartins/Pokedex"
    },
    {
        titulo: "Piano Simulator",
        descricao: "O projeto 'Piano Simulator' é uma aplicação web que simula o funcionamento de um piano virtual. Desenvolvido utilizando HTML, CSS e JavaScript, o simulador permite que os usuários toquem notas musicais diretamente pelo teclado ou clicando nas teclas na tela. Este projeto destaca a integração entre design interativo e funcionalidade, sendo ideal para praticar conceitos de áudio e interatividade em aplicações web.",
        imagem: "/assets/images/img-projects/piano.png",
        link: "https://piano-simulator-two.vercel.app/",
        repositorio: "https://github.com/karinacmartins/piano-simulator"
    },
    {
        titulo: "Detona Ralfh",
        descricao: "Este projeto é um jogo interativo desenvolvido em HTML, CSS e JavaScript, projetado para treinar agilidade e precisão. O objetivo do jogador é clicar nos inimigos que aparecem na tela, acumulando pontos enquanto o cronômetro avança. O jogo inclui níveis de dificuldade, perda de vidas ao errar, e um sistema de ranking para as melhores pontuações. Futuras melhorias incluem maior responsividade, animações adicionais e otimizações de acessibilidade.",
        imagem: "/assets/images/img-projects/detona-ralfh.png", 
        link: "https://detona-ralfh.vercel.app/",
        repositorio: "https://github.com/karinacmartins/detona-ralfh-aula-dio"
    }
   
       
];

export function criarCarrossel() {
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    projetos.forEach(projeto => {
        const item = document.createElement('div');
        item.classList.add('carousel-item');
        item.innerHTML = `
            <div class="monitor-frame">
                <a href="${projeto.link}" target="_blank" aria-label="Visualização do projeto">
                    <img src="${projeto.imagem}" loading="lazy" alt="Imagem do Projeto">
                </a>
            </div>
            <h3>${projeto.nome}</h3>
            <p>${projeto.descricao}</p>
            <a href="${projeto.repositorio}" target="_blank" aria-label="Repositório no GitHub">
                <button>Repositorio</button>
            </a>
        `;
        carouselWrapper.appendChild(item);
    });
}
