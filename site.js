var buttonNovaReserva = document.getElementById('buttonNovaReserva');
var buttonCancelar = document.getElementById('buttonCancelar');
var novoReserva = document.getElementById('novoReserva');
var formNovoReserva = document.getElementById('formNovoReserva');
var inputNomeReserva = document.getElementById('nomeReserva');
var inputDataReserva = document.getElementById('dataReserva');
var divMensagemErro = document.getElementById('mensagemErro');

function mostrarNovoReserva() {
    novoReserva.classList.remove('d-none');
}

function ocultarNovoReserva() {

    novoReserva.classList.add('d-none');
}

function novoReservaValido(nomeReserva, dataReserva) {
    var validacaoOk = true;
    var erro = '';
    if (nomeReserva.trim().length === 0) {
        erro = 'O nome do setor é obrigatório!';
        inputNomeReserva.classList.add('is-invalid');
        validacaoOk = false;
    } else {
        inputNomeReserva.classList.remove('is-invalid');
    }
    var timestampReserva = Date.parse(dataReserva);
    var timestampAtual = (new Date()).getTime();
    if (isNaN(timestampReserva) || timestampReserva < timestampAtual) {
        if (erro.length > 0) {
            erro += '<br>'
        }
        erro += 'A data é obrigatória e deve estar no futuro!';
        inputDataReserva.classList.add('is-invalid');
        validacaoOk = false;
    } else {
        inputDataReserva.classList.remove('is-invalid');
    }

    if (!validacaoOk) {
        divMensagemErro.innerHTML = erro;
        divMensagemErro.classList.remove('d-none');
    } else {
        divMensagemErro.classList.add('d-none');
    }

    return validacaoOk;
}

function salvarNovoReserva(event) {
    event.preventDefault();
    var nomeReserva = inputNomeReserva.value;
    var dataReserva = inputDataReserva.value;
    if (novoReservaValido(nomeReserva, dataReserva)) {
        console.log('Reserva é válida!');
    } else {
        console.log('Reserva é inválida!');
    }
}

buttonNovaReserva.addEventListener('click', mostrarNovoReserva);
buttonCancelar.addEventListener('click', ocultarNovoReserva);
formNovoReserva.addEventListener('submit', salvarNovoReserva);

