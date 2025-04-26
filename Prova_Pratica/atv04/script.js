const containerCharacter = document.querySelector('.characters__container');
const searchInput = document.querySelector('#searchInput');
const searchButton = document.querySelector('#searchButton');

// Função para criar os cards dos usuários
function createUserCard(user) {
  const card = document.createElement('div');
  card.classList.add('character__item');

  card.innerHTML = `
    <h3>${user.name}</h3>
    <p><strong>Email:</strong> ${user.email}</p>
    <p><strong>Cidade:</strong> ${user.address.city}</p>
  `;

  return card;
}

// Buscar usuários
async function fetchCharacters(queryName) {
  try {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
    if (!response.ok) {
      throw new Error('Erro na resposta da API');
    }

    const data = await response.json();
    containerCharacter.innerHTML = '';

    const filtered = data.filter(user =>
      user.name.toLowerCase().includes(queryName.toLowerCase())
    );

    if (filtered.length === 0) {
      containerCharacter.innerHTML = `<p>Nenhum usuário encontrado para "${queryName}".</p>`;
      return;
    }

    filtered.forEach(user => {
      const userCard = createUserCard(user);
      containerCharacter.appendChild(userCard);
    });
  } catch (error) {
    containerCharacter.innerHTML = `<p>Erro ao carregar os usuários: ${error.message}</p>`;
  }
}

searchButton.addEventListener('click', () => {
  const query = searchInput.value.trim();
  if (query == '' || query !== '') {
    fetchCharacters(query);
  } else {
    containerCharacter.innerHTML = `<p>Por favor, insira um termo para pesquisar.</p>`;
  }
});

// Carregar todos os usuários inicialmente
fetchCharacters('');
