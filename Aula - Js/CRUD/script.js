// MODELS
class Tutor {
    constructor(nome) {
      this.nome = nome;
    }
  }
  
  class Pet {
    constructor(nome, idade, tutor) {
      this.nome = nome;
      this.idade = idade;
      this.tutor = tutor; // instância de Tutor
    }
  }
  
  // CONTROLLER
  const controller = {
    listaTutores: [],
    listaPets: [],
  
    adicionarTutor() {
      const nome = document.getElementById("nomeTutor").value.trim();
      if (nome) {
        const tutor = new Tutor(nome);
        this.listaTutores.push(tutor);
        this.atualizarView();
        document.getElementById("nomeTutor").value = "";
      } else {
        alert("Digite o nome do tutor.");
      }
    },
  
    adicionarPet() {
      const nome = document.getElementById("nomePet").value.trim();
      const idade = parseInt(document.getElementById("idadePet").value);
      const tutorIndex = document.getElementById("tutorPetSelect").value;
  
      if (!nome || isNaN(idade)) {
        alert("Preencha todos os campos do pet.");
        return;
      }
  
      const tutor = this.listaTutores[tutorIndex];
  
      if (tutor instanceof Tutor) {
        const pet = new Pet(nome, idade, tutor);
        this.listaPets.push(pet);
        this.atualizarView();
        document.getElementById("nomePet").value = "";
        document.getElementById("idadePet").value = "";
      } else {
        alert("Tutor inválido.");
      }
    },
  
    editarTutor(index) {
      const novoNome = prompt("Novo nome do tutor:", this.listaTutores[index].nome);
      if (novoNome) {
        this.listaTutores[index].nome = novoNome;
  
        // Atualiza o nome do tutor nos pets também
        this.listaPets.forEach(pet => {
          if (pet.tutor === this.listaTutores[index]) {
            pet.tutor.nome = novoNome;
          }
        });
  
        this.atualizarView();
      }
    },
  
    excluirTutor(index) {
      if (confirm("Excluir tutor também remove seus pets. Continuar?")) {
        const tutorRemovido = this.listaTutores[index];
        this.listaTutores.splice(index, 1);
  
        // Remove pets associados a esse tutor
        this.listaPets = this.listaPets.filter(pet => pet.tutor !== tutorRemovido);
  
        this.atualizarView();
      }
    },
  
    editarPet(index) {
      const pet = this.listaPets[index];
      const novoNome = prompt("Novo nome do pet:", pet.nome);
      const novaIdade = prompt("Nova idade do pet:", pet.idade);
  
      if (novoNome && novaIdade) {
        pet.nome = novoNome;
        pet.idade = parseInt(novaIdade);
        this.atualizarView();
      }
    },
  
    excluirPet(index) {
      if (confirm("Deseja excluir este pet?")) {
        this.listaPets.splice(index, 1);
        this.atualizarView();
      }
    },
  
    atualizarView() {
      // Atualiza lista de tutores
      const listaTutores = document.getElementById("listaTutores");
      const selectTutor = document.getElementById("tutorPetSelect");
      listaTutores.innerHTML = "";
      selectTutor.innerHTML = "";
  
      this.listaTutores.forEach((tutor, index) => {
        if (tutor instanceof Tutor) {
          const li = document.createElement("li");
          li.style.display = "flex";
          li.style.justifyContent = "space-between";
          li.style.alignItems = "center";
          li.style.gap = "10px";
  
          const span = document.createElement("span");
          span.textContent = `Tutor: ${tutor.nome}`;
          li.appendChild(span);
  
          const btnEditar = document.createElement("button");
          btnEditar.textContent = "Editar";
          btnEditar.onclick = () => this.editarTutor(index);
  
          const btnExcluir = document.createElement("button");
          btnExcluir.textContent = "Excluir";
          btnExcluir.onclick = () => this.excluirTutor(index);
  
          li.appendChild(btnEditar);
          li.appendChild(btnExcluir);
          listaTutores.appendChild(li);
  
          const option = document.createElement("option");
          option.value = index;
          option.textContent = tutor.nome;
          selectTutor.appendChild(option);
        }
      });
  
      // Atualiza lista de pets
      const listaPets = document.getElementById("listaPets");
      listaPets.innerHTML = "";
  
      this.listaPets.forEach((pet, index) => {
        if (pet instanceof Pet) {
          const li = document.createElement("li");
          li.style.display = "flex";
          li.style.justifyContent = "space-between";
          li.style.alignItems = "center";
          li.style.gap = "10px";
  
          const span = document.createElement("span");
          span.textContent = `Pet: ${pet.nome}, Idade: ${pet.idade}, Tutor: ${pet.tutor.nome}`;
          li.appendChild(span);
  
          const btnEditar = document.createElement("button");
          btnEditar.textContent = "Editar";
          btnEditar.onclick = () => this.editarPet(index);
  
          const btnExcluir = document.createElement("button");
          btnExcluir.textContent = "Excluir";
          btnExcluir.onclick = () => this.excluirPet(index);
  
          li.appendChild(btnEditar);
          li.appendChild(btnExcluir);
          listaPets.appendChild(li);
        }
      });
    }
  };
  