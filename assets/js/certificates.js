let certificatesData = [];

// Função para carregar os certificados da API
async function loadCertificates() {
    try {
        const response = await fetch('https://api-certificates.vercel.app/certificates');
        const data = await response.json();
        certificatesData = data;

        // Ordene os dados em ordem decrescente
        const sortedData = sortCertificates('desc');

        // Atualize os certificados filtrados e renderize
        filteredCertificates = sortedData;
        renderCertificates(filteredCertificates);
    } catch (error) {
        console.error('Erro ao carregar os certificados:', error);
    }
}

loadCertificates(); // Chama a função para carregar os certificados da API



const itemsPerPage = 8;
let currentPage = 1;
let filteredCertificates = certificatesData;

// Função para ordenar os certificados por data
function sortCertificates(order) {
    return certificatesData.sort((a, b) => {
        const dateA = new Date(a.date.split('/').reverse().join('-')); // Converte DD/MM/AAAA para AAAA-MM-DD
        const dateB = new Date(b.date.split('/').reverse().join('-'));

        return order === "asc" ? dateA - dateB : dateB - dateA;
    });
}

// Evento para monitorar a alteração no select
document.getElementById("sortOrder").addEventListener("change", (e) => {
    const order = e.target.value; // "asc" ou "desc"
    const sortedData = sortCertificates(order);
    renderCertificates(sortedData);
  });

// Renderizar os certificados inicialmente em ordem crescente
renderCertificates(sortCertificates("asc"));

// Função para renderizar os certificados
function renderCertificates(certificates) {
    const container = document.getElementById('certificates');
    container.innerHTML = '';

    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const paginatedCertificates = certificates.slice(start, end);

    paginatedCertificates.forEach(cert => {
        const certificateDiv = document.createElement('div');
        certificateDiv.classList.add('certificate');

        const certificateImg = document.createElement('img');
        certificateImg.src = cert.image;
        certificateImg.alt = cert.title;
        certificateImg.classList.add('certificate-img');

        // Evento para abrir o modal
        certificateImg.addEventListener('click', () => openModal(cert.image));

        certificateDiv.innerHTML = `
            <div class="info">
                <h2>${cert.title}</h2>
                <p>Data: ${cert.date}</p>
                <p>Instituição: ${cert.institution}</p>               
            </div>
        `;

        certificateDiv.prepend(certificateImg); // Coloca a imagem antes da descrição
        container.appendChild(certificateDiv);
    });

    renderPagination(certificates.length); // Atualiza a paginação após renderizar os certificados
}

// Função para renderizar a paginação
function renderPagination(totalItems) {
    const paginationContainer = document.getElementById('pagination');
    const pageNumbersContainer = document.getElementById('pageNumbers');
    pageNumbersContainer.innerHTML = '';

    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const visiblePages = 3; // Limita a exibição de páginas para 3 números
    const startPage = Math.max(1, currentPage - 1); // Página inicial da visualização
    const endPage = Math.min(totalPages, currentPage + 1); // Página final da visualização

    // Adiciona o botão de "Anterior"
    const prevButton = document.getElementById('prevPage');
    prevButton.disabled = currentPage === 1;
    prevButton.onclick = function() {
        if (currentPage > 1) {
            currentPage--;
            renderCertificates(filteredCertificates);
        }
    };

    // Adiciona os números das páginas visíveis
    for (let i = startPage; i <= endPage; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.disabled = i === currentPage; // Desabilita o botão da página atual
        button.onclick = function() {
            currentPage = i;
            renderCertificates(filteredCertificates);
        };
        pageNumbersContainer.appendChild(button);
    }

    // Adiciona o botão de "Próxima"
    const nextButton = document.getElementById('nextPage');
    nextButton.disabled = currentPage === totalPages;
    nextButton.onclick = function() {
        if (currentPage < totalPages) {
            currentPage++;
            renderCertificates(filteredCertificates);
        }
    };
}

// Função para filtrar os certificados por tags
function filterCertificates(tag) {
    currentPage = 1;
    filteredCertificates = tag
        ? certificatesData.filter(cert => cert.tags.includes(tag))
        : certificatesData;
    renderCertificates(filteredCertificates);
}

// Evento para aplicar a ordenação quando o select for alterado
document.getElementById("sortOrder").addEventListener("change", (e) => {
    const order = e.target.value;
    filteredCertificates = sortCertificates(order);
    renderCertificates(filteredCertificates);
});

// Função de busca
document.getElementById('search').addEventListener('input', function () {
    const query = this.value.toLowerCase();
    currentPage = 1;
  
    filteredCertificates = certificatesData.filter(cert => {
      // Verifica se cada campo existe antes de chamar toLowerCase()
      const title = cert.title ? cert.title.toLowerCase() : '';
      const institution = cert.institution ? cert.institution.toLowerCase() : '';
      const tags = cert.tags ? cert.tags.map(tag => tag.toLowerCase()) : []; 
  
      return (
        title.includes(query) ||
        institution.includes(query) ||
        tags.some(tag => tag.includes(query))
      );
    });
  
    renderCertificates(filteredCertificates);
  });

// Funções dos filtros por tags
document.getElementById('filterTecnologia').addEventListener('click', function () {
    filterCertificates('tecnologia');
});
document.getElementById('filterPessoal').addEventListener('click', function () {
    filterCertificates('pessoal');
});
document.getElementById('filterNegocios').addEventListener('click', function () {
    filterCertificates('negocios');
});
document.getElementById('filterEducacao').addEventListener('click', function () {
    filterCertificates('educacao');
});
document.getElementById('filterOutros').addEventListener('click', function () {
    filterCertificates('outros');
});
document.getElementById('filterTodos').addEventListener('click', function () {
    filterCertificates('');
});

// Funções do modal
function openModal(imageSrc) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    
    if (modal && modalImage) {
        modalImage.src = imageSrc;  // Atualiza a imagem do modal
        modal.style.display = 'flex';  // Torna o modal visível
    }
}

function closeModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.style.display = 'none';  // Esconde o modal
    }
}

// Eventos do modal
document.getElementById('closeModal').addEventListener('click', closeModal);

window.addEventListener('click', function (event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
});

// Função para limpar filtros
function clearFilters() {
    currentPage = 1;
    filteredCertificates = certificatesData;  
    renderCertificates(filteredCertificates);  

    document.getElementById('search').value = '';
}

// Evento para limpar filtros
document.getElementById('clearFilters').addEventListener('click', clearFilters);

// Inicializa com o filtro "Todos" ativo e a ordem decrescente
filteredCertificates = sortCertificates('asc'); // Ordena os certificados em ordem decrescente
filterCertificates('filterTodos'); // Aplica o filtro "Todos" na inicialização
