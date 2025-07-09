import "./App.css";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-primary text-white overflow-hidden">
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
