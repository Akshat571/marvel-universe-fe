function loginVerify(email, password) {
    const usersList = [
        { email: 'madhurim@infrrd.ai', password: '123' },
        { email: 'rachana@infrrd.ai', password: '456' },
        { email: 'akshatdivya@infrrd.ai', password: '789' }
    ];

    usersList.find((user) => {
        (user.email === email && user.password === password) ? success() : failure();
    })
}

function success() {
    document.getElementById('message').innerHTML = "Login Successful!";
}
function failure() {
    document.getElementById('message').innerHTML = "Login Failed!";
}