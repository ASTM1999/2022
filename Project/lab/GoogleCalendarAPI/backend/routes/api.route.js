const router = require('express').Router();
const { google } = require('googleapis');
// const { calendar } = require('googleapis/build/src/apis/calendar');

const GOOGLE_CLIENT_ID =
  '461912288462-j2gmr05vf7q4nsk8ma04mqls9qs31cd1.apps.googleusercontent.com'
const GOOGLE_CLIENT_SECRET = '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'

const REFRESH_TOKEN =
  '1//0gw5ZkHK7vP8YCgYIARAAGBASNwF-L9IrhHQ71sIaRSXSeRxZd9F5yAHJVs4h-0mrFWoC9wLpl9vObomVfgNS6Cxfkujr_5JCKfU'

const oauth2Client = new google.auth.OAuth2(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  'http://localhost:3000'
)

router.get('/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

router.post('/create-tokens', async (req, res, next) => {
  try {
    const { code } = req.body
    const { tokens } = await oauth2Client.getToken(code)
    res.send(tokens)
  } catch (error) {
    next(error)
  }
})
router.post('/create-event', async (req, res, next) => {
  try {
    const { summary, description, location, startDateTime, endDateTime } =
      req.body

    oauth2Client.setCredentials({ refresh_token: REFRESH_TOKEN })
    const calendar = google.calendar('v3')
    const response = await calendar.events.insert({
      auth: oauth2Client,
      calendarId: 'primary',
      requestBody: {
        summary: summary,
        description: description,
        location: location,
        colorId: '1',
        start: {
          dateTime: new Date(startDateTime),
        },
        end: {
          dateTime: new Date(endDateTime),
        },
      }
    })
    res.send(response)
  } catch (error) {
    next(error)
  }
})

module.exports = router;
