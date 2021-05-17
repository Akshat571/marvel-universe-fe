function loginVerify(email, password) {
    const usersList = [
        { name: "Madhuri", email: 'madhurim@infrrd.ai', password: '123' },
        { name: "Rachana", email: 'rachana@infrrd.ai', password: '456' },
        { name: "Akshat", email: 'akshatdivya@infrrd.ai', password: '789' }
    ];

    let user = usersList.find(user => user.email === email && user.password === password);
    if (user) {
        window.localStorage.setItem("email", user.name);
        window.location.href = "home.html"
    }
    else {
        document.getElementById('message').innerHTML = "Login Failed!";
    }
}

function logout() {
    window.localStorage.clear();
    window.location.href = "index.html";
}
