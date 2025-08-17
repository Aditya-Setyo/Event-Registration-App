import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RegisterPage />} />
        {/* kalau mau tambahin route lain tinggal tambah di sini */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
