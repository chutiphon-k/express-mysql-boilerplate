import knex from 'knex'
import bookshelf from 'bookshelf'
import knexfile from './knexfile'

const dbConfig = knexfile.development
const Bookshelf = bookshelf(knex(dbConfig))

export default Bookshelf