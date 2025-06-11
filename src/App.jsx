import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import UseStateCounter from "./pages/UseStateCounter";
import UseEffectTimer from "./pages/UseEffectTimer";
import MovieSearch from "./pages/MovieSearch";
import FormHandling from "./pages/FormHandling";
import CardMiniProject from "./pages/CardMiniProject";
import GithubFinder from "./pages/GithubFinder";
import CartContextProject from "./pages/CartContextProject";

import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/usestate-counter" element={<UseStateCounter />} />
        <Route path="/useeffect-timer" element={<UseEffectTimer />} />
        <Route path="/movie-search" element={<MovieSearch />} />
        <Route path="/simple-form" element={<FormHandling />} />
        <Route path="/simple-ecom" element={<CardMiniProject />} />
        <Route path="/github-profile-finder" element={<GithubFinder />} />
        <Route path="/cart-context-project" element={<CartContextProject />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
