require('./connect')
const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const router = require('./router')
const {
  notFoundMiddleware,
} = require('./__middlewares__')

/**
 * Constants
 */
const app = express()

/**
 * Configuration Middlewares
 */
app.use(cors())
app.use(express.json())
app.use(morgan('tiny'))

/**
 * Router
 */
app.use(router)

/**
 * Response Processing Middlewares
 */
app.use(notFoundMiddleware)

/**
 * Expose Application
 */
module.exports = app