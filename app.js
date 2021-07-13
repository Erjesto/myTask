function checkFields() {
    const username = document.getElementById('username').value
    const surname = document.getElementById('surname').value
    const password = document.getElementById('password').value
    const email = document.getElementById('email').value
    const phone = document.getElementById('phone').value
    const address = document.getElementById('address').value
    const form = document.getElementById('form').value
    const errorElement = document.getElementById('error')
    const submit = document.getElementById('submit') 
    var text = ''

    const checkName = /[^0-9]$/
    const checkSurname = /[^0-9]$/
    const checkPass = /[a-zA-Z0-9{8, 12}]/
    const checkEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
    const checkPhone = /[^0-9\+\(\)]/
    const checkAddress = /[a-zA-Z0-9.]/

    if (!checkName.test(username)) {
        text = 'invalid name'
        errorElement.innerHTML = text
        errorElement.style.display = 'block'
        return false
    }

    if (!checkSurname.test(surname)) {
        text = 'invalid surname'
        errorElement.innerHTML = text
        errorElement.style.display = 'block'
        return false
    }

    if (!checkPass.test(password)) {
        text = 'invalid password'
        errorElement.innerHTML = text
        errorElement.style.display = 'block'
        return false
    }

    if (!checkEmail.test(email)) {
        text = 'invalid email'
        errorElement.innerHTML = text
        errorElement.style.display = 'block'
        return false
    }

    if (!checkPhone.test(phone)) {
        text = 'invalid number'
        errorElement.innerHTML = text
        errorElement.style.display = 'block'
        return false
    }

    if (!checkAddress.test(address)) {
        text = 'invalid address'
        errorElement.innerHTML = text
        errorElement.style.display = 'block'
        return false
    }

    
    return false

}
