import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import Component1ReactView from "Frontend/views/Component1ReactView";

createRoot(document.getElementById('outlet')!).render(createElement(Component1ReactView));
