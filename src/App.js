import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import { Routers } from "./static/Router";
import Home from "./pages/home/Home";
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          {Routers?.map((el) => (
            <Route key={el.id} path={el.path} element={el.element} />
          ))}
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
