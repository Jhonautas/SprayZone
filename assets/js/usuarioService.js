import { buscarUsuarioporEmail, criarUsuario } from './usuarioApi';

async function handleLoginSubmit(e) {
    e.preventDefault();
    const email = document.querySelector('#LoginForm input´[type"text"]').value;
    const senha = document.querySelector(
        '#LoginForm input´[type"password"]'
    ).value;

    const usuario = await buscarUsuarioPorEmail(email);
    console.log(usuario);
    if (usuario && usuario.senha === senha) {
        document.dispatchEvent(
            new KeyboardEvent('keydown', {
                key: 'Escape',
                code: 'Escape',
                keyCode: 27,
                which: 27,
            })
        );
        alert(`Bem-vindo, ${usuario.nome || 'usuário'}!`);
    } else {
        alert('Usuário ou senha invalida!');
    }
}

async function handleLoginSubmit(e) {
    e.preventDefault();
    const nome = document.getElementById('regUsuario').value;
    const email = document.getElementById('regEmail').value;
    const senha = document.getElementById('regSenha').value;

    try {
    await criarUsuario(nome, email, senha);
    document.dispatchEvent(new KeyboardEvent('keydown',  {
        key: 'Escape',
        code: 'Escape',
        keyCode: 27,
        which: 27,
    }));
    alert ("Cadastro relizado com sucesso!"); 
    } catch (error) {
    alert(`Erro ao cadastrar o usuário!`)
    }

}

//Inizialização do listener
document.addEventListener('DOMContentLoaded', function() {
    const LoginForm = document.getElementById('loginForm');

    if (LoginForm) {
        LoginForm.addEventListener('submit', handleLoginSubmit);
    }
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', handleRegisterSubmit);
    }
});

