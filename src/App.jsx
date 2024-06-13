import Header from "./components/header";
import Footer from "./components/footer";
import Content from "./components/content";
import "./App.css";

function App() {
  return (
    <div id="app" className="h-dvh px-60 py-24">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
