

const { google } = googleapis
const { OAuth2 } = google.auth

const oAuth2Client = new OAuth2(
    '266526321397-hrv9pqk41gltn4kfcre2u0mekf1i59ts.apps.googleusercontent.com',
    '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'
)

oAuth2Client.setCredentials({
    refresh_token: 
        '1//049l0vQKj54-wCgYIARAAGAQSNwF-L9IrmG_Mvzh_rH28AwFbXy-BQqka1A1Gm1KgA_tMLBHgt9ffPdzSzVMTfPrStdt_CJvMRak',
})

const calendar = google.calendar({ version: 'v3', auth: oAuth2Client })


// const datTest = 2

// const eventStartTime = new Date()
// // eventStartTime.originalStartTime.date(1999-07-11)
// // eventStartTime.getMinutes(eventStartTime.getMinutes()+200)

// const eventEndTime = new Date()
// eventEndTime.originalStartTime.date
// eventEndTime.setDate(eventEndTime.getDay()+datTest)
// // eventEndTime.setMinutes(eventEndTime.getMinutes() + 60)
const Tdate = "2022-07-11"

const event = {
    summary: `Meeting Project`,
    location: `Google Meetings`,
    description: ``,
    colorId: 1,
    start: {
      date: Tdate,
      timeZone: 'UTC',
    },
    end: {
      date: Tdate,
      timeZone: 'UTC',
    },
  }
  
  // Check if we a busy and have an event on our calendar for the same time.
  calendar.freebusy.query(
    {
      resource: {
        // timeMin: eventStartTime,
        // timeMax: eventEndTime,
        timeZone: 'UTC',
        items: [{ id: 'primary' }],
      },
    },
    (err, res) => {
      // Check for errors in our query and log them if they exist.
      // if (err) return console.error('Free Busy Query Error: ', err)
  
      // Create an array of all events on our calendar during that time.
      // const eventArr = res.data.calendars.primary.busy
  
      // Check if event array is empty which means we are not busy
      // if (eventArr.length === 0)
        // If we are not busy create a new calendar event.
        return calendar.events.insert(
          { calendarId: 'primary', resource: event },
          err => {
            // Check for errors and log them if they exist.
            if (err) return console.error('Error Creating Calender Event:', err)
            // Else log that the event was created.
            return console.log('Calendar event successfully created.')
          }
        )
  
      // If event array is not empty log that we are busy.
      // return console.log(`Sorry I'm busy...`)
    }
  ) 
  // check value event primary key?