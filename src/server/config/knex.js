import config from '../../../knexfile'

export default require('src/server/config/knex')(config[process.env.NODE_ENV])
