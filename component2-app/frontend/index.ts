import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import Component2ReactView from "Frontend/views/Component2ReactView";

createRoot(document.getElementById('outlet')!).render(createElement(Component2ReactView));
