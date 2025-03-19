const uri = 'http://localhost:3000';

function login() {
    const form = document.querySelector('#loginForm');
    form.addEventListener('submit', e => {
        e.preventDefault();
        const dados = {
            email: form.email.value,
            senha: form.senha.value,
        };
        fetch(uri + '/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dados)
        })
        .then(resp => resp.json())
        .then(resp => {
            if (resp.message === 'Login bem-sucedido') {
                window.location.href = 'index.html';
            } else {
                alert('Usuário não encontrado ou senha incorreta');
            }
        })
        .catch(err => {
            console.error('Erro ao fazer login:', err);
            alert('Erro ao fazer login');
        });
    });
}

document.addEventListener('DOMContentLoaded', login);