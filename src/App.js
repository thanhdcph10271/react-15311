import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Banner from './component/Banner';
import Albums from './component/Albums';
import Footer from './component/Footer';
function App() {
  return (
    <div className="App">
      <div>
          <Header/>
          <main>
            <Banner/>
            <Albums/>
          </main>
        </div>
          <Footer/>
    </div>
  );
}

export default App;
