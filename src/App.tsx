import { Routes, Route } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Favouritespage } from "./pages/favouritespage";
import { Homepage } from "./pages/homepage";


function App() {
  return (
    <>
    <Navigation />
    <Routes>
      <Route path="/" element={<Homepage/>}/>
      <Route path="/favourites" element={<Favouritespage />}/>
    </Routes>
    </>
  );
}

export default App;
