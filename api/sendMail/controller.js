const nodemailer = require('nodemailer')
async function sendMail(data, ctx) {
    const mailTransport = nodemailer.createTransport({
        host: 'smtp.qq.com',
        secureConnection: true, // 使用SSL方式（安全方式，防止被窃取信息）
        auth: {
            user: process.env.MAIL,
            pass: process.env.MAILPWD
        },
    });

    const options = {
        from: `"admin" <${process.env.MAIL}>`,
        to: `"user" <${process.env.MAIL}>`,
        // cc         : ''  //抄送
        // bcc      : ''    //密送
        subject: '您的网站有新回复！',
        text: '您的网站有人回复您了！',
        html: `<h1>你好，以下是回复信息</h1>
              <p>name：${data.name}</p>
              <p>email：${data.email}</p>
              <p>message：${data.message}</p>
              `,
    };

    const result = await mailTransport.sendMail(options)
    
    ctx.body={
        success:'ok',
    }
}
module.exports = {
    sendMail
}
