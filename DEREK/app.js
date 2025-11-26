/*
 * JAVASCRIPT ATUALIZADO (Módulo 9 + 11)
 *
 * Esta função agora injeta um componente de
 * ALERTA do Bootstrap no DOM.
 */

function enviarFormulario() {
const inputNome = document.getElementById("nome");
const inputEmail = document.getElementById("email");
const divFeedback = document.getElementById("feedback");
const nomeUsuario = inputNome.value;
const emailUsuario = inputEmail.value;


if (nomeUsuario === "" || emailUsuario === "") {
divFeedback.innerHTML = `
<div class="alert alert-danger alert-dismissible fade show" role="alert">
<strong>Erro!</strong> Preencha todos os campos.
<button type="button" class="btn-close" data-bs-dismiss="alert"></button>
</div>`;
} else {
divFeedback.innerHTML = `
<div class="alert alert-success alert-dismissible fade show" role="alert">
<strong>Obrigado, ${nomeUsuario}!</strong> Sua mensagem foi enviada.
<button type="button" class="btn-close" data-bs-dismiss="alert"></button>
</div>`;
inputNome.value = "";
inputEmail.value = "";
document.getElementById("mensagem").value = "";
}
}