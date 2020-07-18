import cors from 'cors'
import users from './src/users/routes'

const express = require('express')

// Create express instance
const app = express()

// Import API Routes
app.use(cors())
app.use(users)

app.use((err, req, res, next) => {
  // eslint-disable-next-line no-console
  console.log('ERREUR, ', err)
  if (err.name === 'UnauthorizedError') {
    res.send(401, 'Invalid token.')
  }
})

// Export the server middleware
export default {
  path: '/api',
  handler: app
}
