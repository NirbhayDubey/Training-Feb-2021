var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'anujpal631998@gmail.com',
        pass: 'anujpal631998.'
    }
});

var mailOptionsSignUp = {
    from: 'anujpal631998@gmail.com',
    to: 'anujpal160180107030@gmail.com',
    subject: 'SignUp',
    html: `You Signup the system!!!!!!!!`
           
};

var mailOptionsLogin = {
    from: 'anujpal631998@gmail.com',
    to: 'anujpal160180107030@gmail.com',
    subject: 'Login',
    html:"<h3>You login to the system !!!!!!!!!</h3>"
           
};

var mailOptionsCredit = {
    from: 'anujpal631998@gmail.com',
    to: 'anujpal160180107030@gmail.com',
    subject: 'Credit',
    html:"</h3>You Credited Some Amount </h3>"
           
};
var mailOptionsDebit = {
    from: 'anujpal631998@gmail.com',
    to: 'anujpal160180107030@gmail.com',
    subject: 'Debit',
    html:"</h3>You Debited Some Amount </h3>"
           
};

module.exports={transporter,mailOptionsLogin,mailOptionsSignUp,mailOptionsCredit,mailOptionsDebit}