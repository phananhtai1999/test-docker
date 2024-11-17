import express from 'express'
import databaseService from './services/database.services'

const app = express()

databaseService.connect()

const port = 3000
app.listen(port, () => {
  console.log(`Running on port ${port}`)
})
