function loginVerify(email, password) {
    const usersList = [
        { email: 'madhurim@infrrd.ai', password: '123' },
        { email: 'rachana@infrrd.ai', password: '456' },
        { email: 'akshatdivya@infrrd.ai', password: '789' }
    ];

    let user = usersList.find(user => user.email === email && user.password === password);
    if (user === undefined)
        document.getElementById('message').innerHTML = "Login Failed!";
    else
        document.getElementById('message').innerHTML = "Login Successful!";
}