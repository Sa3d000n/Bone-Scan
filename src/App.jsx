import "./App.css";
import NavbarComponent from "./components/NavbarComponent";
import Footer from "./components/Footer";
import { Outlet, Route, RouterProvider, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import ScanPage from "./pages/ScanPage";

function Layout() {
  return (
    <>
      <NavbarComponent />
      <Outlet />
      <Footer />
    </>
  );
}



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="scan" element={<ScanPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
