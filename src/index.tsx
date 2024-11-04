import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Add the Tailwind CSS CDN to the head of the document
const tailwindLink = document.createElement('link');
tailwindLink.rel = 'stylesheet';
//tailwindLink.href = 'https://fonts.cdnfonts.com/css/helvetica-neue-55';
tailwindLink.href = 'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&display=swap';

document.head.appendChild(tailwindLink);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
