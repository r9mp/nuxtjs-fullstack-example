import jwt from 'express-jwt'
import jwks from 'jwks-rsa'
import jwtAuthz from 'express-jwt-authz'

export const jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://' + process.env.AUTH0_DOMAIN + '/.well-known/jwks.json',
  }),
  audience: 'https://stupid-lama-local.eu.auth0.com/api/v2/',
  issuer: 'https://' + process.env.AUTH0_DOMAIN + '/',
  algorithms: ['RS256'],
})

export const checkScopes = (scopes) => {
  return (req, res, next) => {
    jwtAuthz(scopes)
    next()
  }
}
