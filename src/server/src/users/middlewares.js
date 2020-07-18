import jwt from 'express-jwt'
import jwks from 'jwks-rsa'
import jwtAuthz from 'express-jwt-authz'

export const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://' + process.env.AUTH0_DOMAIN + '/.well-known/jwks.json'
  }),
  audience: 'https://' + process.env.AUTH0_DOMAIN + '/api/v2/',
  issuer: 'https://' + process.env.AUTH0_DOMAIN + '/',
  algorithms: ['RS256']
})

export const checkScopes = (scopes) => {
  return (req, res, next) => {
    jwtAuthz(scopes)
    next()
  }
}

export const attachAuth0Api = (req, res, next) => {
  const ManagementClient = require('auth0').ManagementClient
  req.auth0Api = new ManagementClient({
    domain: process.env.AUTH0_DOMAIN,
    clientId: process.env.AUTH0_CLIENT_ID,
    clientSecret: process.env.AUTH0_CLIENT_SECRET,
    scope: 'read:users'
  })
  next()
}
