import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Home } from "./components/Home";


function App() {
  return (
    <div className="App">
      <div className="content">
        <Header />
        <Home />
        <Footer></Footer>
        
      </div>
    </div>
  );
}

export default App;
