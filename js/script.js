document.addEventListener('DOMContentLoaded', () => {
  const $textToEncrypt = document.querySelector('.text-to-encrypt')
  const $clearTextArea = document.querySelector('.clear-textarea')

  $textToEncrypt.addEventListener('input', () => {
    if ($textToEncrypt.value !== '') {
      $clearTextArea.style.display = 'block'
      $textToEncrypt.style = 'margin-bottom: 8px'
    } else {
      $clearTextArea.style.display = 'none'
    }
  })
})

const toast = (message, backgroundColor = "#E74C3C") => {
  Toastify({
    text: `${message}`,
    duration: 3000,
    close: true,
    gravity: "top",
    position: "center",
    stopOnFocus: true,
    style: {
      background: backgroundColor,
      "border-radius": "12px",
      "font-weight": "bold",
    },
  }).showToast();
}
function encryptor(message) {
  const regex = /[aeiou]/g
  return message.replace(regex, (match) => {
    switch (match) {
      case 'a':
        return 'ai'
      case 'e':
        return 'enter'
      case 'i':
        return 'imes'
      case 'o':
        return 'ober'
      case 'u':
        return 'ufat'
    }
  })
}

function decryptor(message) {
    const regex = /ai|enter|imes|ober|ufat/g
  return message.replace(regex, (match) => {
    switch (match) {
      case 'ai':
        return 'a'
      case 'enter':
        return 'e'
      case 'imes':
        return 'i'
      case 'ober':
        return 'o'
      case 'ufat':
        return 'u'
    }
  })
}

function encryptText() {
  const $textToEncrypt = document.querySelector('.text-to-encrypt')
  const regex = /^[a-zñ0-9.,;:!¡¿?()'"\s-]+$/
  if ($textToEncrypt.value === '') {
    toast('Por favor, escribe un texto para encriptar.')
    return
  }
  if (!regex.test($textToEncrypt.value)) {
    toast('Por favor, escribe un texto válido.')
    return
  }
  const encryptedText = encryptor($textToEncrypt.value)
  const $encryptedTextElement = document.querySelector('.text-encrypted')
  const $nonEncrypted = document.querySelector('.non-encrypted')
  const $copyButton = document.querySelector('.copy-button')

  $encryptedTextElement.style.display = 'block'
  $encryptedTextElement.textContent = encryptedText

  $nonEncrypted.style.display = 'none'
  $copyButton.style.display = 'block'
}

function decryptText() {
  const $textToDecrypt = document.querySelector('.text-to-encrypt')
  const $decryptedTextElement = document.querySelector('.text-encrypted')

  const regex = /^[a-zñ0-9.,;:!¡¿?()'"\s-]+$/
  if ($textToDecrypt.value === '') {
    toast('Por favor, escribe un texto para desencriptar.')
    return
  }
  if (!regex.test($textToDecrypt.value)) {
    toast('Por favor, escribe un texto válido.')
    return
  }

  const decryptedText = decryptor($textToDecrypt.value)
  const $nonEncrypted = document.querySelector('.non-encrypted')
  const $copyButton = document.querySelector('.copy-button')

  $decryptedTextElement.textContent = decryptedText
  $decryptedTextElement.style.display = 'block'

  $nonEncrypted.style.display = 'none'
  $copyButton.style.display = 'block'
}

function updateClipboard() {
  const $encryptedTextElement = document.querySelector('.text-encrypted')

  navigator.clipboard.writeText($encryptedTextElement.textContent).then(() => {
    toast('Texto copiado al portapapeles.', '#609ED4')
  })
}

function clearTextArea() {
  const $textToEncrypt = document.querySelector('.text-to-encrypt')
  const $clearTextArea = document.querySelector('.clear-textarea')

  $textToEncrypt.value = ''
  $clearTextArea.style.display = 'none'
  $textToEncrypt.style = 'margin-bottom: 24px'
}