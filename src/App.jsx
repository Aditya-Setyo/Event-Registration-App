import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* kalau mau tambahin route lain tinggal tambah di sini */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
