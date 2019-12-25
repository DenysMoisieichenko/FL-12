let email;
let emailMinLength = 5;
let passwordMinLength = 6;

do {
    email = prompt('Please enter Your email', 'example@gmail.com');
    
    if (email === '' || email === null) {
        alert('Canceled.');
        break;
    } else if (email.length < emailMinLength) {
        alert("I don't know any emails having name length less than 5 symbols");
    } else if (email === 'user@gmail.com' || email === 'admin@gmail.com' ) {
        let password = prompt('Please enter Your password','password');

        if (password === '' || password === null) {
            alert('Canceled.');
            break;
        } else if (email === 'user@gmail.com' && password === 'UserPass'
               || email === 'admin@gmail.com' && password === 'AdminPass') {
            let changePassword = confirm('Do You want to change Your password?');

            if (changePassword === false) {
                alert('You have failed the change.');
                break;
            } else {
                let oldPassword = prompt('Write Your old password', 'old password');

                if (oldPassword === '' || oldPassword === null) {
                    alert('Canceled.');
                    break;
                } else if (email === 'user@gmail.com' && oldPassword === 'UserPass'
                       || email === 'admin@gmail.com' && oldPassword === 'AdminPass') {
                    let newPassword = prompt('Enter Your new password', 'new password');

                    if (newPassword === '' || newPassword === null) {
                        alert('Canceled.');
                        break;
                    } else if (newPassword.length < passwordMinLength) {
                        alert("It's too short password. Sorry.");
                    } else {
                        let confirmNewPassword = prompt('Write Your new password again');

                        if (confirmNewPassword !== newPassword) {
                            alert('You wrote the wrong password.');
                            break;
                        } else {
                            alert('You have successfully changed your password.');
                            break;
                        }
                    }
                } else {
                    alert('Wrong password');
                }
            }
        } else {
            alert('Wrong password');
        }
    } else {
        alert("I don't know you");
    }
    email++;
} while (!email);