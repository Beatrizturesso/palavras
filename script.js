const dicionario = "qwertyuiopasdfghjklzxcvbnm";

function criptografarSenha(senha) {
  let senhaCriptografada = "";

  for (const letra of senha) {
    // Mantém espaços e caracteres que não sejam letras minúsculas.
    if (letra < "a" || letra > "z") {
      senhaCriptografada += letra;
      continue;
    }

    // Converte a letra em uma posição de 0 a 25.
    const posicao = letra.charCodeAt(0) - "a".charCodeAt(0);

    // Busca no dicionário a letra correspondente à posição.
    senhaCriptografada += dicionario[posicao];
  }

  return senhaCriptografada;
}

document
  .getElementById("criptografar")
  .addEventListener("click", () => {
    const senha = document.getElementById("senha").value;
    const resultado = document.getElementById("resultado");

    if (!senha) {
      resultado.textContent = "Digite uma senha para continuar.";
      return;
    }

    resultado.textContent = `Senha criptografada: ${criptografarSenha(senha)}`;
  });
