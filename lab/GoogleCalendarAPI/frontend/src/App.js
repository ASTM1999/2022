import React, { useState } from 'react';
import { gapi } from "gapi-script";
// import ReactDOM from 'react-dom';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';

function App() {

  // gapi.load("client:auth2", () => {
  //   gapi.client.init({
  //     clientId:
  //       "*****.apps.googleusercontent.com",
  //     plugin_name: "chat",
  //   });
  // });
  // window.gapi.load('client:auth2', () => {
  //   window.gapi.client.init({
  //     clientId: '******.apps.googleusercontent.com',
  //     plugin_name: "chat"
  //   })
  // })

  const responseGoogle = response => {
    console.log(response)
    const { code } = response
    axios
      .post('/api/create-tokens', { code })
      .then(response => {
        console.log(response.data)
        setSignedIn(true)
      })
      .catch(error => console.log(error.message))
  }
  const responseError = error => {
    console.log(error)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log(summary, description, location, startDateTime, endDateTime)
    axios
      .post('/api/create-event', {
        summary,
        description,
        location,
        startDateTime,
        endDateTime,
      })
      .then(response => {
        console.log(response.data)
      })
      .catch(error => console.log(error.message))
  }
  const [summary, setSummary] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [startDateTime, setStartDateTime] = useState('')
  const [endDateTime, setEndDateTime] = useState('')
  const [signedIn, setSignedIn] = useState(false)
  return (
    <div>
      <div className="App">
        <h1>Google Calendar API</h1>
      </div>
      {
        !signedIn ? (
          <div>
            <GoogleLogin
              clientId='461912288462-j2gmr05vf7q4nsk8ma04mqls9qs31cd1.apps.googleusercontent.com'
              buttonText='Sign in & Authorize Calendar'
              onSuccess={responseGoogle}
              onFailure={responseError}
              cookiePolicy={'single_host_origin'}
              //this is import
              responseType='code'
              accessType='offline'
              scope='openid email profile https://www.googleapis.com/auth/calendar'
            />
          </div>
        ) : (
          <div>
            <form onSubmit={handleSubmit}>
              <label htmlFor='sumary'>Sumary</label>
              <br />
              <input
                type='text'
                id='summary'
                value={summary}
                onChange={e => setSummary(e.target.value)}
              />
              <br />

              <label htmlFor='description'>Description</label>
              <br />
              <textarea
                type="text"
                id="description"
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
              <br />

              <label htmlFor='location'>Location</label>
              <br />
              <input
                type="text"
                id="location"
                value={location}
                onChange={e => setLocation(e.target.value)}
              />
              <br />

              <label htmlFor='startDateTime'>Start Date Time</label>
              <br />
              <input
                type="datetime-local"
                id="startDateTime"
                value={startDateTime}
                onChange={e => setStartDateTime(e.target.value)}
              />
              <br />

              <label htmlFor='endDateTime'>End Date Time</label>
              <br />
              <input
                type="datetime-local"
                id="endDateTime"
                value={endDateTime}
                onChange={e => setEndDateTime(e.target.value)}
              />
              <br />
              <button type='submit'>create event</button>
            </form>
          </div>)
      }
    </div >
  );
}

export default App;
