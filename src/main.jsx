import { StrictMode, React } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from 'react-dom/client';
import App from '../src/App';
import '../src/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);