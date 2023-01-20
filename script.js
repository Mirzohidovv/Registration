const eye = document.querySelector('.eye')
const input = document.querySelector('.input')
const button = document.querySelector('button')



eye.addEventListener('click', () => {
    if (input.type == 'text') {
        eye.innerHTML = '<i class="fal fa-eye"></i>'
        input.type = 'password'
    } else {
        input.type = 'text'
        eye.innerHTML = '<i class="fal fa-eye-slash"></i>'
    }

})



button.addEventListener('click', () => {

    if (regbox.style.background == 'white') {
        regbox.style.background = 'gray'
    } else {

        regbox.style.background = 'white'
    }

})

