import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";


function ComingSoon({ title }) {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#03030a",
        color: "#ffffff",
        display: "grid",
        placeItems: "center",
        fontFamily: "Inter, sans-serif",
        textAlign: "center",
        padding: "40px",
      }}
    >
      <div>
        <p
          style={{
            color: "#ff1493",
            letterSpacing: "0.25em",
            fontSize: "12px",
            marginBottom: "18px",
          }}
        >
          AMA SOFTWARE DEVELOPERS
        </p>

        <h1
          style={{
            fontSize: "clamp(40px, 7vw, 90px)",
            margin: 0,
          }}
        >
          {title}
        </h1>

        <p
          style={{
            color: "#a5a5b5",
            marginTop: "20px",
          }}
        >
          This page is being engineered.
        </p>
      </div>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route path="/about" element={<About />} />

        <Route path="/services" element={<Services />} />

        <Route path="/projects" element={<Projects />} />

        

        <Route path="/contact" element={<Contact />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;