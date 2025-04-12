const containerCharacter = document.querySelector('.characters__container');
const searchInput = document.querySelector('#searchInput');
const searchButton = document.querySelector('#searchButton');

async function fetchCharacters(queryName) {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${queryName}`);
    const data = await response.json();

    containerCharacter.innerHTML = "";

    //Caso não encontre resultados, exibe uma mensagem
    if (!data.results || data.results.length === 0) {
      containerCharacter.innerHTML = `<p>Nenhum personagem encontrado para "${queryName}".</p>`;
      return;
    }

    //Itera sobre os resultados e constrói os itens incluindo a imagem do personagem
    data.results.forEach(character => {
      containerCharacter.innerHTML += `
        <li class="character__item">
          <img src="${character.image}" alt="${character.name}" class="character__img">
          <div class="descricao-character">
            <h3 class="titulo-character">${character.name}</h3>
            <p class="titulo-canal">${character.species} - ${character.gender}</p>
          </div>
        </li>
      `;
    });
  } catch (error) {
    containerCharacter.innerHTML = `<p>Erro ao carregar os personagens: ${error.message}</p>`;
  }
}

//Adiciona o evento de clique ao botão de pesquisar
searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query !== "") {
    fetchCharacters(query);
  } else {
    containerCharacter.innerHTML = `<p>Por favor, insira um termo para pesquisar.</p>`;
  }
});
