import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// เครื่องมือจัดการ
import { createStore } from 'redux';
import { Provider } from 'react-redux'; //เอาไว้ครอบ Root-component เพื่อให้คนอื่นเข้าถึง Store
import { composeWithDevTools } from 'redux-devtools-extension'; 

// สร้าง Store 
import rootReducer from './reducers/index'; // Export เป็น Default ตัวแปลไม่ต้งอยู่ใน วงเล็ป
const store = createStore(rootReducer, composeWithDevTools() /*ช่วยดู Store ใน Chrome*/)

const root = ReactDOM.createRoot(document.getElementById('root'));
// Provider ครอบ RootComponent เพื่อที่ให้เรียกใช้งานได้ทุกครั้ง Properties คือ Store
root.render(
  <React.StrictMode>
    <Provider store={store}> 
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
