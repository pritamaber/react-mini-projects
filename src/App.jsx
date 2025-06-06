import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UseStateCounter from "./pages/UseStateCounter";
import UseEffectTimer from "./pages/UseEffectTimer";
import SimpleSearch from "./pages/SimpleSearch";
import FormHandling from "./pages/FormHandling";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usestate-counter" element={<UseStateCounter />} />
        <Route path="/useeffect-timer" element={<UseEffectTimer />} />
        <Route path="/simple-search" element={<SimpleSearch />} />
        <Route path="/form-handling" element={<FormHandling />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
