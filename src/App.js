import './App.css';
import ReactDOM from 'react-dom/client';

const page = (
    <div>
      <img src="/main-logo.png" style={{width: '70px'}} alt="React Logo."/>
      <h1>Fun fact about react</h1>
      <ul>
        <li>Was first released in 2013</li>
        <li>Was originally created in Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Is maintained by Facebook</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </div>
)

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(page)

function App() {
  return (
      <div className="root">
      </div>
  );
}

export default App;
