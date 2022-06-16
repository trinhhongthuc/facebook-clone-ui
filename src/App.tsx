import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Friend from "./pages/Friend/Friend";
import Login from "./pages/Login/Login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />} />
          <Route path="/home" element={<Layout />} />

          <Route path="/friend" element={<Friend />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
