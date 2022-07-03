const { google } = require('googleapis')

const { OAuth2 } = google.auth

const oAuth2Client = new OAuth2(
    '266526321397-hrv9pqk41gltn4kfcre2u0mekf1i59ts.apps.googleusercontent.com',
    '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'
)

oAuth2Client.setCredentials({
    refresh_token: 
        '1//043Re-w3hlfEUCgYIARAAGAQSNwF-L9IrcY18396XDgmmLrSmt-96xgB_TNeyLQq7YyhmY5914jbaQmMVVVmniTHPutXcqnIq7qQ',
})

const calendar = google.calendar({ version: 'v3', auth: oAuth2Client })


const datTest = 5

const eventStartTime = new Date()
eventStartTime.setDate(eventStartTime.getDate() + datTest)
eventStartTime.setHours(eventStartTime.getHours())

const eventEndTime = new Date()
eventEndTime.setDate(eventEndTime.getDate() + datTest)
eventEndTime.setMinutes(eventEndTime.getMinutes() + 60)

const event = {
    summary: `Meeting with David`,
    location: `Google Meetings`,
    description: `Meet with David to talk about the new client project and how to integrate the calendar for booking.`,
    colorId: 1,
    start: {
      dateTime: eventStartTime,
      timeZone: 'UTC',
    },
    end: {
      dateTime: eventEndTime,
      timeZone: 'UTC',
    },
  }
  
  // Check if we a busy and have an event on our calendar for the same time.
  calendar.freebusy.query(
    {
      resource: {
        timeMin: eventStartTime,
        timeMax: eventEndTime,
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