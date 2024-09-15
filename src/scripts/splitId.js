'use strict';
const idEtuText = document.querySelector("#id-etu-text");
const idEtuInput = document.querySelector("#id-etu-input");
const idEtuMessage = document.querySelector("#id-etu-message");
const btnDesglosarId = document.querySelector("#btn-id-etu-desglosar");
const btnCopiarId = document.querySelector("#btn-id-etu-copiar");
const btnResetearForm = document.querySelector("#btn-id-etu-resetear");



/**
 * @param {String} char 
 */
function isUpperOrLowerCase(char) {
  if (char === undefined) return 'No hay ningún valor';
  if (char === '') return 'La cadena está vacía';
  if (char.length > 1) return 'Debes ingresar solo un carácter';
  if (!isNaN(char)) return 'El valor debe ser un carácter';
  if (char === 'i'){
    return `Letra ${char} latina en minúscula`;
  }else if (char === 'I') {
    return `Letra ${char} latina en mayúscula`;
  }else if (char === 'l') {
    return `Letra ${char} de lápiz en minúscula`;
  }else if (char === 'L') {
    return `Letra ${char} de lápiz en mayúscula`;
  }else if (char === char.toUpperCase()) {
    return `Letra ${char} en mayúscula`;
  }else {
    return `Letra ${char} en minúscula`;
  }
}

/**
 * @param {String} id 
 */
const etuID = (id) => {
  if (id === undefined) return 'No hay ningún valor';
  if (id === '') return 'El id está vacío';
  let result = `A continuación se desglosa el ID \`${id}\`:\n`;
  const idSplit = id.split('');
  for (let i = 0; i < id.length; i++) {
    if (idSplit[i] === '_') {
      result += '* Guion bajo _.\n';
    }else if (isNaN(idSplit[i])) {
      result += `* ${isUpperOrLowerCase(idSplit[i])}.\n`
    }else if (!isNaN(idSplit[i])) {
      result += `* El número ${idSplit[i]}.\n`
    }
  }
  return result;
}


btnDesglosarId.addEventListener("click", (e) => {
  e.preventDefault();
  if (idEtuInput.value === "") {
    idEtuMessage.classList.remove("hidden");
    idEtuMessage.classList.add("text-pink-500");
    idEtuMessage.textContent = etuID(idEtuInput.value);
  } else {
    idEtuMessage.classList.add("hidden");
    idEtuMessage.classList.remove("text-pink-500");
    idEtuText.classList.remove("hidden")
    idEtuText.innerText = etuID(idEtuInput.value)
  }
})
btnCopiarId.addEventListener("click", (e) => {
  e.preventDefault();
  navigator.clipboard.writeText(idEtuText.innerText)
  .then(() => {
    if (idEtuText.textContent === "") {
      idEtuMessage.classList.remove("hidden");
      idEtuMessage.classList.add("text-pink-500");
      idEtuMessage.textContent = "No hay nada que copiar ❌";
    } else {
      idEtuMessage.classList.remove("hidden");
      idEtuMessage.classList.remove("text-pink-500");
      idEtuMessage.textContent = "Texto copiado ✅";
    }
  })
  .catch(error => {
    idEtuMessage.textContent = error;
    })
  
})
btnResetearForm.addEventListener("click", () => {
  idEtuText.textContent = "";
  idEtuMessage.classList.add("hidden");
})
