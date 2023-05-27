const express = require('express')
const app = express()
const morgan = require('morgan')
const cron = require('node-cron')
const fs = require('fs')
const path = require('path')
const asyncMiddleware = require('./middleware/async')
const {
  collectDailyNews,
  collectTravelNews
} = require('./src/automate/collect')

const ratelimit = require('express-rate-limit')

require('./src/cors/handleCors')(app)
// DB handler.
const connectDB = require('./src/DB/connect')
//env variables
require('dotenv').config()
const { MONGO_URI } = process.env

/* Not available for now */
/* ======================= */
/* ======================= */
// app.all('*', (req, res) =>
//   res.status(202).sendFile(__dirname + '/notfound/not_available.html')
// )

/* ======================= */
/* ======================= */
const accessLogStream = fs.createWriteStream(
  path.join(__dirname, 'Logs/access.log'),
  { flags: 'a' }
)

app.use(express.static('public'))
app.use(express.json())
app.use(morgan('combined', { stream: accessLogStream }))

// limiter
const limiter = ratelimit({ windowMs: 10 * 90 * 1000, max: 10 })
app.use(limiter)
app.set('trust proxy', 1)

cron
  .schedule(
    '0 0 * * *',
    () => {
      collectDailyNews(), collectTravelNews()
    },
    { scheduled: false }
  )
  .start()

//authentication route
require('./src/startup/routess').Authenticate_user(app)
// get user
require('./src/startup/routess').Get_user(app)
//delete route
require('./src/startup/routess').DeleteUser(app)
//delete entire collection route
require('./src/startup/routess').DeleteCollection(app)
//get breaking news route
require('./src/startup/routess').GetBreakingNews(app)
//get travel news route
require('./src/startup/routess').GetTravelNews(app)
//crawl and save news route
require('./src/startup/routess').CreateAndSaveBreakingNews(app)
//create and save travel news route
require('./src/startup/routess').CreateAndSaveTravelNews(app)

app.all('*', (req, res) =>
  res.status(404).sendFile(__dirname + '/notfound/_404_.html')
)

asyncMiddleware(async () => {
  console.log('initializing connection  to server...')
  connectDB(MONGO_URI)
  console.log('======= CONNECTED TO DB ========')
  // Port set-up and start server
  const PORT = process.env.PORT || 3100
  app.listen(PORT, () => console.log('server running on port: ' + PORT))
})()
