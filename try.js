document.addEventListener('DOMContentLoaded', () => {
    const input_email = document.getElementById('email');
    const input_pass  = document.getElementById('password');
    const signup_button = document.getElementById('signup');
    const error_email  = document.getElementById('error__email');
    const error_pass   = document.getElementById('error__password');

function toggleButton() {
    signup_button.disabled = (input_email.value.trim() === '' || input_pass.value.trim() === '');
}

function signup() {
    let isValid = true;

if (!input_email.value.includes('@')) {
    error_email.innerText = '이메일이 올바르지 않습니다.';
    isValid = false;
    } else {
        error_email.innerText = '';
    }

    // 비밀번호
    if (input_pass.value.trim() === '') {
        error_pass.innerText = '비밀번호를 입력해 주세요.';
        isValid = false;
    } else {
        error_pass.innerText = '';
    }

    if (isValid) alert('로그인에 성공하셨습니다');
}

input_email.addEventListener('input',  toggleButton);
input_pass.addEventListener('input',   toggleButton);
signup_button.addEventListener('click',   signup);

toggleButton();
});

