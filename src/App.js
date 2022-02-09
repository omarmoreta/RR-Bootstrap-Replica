import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import TopBar from "./components/TopBar";
import StoreListings from "./components/StoreListings";
import Background from "./components/Background";

function App() {
  return (
    <div>
      <TopBar />
      <Background />
      <StoreListings />
    </div>
  );
}

export default App;
