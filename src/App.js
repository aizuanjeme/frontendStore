import './App.css';
import PageRouter from './pageRouter';
import { BrowserRouter } from 'react-router-dom';
import useLocalStorage from 'use-local-storage';


function App() {

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
  return (
    <BrowserRouter>
      <div className="app" data-theme={theme}>


        <span>Easy Darkmode and Themes in React</span>
        <button onClick={switchTheme}>
          <i className={theme === 'light' ? "fas fa-moon" : "fas fa-sun"}></i>
        </button>
        <PageRouter />



      </div>
    </BrowserRouter>

  );
}

export default App;
