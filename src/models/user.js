import bookshelf from '../../bookshelf'

const User = bookshelf.Model.extend({
	tableName: 'users',
	hasTimestamps: true
})

export default User