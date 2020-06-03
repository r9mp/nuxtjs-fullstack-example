import config from '../../knexfile'

export default require('knex')(config[process.env.NODE_ENV])
