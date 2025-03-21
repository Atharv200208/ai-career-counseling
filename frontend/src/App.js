import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import CareerTest from "./pages/careertest";
import Profile from "./pages/profile";
import ResumeOptimization from "./pages/resumeoptimization";
import Mentorship from "./pages/mentorship";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/career-test" element={<CareerTest />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/resume-optimization" element={<ResumeOptimization />} />
          <Route path="/mentorship" element={<Mentorship />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;