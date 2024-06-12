import './App.css';
import ReactDOM from 'react-dom/client';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import MainContent from './components/main-content/main-content';

function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);
root.render(<Page />)

function App() {
    return (
        <div className="root">
        </div>
    );
}

export default App;
