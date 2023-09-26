import { useEffect, FC } from 'react';
import ReactDOM from 'react-dom/client';
import { Layout } from './Components/Layout';
import { Header } from './Components/Header';
import { Main } from './Components/Main';
import faviconIcon from './assets/img/favicon.ico';
import './style.global.css';

const root = ReactDOM.createRoot(document.getElementById('app') as HTMLDivElement);

const AddFavicon: FC = () => {
  useEffect(() => {
    const favicon: HTMLLinkElement = document.createElement('link');
    favicon.rel = 'icon';
    favicon.href = faviconIcon;
    document.head.appendChild(favicon);
  }, []);

  return null;
};

const App: FC = () => {
  return (
    <Layout>
      <AddFavicon />
      <Header />
      <Main />
    </Layout>
  );
};

export default App;

root.render(<App />);