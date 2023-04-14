import Home from './pages/Home'
import './firebase'
import Authentication from './pages/Authentication/Authentication';
import Report from './pages/Report'
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    //<AuthProvider>
      <div className="w">
        <Report />
        {/* <Home /> */}
        {/* <Authentication /> */}
      </div>
    //</AuthProvider>
  );
}

export default App;
