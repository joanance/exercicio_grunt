function adicionarPessoa() {
    // Captura os valores do formulário
        const nome = document.getElementById('nome').value;
        const sexo = document.getElementById('sexo').value;
        const idade = document.getElementById('idade').value;
        const cargo = document.getElementById('cargo').value;

    // Cria um novo item de lista
        const lista = document.getElementById('listaPessoas');
        const li = document.createElement('li');
    
    // Cria a linha com as informações da pessoa
        li.innerHTML = `Nome: ${nome}, Sexo: ${sexo}, Idade: ${idade}, Cargo: ${cargo}`;

    // Adiciona o item à lista
        lista.appendChild(li);

    // Limpa os campos do formulário
        document.getElementById('nome').value = '';
        document.getElementById('idade').value = '';
        document.getElementById('cargo').value = '';
    }