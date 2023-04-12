import Home from './pages/Home'
import './firebase'
// import Authentication from './pages/Authentication/Authentication';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <div className="w-screen">
        <Home />
        {/* <Authentication /> */}
      </div>
    </AuthProvider>
  );
}

export default App;
