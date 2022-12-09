// import React from 'react';
import ReactDOM  from 'react-dom/client';

// const element = React.createElement('div', { a: 5, b: 22, children: 'Hello World' });

// const elem1 = React.createElement('span', { children: 'Hello' })
// const elem2 = React.createElement('span', { children: 'World' })

// const element = React.createElement('div', { children: [elem1, elem2 ]})

const elem1 = <span>Hello</span>
const elem2 = <span>World</span>

const jsxElement = (
  <div>
    {elem1}
    {elem2}
  </div>
)

// const jsxElement = <div>Just {elem1} {elem2}, beaches</div>

console.log(jsxElement);

ReactDOM.createRoot(document.querySelector('#root')).render(jsxElement)

 
// ====================================================================
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render( 
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
