'use scrict'

const buttonSwitchColor = document.getElementById('switch-color')

function switchColor() {
    const color = document.getElementById('color').value
    console.log(color)
    document.documentElement.style.setProperty('--bg-color', color)
}

buttonSwitchColor.addEventListener('click', switchColor)