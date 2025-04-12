const containerCharacter = document.querySelector('.characters__container');
const searchInput = document.querySelector('#searchInput');
const searchButton = document.querySelector('#searchButton');

const modal = document.getElementById('characterModal');
const modalImage = document.getElementById('modalImage');
const modalName = document.getElementById('modalName');
const modalStatus = document.getElementById('modalStatus');
const modalSpecies = document.getElementById('modalSpecies');
const modalGender = document.getElementById('modalGender');
const modalOrigin = document.getElementById('modalOrigin');
const closeButton = document.querySelector('.close-button');

function openModal(character) {
  modalImage.src = character.image;
  modalName.textContent = character.name;
  modalStatus.textContent = character.status;
  modalSpecies.textContent = character.species;
  modalGender.textContent = character.gender;
  modalOrigin.textContent = character.origin.name;
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

closeButton.addEventListener('click', closeModal);
window.addEventListener('click', (event) => {
  if (event.target === modal) {
    closeModal();
  }
});

async function fetchCharacters(queryName) {
  try {
    const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${queryName}`);
    const data = await response.json();

    containerCharacter.innerHTML = "";

    if (!data.results || data.results.length === 0) {
      containerCharacter.innerHTML = `<p>Nenhum personagem encontrado para "${queryName}".</p>`;
      return;
    }

    data.results.forEach(character => {
      const listItem = document.createElement('li');
      listItem.classList.add('character__item');

      listItem.innerHTML = `
        <img src="${character.image}" alt="${character.name}" class="character__img">
        <div class="descricao-character">
          <h3 class="titulo-character">${character.name}</h3>
          <p class="titulo-canal">${character.species} - ${character.gender}</p>
        </div>
      `;

      listItem.addEventListener('click', () => openModal(character));
      containerCharacter.appendChild(listItem);
    });
  } catch (error) {
    containerCharacter.innerHTML = `<p>Erro ao carregar os personagens: ${error.message}</p>`;
  }
}

searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query !== "") {
    fetchCharacters(query);
  } else {
    containerCharacter.innerHTML = `<p>Por favor, insira um termo para pesquisar.</p>`;
  }
});
