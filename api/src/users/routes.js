import { Router } from 'express'
import { jwtCheck, attachAuth0Api } from './middlewares'

const router = Router()

/* GET users listing. */
router.get('/private/users', jwtCheck, attachAuth0Api, (req, res, next) => {
  // Pagination settings.
  const params = {
    search_engine: 'v3',
    q: '',
    per_page: 10,
    page: 0,
  }
  req.auth0Api
    .getUsers(params)
    .then((users) => {
      res.json(users)
    })
    .catch((err) => {
      console.log('Auth0 getUsers Error - ', err)
    })
})

/* UPDATE user by ID. */
router.put('/private/users/:id', jwtCheck, attachAuth0Api, (req, res, next) => {
  console.log(req.params.id)
  req.auth0Api
    .updateUser({ id: req.params.id }, { name: 'R. POUSSIER' })
    .then((user) => {
      res.json(user)
    })
    .catch((err) => {
      console.log('Auth0 getUsers Error - ', err)
    })
})

/* GET user by ID. */
router.get('/private/users/:id', jwtCheck, attachAuth0Api, (req, res, next) => {
  console.log(req.params.id)
  req.auth0Api
    .getUser({ id: req.params.id })
    .then((user) => {
      res.json(user)
    })
    .catch((err) => {
      console.log('Auth0 getUsers Error - ', err)
    })
})

export default router
