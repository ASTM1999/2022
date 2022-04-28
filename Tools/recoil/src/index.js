import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RecoilRoot } from "recoil"; 
//lib RecoilRoot ตัวนี้จะมาจัดการเรื่องการสร้าง Tree 3D เพื่อทำให้การเข้าถึง state ไม่ผ่าน Node อื่น เพื่อเพิ่มประสิทธิภาพ


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode> // ตรวจสอบ Code ว่าเหมาะสมหรือไม่โดยจะมีเตือนขณะรัน {Warning, Error}
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

