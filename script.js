const emailInput = document.getElementById ('email')
const senhaInput = document.getElementById('senha')

function login(){
    if(emailInput.value == 'admin@email.com' && senhaInput.value == 'senha'){alert ('login feito com sucesso');
    window.location.href = 'pagina.html';
} else {
    ('Emaile/ou senha incorreta')

}
}