import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./Components/Home/Header/Header";
import { Home } from "./Components/Home/Home";
import { PostDetail } from "./Components/Home/PostDetail/PostDetail";
import { Contact } from "./Components/Home/Header/Contact/Contact";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
