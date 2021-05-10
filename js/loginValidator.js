function loginVerify(email, password) {
    const usersList = [
        { email: 'madhurim@infrrd.ai', password: '123' },
        { email: 'rachana@infrrd.ai', password: '456' },
        { email: 'akshatdivya@infrrd.ai', password: '789' }
    ];

    for (let i = 0; i < usersList.length; i++) {
        if (usersList[i].email === email && usersList[i].password === password) {
            alert('Login Completed!');
            return;
        }
    }
    alert("Login Failed!");
}