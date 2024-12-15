document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-produto');
    const listaProdutos = document.getElementById('lista-produtos');

    carregarProdutos();

    //add Produto
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const nome = document.getElementById('nome').value;
        const preco = document.getElementById('preco').value;

        fetch('backend/api.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, preco })
        })
        .then(response => response.json())
        .then(data => {
            if (data.status === 'sucesso') {
                carregarProdutos();
                form.reset();
            } else {
                alert('Erro ao adicionar produto');
            }
        })
        .catch(error => console.error('Erro:', error));
    });

    // Função para carregar produtos
    function carregarProdutos() {
        fetch('./api.php')
            .then(response => response.json())
            .then(data => {
                listaProdutos.innerHTML = '';
                data.forEach(produto => {
                    const item = document.createElement('li');
                    item.textContent = `${produto.nome} - R$ ${produto.preco.toFixed(2)}`;
                    listaProdutos.appendChild(item);
                });
            })
            .catch(error => console.error('Erro ao carregar produtos:', error));
    }
});
