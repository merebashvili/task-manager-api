const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
    to: email,
    from: 'merebashvili.work@gmail.com',
    subject: 'Welcome to the app!',
    text: `Welcome to the app, ${name}. Bla bla bla bla bla`
})}

const sendAccountRemovalEmail = (email, name) => {
    sgMail.send({
    to: email,
    from: 'merebashvili.work@gmail.com',
    subject: 'Account removed',
    text: `We're sorry to see you go, ${name}.`
})}

module.exports = {
    sendWelcomeEmail,
    sendAccountRemovalEmail
}