// Imports
import React from 'react'
import ReactDOM from 'react-dom'
import { RecoilRoot as GlobalState } from 'recoil'
// import App from './App';
import { RecoilRoot } from "recoil"; 
// App imports
import Layout from './common/Layout'

// Root
// ReactDOM.render(
//   <React.StrictMode>
//     <GlobalState>
//       <Layout />
//     </GlobalState>
//   </React.StrictMode>,

//   document.getElementById('root')
// )
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalState>
      <Layout />
    </GlobalState>
  </React.StrictMode> // ตรวจสอบ Code ว่าเหมาะสมหรือไม่โดยจะมีเตือนขณะรัน {Warning, Error}
);