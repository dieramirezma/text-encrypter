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
    alert('Por favor, escribe un texto para encriptar.')
    return
  }
  if (!regex.test($textToEncrypt.value)) {
    alert('Por favor, escribe un texto válido.')
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
    alert('Por favor, escribe un texto para desencriptar.')
    return
  }
  if (!regex.test($textToDecrypt.value)) {
    alert('Por favor, escribe un texto válido.')
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
    alert('Texto copiado al portapapeles.')
  })
}
