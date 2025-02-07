import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';
import Home from './Components/Home';

const root = createRoot(document.getElementById('root'));
root.render(
    <StrictMode>
        <Home />
    </StrictMode>
);