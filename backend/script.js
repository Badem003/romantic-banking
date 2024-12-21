document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username && password) {
        alert("Вітаємо, " + username + "! Ви успішно увійшли.");
    } else {
        alert("Будь ласка, заповніть всі поля.");
    }
});