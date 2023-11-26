import React from 'react';
import ReactDOM from 'react-dom/client';
import App from 'components/App';
import './index.css';

import { Example, Example2 } from './components/Example/Example.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <>
    <App />
    {/* <Example />
    <Example2 /> */}
  </>
  // </React.StrictMode>
);
