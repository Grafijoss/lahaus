import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import AppLayout from "./components/AppLayout/AppLayout";
import Home from "./views/Home/Home";

export default function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  );
}
