
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./pages/Layout";
import LikesPage from './pages/LikesPage'

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<HomePage />} />
          <Route path="likes" element={<LikesPage />} />
        </Route>
      </Routes>

    </div>
  );
}

export default App;
