
import './App.css';
import Packaging from './Components/packaging';
import Navbar from './Components/Navbar/Navbar';
import PackagingMaterials from './Components/packagingMaterials';

function App() {
  return (
    <div className="app">
      {/* Navbar at the top */}
      <Navbar />

      {/* Main content, where the Packaging component will be placed */}
      <div className="main-content">
        <Packaging />
      </div>
      <div>
        <PackagingMaterials/>
      </div>
    </div>
  );
}

export default App;
