const express = require('express')
const cors = require('cors')

const app = express()
const postRoutes = require('./routes')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/posts', postRoutes)

app.listen(process.env.PORT || 3000, function() {
  console.log('\n===Server running===\n')
})
