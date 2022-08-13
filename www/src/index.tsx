import '@wcj/dark-mode';
import { HashRouter } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import GitHubCorners from '@uiw/react-github-corners';
import App from './app';
import './reset.css';

const root = createRoot(document.getElementById('root')!);

root.render(
  <HashRouter>
    <dark-mode style={{ position: 'fixed', left: 10, top: 6, fontSize: 21 }}></dark-mode>
    <GitHubCorners fixed target="__blank" href="https://github.com/jaywcjlove/icongo" />
    <App />
  </HashRouter>,
);
