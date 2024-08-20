/* Convertidor de ID English Time */



/**
 * @param {String} char 
 */
function isUpperCaseOrLowerCase(char) {
  if (char === undefined) return 'No hay ningún valor';
  if (char === '') return 'La cadena está vacía';
  if (char.length > 1) return 'Debes ingresar solo un carácter';
  if (!isNaN(char)) return 'El valor debe ser un carácter';
  if (char === 'i'){
    return `Letra ${char} latina en minúscula`
  }else if (char === 'I') {
    return `Letra ${char} latina en mayúscula`
  }else if (char === 'l') {
    return `Letra ${char} de lápiz en minúscula`
  }else if (char === 'L') {
    return `Letra ${char} de lápiz en mayúscula`
  }else if (char === char.toUpperCase()) {
    return `Letra ${char} en mayúscula`
  }else {
    return `Letra ${char} en minúscula`
  }
}

/**
 * @param {String} id 
 */
const etuID = (id) => {
  let result = `A continuación se desglosa el ID \`${id}\`:\n`;
  const idSplit = id.split('');
  for (let i = 0; i < id.length; i++) {
    if (idSplit[i] === '_') {
      result += '* Guion bajo _.\n';
    }else if (isNaN(idSplit[i])) {
      result += `* ${isUpperCaseOrLowerCase(idSplit[i])}.\n`
    }else if (!isNaN(idSplit[i])) {
      result += `* El número ${idSplit[i]}.\n`
    }
  }
  return result;
}

const idDom = document.querySelector("#show-id")
const inputId = document.querySelector("#input-id")
const btnInputId = document.querySelector("#btn-input-id")

btnInputId.addEventListener("click", () => {
  if (inputId.value === '') {
    const textError = document.querySelector('#main-etu__error')
    textError.textContent = 'Debes ingresar un ID, no puede estar vacío.'
    textError.style.display = "block";
  }else {
    idDom.innerText = etuID(inputId.value)
  }
})
