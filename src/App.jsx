import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Animals from "./pages/Animals/Animals";
import GoAnimalsButton from "./components/GoAnimalsButton";
import GoBackButton from "./components/GoBackButton";
import GoForwardButton from "./components/GoForwardButton";
import Cats from "./pages/Animals/Cats";
import Dogs from "./pages/Animals/Dogs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animals" element={<Animals />}>
          <Route path="cats" element={<Cats />} />
          <Route path="dogs" element={<Dogs />} />
        </Route>
      </Routes>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <GoAnimalsButton />
        <GoBackButton />
        <GoForwardButton />
      </div>
    </BrowserRouter>
  );
}

export default App;
