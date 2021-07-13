const name = document.getElementById('userName')
userName.addEventListener('input', (e) => {
    const chekName = /[^0-9]$/
    const text = e.target.value
    

    const result = chekName.test(text)
    if (result) {
        userName.style.border = 'green solid 2px'
        
        
     } else {
         userName.style.border = 'red solid 2px'
     }
})

const surName = document.getElementById('userSurname') 
userSurname.addEventListener('input', (e) => {
    const checkSurname = /[^0-9]$/
    const text = e.target.value

    const result = checkSurname.test(text)
    if (result) {
        userSurname.style.border = 'green solid 2px'
     } else {
         userSurname.style.border = 'red solid 2px'
     }
})

const password = document.getElementById('password')
password.addEventListener('input', (e) => {
    const checkPass = /\d{8}/
    const text = e.target.value
    const result = checkPass.test(text)

    if (result) {
        password.style.border = 'green solid 2px'
     } else {
        password.style.border = 'red solid 2px'
     }
})

const email = document.getElementById('email')
email.addEventListener('input', (e) => {
    const checkEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const text = e.target.value
    const result = checkEmail.test(text)
    

    if (result) {
       email.style.border = 'green solid 2px'
    } else {
        email.style.border = 'red solid 2px'
    }
})

const phone = document.getElementById('phone')
phone.addEventListener('input', (e) => {
    const checkPhone = /^[+]{1}[0-9]{1} [(]{1}[0-9]{3}[)]{1} [0-9]{3} [0-9]{2} [0-9]{2}$/
    const text = e.target.value
    const result = checkPhone.test(text)

    if (result) {
        phone.style.border = 'green solid 2px'
     } else {
        phone.style.border = 'red solid 2px'
     }

})


const address = document.getElementById('address')
address.addEventListener('input', (e) => {
    const checkAddress = /^[a-zA-Z0-9,\.\s]+$/
    const text = e.target.value
    const result = checkAddress.test(text)

    if (result) {
        address.style.border = 'green solid 2px'
     } else {
        address.style.border = 'red solid 2px'
     }
})









