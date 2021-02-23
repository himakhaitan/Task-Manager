const sgMail = require('@sendgrid/mail')


sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// sgMail.send({
//     to: 'visiongeeky@gmail.com',
//     from: 'himanshukhaitan108@gmail.com',
//     subject: 'API Testing',
//     text: 'Hello World!'
// })

const sendWelcomeEmail = (email, name) => {
sgMail.send({
    to: email,
    from: 'himanshukhaitan108@gmail.com',
    subject: 'Welcome to the app',
    text: `welcome to the app ${name}. Let me know how you get to the app.`,
    // html: ''
})
}

const sendCancellationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'himanshukhaitan108@gmail.com',
        subject: 'Sad see you going',
        text: `Good Bye ${name}! Let us know if we can stop you going!`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancellationEmail,
}