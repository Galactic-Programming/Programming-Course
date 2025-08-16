// Challenge: Re-write the first lines of React code we just had.
// You can render anything you want to the screen, doesn't have
// to be an h1 element.

import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')).render(
    <h1>React is a JavaScript library for building user interfaces</h1>
);