const sgMail=require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const sendWelcomeEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'mgikundacodes@gmail.com',
        subject:'welcome to the app',
        text:`Thanks for joining ,${name}.And please let us know how you go along with the app`
    })
}
const deleteEmail=(email,name)=>{
    sgMail.send({
        to:email,
        from:'mgikundacodes@gmail.com',
        subject:'Goodbye our esteemed customer',
        text:`Thanks for the time we had with you ,${name}.Please tell us what we can improve and we look forward to your return`
    })
}

// sgMail.send({
//     to:'petermbiriri8957@gmail.com',
//     from:'mgikundacodes@gmail.com',
//     subject:'hope it gets to you',
//     text:'we thank God'
// }).then(() => {
//     console.log('Message sent')
// }).catch((error) => {
//     console.log(error.response.body)
//     // console.log(error.response.body.errors[0].message)
// })
module.exports={
    sendWelcomeEmail,deleteEmail
}