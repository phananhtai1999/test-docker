import { Collection, Db, MongoClient } from 'mongodb'
// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config()

const { DB_USER, DB_PASSWORD, DB_HOST, DB_PORT, DB_NAME } = process.env

// module.exports = {
//   url: `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`
// };

// const uri = `mongodb://localhost:27017/${process.env.DB_NAME}`
const uri = `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}?authSource=admin`

class DatabaseService {
  private client: MongoClient
  private db: Db
  constructor() {
    this.client = new MongoClient(uri)
    this.db = this.client.db(process.env.DB_NAME)
  }

  async connect() {
    try {
      await this.db.command({ ping: 1 })
      console.log('Connected')
    } catch (err) {
      console.log('Error', err)
      throw err
    }
  }
}

const databaseService = new DatabaseService()
export default databaseService
