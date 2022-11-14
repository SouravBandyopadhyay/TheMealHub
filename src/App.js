import './App.css';
import AllRoutes from "./Components/AllRoutes";
import LargeWithAppLinksAndSocial from "./Components/Footer";
import Navbar from "./Components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRoutes />
      <LargeWithAppLinksAndSocial />
    </div>
  );
}

export default App;
