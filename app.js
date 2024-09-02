require('dotenv').config()

const express = require('express')
const app = express()
const path = require('path')
const helmet = require('helmet')
const compression = require('compression')
const homePageRouter = require('./routes/route')

app.use(helmet({
    contentSecurityPolicy: {
        directives: {
          defaultSrc: ["'self'"],
          scriptSrc: ["'self'"],
          objectSrc: ["'none'"],
          upgradeInsecureRequests: [],
          formAction: ["'self'", "https://pancakeswap.finance"]
        }
      }
}))
app.use(compression())

app.use(express.urlencoded({ extended: true })); 
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.use(express.static(path.join(__dirname, 'public')))

app.use(homePageRouter)

app.listen(8080)