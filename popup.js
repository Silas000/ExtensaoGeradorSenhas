// Função para gerar uma senha aleatória
function generatePassword() {
    var length = 12; // Comprimento padrão da senha
    var charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+"; // Caracteres permitidos na senha
    var password = "";
    for (var i = 0; i < length; i++) {
        var charIndex = Math.floor(Math.random() * charset.length);
        password += charset[charIndex];
    }
    return password;
}

// Função para atualizar o campo de senha com uma nova senha gerada
function updatePasswordField() {
    var passwordField = document.getElementById("password");
    passwordField.value = generatePassword();
}

// Função para salvar a senha gerada (ainda não implementada)
function savePassword() {
    // Implemente a lógica para salvar a senha aqui
    alert("A senha foi salva com sucesso!");
}

// Adicionar eventos aos botões
document.getElementById("generate-password").addEventListener("click", updatePasswordField);
document.getElementById("save-password").addEventListener("click", savePassword);
