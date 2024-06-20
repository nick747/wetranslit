import Header from "./components/header";
import Content from "./components/content";
import "./App.css";

function App() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
      <div id="app" className="h-screen w-3/4 py-24">
        <Header />
        <Content />
      </div>
    </div>
  );
}

export default App;
