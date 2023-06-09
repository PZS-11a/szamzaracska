const codeInput = document.getElementById('codeInput')
const message = document.getElementById('message')
let code = ''
let attempts = 0

function appendNumber(number) {
  codeInput.value += number
  if (codeInput.value.length > 4) {
    codeInput.value = codeInput.value.slice(0, 4)
  }
}

function clearInput() {
  codeInput.value = ''
}

function submitCode() {
  const enteredCode = parseInt(codeInput.value)
  if (enteredCode === 4372) {
    message.textContent = 'Helyes a kód!'
  } else {
    attempts++
    if (attempts >= 5) {
      window.location.href =
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fgifer.com%2Fen%2FJWr1&psig=AOvVaw3apbMqIFoLEWqtoLuv9ID2&ust=1685088824099000&source=images&cd=vfe&ved=0CA4QjRxqFwoTCPCz75iDkP8CFQAAAAAdAAAAABAI'
    } else {
      message.textContent = 'Helytelen a kód!'
    }
  }
}

document.addEventListener('keydown', function (event) {
  const key = event.key
  if (key >= 0 && key <= 9) {
    appendNumber(parseInt(key))
  } else if (key === 'Backspace') {
    clearInput()
  } else if (key === 'Enter') {
    submitCode()
  }
})
