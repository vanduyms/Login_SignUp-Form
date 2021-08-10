const login = document.getElementById('login'),
    signup = document.getElementById('signup'),
    loginBtn = document.getElementById('switch__login'),
    signupBtn = document.getElementById('switch__signup')

if (loginBtn) {
    loginBtn.addEventListener('click', () => {
        signup.classList.add('hidden')
        login.classList.remove('hidden')
    })
}

if (signupBtn) {
    signupBtn.addEventListener('click', () => {
        login.classList.add('hidden')
        signup.classList.remove('hidden')
    })
}