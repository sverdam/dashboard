import Navbar from "./components/Navbar";
import { Outlet } from "react-router";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header>
        <Navbar />
      </header>

      {/* Main Content */}
      
      <main className="max-w-6xl mx-auto px-4 py-6">
        <Outlet />
      </main>

    </div>
  );
};

export default App;
