import Header from "./components/Header";
import WatchList from "./components/WatchList";
import Watched from "./components/Watched";
import Add from "./components/Add";
import { Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
function App() {
  return (
    <GlobalProvider>
      <div className="min-w-screen min-h-screen flex flex-col">
        <Header />

        <Routes>
          <Route path="/" element={<WatchList />} />
          <Route path="/Watched" element={<Watched />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </div>
    </GlobalProvider>
    //
  );
}

export default App;
